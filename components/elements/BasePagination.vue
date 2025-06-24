<template>
	<nav class="inline-flex gap-2">
		<button
			v-for="page in pages"
			:key="page"
			class="pagination-btn w-10 h-10 rounded-full text-sm font-medium transition"
			:class="getClass(page)"
			@click="activePage = page"
		>
			{{ page }}
		</button>
	</nav>
</template>

<script setup>
	const props = defineProps({
		pages: { type: Number, default: 5 },
		variant: {
			type: String,
			default: 'primary',
			validator: (val) =>
				[
					'primary',
					'success',
					'error',
					'purple',
					'warning',
					'info',
					'dark',
				].includes(val),
		},
		type: {
			type: String,
			default: 'filled', // 'filled' | 'outline' | 'soft'
			validator: (val) => ['filled', 'outline', 'soft'].includes(val),
		},
	});

	const activePage = ref(1);

	const getClass = (page) => {
		const isActive = page === activePage.value;

		const variants = {
			primary: [
				'bg-blue-600',
				'text-white',
				'hover:bg-blue-700',
				'border-blue-400',
			],
			success: [
				'bg-green-600',
				'text-white',
				'hover:bg-green-700',
				'border-green-400',
			],
			error: [
				'bg-red-600',
				'text-white',
				'hover:bg-red-700',
				'border-red-400',
			],
			purple: [
				'bg-purple-600',
				'text-white',
				'hover:bg-purple-700',
				'border-purple-400',
			],
			warning: [
				'bg-yellow-400',
				'text-black',
				'hover:bg-yellow-500',
				'border-yellow-400',
			],
			info: [
				'bg-sky-500',
				'text-white',
				'hover:bg-sky-600',
				'border-sky-500',
			],
			dark: [
				'bg-gray-800',
				'text-white',
				'hover:bg-gray-900',
				'border-gray-600',
			],
		};

		const [bg, text, hover, border] = variants[props.variant];

		if (props.type === 'filled') {
			return isActive
				? `${bg} ${text}`
				: `bg-white text-gray-600 border ${border} hover:${hover} dark:bg-gray-900 dark:text-gray-200`;
		}

		if (props.type === 'outline') {
			return isActive
				? `${bg} ${text}`
				: `bg-transparent text-${props.variant}-600 border ${border} hover:${hover}`;
		}

		if (props.type === 'soft') {
			return isActive
				? `${bg} ${text}`
				: `bg-${props.variant}-100 text-${props.variant}-800 border border-transparent hover:${hover}`;
		}

		return '';
	};
</script>
<style scoped>
	.pagination-btn {
		position: relative;
		overflow: hidden;
		z-index: 0;
	}

	.pagination-btn::after {
		content: '';
		position: absolute;
		inset: 0;
		height: 0;
		background-color: currentColor;
		opacity: 0.1;
		transition: height 0.4s ease;
		z-index: -1;
	}

	.pagination-btn:hover::after {
		height: 100%;
	}
</style>
