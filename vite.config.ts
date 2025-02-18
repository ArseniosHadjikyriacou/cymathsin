import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
// import { fileURLToPath } from "url";
// import path from "path";

export default defineConfig({
  plugins: [reactRouter(), tsconfigPaths()],
  base: "/cymathsin/",
  // resolve: {
  //   alias: {
  //     "~": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "src"),
  //   },
  // },
  // base: process.env.NODE_ENV === "production" ? "/cymathsin/" : "",
});
