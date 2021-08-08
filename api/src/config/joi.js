import baseJoi from 'joi'

import { InputError } from '../utils/errors'

// Function to Validate Joi Schemas
function validate (schema, payload) {
	// Validate Inputs from Schema
	const { error, value } = schema.validate(payload, { abortEarly: false })

	// Check if Errors
	if (error) { throw new InputError(error) }

	return value
}

// Extend Joi
function buildJoiWithExtensions () {
	let extendedJoi = baseJoi

	// Extending ObjectId
	extendedJoi = extendedJoi.extend((joi) => ({
		type: 'objectId',
		base: joi.string().regex(/^[0-9a-fA-F]{24}$/, '')
	}))

	// Return Extended Joi
	return extendedJoi
}

export const Joi = buildJoiWithExtensions()
export const Validate = validate
