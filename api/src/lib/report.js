import Report from '../models/report'
import { ReportStatusOpen } from '../utils/constants'

import { ProcessError } from '../utils/errors'

const NotFoundReportError = new ProcessError('Report Not Found!')
const UnableUpdateReportStatus = new ProcessError('Unable to Update Report Status!')

export async function createNewReport (type, message) {
	const report = new Report({ type, message })
	await report.save()

	return report
}

export function findReports (filter, offset, limit) {
	return Report
		.find(filter)
		.skip(offset)
		.limit(limit)
}

export async function updateReportStatus (reportId, status) {
	const report = await Report.findById(reportId)

	// Check Report Exists
	if (!report) {
		throw NotFoundReportError
	}

	// Check Status is Open
	if (report.state !== ReportStatusOpen) {
		throw UnableUpdateReportStatus
	}

	report.state = status
	await report.save()
}
