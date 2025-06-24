<template>
	<div class="space-y-6">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
			<AnalyticsCard title="Customers" value="3,782" :change="11.01" />
			<AnalyticsCard title="Orders" value="5,359" :change="-9.05" />
			<AnalyticsCard
				title="Monthly Target"
				value="75.55%"
				:change="10"
				subtitle="You earn $3287 today."
			/>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			<SalesChart />
			<StatsChart />
		</div>
	</div>
</template>

<script setup lang="ts">
	import AnalyticsCard from '~/components/admin/Charts/AnalyticsCard.vue';
	import SalesChart from '~/components/admin/Charts/SalesChart.vue';
	import StatsChart from '~/components/admin/Charts/StatsChart.vue';
	definePageMeta({
		layout: 'admin',
	});
</script>
