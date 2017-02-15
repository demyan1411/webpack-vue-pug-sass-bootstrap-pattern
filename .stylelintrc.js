module.exports = {
    'rules': {
        'string-quotes': 'double',
        'font-weight-notation': 'numeric',
        'value-list-comma-space-after': 'always',
        'length-zero-no-unit': true,
        'block-no-empty': null,
        'color-no-invalid-hex': true,
        'comment-empty-line-before': [
            'always', {
                'ignore': ['stylelint-commands', 'after-comment']
            }
        ],
        'declaration-colon-space-after': 'always',
        'indentation': 4,
        'max-empty-lines': 1,
        'rule-empty-line-before': [
            'always', {
                'except': ['first-nested'],
                'ignore': ['after-comment']
            }
        ],
        'rule-empty-line-before': 'always',
        'declaration-empty-line-before': 'never',
        'block-closing-brace-empty-line-before': 'never',
        'unit-whitelist': ['px', 'deg', 'em', 'rem', '%', 's']
    },
    'defaultSeverity': 'error'
}
