import { NotFoundStatus } from '../utils/constants'

// Import Routes

export default function (baseURL, app) {
	// Use Routes

	// 404 Not Found Route
	app.all('*', (_, res) => res.status(NotFoundStatus).json({
		ok: false,
		data: null,
		messages: [ '404 Not Found' ]
	}))
}
