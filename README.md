code lint custom config include css, javascript, vue...

# eslint config

base     - eslint-config-base(include eslint-config-standard, .md,.js,.json,.jsonc,.yaml file format)
ts       - eslint-config-ts(include base)
vue      - eslint-config-vue (include ts、base)
vue2     - eslint-config-vue-v2 (include ts、base)
prettier - eslint-config-prettier(to prevent conflict by prettier rules)


# stylelint config

base   - stylelint-config-base(include stylelint-config-standard, .html, .css, .less file format)
vue    - stylelint-config-vue(include base、.vue file format)
prettier - stylelint-config-prettier(to prevent conflict by prettier rules)


# vscode settings
<code>
  {
    "typescript.validate.enable": false,
    "javascript.validate.enable": false,
    "eslint.validate": ["javascript", "typescript" ,"json" ],
    "stylelint.validate": [
      "css",
      "less",
      "scss",
      "vue"
    ],
    "css.validate": false,
    "less.validate": false,
    "scss.validate": false,
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true, 
      "source.fixAll.stylelint": true 
    },
    "vetur.validation.script": false,
    "vetur.format.defaultFormatter.js": "none",
    "vetur.validation.template": false, 
    "vetur.format.defaultFormatter.html": "none",
  }
<code>