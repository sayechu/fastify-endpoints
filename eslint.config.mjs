import globals from "globals";
import pluginJs from "@eslint/js";

export default [
    {
        files: ["**/*.js"],
        languageOptions: {
            sourceType: "commonjs",
            globals: globals.node,
        },
        rules: {
            indent: ["error", 4],
            "linebreak-style": ["error", "unix"],
            quotes: ["error", "double"],
            semi: ["error", "always"],
        },
    },
    pluginJs.configs.recommended,
];
