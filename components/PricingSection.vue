<template>
	<section class="bg-white dark:bg-gray-900 py-16">
		<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
			<!-- Heading -->
			<div class="flex items-center justify-center gap-2 mb-2">
				<span class="w-3 h-3 bg-purple-500 rounded-full"></span>
				<p
					class="text-sm font-medium text-gray-600 dark:text-gray-300 uppercase"
				>
					{{ heading.badge }}
				</p>
			</div>
			<h2
				class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center"
			>
				{{ heading.title }}
			</h2>
			<p
				class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 text-center"
			>
				{{ heading.description }}
			</p>

			<!-- Pricing Plans -->
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div
					v-for="(plan, i) in plans"
					:key="i"
					:class="[
						'rounded-xl border dark:border-gray-700 p-6 flex flex-col items-left relative',
						plan.popular ? 'ring-2 ring-purple-500' : '',
					]"
				>
					<p
						class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase"
					>
						{{ plan.title }}
					</p>

					<img :src="plan.image" alt="" class="w-28 h-28 my-5" />

					<div class="flex items-end gap-1 mb-4">
						<span
							class="text-3xl font-bold text-gray-900 dark:text-white"
						>
							{{ plan.price > 0 ? `$${plan.price}` : 'Free' }}
						</span>
						<span
							v-if="plan.price > 0"
							class="text-gray-500 dark:text-gray-400"
							>/mo</span
						>
					</div>

					<ul
						class="text-gray-700 dark:text-gray-300 space-y-2 text-left w-full mb-6 text-sm"
					>
						<li
							v-for="(feature, idx) in plan.features"
							:key="idx"
							class="flex items-center gap-2"
						>
							<span
								:class="
									feature.included
										? 'text-purple-500'
										: 'text-red-500'
								"
							>
								{{ feature.included ? '✔️' : '❌' }}
							</span>
							{{ feature.label }}
						</li>
					</ul>

					<BaseButton
						type="button"
						variant="purple"
						class="mt-auto w-full py-2"
					>
						Choose {{ plan.title }}
					</BaseButton>

					<span
						v-if="plan.popular"
						class="absolute -top-4 right-4 bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded-full font-bold shadow"
					>
						POPULAR
					</span>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { usePricingSection } from '../stores/pricingSection';
	import BaseButton from './elements/BaseButton.vue';

	const { heading, plans } = usePricingSection();
</script>

<style scoped>
	@media (min-width: 768px) {
		.ring-2 {
			position: relative;
		}
	}
</style>
