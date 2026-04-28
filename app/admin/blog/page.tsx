"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminBlog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    const slug = title.toLowerCase().replace(/\s+/g, "-");

    const { error } = await supabase.from("posts").insert([
      {
        title,
        description,
        content,
        slug,
      },
    ]);

    if (error) {
      alert("Error: " + error.message);
    } else {
      alert("Post Created ✅");
      setTitle("");
      setDescription("");
      setContent("");
    }
  };

  return (
    <div className="p-10 max-w-xl">
      <h1 className="text-2xl font-bold mb-4">Create Blog Post</h1>

      <input
        placeholder="Title"
        className="border p-2 w-full mb-3"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Description"
        className="border p-2 w-full mb-3"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <textarea
        placeholder="Content"
        className="border p-2 w-full mb-3"
        rows={6}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Publish
      </button>
    </div>
  );
}