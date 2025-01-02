import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "keep-html-title",
      transformIndexHtml(html) {
        // Replace "" comment with your desired title
        return html.replace("Vite + React + TS", ""); //add the site tab name
      },
    },
  ],
});
