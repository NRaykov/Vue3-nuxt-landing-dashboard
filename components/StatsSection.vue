<template>
	<section class="py-20 bg-white dark:bg-gray-800">
		<div
			class="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
		>
			<div v-for="(stat, index) in stats" :key="index">
				<component
					:is="icons[stat.icon]"
					class="mx-auto h-8 w-8 text-purple-600 mb-4"
				/>
				<h3 class="text-4xl font-bold text-gray-900 dark:text-white">
					{{ stat.value }}
				</h3>
				<p
					class="text-gray-500 dark:text-gray-400 mt-2 whitespace-pre-line"
				>
					{{ stat.description }}
				</p>
			</div>
		</div>
	</section>
</template>

<script setup>
	import { useStatsSection } from '../stores/statsSection';
	import { Star, UserRound, Briefcase } from 'lucide-vue-next';

	const { stats } = useStatsSection();

	const icons = {
		Star,
		UserRound,
		Briefcase,
	};
</script>
