import mongoose from 'mongoose'

import uniqueValidator from 'mongoose-unique-validator'

import {
	ReportStatusOpen,
	ReportStatusTypes,
	ReportTypeTypes
} from '../utils/constants'

const reportSchema = new mongoose.Schema({
	type: {
		type: String,
		index: true,
		enum: ReportTypeTypes,
		required: true
	},
	state: {
		type: String,
		index: true,
		enum: ReportStatusTypes,
		default: ReportStatusOpen,
		required: true
	},
	message: {
		type: mongoose.Mixed,
		required: true
	},
	createdAt: {
		type: Date,
		default: () => Date.now(),
		required: true
	}
}, {
	toJSON: {
		transform: function (doc, ret, options) {
			ret.id = ret._id

			delete ret._id
			delete ret.__v

			return ret
		}
	}
})

reportSchema.plugin(uniqueValidator)

export default mongoose.model('report', reportSchema, 'report')
