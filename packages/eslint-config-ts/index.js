const basic = require("@realive/eslint-config-base");

module.exports = {
  extends: [
    "@realive/eslint-config-base",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: basic.overrides,
  settings: {
    "import/resolver": {
      node: { extensions: [".js", ".jsx", ".mjs", ".ts", ".tsx", ".d.ts"] },
    },
  },
  rules: {
    "import/named": "off",

    // TS
    "@typescript-eslint/semi": ["error", "never"],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      { multiline: { delimiter: "none" } },
    ],
    "@typescript-eslint/type-annotation-spacing": ["error", {}],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports", disallowTypeAnnotations: false },
    ],

    // Override JS
    "no-useless-constructor": "off",
    indent: "off",
    "@typescript-eslint/indent": ["error", 2],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": "error",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: false, classes: false, variables: true },
    ],

    // off
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-namespace": "off",
  },
};
