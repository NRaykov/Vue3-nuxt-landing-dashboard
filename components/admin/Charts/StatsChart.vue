<template>
	<div class="bg-white dark:bg-gray-800 p-4 rounded-sm shadow-md">
		<Line :data="chartData" :options="chartOptions" />
	</div>
</template>

<script setup lang="ts">
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

	ChartJS.register(
		LineElement,
		PointElement,
		CategoryScale,
		LinearScale,
		Tooltip,
		Legend,
	);

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
