<template>
	<transition name="slide">
		<div
			v-if="isOpen"
			class="fixed inset-0 bg-black bg-opacity-40 z-40"
			@click.self="close"
		>
			<div
				class="w-64 bg-white dark:bg-gray-900 h-full p-6 shadow-md z-50"
			>
				<button class="mb-4" @click="close">✖</button>
				<nav class="flex flex-col space-y-4">
					<NuxtLink to="/" @click="close">Home</NuxtLink>
					<NuxtLink to="/about" @click="close">About</NuxtLink>
					<NuxtLink to="/pricing" @click="close">Pricing</NuxtLink>
					<NuxtLink to="/blog" @click="close">Blog</NuxtLink>
					<NuxtLink to="/contact" @click="close">Contact</NuxtLink>
					<NuxtLink to="/ui" @click="close">Elements</NuxtLink>
				</nav>
			</div>
		</div>
	</transition>
</template>

<script setup>
	const isOpen = defineModel('isOpen', { type: Boolean, required: true });

	const close = () => {
		isOpen.value = false;
	};
</script>

<style scoped>
	.slide-enter-active,
	.slide-leave-active {
		transition: all 0.3s ease;
	}
	.slide-enter-from {
		transform: translateX(-100%);
	}
	.slide-enter-to {
		transform: translateX(0);
	}
	.slide-leave-from {
		transform: translateX(0);
	}
	.slide-leave-to {
		transform: translateX(-100%);
	}
</style>
