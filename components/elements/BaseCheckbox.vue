<template>
	<label class="inline-flex items-center cursor-pointer gap-2">
		<input
			type="checkbox"
			:checked="checked"
			@change="handleChange"
			class="hidden"
		/>
		<span
			:class="[
				'w-5 h-5 flex items-center justify-center rounded border transition',
				checked ? activeClasses : baseClasses,
			]"
		>
			<svg
				v-if="checked"
				class="w-3 h-3 text-white"
				fill="none"
				stroke="currentColor"
				stroke-width="3"
				viewBox="0 0 24 24"
			>
				<path d="M5 13l4 4L19 7" />
			</svg>
		</span>
		<slot />
	</label>
</template>

<script setup>
	import { computed } from 'vue';

	const props = defineProps({
		modelValue: Boolean,
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
	});

	const emit = defineEmits(['update:modelValue']);
	const checked = computed(() => props.modelValue);
	const handleChange = () => emit('update:modelValue', !props.modelValue);

	const baseClasses =
		'bg-white border-gray-300 dark:bg-gray-800 dark:border-gray-600';
	const activeMap = {
		primary: 'bg-blue-600 border-blue-600',
		success: 'bg-green-600 border-green-600',
		error: 'bg-red-600 border-red-600',
		purple: 'bg-purple-600 border-purple-600',
		warning: 'bg-yellow-400 border-yellow-400',
		info: 'bg-sky-500 border-sky-500',
		dark: 'bg-gray-800 border-gray-800',
	};

	const activeClasses = computed(() => activeMap[props.variant]);
</script>
