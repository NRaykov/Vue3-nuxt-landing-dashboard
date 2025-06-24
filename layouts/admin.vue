<template>
	<div class="min-h-screen bg-gray-100 dark:bg-gray-900 flex">
		<Sidebar />
		<main class="flex-1 p-6 text-gray-900 dark:text-gray-100">
			<slot />
		</main>
	</div>
</template>

<script setup lang="ts">
	import Sidebar from '~/components/admin/Sidebar.vue';
</script>
