<template>
	<section class="py-20 bg-gray-50 dark:bg-gray-800">
		<div class="text-center mb-12">
			<div class="flex justify-center items-center space-x-2">
				<span class="w-3 h-3 bg-purple-500 rounded-full"></span>
				<span
					class="text-sm font-medium text-gray-600 dark:text-gray-300 uppercase"
					>{{ heading.badge }}</span
				>
			</div>
			<h2
				class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mt-4"
			>
				{{ heading.title }}
			</h2>
			<p class="text-gray-500 dark:text-gray-400 mt-2 max-w-xl mx-auto">
				{{ heading.description }}
			</p>
		</div>

		<div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
			<div
				v-for="(post, index) in blogPosts"
				:key="index"
				class="group rounded-t-xl bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow"
			>
				<template v-if="index < 3">
					<NuxtLink
						:to="`/blog/${post.id}`"
						class="block hover:shadow-lg transition"
					>
						<img
							:src="post.image"
							alt=""
							class="transition-transform duration-500 ease-in-out group-hover:scale-105 w-full object-cover"
						/>
						<div class="p-6">
							<div
								class="text-gray-400 text-sm mb-2 flex justify-between items-center"
							>
								<span
									>{{ post.date }} •
									{{ post.views }} Views</span
								>
								<span
									class="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-600"
									>{{ post.tag }}</span
								>
							</div>
							<h3
								class="text-lg font-semibold text-gray-800 dark:text-white mb-2"
							>
								{{ post.title }}
							</h3>
							<p class="text-gray-500 dark:text-gray-400 text-sm">
								{{ post.excerpt }}
							</p>
							<p class="mt-4 text-sm text-purple-600 font-medium">
								By
								<span class="underline">{{ post.author }}</span>
							</p>
						</div>
					</NuxtLink>
				</template>
			</div>
		</div>
	</section>
</template>
<script setup lang="ts">
	import { useBlogPosts } from '../stores/blogPosts';

	const { heading, blogPosts } = useBlogPosts();
</script>
