module.exports = {
	env: {
		es2021: true,
		node: true
	},
	extends: [
		'standard'
	],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module'
	},
	rules: {
		indent: [ 2, 'tab', { SwitchCase: 1 } ],
		'no-tabs': 0,
		semi: [ 'error', 'never' ],
		'array-bracket-spacing': [ 'error', 'always' ],
		quotes: [ 'error', 'single', { avoidEscape: true } ],
		'comma-dangle': [ 'error', 'never' ],
		'no-unused-vars': [ 'error', { ignoreRestSiblings: true, argsIgnorePattern: '^(_)+$' } ],
		'no-console': 'error',
		curly: [ 2, 'all' ],
		'arrow-parens': [ 'error', 'always' ],
		'no-undef': 'error'
	}
}
