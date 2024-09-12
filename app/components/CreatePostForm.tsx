"use client";

import { NewPost } from "@/db/queries/insert";
import { createPost } from "../actions/user-actions";
import { useState } from "react";

export default function AddUserForm() {
  const newPost: NewPost = {
    title: "New title",
    content: "Hello from content",
    userId: 1,
  };
  const [post, setPost] = useState<NewPost>(newPost);

  async function handleSubmit(post: NewPost) {
    return await createPost(post);
  }

  return (
    <div className="flex flex-col">
      <input
        className="h-56 w-screen"
        defaultValue={JSON.stringify(newPost)}
        onChange={(e) => {
          e.preventDefault();

          const content = e.target.value;
          const newPost: NewPost = JSON.parse(content);
          setPost(newPost);
        }}
      />
      <button onClick={() => handleSubmit(post)}>Submit</button>
    </div>
  );
}
