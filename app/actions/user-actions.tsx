"use server";

import { NewPost, NewUser, insertPost, insertUser } from "@/db/queries/insert";

export async function createUser(user: NewUser) {
  const newUser = await insertUser(user);

  return newUser;
}

export async function createPost(post: NewPost) {
  const newPost = await insertPost(post);

  return newPost;
}
