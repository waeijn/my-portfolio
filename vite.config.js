import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import chatHandler from "./api/chat.js";

function vercelApiDevPlugin() {
  return {
    name: "vercel-api-dev",
    configureServer(server) {
      server.middlewares.use("/api/chat", (req, res) => {
        let rawBody = "";
        req.on("data", (chunk) => {
          rawBody += chunk;
        });
        req.on("end", async () => {
          try {
            req.body = rawBody ? JSON.parse(rawBody) : {};
          } catch {
            req.body = {};
          }
          await chatHandler(req, res);
        });
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  process.env.GEMINI_API_KEY =
    process.env.GEMINI_API_KEY || env.GEMINI_API_KEY;

  return {
    plugins: [react(), vercelApiDevPlugin()],
    server: {
      port: 3000,
      open: true,
    },
    build: {
      outDir: "build",
    },
  };
});
