<template>
	<section class="relative h-[90vh] overflow-hidden">
		<div
			v-for="(slide, index) in slides"
			:key="index"
			class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
			:class="{
				'opacity-0': index !== activeIndex,
				'opacity-100': index === activeIndex,
			}"
		>
			<!-- 🎥 Background Video -->
			<video
				autoplay
				muted
				loop
				playsinline
				class="w-full h-full object-cover"
			>
				<source :src="slide.video" type="video/mp4" />
			</video>

			<!-- ✨ Overlay Content -->
			<div
				class="absolute inset-0 bg-black bg-opacity-20 flex flex-col items-center justify-center text-white text-center px-4"
			>
				<h1
					class="text-4xl md:text-6xl font-bold max-w-5xl mx-auto text-center"
				>
					{{ slide.title }}
				</h1>
				<p class="mt-4 text-lg max-w-2xl">{{ slide.description }}</p>
				<button
					class="mt-6 px-6 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200 transition"
				>
					{{ slide.buttonText }}
				</button>
			</div>
		</div>
	</section>
</template>

<script setup>
	const slides = ref([
		{
			title: 'Amazingly flexible, customizable and easy to use',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			buttonText: 'Explore',
			video: '/videos/video_slide.mp4',
		},
		{
			title: 'Amazingly flexible, customizable and easy to use',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			buttonText: 'Explore',
			video: '/videos/video_slide2.mp4',
		},
	]);

	const activeIndex = ref(0);

	onMounted(() => {
		setInterval(() => {
			activeIndex.value = (activeIndex.value + 1) % slides.value.length;
		}, 8500);
	});
</script>
