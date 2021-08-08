import { SuccessStatus } from '../utils/constants'

// This is Handler is for Unifying the Responses Shape
export default (handler) => async (req, res, next) => {
	// Execute Handler Function
	try {
		const result = await handler(req.locals)

		// Return Response
		return res.status(SuccessStatus).json({
			ok: true,
			data: result.data || {},
			messages: result.messages || []
		})
	} catch (err) {
		next(err)
	}
}
