import { defineConfig } from "nitro";

export default defineConfig({
  entry: "./dist/server/server.js",
  preset: "vercel",
  publicAssets: [{ dir: "./dist/client", baseURL: "/" }],
});
