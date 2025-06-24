<template>
	<section
		class="max-w-4xl mx-auto py-20 px-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
	>
		<div class="space-y-10">
			<div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
				<div
					v-for="(post, index) in blogPosts"
					:key="index"
					class="group rounded-t-xl bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow"
				>
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
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	import { useBlogPosts } from '../stores/blogPosts';
	const { blogPosts } = useBlogPosts();
</script>
