<template>
	<button
		class="fancy-btn relative overflow-hidden text-white font-semibold px-6 py-2 rounded transition-colors duration-300 ease-out"
		:class="variantClasses"
	>
		<span class="relative z-10">
			<slot />
		</span>
	</button>
</template>

<script setup>
	const props = defineProps({
		variant: {
			type: String,
			default: 'primary',
		},
	});

	const variantClasses = computed(() => {
		const variants = {
			primary: 'bg-blue-600',
			success: 'bg-green-600',
			error: 'bg-red-600',
			purple: 'bg-purple-600',
		};
		return variants[props.variant] || variants.primary;
	});
</script>

<style scoped>
	.fancy-btn::after {
		content: '';
		@apply absolute bottom-0 left-0 w-full;
		height: 0%;
		background-color: rgba(255, 255, 255, 0.25); /* or any color/opacity */
		transition: height 0.4s ease;
		z-index: 0;
	}

	.fancy-btn:hover::after {
		height: 100%;
	}
</style>
