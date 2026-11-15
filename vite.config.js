import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Leadership is temporarily disabled for deployment; keep its source files for later.
      input: ["index.html", "projects.html", "experience.html"],
    },
  },
});
