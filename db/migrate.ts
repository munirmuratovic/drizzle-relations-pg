import { migrate } from "drizzle-orm/postgres-js/migrator";
import { migrateClient } from "./index";
import { drizzle } from "drizzle-orm/postgres-js";

await migrate(drizzle(migrateClient), {
  migrationsFolder: "./db/migrations",
});

await migrateClient.end();
