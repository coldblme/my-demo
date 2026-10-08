import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // SQLite native module must stay external
  serverExternalPackages: ["better-sqlite3"],
  turbopack: {
    root: __dirname,
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
