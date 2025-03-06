import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { reactRouterDevTools } from "react-router-devtools";
import tsconfigPaths from "vite-tsconfig-paths";
import babel from "vite-plugin-babel";

export default defineConfig({
  plugins: [
    tailwindcss(),
    tsconfigPaths(),
    {
      ...babel({
        filter: /\.tsx?$/,
        babelConfig: {
          presets: ["@babel/preset-typescript"],
          plugins: ["babel-plugin-react-compiler"],
        },
      }),
      apply: "build",
    },
    reactRouterDevTools(),
    reactRouter(),
  ],
});
