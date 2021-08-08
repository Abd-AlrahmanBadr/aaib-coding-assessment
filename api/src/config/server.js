import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import mongoSanitize from 'express-mongo-sanitize'
import compression from 'compression'
import cors from 'cors'
import bodyParser from 'body-parser'

import logger from '../config/logger'
import expressErrorHandlerMiddleware from '../middleware/expressErrorHandler'
import xssFilterMiddleware from '../middleware/xssFilter'
import RoutesBuilder from '../routes/'

export default function () {
	const app = express()

	// Setup Middleware
	app.use(express.json())
	app.use(helmet())
	app.use(cors())
	app.use(compression())
	app.use(xssFilterMiddleware())
	app.use(mongoSanitize())
	app.use(bodyParser.urlencoded({ extended: false }))

	// Add Morgan if API_NODE_ENV is Development
	if (process.env.API_NODE_ENV === 'development') {
		logger.info('Morgan is Enabled')
		app.use(morgan('tiny', {
			stream: {
				write: function (str) {
					// Log with Removing '\n' from the End
					// eslint-disable-next-line no-magic-numbers
					logger.debug(str.substring(0, str.length - 2))
				}
			}
		}))

		// Delay Every Request for Loading Status
		// app.use(async (_, __, next) => {
		// 	await new Promise((resolve) => setTimeout(resolve, 1000))
		// 	next()
		// })
	}

	// Setting Up the Routes
	RoutesBuilder('/api', app)

	// Error Handler
	app.use(expressErrorHandlerMiddleware)

	// Return Server App
	return app
}
