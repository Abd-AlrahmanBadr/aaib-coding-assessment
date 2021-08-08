<template>
	<v-row>
		<v-col
			cols="12"
			v-for="report in reports"
			:key="`Report-Card Report#${report.id}`"
		>
			<report-card
				:report="report"
				@update-status="updateReportStatus"
			/>
		</v-col>
	</v-row>
</template>

<script>
import axios from 'axios'

export default {
	name: 'View_Home',
	components: {
		ReportCard: () => import('@/components/reportCard')
	},
	data: () => ({
		reports: []
	}),
	beforeMount () {
		axios
			.get('/api/reports')
			.then((res) => {
				const data = res.data
				this.reports = data.data.elements
			})
			.catch((err) => {
				const messages = err?.response?.data?.messages || []
				messages.forEach((message) => {
					this.$toast.error(message)
				})
			})
	},
	methods: {
		updateReportStatus (reportId, newStatus) {
			switch (newStatus) {
			case 'block':
				this.closeReport(reportId)
				break
			case 'resolve':
				this.resolveReport(reportId)
				break
			default:
				throw new Error('Unknown Status!')
			}
		},
		closeReport (reportId) {
			axios
				.post(`/api/reports/${reportId}`)
				.then((res) => {
					const messages = res?.data?.messages || []
					messages.forEach((message) => {
						this.$toast.success(message)
					})
					this.setReportStatus(reportId, 'CLOSED')
				})
				.catch((err) => {
					const messages = err?.response?.data?.messages || []
					messages.forEach((message) => {
						this.$toast.error(message)
					})
				})
		},
		resolveReport (reportId) {
			axios
				.put(`/api/reports/${reportId}`)
				.then((res) => {
					const messages = res?.data?.messages || []
					messages.forEach((message) => {
						this.$toast.success(message)
					})
					this.setReportStatus(reportId, 'RESOLVED')
				})
				.catch((err) => {
					const messages = err?.response?.data?.messages || []
					messages.forEach((message) => {
						this.$toast.error(message)
					})
				})
		},
		setReportStatus (reportId, newStatus) {
			for (let i = 0; i < this.reports.length; i++) {
				if (this.reports[i].id === reportId) {
					this.reports[i].state = newStatus
					break
				}
			}
		}
	}
}
</script>
