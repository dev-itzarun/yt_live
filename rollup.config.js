import { terser } from "rollup-plugin-terser";

export default {
    input: "yt_live.js", // Ensure the correct path to your source file
    output: [
        {
            file: "dist/yt_live.cjs.js",
            format: "cjs", // CommonJS for Node.js
        },
        {
            file: "dist/yt_live.esm.js",
            format: "esm", // ES Module for modern projects
        },
        {
            file: "dist/yt_live.umd.js",
            format: "umd", // UMD for browsers
            name: "Ytlive", // Library name for global usage
        },
    ],
    plugins: [terser()], // Minify output
};
