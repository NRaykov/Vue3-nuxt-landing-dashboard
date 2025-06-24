<template>
	<div class="bg-white dark:bg-gray-800 p-4 rounded-sm shadow-md">
		<div class="flex justify-between items-start flex-wrap gap-4 mb-4">
			<div>
				<h2
					class="text-lg font-semibold text-gray-800 dark:text-gray-100"
				>
					Statistics
				</h2>
				<p class="text-sm text-gray-500 dark:text-gray-400">
					Target you’ve set for each month
				</p>
			</div>

			<div class="flex items-center gap-4 ml-auto">
				<div
					class="bg-gray-100 dark:bg-gray-700 p-1 rounded-md flex items-center space-x-1"
				>
					<button
						v-for="tab in ['Overview', 'Sales', 'Revenue']"
						:key="tab"
						:class="[
							'px-3 py-1 text-sm font-medium rounded-md',
							selectedTab === tab
								? 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white'
								: 'text-gray-500 dark:text-gray-300',
						]"
						@click="selectedTab = tab"
					>
						{{ tab }}
					</button>
				</div>

				<ClientOnly>
					<VueDatePicker
						v-model="dateRange"
						range
						format="MMM d, yyyy"
						input-class-name="dp-custom-input"
						:enable-time-picker="false"
					/>
				</ClientOnly>
			</div>
		</div>

		<!-- Chart -->
		<Line :data="chartData" :options="chartOptions" />
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import { Line } from 'vue-chartjs';
	import {
		Chart as ChartJS,
		LineElement,
		PointElement,
		CategoryScale,
		LinearScale,
		Tooltip,
		Legend,
	} from 'chart.js';
	import VueDatePicker from '@vuepic/vue-datepicker';
	import '@vuepic/vue-datepicker/dist/main.css';

	ChartJS.register(
		LineElement,
		PointElement,
		CategoryScale,
		LinearScale,
		Tooltip,
		Legend,
	);

	const selectedTab = ref('Overview');
	const dateRange = ref([new Date(), new Date()]);

	const chartData = {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
		datasets: [
			{
				label: 'Statistics',
				data: [180, 190, 170, 160, 150, 170, 180, 210, 230],
				borderColor: '#6366F1',
				backgroundColor: 'rgba(99,102,241,0.2)',
				tension: 0.4,
				fill: true,
				pointRadius: 3,
			},
		],
	};

	const chartOptions = {
		responsive: true,
		plugins: {
			legend: { display: false },
		},
		scales: {
			y: { beginAtZero: true },
		},
	};
</script>

<style scoped>
	.dp-custom-input {
		@apply px-3 py-1.5 text-sm border rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600;
	}
</style>
