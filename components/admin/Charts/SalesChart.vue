<template>
	<div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md relative">
		<div class="flex justify-between items-start mb-4">
			<h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">
				Monthly Sales
			</h3>

			<div class="relative">
				<button
					@click="isOpen = !isOpen"
					class="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
				>
					<MoreVertical
						class="w-5 h-5 text-gray-600 dark:text-gray-300"
					/>
				</button>

				<div
					v-if="isOpen"
					class="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-700 rounded-lg shadow-lg z-10 border dark:border-gray-600"
				>
					<button
						class="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white"
						@click="viewMore"
					>
						View More
					</button>
					<button
						class="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
						@click="deleteChart"
					>
						Delete
					</button>
				</div>
			</div>
		</div>

		<!-- Bar Chart -->
		<Bar :data="chartData" :options="chartOptions" />
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import { Bar } from 'vue-chartjs';
	import {
		Chart as ChartJS,
		BarElement,
		CategoryScale,
		LinearScale,
		Tooltip,
		Legend,
	} from 'chart.js';
	import { MoreVertical } from 'lucide-vue-next';

	ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

	const isOpen = ref(false);

	function viewMore() {
		isOpen.value = false;
		alert('View More clicked');
	}

	function deleteChart() {
		isOpen.value = false;
		alert('Delete clicked');
	}

	const chartData = {
		labels: [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		],
		datasets: [
			{
				label: 'Sales',
				data: [
					150, 370, 180, 290, 165, 175, 265, 100, 195, 360, 275, 100,
				],
				backgroundColor: '#6366F1',
				borderRadius: 6,
			},
		],
	};

	const chartOptions = {
		responsive: true,
		plugins: {
			legend: {
				display: false,
			},
		},
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	};
</script>

<style scoped>
	/* Optional if @click.outside isn't globally available */
</style>
