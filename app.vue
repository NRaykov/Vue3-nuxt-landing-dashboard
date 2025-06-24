<template>
	<div class="dark:text-gray-100 dark:bg-gray-900 min-h-screen bg-gray-50">
		<NuxtLayout>
			<NavBar v-if="!isAdminRoute" />
			<NuxtPage />
			<Footer v-if="!isAdminRoute" />
		</NuxtLayout>
	</div>
</template>

<script setup>
	import { useRoute } from 'vue-router';
	import { computed } from 'vue';
	import NavBar from '~/components/NavBar.vue';
	import Footer from '~/components/Footer.vue';

	const route = useRoute();

	const isAdminRoute = computed(() => route.path.startsWith('/admin'));

	useHead({
		link: [
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap',
			},
		],
	});
</script>
