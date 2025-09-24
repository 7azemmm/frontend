import vue from 'eslint-plugin-vue';
import js from '@eslint/js';
import vueParser from 'vue-eslint-parser';

export default [
  {
    files: ['**/*.vue', '**/*.js'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: '@babel/eslint-parser',
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        requireConfigFile: false,
      },
    },
    plugins: { vue },
    rules: {
      "no-undef": "off",
      "no-unused-vars": "off"

    }
  },
];
