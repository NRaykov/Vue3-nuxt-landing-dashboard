<template>
	<section class="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
		<div
			class="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-12"
		>
			<div class="md:w-1/2">
				<!-- Label -->
				<div class="flex items-center mb-6">
					<span
						class="w-3 h-3 bg-purple-500 rounded-full mr-2"
					></span>
					<h6
						class="text-sm font-semibold text-gray-800 dark:text-white uppercase tracking-wide"
					>
						{{ hero.label }}
					</h6>
				</div>

				<h1
					class="text-4xl md:text-5xl font-bold my-4 whitespace-pre-line"
				>
					{{ hero.title }}
				</h1>

				<p class="text-gray-600 dark:text-gray-300 my-4">
					{{ hero.description }}
				</p>

				<BaseButton type="button" variant="purple">
					{{ hero.buttonText }}
				</BaseButton>
			</div>

			<div class="md:w-1/2">
				<div class="relative text-center md:text-left">
					<!-- Top-right shape -->
					<img
						:src="hero.topShapeUrl"
						alt="shape"
						class="absolute top-0 right-0 -mt-10 -mr-16 w-auto"
					/>

					<!-- Banner image with z-index and rounded corners -->
					<div class="relative z-[1] rounded-md overflow-hidden">
						<img
							:src="hero.imageUrl"
							alt="banner"
							class="rounded-md w-full"
						/>
					</div>

					<!-- Bottom-left shape -->
					<img
						:src="hero.bottomShapeUrl"
						alt="shape"
						class="absolute bottom-0 left-0 -mb-10 -ml-12 w-auto"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { useHeroSection } from '../stores/heroSection';
	import BaseButton from './elements/BaseButton.vue';

	const hero = useHeroSection();
</script>
