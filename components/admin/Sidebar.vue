<template>
	<aside class="w-64 h-screen bg-white dark:bg-gray-900 shadow-md">
		<nav class="p-4">
			<h2 class="text-xl font-bold mb-4">Admin Panel</h2>
			<ul class="space-y-2">
				<!-- Dashboard Dropdown -->
				<li>
					<button
						class="flex items-center w-full p-2 text-left hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
						@click="toggleDashboard"
					>
						<LayoutDashboard class="w-5 h-5 mr-2" />
						<span>Dashboard</span>
						<ChevronDown
							class="w-4 h-4 ml-auto"
							:class="{ 'rotate-180': isDashboardOpen }"
						/>
					</button>
					<ul v-if="isDashboardOpen" class="pl-8 mt-2 space-y-1">
						<li class="my-3">
							<NuxtLink
								to="/admin/analytics"
								class="flex items-center hover:underline"
							>
								<Activity class="w-4 h-4 mr-2" /> Analytics
							</NuxtLink>
						</li>
						<li class="my-3">
							<NuxtLink
								to="/admin/"
								class="flex items-center hover:underline"
							>
								<BarChart class="w-4 h-4 mr-2" /> Overview
							</NuxtLink>
						</li>
						<li class="my-3">
							<NuxtLink
								to="/admin/"
								class="flex items-center hover:underline"
							>
								<FileText class="w-4 h-4 mr-2" /> Reports
							</NuxtLink>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	</aside>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import {
		LayoutDashboard,
		ChevronDown,
		BarChart,
		Activity,
		FileText,
	} from 'lucide-vue-next';

	const isDashboardOpen = ref(true);

	function toggleDashboard() {
		isDashboardOpen.value = !isDashboardOpen.value;
	}
</script>
