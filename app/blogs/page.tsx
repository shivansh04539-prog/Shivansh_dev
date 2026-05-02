import React from "react";

import { Blog } from "@/models/Blog"; // Import your DB logic
import Featured from "../components/(Blog)/Featured";
import HomePage from "../components/(Blog)/Home";

// Revalidate data every hour (ISR)

export const metadata = {
 title: "Shivansh Singh Blog | Web Development, Next.js & SEO Insights",
  description:
    "Explore web development tutorials, Next.js tips, SEO strategies, and real-world coding insights by Shivansh Singh. Learn modern development and build better websites.",
};

export const revalidate = 3600;

export default async function BlogPage() {
  const blogs = await Blog.list();

  return (
    <>
      <HomePage />
      {/* 2. Pass the data to the client component */}
      <Featured initialBlogs={blogs} />
    </>
  );
}
