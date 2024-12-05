import { terser } from "rollup-plugin-terser";

export default {
  input: "yt_live.js",  // Entry file
  output: [
    {
      file: "dist/yt_live.cjs.js",    // CommonJS output for Node.js
      format: "cjs",                  // CommonJS format
    },
    {
      file: "dist/yt_live.esm.js",    // ESM output for modern JavaScript environments
      format: "esm",                  // ES Module format
    },
    {
      file: "dist/yt_live.umd.js",    // UMD format for browser compatibility
      format: "umd",                  // UMD format
      name: "Ytlive",                 // Global variable name in the browser
    },
  ],
  plugins: [terser()], // Minify output
};
