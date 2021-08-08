import { NotFoundStatus } from '../utils/constants'

// Import Routes
import ReportsRoutes from './reports'

export default function (baseURL, app) {
	// Use Routes
	app.use(baseURL + '/reports', ReportsRoutes)

	// 404 Not Found Route
	app.all('*', (_, res) => res.status(NotFoundStatus).json({
		ok: false,
		data: null,
		messages: [ '404 Not Found' ]
	}))
}
