// Check Environment Variables are Set
import './config/env'

import logger from './config/logger'
import connectToBD from './config/db'
import createServer from './config/server'

(async () => {
	try {
		// Connect to DB
		await connectToBD()
		// Create Server
		const server = createServer()
		// Start Server on PORT
		const PORT = process.env.API_SERVER_PORT
		server.listen(PORT)

		logger.info(`Server Started at http://localhost:${PORT}`)
	} catch (err) {
		logger.fatal(err)
	}
})()
