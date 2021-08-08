<template>
	<v-card elevation="2">
		<v-card-text>
			<v-row>
				<v-col cols="4">
					<p><strong>Id</strong>: {{ report.id }}</p>
					<p><strong>State</strong>: {{ report.state }}</p>
				</v-col>
				<v-col cols="4">
					<p><strong>Type</strong>: {{ report.type }}</p>
					<p><strong>Message</strong>: {{ report.message }}</p>
				</v-col>
				<v-col cols="4">
					<v-btn
						block
						class="my-2"
						@click="$emit('update-status', report.id, 'block')"
					>
						Block
					</v-btn>
					<v-btn
						block
						class="my-2"
						@click="$emit('update-status', report.id, 'resolve')"
					>
						Resolve
					</v-btn>
				</v-col>
			</v-row>
		</v-card-text>
	</v-card>
</template>

<script>
export default {
	name: 'Comp_ReportCard',
	props: {
		report: {
			type: Object,
			required: true
		}
	}
}
</script>
