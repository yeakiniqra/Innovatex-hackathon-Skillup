'use client';
import React, { useState } from 'react';

export default function Assessment() {
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Validate file is a PDF
    if (file.type !== 'application/pdf') {
      setError('Please upload a PDF file');
      return;
    }

    const formData = new FormData();
    formData.append('resume', file);

    setLoading(true);
    setFeedback('');
    setError(null);

    try {
      console.log('Sending request to process resume');
      const response = await fetch('/api/process-resume', {
        method: 'POST',
        body: formData,
      });
      
      // Log response details for debugging
      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));
      
      // Check for non-JSON responses
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        // If not JSON, get text and display the error
        const textResponse = await response.text();
        console.error('Non-JSON response:', textResponse);
        throw new Error('Server returned an invalid response format');
      }

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to process resume');
      }
      
      setFeedback(data.feedback);
    } catch (err: any) {
      console.error('Error processing resume:', err);
      setError(err.message || 'Failed to process resume. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Upload Resume for Assessment</h2>
      
      <div className="mb-4">
        <input 
          type="file" 
          accept=".pdf,application/pdf" 
          onChange={handleFileUpload}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
        />
        <p className="mt-1 text-sm text-gray-500">Upload your resume as PDF</p>
      </div>
      
      {loading && (
        <div className="mt-4 text-blue-500">
          <p>Analyzing your resume...</p>
          <div className="mt-2 w-8 h-8 border-t-2 border-blue-500 border-solid rounded-full animate-spin"></div>
        </div>
      )}
      
      {error && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded">
          {error}
        </div>
      )}
      
      {feedback && (
        <div className="mt-6 p-4 border rounded bg-gray-50 whitespace-pre-wrap">
          <h3 className="font-semibold mb-2">Feedback on Your Resume</h3>
          {feedback}
        </div>
      )}
    </div>
  );
}