// stores/heroSection.ts
import { defineStore } from 'pinia';

export const useHeroSection = defineStore('heroSection', {
	state: () => ({
		label: 'build everything',
		title: `Amazingly flexible,\ncustomizable and\neasy to use`,
		description: 'Build high-quality landing pages using LandingPro.',
		buttonText: 'Get Started',
		imageUrl: '/images/hero.png',
		topShapeUrl:
			'https://landingpro-nuxt-free.netlify.app/images/shape/shapeline-2.png',
		bottomShapeUrl:
			'https://landingpro-nuxt-free.netlify.app/images/shape/circle-line-3.png',
	}),
});
