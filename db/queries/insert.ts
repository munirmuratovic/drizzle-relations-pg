import { users, posts } from "../schema";
import { db } from "@/db/index";

export type NewUser = typeof users.$inferInsert;
export type NewPost = typeof posts.$inferInsert;

export const insertUser = async (user: NewUser) => {
  return await db.insert(users).values(user).returning();
};

export const insertPost = async (post: NewPost) => {
  return await db.insert(posts).values(post).returning();
};
