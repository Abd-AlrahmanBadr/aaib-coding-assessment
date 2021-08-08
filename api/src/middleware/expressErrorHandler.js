import { ErrorShaper } from '../utils/errors'

export default function (err, _, res, __) {
	// Return Response
	const { status, messages } = ErrorShaper(err)
	return res.status(status).json({
		ok: false,
		data: {},
		messages
	})
}
