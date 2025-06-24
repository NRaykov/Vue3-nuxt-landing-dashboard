<template>
	<section class="py-20 bg-white dark:bg-gray-900">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-12">
				<div class="flex items-center justify-center gap-2 mb-2">
					<span class="w-3 h-3 bg-purple-500 rounded-full"></span>
					<p
						class="text-sm font-medium text-gray-600 dark:text-gray-300 uppercase"
					>
						{{ heading.label }}
					</p>
				</div>
				<h2
					class="mt-4 text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white"
				>
					{{ heading.title }}
				</h2>
				<p
					class="mt-3 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400"
				>
					{{ heading.description }}
				</p>
			</div>

			<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
				<div v-for="(item, index) in items" :key="index" class="group">
					<div class="overflow-hidden rounded-lg">
						<img
							:src="item.image"
							:alt="item.title"
							class="w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
						/>
					</div>
					<h3
						class="mt-4 text-lg font-semibold text-gray-900 dark:text-white"
					>
						{{ item.title }}
					</h3>
					<p class="text-sm text-gray-500 dark:text-gray-400">
						{{ item.category }}
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { usePortfolioSection } from '../stores/portfolioSection';

	const { heading, items } = usePortfolioSection();
</script>
