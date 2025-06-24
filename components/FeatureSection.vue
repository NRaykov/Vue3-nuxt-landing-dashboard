<template>
	<section class="bg-gray-50 dark:bg-gray-800 py-16">
		<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<!-- Badge -->
			<div class="flex items-center justify-center gap-2 mb-2">
				<span
					class="w-3 h-3 bg-purple-500 rounded-full uppercase"
				></span>
				<p
					class="text-sm font-medium text-gray-600 dark:text-gray-300 uppercase"
				>
					{{ heading.badge }}
				</p>
			</div>

			<!-- Title + Description -->
			<h2
				class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
			>
				{{ heading.title }}
			</h2>
			<p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
				{{ heading.description }}
			</p>

			<!-- Feature Cards -->
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				<div
					v-for="(feature, index) in features"
					:key="index"
					class="bg-white dark:bg-gray-700 rounded-lg shadow p-6"
				>
					<component
						:is="icons[feature.icon]"
						class="mx-auto h-10 w-10 text-purple-600 mb-4"
					/>
					<h3
						class="text-xl font-semibold text-gray-900 dark:text-white mb-2"
					>
						{{ feature.title }}
					</h3>
					<p class="text-gray-600 dark:text-gray-400 mb-4">
						{{ feature.description }}
					</p>
					<a
						:href="feature.link"
						class="text-purple-600 hover:underline inline-flex items-center gap-1"
					>
						Get Started
						<LucideArrowRight class="w-4 h-4" />
					</a>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	import { useFeatureSection } from '../stores/featureSection';
	import {
		Palette,
		Code2,
		LayoutDashboard,
		ArrowRight as LucideArrowRight,
	} from 'lucide-vue-next';

	const { heading, features } = useFeatureSection();

	const icons = {
		Palette,
		Code2,
		LayoutDashboard,
	};
</script>
