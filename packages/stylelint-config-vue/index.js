module.exports = {
  extends: [
    "@realive/stylelint-config-base",
    "stylelint-config-recommended-vue",
  ],
  overrides: [
    {
      files: ["**/*.(html)"],
      customSyntax: "postcss-html",
    },
    {
      files: ["**/*.less"],
      customSyntax: "postcss-less",
    },
    {
      files: ["**/*.sass"],
      customSyntax: "postcss-sass",
    },
    {
      files: ["**/*.stylus"],
      customSyntax: "postcss-styl",
    },
    {
      files: ["**/*.scss"],
      customSyntax: "postcss-scss",
    },
  ],
};
