/* eslint-disable no-console */
import { Joi, Validate } from './joi'

import { FatalExit } from '../utils/constants'

(function () {
	// ENV Variables Schema
	const envVariablesSchema = Joi.object({
		API_NODE_ENV: Joi.string().valid('production', 'development').required(),
		API_SERVER_PORT: Joi.number().required(),
		API_DB_URI: Joi.string().required()
	}).unknown()

	// Validate ENV Schema
	try {
		Validate(envVariablesSchema, process.env)
	} catch (err) {
		console.error('ENV Variables are not Set Properly.')
		console.error(err)
		process.exit(FatalExit)
	}
})()
