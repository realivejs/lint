import { execSync } from "child_process";

try {
  execSync("pnpm changeset", { stdio: "inherit" });
  // console.log(list);
} catch (error: unknown) {
  if (error instanceof Error) {
    throw error;
  }

  throw new Error(JSON.stringify(error));
}
