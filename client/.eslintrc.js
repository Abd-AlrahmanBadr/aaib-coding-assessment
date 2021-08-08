module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/essential',
		'@vue/standard'
	],
	parserOptions: {
		parser: 'babel-eslint'
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'vue/html-indent': [ 2, 'tab' ],
		indent: [ 2, 'tab' ],
		'no-tabs': 0,
		'array-bracket-spacing': [ 'error', 'always' ]
	}
}
