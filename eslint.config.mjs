// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  files: ['**/*.vue'],
  rules: {
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'never',
        selfClosingTag: {
          singleline: 'never',
          multiline: 'never',
        },
      },
    ],
    'vue/html-indent': ['error', 1, {
      attribute: 0,
      baseIndent: 2,
      closeBracket: 0,
      alignAttributesVertically: true,
      ignores: [],
    }],
  },
},
)
