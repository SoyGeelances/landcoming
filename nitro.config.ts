import { defineConfig } from "nitro";

export default defineConfig({
  entry: "./dist/server/server.js",
  preset: "github_pages",
  publicAssets: [{ dir: "./dist/client", baseURL: "/" }],
});
