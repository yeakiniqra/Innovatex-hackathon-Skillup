export const runtime = 'nodejs'; 
import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import pdfParse from "pdf-parse";

// Config is properly structured for App Router
export const config = {
  api: {
    // Note: In App Router, bodyParser config may not work as expected
    // You might need to handle large files differently
    responseLimit: false,
  },
};

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export async function POST(request: NextRequest) {
    console.log("API route called"); 
    console.log("Request method:", request.method);
    
    try {
      // Parse the form data
      const formData = await request.formData();
      
      // Check for field name "resume" which matches your form data
      const file = formData.get("resume") as File;
      
      console.log("File received:", file?.name);
      
      if (!file) {
        console.error("No file provided");
        // Make sure we're using the correct response format
        return new NextResponse(JSON.stringify({ error: "No file provided" }), {
          status: 400,
          headers: { "Content-Type": "application/json" }
        });
      }
      
      // Validate file type
      if (!file.type.includes("pdf")) {
        console.error("Non-PDF file provided:", file.type);
        return new NextResponse(JSON.stringify({ error: "Only PDF files are supported" }), {
          status: 400,
          headers: { "Content-Type": "application/json" }
        });
      }
      
      // Convert File to Buffer
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      
      console.log("Processing PDF...");
      
      // Extract text from PDF
      const data = await pdfParse(buffer);
      const fullText = data.text;
      
      console.log("PDF text extracted, length:", fullText.length);
      
      // Prepare prompt for Gemini
      const prompt = `
      You are a professional resume reviewer. Analyze the following resume text and provide:
  
      1. A percentage score (0-100) indicating how perfect the resume is
      2. A brief overview of the resume quality
      3. 3-5 strengths of the resume
      4. 3-5 areas for improvement
      5. Any formatting issues detected
      6. Content suggestions to improve impact
  
      Format your response as a JSON object with the following structure:
      {
        "score": number,
        "overview": "string",
        "strengths": ["string", "string", ...],
        "improvements": ["string", "string", ...],
        "formatIssues": ["string", "string", ...],
        "contentSuggestions": ["string", "string", ...]
      }
  
      Here is the resume to analyze:
      ${fullText}
      `;
  
      console.log("Calling Gemini API...");
      const result = await model.generateContent(prompt);
      const response = result.response;
      const responseText = response.text();
      
      console.log("Gemini response received");
      
      // Extract JSON from the response
      try {
        let jsonMatch = responseText.match(/\{[\s\S]*\}/);
        let analysisData;
        
        if (jsonMatch) {
          try {
            analysisData = JSON.parse(jsonMatch[0]);
          } catch (parseError) {
            console.error("JSON parse error:", parseError);
            console.log("Attempted to parse:", jsonMatch[0]);
            throw new Error("Invalid JSON format in response");
          }
        } else {
          // No JSON found in response, create fallback
          analysisData = {
            score: 50,
            overview: "Could not properly analyze the resume format.",
            strengths: ["Unable to determine strengths"],
            improvements: ["Please check if the resume format is standard"],
            formatIssues: ["Resume format may be non-standard or complex"],
            contentSuggestions: ["Consider using a simpler format"]
          };
        }
        
        // Ensure all required fields exist to prevent frontend errors
        const safeData = {
          score: analysisData.score || 0,
          overview: analysisData.overview || "No overview provided",
          strengths: Array.isArray(analysisData.strengths) ? analysisData.strengths : ["No strengths identified"],
          improvements: Array.isArray(analysisData.improvements) ? analysisData.improvements : ["No improvements identified"],
          formatIssues: Array.isArray(analysisData.formatIssues) ? analysisData.formatIssues : ["No format issues identified"],
          contentSuggestions: Array.isArray(analysisData.contentSuggestions) ? analysisData.contentSuggestions : ["No content suggestions provided"]
        };
        
        // Use explicit NextResponse with proper headers
        return new NextResponse(JSON.stringify(safeData), {
          status: 200,
          headers: { "Content-Type": "application/json" }
        });
        
      } catch (jsonError) {
        console.error("Error processing Gemini response:", jsonError);
        console.log("Raw response:", responseText);
        
        // Fallback response if JSON parsing fails
        return new NextResponse(JSON.stringify({
          error: "Analysis failed",
          message: "Could not process the AI response properly",
          score: 50,
          overview: "Could not properly parse the analysis results.",
          strengths: ["Analysis completed but results format was unexpected"],
          improvements: ["Please try again"],
          formatIssues: ["Response format issue"],
          contentSuggestions: ["Try with a different PDF format"]
        }), {
          status: 200, // Still return 200 to client with explanation
          headers: { "Content-Type": "application/json" }
        });
      }
      
    } catch (error) {
      console.error("Error processing resume:", error);
      // Ensure proper error response format
      return new NextResponse(JSON.stringify({
        error: "Failed to process resume", 
        details: (error as Error).message,
        stack: process.env.NODE_ENV === 'development' ? (error as Error).stack : undefined
      }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  }