// ~/stores/testimonialSection.ts
import { defineStore } from 'pinia';

export const useTestimonialSection = defineStore('testimonialSection', {
	state: () => ({
		heading: {
			label: 'Testimonials',
			title: 'Check what our Customers are Saying',
			description:
				'Here you can check Demos we created you can easily use it. Its quite easy to Create your own dream website & dashboard in No-time.',
		},
		testimonials: [
			{
				name: 'MICHELLE ANDERSON',
				image: 'https://landingpro-nuxt-free.netlify.app/images/blog/cyrus.jpg',
				message:
					'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras venene veliel vestibulum.',
				rating: 5,
			},
			{
				name: 'MARK MESTY',
				image: 'https://landingpro-nuxt-free.netlify.app/images/blog/kriss.jpg',
				message:
					'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras venene veliel vestibulum.',
				rating: 4,
			},
			{
				name: 'LIMPSY ADAM',
				image: 'https://landingpro-nuxt-free.netlify.app/images/blog/sara.jpg',
				message:
					'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras venene veliel vestibulum.',
				rating: 5,
			},
		],
	}),
});
