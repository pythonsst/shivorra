import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Pin the workspace root so an unrelated lockfile in the parent dir is ignored.
  outputFileTracingRoot: path.dirname(new URL(import.meta.url).pathname),
};

export default nextConfig;
