// app/api/posts/route.js (Corrected) ✅

import { NextResponse } from "next/server";

import dbConnect from "@/lib/db";
import Blog from "@/models/Blog"; // Import your Mongoose model

export async function POST(request) {
  try {
    // 👉 Use request.json() to parse the incoming JSON body
    const data = await request.json();

    await dbConnect();

    // Now 'data' is the JavaScript object { post: { metadata: ..., body: ... } }
    // You can directly use it to create a new document
    const newBlogPost = new Blog(data);
    await newBlogPost.save();

    return NextResponse.json(
      { message: "Blog post created successfully!", post: newBlogPost },
      { status: 201 }
    );
  } catch (error) {
    // console.error("Error creating blog post:", error);
    return NextResponse.json(
      { message: "Failed to create blog post.", error: error.message },
      { status: 500 }
    );
  }
}
