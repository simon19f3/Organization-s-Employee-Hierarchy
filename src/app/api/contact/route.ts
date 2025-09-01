import { NextResponse } from "next/server";

interface ContactRequestBody {
    name: string;
    email: string;
    message: string;
}

export async function POST(request: Request) {
    try {
        // Await and store the JSON body from the request
        const body = await request.json() as ContactRequestBody;
        const { name, email, message } = body;

        // Log the received data on the server-side (visible in your terminal)
        console.log("SERVER RECEIVED DATA:", { name, email, message });

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json({ message: "Missing required fields." }, { status: 400 });
        }

        // --- TODO: Add your logic (e.g., send email) here ---

        // If everything is okay, return a success response
        return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 });

    } catch (error) {
        // This will catch errors during request parsing or other server-side issues
        console.error("API ROUTE ERROR:", error); 
        return NextResponse.json(
            { message: "Internal Server Error." }, 
            { status: 500 }
        );
    }
}