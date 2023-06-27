import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "https://github.com/sajidCode-gh/sajid-portfolio/tree/gh-pages",
});
