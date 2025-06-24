<template>
	<nav
		class="bg-white shadow-md sticky top-0 z-50 dark:text-gray-100 dark:bg-gray-900"
	>
		<div
			class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center"
		>
			<h1 class="text-xl font-bold text-gray-800 dark:text-gray-100">
				Safeguard Web
			</h1>
			<ul
				class="hidden md:flex space-x-6 text-gray-500 dark:text-gray-300"
			>
				<li>
					<NuxtLink to="/" class="hover:text-primary">Home</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/about" class="hover:text-primary"
						>About</NuxtLink
					>
				</li>
				<li>
					<NuxtLink to="/pricing" class="hover:text-primary"
						>Pricing</NuxtLink
					>
				</li>
				<li>
					<NuxtLink to="/blog" class="hover:text-primary"
						>Blog</NuxtLink
					>
				</li>
				<li>
					<NuxtLink to="/contact" class="hover:text-primary"
						>Contact</NuxtLink
					>
				</li>
				<li>
					<NuxtLink to="/ui" class="hover:text-primary"
						>Elements</NuxtLink
					>
				</li>
				<li>
					<NuxtLink to="/admin" class="hover:text-primary"
						>Dashboard</NuxtLink
					>
				</li>
			</ul>
			<button
				class="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
			>
				<!-- optional: hamburger icon here -->
			</button>

			<div>
				<button
					@click="theme.toggleTheme"
					class="ml-2 px-3 py-1 text-sm border rounded-md"
				>
					{{ theme.isDark ? '🌙 Dark' : '☀️ Light' }}
				</button>
				<button
					@click="toggleHeroSection"
					class="ml-2 px-3 py-1 text-sm border rounded-md"
				>
					{{ !showSliderHero ? 'Video Slide' : 'Static Header' }}
				</button>
			</div>
			<!-- Mobile menu -->
			<button class="md:hidden" @click="isSidebarOpen = true">☰</button>

			<Sidebar v-model:isOpen="isSidebarOpen" />
		</div>
	</nav>
</template>

<script setup>
	import { useTheme } from '../stores/useTheme';
	import Sidebar from './Sidebar.vue';

	const theme = useTheme();
	const showSliderHero = useState('showSliderHero', () => false);
	const isSidebarOpen = ref(false);

	function toggleHeroSection() {
		showSliderHero.value = !showSliderHero.value;
	}
</script>
