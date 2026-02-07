import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "src",
  base: "/demo/",
  build: {
    outDir: "../demo",
    emptyOutDir: true,
  },
});
