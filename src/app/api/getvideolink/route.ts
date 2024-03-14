import { NextResponse,NextRequest } from "next/server";
export async function POST(req:NextRequest) {
    const {title}=await req.json();
    const encodedTitle = encodeURIComponent(title)
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodedTitle}&key=${process.env.YOUTUBE_API_KEY}`
    try {
      const response = await fetch(url)
      const data = await response.json()
      console.log(extractedHeadings);
      if (data.items && data.items.length > 0) {
        return NextResponse.json({id:data.items[0].id.videoId})
      } else {
        console.warn(`No video found for title: ${title}`)
        return NextResponse.json({id:null})
      }
    } catch (error) {
      console.error('Error fetching video ID:', error)
      return NextResponse.json({id:null})
    }
}

function extractHeadings(courseOutline: string): { title: string; subheadings: { title: string; summary: string }[] }[] {
    const headings: { title: string; subheadings: { title: string; summary: string }[] }[] = [];
    let currentHeading: { title: string; subheadings: { title: string; summary: string }[] } | null = null;
    let currentSubheading: { title: string; summary: string } | null = null;
  
    for (const line of courseOutline.split("\n")) {
      const trimmedLine = line.trim(); // Remove leading and trailing whitespace
  
      // Check for headings (starts with three dashes)
      if (trimmedLine.startsWith("---")) {
        // New heading, create a new object for it
        currentHeading = { title: trimmedLine.substring(3).trim(), subheadings: [] };
        headings.push(currentHeading);
        currentSubheading = null; // Reset current subheading when encountering a new heading
      } else if (trimmedLine.startsWith("--")) {
        // New subheading, create a new object for it (if within a heading)
        if (currentHeading) {
          currentSubheading = { title: trimmedLine.substring(2).trim(), summary: "" };
          currentHeading.subheadings.push(currentSubheading);
        }
      } else if (currentSubheading && trimmedLine.startsWith("**") && trimmedLine.endsWith("**")) {
        // Add summary to current subheading (if within a subheading and starts/ends with double asterisks)
        currentSubheading.summary += trimmedLine.substring(2, trimmedLine.length - 2).trim() + "\n"; // Extract summary content
      } else {
        // If not relevant to headings/subheadings (ignore)
      }
    }
  
    return headings;
  }
  
  // Example usage
  const courseOutline = `
  Course Title: Data Structures with C
  Target Audience: BTech Students
  
  --- Module 1: Introduction to Data Structures
  
  -- What are Data Structures?
  **Summary:** Data structures are specialized formats for organizing, processing, retrieving, and manipulating data efficiently.
  
  -- Why Use Data Structures?
  **Summary:** Data structures improve the organization, efficiency, and reusability of code.
  --- Module 1: Introduction to Data Structures
  
  -- What are Data Structures?
  **Summary:** Data structures are specialized formats for organizing, processing, retrieving, and manipulating data efficiently.
  
  -- Why Use Data Structures?
  **Summary:** Data structures improve the organization, efficiency, and reusability of code.--- Module 1: Introduction to Data Structures
  
  -- What are Data Structures?
  **Summary:** Data structures are specialized formats for organizing, processing, retrieving, and manipulating data efficiently.
  
  -- Why Use Data Structures?
  **Summary:** Data structures improve the organization, efficiency, and reusability of code.
  ... (rest of the course outline)
  `;
  
  const extractedHeadings = extractHeadings(courseOutline);
