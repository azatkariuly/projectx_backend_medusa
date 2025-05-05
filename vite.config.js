import { defineConfig } from "vite";

export default defineConfig({
  server: {
    allowedHosts: ["projectx-backend-server.onrender.com"],
    host: "projectx-backend-server.onrender.com",
  },
});