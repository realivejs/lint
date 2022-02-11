module.exports = {
  extends: ["@realive/eslint-config-base", "plugin:vue/recommended"],
  rules: {
    "vue/max-attributes-per-line": ["warn", { singleline: 5 }],
    "vue/no-v-html": "off",
    "vue/require-prop-types": "off",
    "vue/require-default-prop": "off",
    "vue/multi-word-component-names": "off",
  },
};
