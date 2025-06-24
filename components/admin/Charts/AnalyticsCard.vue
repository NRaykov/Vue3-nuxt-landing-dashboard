<template>
	<div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
		<h3 class="text-sm text-gray-500 dark:text-gray-400">{{ title }}</h3>
		<div class="text-2xl font-bold text-gray-900 dark:text-white mt-1">
			{{ value }}
		</div>
		<div class="text-sm mt-1" :class="changeClass">
			<span v-if="change !== undefined">{{ formattedChange }}</span>
		</div>
		<p v-if="subtitle" class="text-xs mt-2 text-gray-500">{{ subtitle }}</p>
	</div>
</template>

<script setup lang="ts">
	const props = defineProps<{
		title: string;
		value: string;
		change?: number;
		subtitle?: string;
		isGauge?: boolean;
	}>();

	const changeClass = computed(() =>
		props.change !== undefined
			? props.change > 0
				? 'text-green-500'
				: 'text-red-500'
			: '',
	);

	const formattedChange = computed(() =>
		props.change !== undefined
			? `${props.change > 0 ? '▲' : '▼'} ${Math.abs(props.change).toFixed(2)}%`
			: '',
	);
</script>
