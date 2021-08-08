import logger from '../config/logger'

import {
	BadRequestStatus,
	InternalServerErrorStatus
} from '../utils/constants'

// This will be the main thrown Error when a process got a failure
export class ProcessError extends Error {
	constructor (message) {
		super(message)
		this.name = 'ProcessError'
		this.responseMessages = message.split(',')
	}
}

// Inputs Error
export class InputError extends Error {
	constructor (validationError) {
		super(validationError)
		this.name = 'InputError'
		this.responseMessages = InputError.formatValidationError(validationError)
	}

	static formatValidationError (err) {
		if (typeof err === 'string') {
			return [ err ]
		} else {
			return err.details.map((v) => v.message)
		}
	}
}

// Shape Errors for Response
function errorShaper (err) {
	let messages = []
	let status = 500

	// Switch on Error Types
	switch (err.name) {
		case 'ProcessError':
			status = BadRequestStatus
			messages = err.responseMessages
			break
		case 'InputError':
			status = BadRequestStatus
			messages = err.responseMessages
			break
		case 'ValidationError':
			status = BadRequestStatus
			for (const { message } of Object.values(err.errors)) {
				messages.push(message)
			}
			break
		default:
			status = InternalServerErrorStatus
			messages.push("Sorry, I'm Broken Now.")
			logger.error(err)
			break
	}

	// Return Messages
	return { status, messages }
}

export const ErrorShaper = errorShaper
