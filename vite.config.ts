import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const isBuild = process.env.NODE_ENV === "production" || process.argv.includes("build");

const rawPort = process.env.PORT;
const port = rawPort ? Number(rawPort) : 3000;

if (!isBuild && (!rawPort || Number.isNaN(port) || port <= 0)) {
  if (rawPort) throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const basePath = process.env.BASE_PATH || "/";

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    ...(!isBuild && process.env.REPL_ID !== undefined
      ? [
          ...(await import("@replit/vite-plugin-runtime-error-modal").then((m) => [m.default()]).catch(() => [])),
          ...(await import("@replit/vite-plugin-cartographer").then((m) =>
            [m.cartographer({ root: path.resolve(import.meta.dirname, "..") })]
          ).catch(() => [])),
          ...(await import("@replit/vite-plugin-dev-banner").then((m) => [m.devBanner()]).catch(() => [])),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
  server: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
