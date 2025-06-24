<template>
	<section class="bg-purple-50 dark:bg-gray-900 py-16">
		<div class="text-center max-w-2xl mx-auto mb-12">
			<div class="flex justify-center items-center gap-2">
				<span class="h-2 w-2 rounded-full bg-purple-500"></span>
				<p
					class="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase"
				>
					{{ heading.label }}
				</p>
			</div>
			<h2 class="text-3xl font-bold text-gray-900 dark:text-white mt-2">
				{{ heading.title }}
			</h2>
			<p class="text-gray-600 dark:text-gray-400 mt-2">
				{{ heading.description }}
			</p>
		</div>

		<div
			class="grid md:grid-cols-3 sm:grid-cols-1 gap-6 max-w-6xl mx-auto px-4"
		>
			<div
				v-for="(testimonial, index) in testimonials"
				:key="index"
				class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center"
			>
				<p class="text-gray-700 dark:text-gray-300 mb-4">
					“{{ testimonial.message }}”
				</p>

				<div class="flex items-center justify-center gap-4 mt-6">
					<img
						:src="testimonial.image"
						alt="Customer"
						class="w-12 h-12 rounded-full object-cover"
					/>
					<div class="text-left">
						<p class="font-semibold text-gray-900 dark:text-white">
							{{ testimonial.name }}
						</p>
						<div class="text-red-500 flex">
							<template v-for="i in 5">
								<StarIcon
									v-if="i <= testimonial.rating"
									:key="'full-' + i + '-' + index"
									class="w-4 h-4 fill-current"
								/>
								<StarIcon
									v-else
									:key="'empty-' + i + '-' + index"
									class="w-4 h-4 text-gray-300 dark:text-gray-600"
								/>
							</template>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	import { Star as StarIcon } from 'lucide-vue-next';
	import { useTestimonialSection } from '~/stores/testimonialSection';

	const store = useTestimonialSection();
	const heading = store.heading;
	const testimonials = store.testimonials;
</script>
