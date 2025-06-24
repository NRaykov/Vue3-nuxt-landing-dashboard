<template>
	<section class="max-w-4xl mx-auto py-12 px-4">
		<NuxtLink
			to="/"
			class="text-purple-600 hover:underline mb-4 inline-block text-sm"
			>← Back to Home</NuxtLink
		>

		<h1 class="text-4xl font-bold text-gray-800 dark:text-white my-5">
			{{ blog?.title }}
		</h1>
		<div class="text-sm text-gray-500 mb-4">
			{{ blog?.date }} • {{ blog?.views.toLocaleString() }} views •
			<span
				class="inline-block bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs"
			>
				{{ blog?.tag }}
			</span>
		</div>

		<img
			:src="blog?.image"
			alt="Blog image"
			class="rounded-lg mb-8 w-full"
		/>

		<article class="prose max-w-none" v-html="blog?.content" />

		<div class="mt-8 text-sm text-gray-600">
			Written by
			<a
				:href="blog?.authorUrl"
				class="text-purple-600 hover:underline"
				>{{ blog?.author }}</a
			>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { useRoute, useRouter } from 'vue-router';
	import { useBlogPosts } from '~/stores/blogPosts';

	const route = useRoute();
	const router = useRouter();
	const blogStore = useBlogPosts();

	const blog = blogStore.blogPosts.find(
		(item) => item.id === Number(route.params.id),
	);

	if (!blog) {
		router.replace('/404'); // optional: redirect to 404 if not found
	}
</script>
