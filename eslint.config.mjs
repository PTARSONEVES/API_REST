import globals from "globals";
import pluginJs from "@eslint/js";
import { rules } from "eslint-plugin-react";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
    rules: {
      "no-console": "off",
      "class-methods-use-this": "off"
    }
  }
];
