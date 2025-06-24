import { defineStore } from 'pinia';

export const usePricingSection = defineStore('pricingSection', {
	state: () => ({
		heading: {
			badge: 'Pricing Plan',
			title: 'Simple Pricing to make your Work Effective',
			description: 'We offer 100% satisfaction and Money back Guarantee',
		},
		plans: [
			{
				title: 'Silver',
				price: 0,
				image: 'https://landingpro-nuxt-free.netlify.app/images/corporate/silver.png',
				popular: false,
				features: [
					{ label: '3 Members', included: true },
					{ label: 'Single Device', included: true },
					{ label: '50GB Storage', included: false },
					{ label: 'Monthly Backups', included: false },
					{ label: 'Permissions & workflows', included: false },
				],
			},
			{
				title: 'Bronze',
				price: 10.99,
				image: 'https://landingpro-nuxt-free.netlify.app/images/corporate/bronze.png',
				popular: true,
				features: [
					{ label: '5 Members', included: true },
					{ label: 'Multiple Device', included: true },
					{ label: '80GB Storage', included: true },
					{ label: 'Monthly Backups', included: false },
					{ label: 'Permissions & workflows', included: false },
				],
			},
			{
				title: 'Gold',
				price: 22.99,
				image: 'https://landingpro-nuxt-free.netlify.app/images/corporate/gold.png',
				popular: false,
				features: [
					{ label: '15 Members', included: true },
					{ label: 'Multiple Device', included: true },
					{ label: '150GB Storage', included: true },
					{ label: 'Monthly Backups', included: true },
					{ label: 'Permissions & workflows', included: true },
				],
			},
		],
	}),
});
