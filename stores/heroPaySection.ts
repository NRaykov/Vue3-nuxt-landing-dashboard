import { defineStore } from 'pinia';

export const usePayHeroSection = defineStore('payHeroSection', {
	state: () => ({
		label: 'Creating Brands',
		title: 'Build amazing websites and landing pages with ease',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
		buttonText: 'Get Started',
		image: {
			phone: 'https://landingpro-nuxt-free.netlify.app/images/corporate/build-everything.png',
		},
		paymentTotal: '$978.81',
	}),
});
