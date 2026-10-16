import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5000,
    strictPort: true,   // fail instead of auto-switching if 5000 is busy
    host: true,         // listen on all addresses (useful for LAN testing)
  },
});