import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

// for migrations
export const migrateClient = postgres(process.env.DATABASE_URL!, { max: 1 });

// for query purposes
const queryClient = postgres(process.env.DATABASE_URL!);
export const db = drizzle(queryClient);
