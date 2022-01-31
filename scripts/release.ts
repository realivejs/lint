import { execSync } from "child_process";

try {
  execSync("pnpm changeset", { stdio: "inherit" });
  execSync("pnpm changeset version", { stdio: "inherit" });
  execSync("pnpm changeset publish", { stdio: "inherit" });
} catch (error: unknown) {
  if (error instanceof Error) {
    throw error;
  }

  throw new Error(JSON.stringify(error));
}
