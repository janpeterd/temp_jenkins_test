import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from '@vitejs/plugin-react'

const ReactCompilerConfig = { /* ... */ };

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths(), react({
    babel: {
      plugins: [
        ["babel-plugin-react-compiler", ReactCompilerConfig],
      ],
    },
  }),
],
});
