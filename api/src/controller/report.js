import {
	createNewReport,
	findReports,
	updateReportStatus
} from '../lib/report'

import {
	ReportStatusResolved,
	ReportStatusClosed
} from '../utils/constants'

export async function newReport (locals) {
	const { type, message } = locals

	const report = await createNewReport(type, message)

	return {
		data: {
			report
		},
		messages: [
			'Report is Added Successfully!'
		]
	}
}

export async function listAll (locals) {
	const { offset, limit } = locals

	const filter = {}

	const reports = await findReports(filter, offset, limit)

	return {
		data: {
			limit,
			offset,
			elements: reports
		}
	}
}

export async function resolveReport (locals) {
	const { reportId } = locals

	await updateReportStatus(reportId, ReportStatusResolved)

	return {
		data: {
			ticketState: ReportStatusResolved
		},
		messages: [
			'Status Updated Successfully!'
		]
	}
}

export async function blockReport (locals) {
	const { reportId } = locals

	await updateReportStatus(reportId, ReportStatusClosed)

	return {
		data: {
			ticketState: ReportStatusClosed
		},
		messages: [
			'Status Updated Successfully!'
		]
	}
}
