
// Process Exit Statuses
export const SuccessfulExit = 0
export const FatalExit = 1

// Response Statuses
export const SuccessStatus = 200
export const BadRequestStatus = 400
export const ForbiddenStatus = 403
export const NotFoundStatus = 404
export const InternalServerErrorStatus = 500

// Report Types
export const ReportTypeSpam = 'SPAM'
export const ReportTypeTypes = [
	ReportTypeSpam
]

// Report Statuses
export const ReportStatusOpen = 'OPEN'
export const ReportStatusResolved = 'RESOLVED'
export const ReportStatusClosed = 'CLOSED'
export const ReportStatusTypes = [
	ReportStatusOpen,
	ReportStatusResolved,
	ReportStatusClosed
]
