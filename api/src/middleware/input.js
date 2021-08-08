import { InputError } from '../utils/errors'

// Validate Inputs from [Body, Query, Params] and Set it in `req.locals`
export default (schema) => (req, _, next) => {
	// Validate Inputs from Schema
	const { error, value } = schema.validate({
		...req.body,
		...req.query,
		...req.params
	}, { abortEarly: false })

	// Check if Errors
	if (error) { throw new InputError(error) }

	req.locals = req.locals || {}
	req.locals = {
		...req.locals,
		...value
	}

	next()
}
