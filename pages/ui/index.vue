<template>
	<section
		class="py-20 px-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 container mx-auto"
	>
		<!-- Theme Toggle Button -->
		<div class="text-center mb-12">
			<h1 class="text-4xl font-extrabold">UI Components</h1>
			<p class="text-gray-600 dark:text-gray-400 mt-2">
				Reusable elements with Tailwind and theme toggle support
			</p>
		</div>

		<!-- Buttons -->
		<section class="mb-16">
			<h2 class="text-2xl font-semibold mb-4">Buttons</h2>
			<div class="flex flex-wrap gap-4">
				<BaseButton variant="primary">Primary</BaseButton>
				<BaseButton variant="success">Success</BaseButton>
				<BaseButton variant="error">Error</BaseButton>
				<BaseButton variant="purple">Purple</BaseButton>
			</div>
		</section>

		<!-- Checkboxes -->
		<section class="mb-16">
			<h2 class="text-2xl font-semibold mb-4">Checkboxes</h2>
			<div class="flex flex-wrap gap-4">
				<BaseCheckbox v-model="checkbox.primary" variant="primary"
					>Primary</BaseCheckbox
				>
				<BaseCheckbox v-model="checkbox.success" variant="success"
					>Success</BaseCheckbox
				>
				<BaseCheckbox v-model="checkbox.error" variant="error"
					>Error</BaseCheckbox
				>
				<BaseCheckbox v-model="checkbox.purple" variant="purple"
					>Purple</BaseCheckbox
				>
			</div>
		</section>

		<section class="mb-16">
			<h2 class="text-2xl font-semibold mb-4">Radio buttons</h2>
			<div class="flex flex-wrap gap-4">
				<BaseRadio
					v-model="selected"
					name="group"
					value="option1"
					variant="purple"
				>
					Option 1
				</BaseRadio>

				<BaseRadio
					v-model="selected"
					name="group"
					value="option2"
					variant="success"
				>
					Option 2
				</BaseRadio>
			</div>
		</section>

		<!-- Paginations -->
		<section class="mb-16">
			<h2 class="text-2xl font-semibold mb-4">Paginations</h2>
			<div class="space-y-4 flex flex-col items-start">
				<BasePagination :pages="5" variant="primary" />
				<BasePagination :pages="5" variant="success" type="outline" />
				<BasePagination :pages="5" variant="error" type="soft" />
				<BasePagination :pages="5" variant="purple" type="filled" />
			</div>
		</section>

		<!-- Alerts -->
		<section class="mb-16">
			<h2 class="text-2xl font-semibold mb-4">Alerts</h2>
			<div class="space-y-4">
				<BaseAlert variant="info">Info alert</BaseAlert>
				<BaseAlert variant="error">Error alert</BaseAlert>
				<BaseAlert variant="success">Success alert</BaseAlert>
				<BaseAlert variant="dark">Dark alert</BaseAlert>
			</div>
		</section>

		<!-- Theme Test Block -->
		<section>
			<h2 class="text-2xl font-semibold mb-4">Dark Theme Aware Card</h2>
			<div
				class="p-6 rounded-lg shadow bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100"
			>
				This block adapts to light/dark mode. Try toggling the theme.
			</div>
		</section>
	</section>
</template>
<script setup>
	import { ref } from 'vue';

	import BaseButton from '~/components/elements/BaseButton.vue';
	import BaseAlert from '~/components/elements/BaseAlert.vue';
	import BasePagination from '~/components/elements/BasePagination.vue';
	import BaseCheckbox from '~/components/elements/BaseCheckbox.vue';
	import BaseRadio from '~/components/elements/BaseRadio.vue';

	const checkbox = reactive({
		primary: false,
		success: true,
		error: false,
		purple: true,
	});

	const selected = ref('option1');
</script>
