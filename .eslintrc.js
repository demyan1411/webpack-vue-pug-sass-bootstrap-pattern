module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    'no-new': 0,

    'no-undef': 0,

    'handle-callback-err': 0,

    'indent': ['error', 4, { "SwitchCase": 1 }],

    'space-before-function-paren': ["error", "never"],

    'no-constant-condition': 0,

    'semi': ["error", "always"],

    'eol-last': 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}