import js from "@eslint/js";
import globals from "globals";
import reactHooks from 'eslint-plugin-react-hooks';
// import tseslint from "typescript-eslint";
// import pluginReact from "eslint-plugin-react";
// // import { defineConfig } from "eslint/config";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: {
      js,
      'react-hooks': reactHooks
     },
    extends: [
      "js/recommended",
      "plugin:prettier/recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
    ],
    languageOptions: {
      globals: globals.browser
    },
    rules: {
			semi: "error",
			"prefer-const": "error",
      // Core hooks rules
      'react-hooks/rules-of-hooks': 'error',  // Checks rules of Hooks
      'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
      'react/prop-types': 'off', // Disable prop-types as we use TypeScript for type checking
      'react/react-in-jsx-scope': 'off', // Disable the rule since React 17+ doesn't require React to be in scope
      '@typescript-eslint/ explicit-module-boundary-types': 'off', // Disable if not needed
		},
    settings: {
      react: {
        version: "detect",
      },
    }
  },
  // tseslint.configs.recommended,
  // pluginReact.configs.flat.recommended,
];
