module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    "standard",
    "plugin:eslint-comments/recommended",
    "plugin:jsonc/recommended-with-jsonc",
    "plugin:yml/standard",
    "plugin:markdown/recommended",
  ],
  settings: {
    "import/resolver": {
      node: { extensions: [".js", ".mjs", ".ts", ".d.ts"] },
    },
  },
  rules: {
    "eslint-comments/disable-enable-pair": "off",
    // Common
    curly: ["error", "multi-or-nest", "consistent"],
    "quote-props": ["error", "consistent-as-needed"],
    "no-param-reassign": "off",
    "array-bracket-spacing": ["error", "never"],
    "brace-style": ["error", "stroustrup", { allowSingleLine: true }],
    "block-spacing": ["error", "always"],
    camelcase: "off",
    "comma-spacing": ["error", { before: false, after: true }],
    "comma-style": ["error", "last"],
    "comma-dangle": ["error", "always-multiline"],
    "no-constant-condition": "warn",
    "no-debugger": "error",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-cond-assign": ["error", "always"],
    "func-call-spacing": ["off", "never"],
    "key-spacing": ["error", { beforeColon: false, afterColon: true }],
    indent: [
      "error",
      2,
      { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 },
    ],
    "no-restricted-syntax": [
      "error",
      "DebuggerStatement",
      "ForInStatement",
      "LabeledStatement",
      "WithStatement",
    ],
    "object-curly-spacing": ["error", "always"],
    "no-return-await": "off",
    "space-before-function-paren": ["error", "never"],

    // Best Practice
    "array-callback-return": "error",
    "block-scoped-var": "error",
    "consistent-return": "off",
    complexity: ["off", 11],
    eqeqeq: ["error", "smart"],
    "no-alert": "warn",
    "no-case-declarations": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-with": "error",
    "no-void": "error",
    "no-useless-escape": "off",
    "vars-on-top": "error",
    "require-await": "off",
    "no-return-assign": "off",
    "operator-linebreak": ["error", "before"],
    // es6
    "no-var": "error",
    "prefer-const": [
      "error",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: true,
      },
    ],
    "prefer-arrow-callback": [
      "error",
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    "object-shorthand": [
      "error",
      "always",
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "template-curly-spacing": "error",
    "arrow-parens": ["error", "as-needed", { requireForBlockBody: true }],
    "generator-star-spacing": "off",
    "spaced-comment": [
      "error",
      "always",
      {
        line: {
          markers: ["/"],
          exceptions: ["/", "#"],
        },
        block: {
          markers: ["!"],
          exceptions: ["*"],
          balanced: true,
        },
      },
    ],
  },
  overrides: [
    {
      files: ["*.json", "*.json5"],
      parser: "jsonc-eslint-parser",
    },
    {
      files: ["package.json"],
      parser: "jsonc-eslint-parser",
      rules: {
        "jsonc/sort-keys": [
          "error",
          {
            pathPattern: "^$",
            order: [
              "name",
              "version",
              "description",
              "keywords",
              "license",
              "repository",
              "funding",
              "author",
              "type",
              "files",
              "exports",
              "main",
              "module",
              "unpkg",
              "bin",
              "scripts",
              "husky",
              "lint-staged",
              "peerDependencies",
              "peerDependenciesMeta",
              "dependencies",
              "devDependencies",
              "eslintConfig",
            ],
          },
          {
            pathPattern: "^(?:dev|peer|optional|bundled)?[Dd]ependencies$",
            order: { type: "asc" },
          },
        ],
      },
    },
    {
      files: ["*.yaml", "*.yml"],
      parser: "yaml-eslint-parser",
    },
    {
      files: ["*.d.ts"],
      rules: {
        "import/no-duplicates": "off",
      },
    },
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
    {
      files: ["*.test.ts", "*.test.js", "*.spec.ts", "*.spec.js"],
      rules: {
        "no-unused-expressions": "off",
      },
    },
  ],
};
