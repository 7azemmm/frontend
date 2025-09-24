// eslint.config.js
import vueParser from "vue-eslint-parser";
import vuePlugin from "eslint-plugin-vue";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: "@babel/eslint-parser",
        ecmaVersion: 2020,
        sourceType: "module",
        requireConfigFile: false
      }
    },
    plugins: {
      vue: vuePlugin,
      prettier: prettierPlugin
    },
    rules: {
      ...vuePlugin.configs["essential"].rules, // use essential rules for Vue 2
      "prettier/prettier": "error"
    }
  },
  {
    files: ["**/*.{js,jsx,mjs,cjs}"],
    languageOptions: {
      parser: "@babel/eslint-parser",
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        requireConfigFile: false
      }
    },
    plugins: {
      prettier: prettierPlugin
    },
    rules: {
      "prettier/prettier": "error"
    }
  }
];
