<template>
	<label class="inline-flex items-center cursor-pointer gap-2">
		<input
			type="radio"
			class="hidden"
			:value="value"
			:name="name"
			:checked="modelValue === value"
			@change="$emit('update:modelValue', value)"
		/>
		<span
			:class="[
				'w-5 h-5 flex items-center justify-center rounded-full border transition',
				modelValue === value ? activeClasses : baseClasses,
			]"
		>
			<span
				v-if="modelValue === value"
				class="w-2 h-2 rounded-full bg-white"
			></span>
		</span>
		<slot />
	</label>
</template>

<script setup>
	import { computed } from 'vue';

	const props = defineProps({
		modelValue: [String, Number, Boolean],
		value: [String, Number, Boolean],
		name: String,
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
