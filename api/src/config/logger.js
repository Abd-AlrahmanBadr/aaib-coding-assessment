const log4js = require('log4js')

const config = {}
if (process.env.API_NODE_ENV === 'production') {
	config.appenders = {
		error: {
			type: 'file',
			filename: 'logs/err.log'
		},
		'just-errors': { type: 'logLevelFilter', appender: 'error', level: 'error' },
		everything: {
			type: 'file',
			filename: 'logs/everything.log'
		}
	}
	config.categories = {
		default: {
			appenders: [
				'everything',
				'just-errors'
			],
			level: 'all'
		}
	}
} else {
	config.appenders = { out: { type: 'stdout' } }
	config.categories = { default: { appenders: [ 'out' ], level: 'all' } }
}

log4js.configure(config)

export default log4js.getLogger('SERVER')
