<template>
	<div :class="alertClasses" class="p-4 rounded text-sm font-medium">
		<slot />
	</div>
</template>

<script setup>
	import { computed } from 'vue';

	const props = defineProps({
		variant: {
			type: String,
			default: 'info',
			validator: (val) =>
				['info', 'error', 'success', 'warning', 'dark'].includes(val),
		},
	});

	const variants = {
		info: 'bg-blue-100 text-blue-800',
		error: 'bg-red-100 text-red-800',
		success: 'bg-green-100 text-green-800',
		warning: 'bg-yellow-100 text-yellow-800',
		dark: 'bg-gray-800 text-white',
	};

	const alertClasses = computed(
		() => variants[props.variant] || variants.info,
	);
</script>
