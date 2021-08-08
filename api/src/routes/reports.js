import express from 'express'
import { Joi } from '../config/joi'

import responseShaper from '../middleware/responseShaper'
import input from '../middleware/input'

import {
	newReport,
	listAll,
	resolveReport,
	blockReport
} from '../controller/report'

import { ReportTypeTypes } from '../utils/constants'

const router = express.Router()

// Add New Report Report
router.post(
	'/new',
	input(Joi.object({
		type: Joi.string().valid(...ReportTypeTypes).required(),
		message: Joi.string()
	})),
	responseShaper(newReport)
)

// Get All Reports
router.get(
	'/',
	input(Joi.object({
		offset: Joi.number().default(0),
		limit: Joi.number().default(100)
	})),
	responseShaper(listAll)
)

// Resolve Report
router.put(
	'/:reportId',
	input(Joi.object({
		reportId: Joi.objectId().required()
	})),
	responseShaper(resolveReport)
)

// Block Report
router.post(
	'/:reportId',
	input(Joi.object({
		reportId: Joi.objectId().required()
	})),
	responseShaper(blockReport)
)

export default router
