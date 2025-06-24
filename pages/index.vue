<template>
	<section class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
		<!-- Hero Section -->
		<HeroSection v-if="showSliderHero" />

		<!-- Hero Slider Section -->
		<HeroSliderSection v-else />

		<!-- Stats Section -->
		<StatsSection />

		<!-- Hero Pay Section -->
		<HeroPaySection />

		<!-- Feature Section with Image (Phone layout) -->
		<FeatureSection />

		<!-- Pricing Section -->
		<PricingSection />

		<!-- Blog Section -->
		<BlogSection />

		<!-- Portfolio Section -->
		<PortfolioSection />

		<!-- Team Section -->
		<TeamSection />

		<!-- Testimonial Section -->
		<TestimonialSection />

		<!-- Contact Section -->
		<ContactSection />
	</section>
</template>
<script setup>
	import HeroSection from '~/components/HeroSection.vue';
	import HeroSliderSection from '~/components/HeroSliderSection.vue';
	import FeatureSection from '~/components/FeatureSection.vue';
	import StatsSection from '~/components/StatsSection.vue';
	import PricingSection from '~/components/PricingSection.vue';
	import BlogSection from '~/components/BlogSection.vue';
	import PortfolioSection from '~/components/PortfolioSection.vue';
	import TeamSection from '~/components/TeamSection.vue';
	import TestimonialSection from '~/components/TestimonialSection.vue';
	import ContactSection from '~/components/ContactSection.vue';
	import HeroPaySection from '~/components/HeroPaySection.vue';

	const showSliderHero = useState('showSliderHero');
</script>
