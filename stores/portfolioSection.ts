import { defineStore } from 'pinia';

export const usePortfolioSection = defineStore('portfolioSection', {
	state: () => ({
		heading: {
			label: 'Portfolio',
			title: 'Our Portfolio work with three column',
			description:
				"Here you can check Demos we created you can easily use it. It's quite easy to Create your own dream website & dashboard in no-time.",
		},
		items: [
			{
				title: 'White Theming Background',
				category: '3D Render',
				image: 'https://landingpro-nuxt-free.netlify.app/images/portfolio/portfolio-1.jpg',
			},
			{
				title: 'The Heritage',
				category: 'Illustration',
				image: 'https://landingpro-nuxt-free.netlify.app/images/portfolio/portfolio-2.png',
			},
			{
				title: 'Belforte Fall',
				category: 'Photography',
				image: 'https://landingpro-nuxt-free.netlify.app/images/portfolio/portfolio-3.jpg',
			},
			{
				title: 'Ipsum neque libero',
				category: 'Architecture',
				image: 'https://landingpro-nuxt-free.netlify.app/images/portfolio/portfolio-4.jpg',
			},
			{
				title: 'White Theming',
				category: 'Retro Design',
				image: 'https://landingpro-nuxt-free.netlify.app/images/portfolio/portfolio-5.jpg',
			},
			{
				title: 'luctus neque purus',
				category: 'Interior Design',
				image: 'https://landingpro-nuxt-free.netlify.app/images/portfolio/portfolio-6.jpg',
			},
		],
	}),
});
