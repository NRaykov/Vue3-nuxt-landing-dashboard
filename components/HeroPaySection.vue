<template>
	<section
		class="py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
	>
		<div
			class="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center px-4 gap-8"
		>
			<div class="relative w-full max-w-md mx-auto">
				<img
					:src="state.image.phone"
					alt="Phone"
					class="relative z-10"
				/>
			</div>

			<div class="max-w-lg text-center lg:text-left">
				<div
					class="flex items-center justify-center lg:justify-start gap-2 mb-2"
				>
					<span class="w-2 h-2 bg-purple-500 rounded-full"></span>
					<p
						class="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase"
					>
						{{ state.label }}
					</p>
				</div>
				<h2
					class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
				>
					{{ state.title }}
				</h2>
				<p class="my-4 text-gray-600 dark:text-gray-400">
					{{ state.description }}
				</p>
				<BaseButton type="button" variant="purple">
					{{ state.buttonText }}
				</BaseButton>
			</div>
		</div>
	</section>
</template>

<script setup>
	import { usePayHeroSection } from '../stores/heroPaySection';
	import BaseButton from './elements/BaseButton.vue';
	const state = usePayHeroSection();
</script>
