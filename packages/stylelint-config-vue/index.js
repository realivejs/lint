module.exports = {
  extends: [
    "@realive/stylelint-config-base",
    "stylelint-config-recommended-vue",
  ],
  overrides: [
    {
      files: ["**/*.(html|vue)"],
      customSyntax: "postcss-html",
    },
  ],
};
