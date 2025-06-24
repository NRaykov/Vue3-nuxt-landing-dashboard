// stores/featureSection.ts
import { defineStore } from 'pinia';

export const useFeatureSection = defineStore('featureSection', {
	state: () => ({
		heading: {
			badge: 'Feature',
			title: 'Awesome with Extra Ordinary Flexibility',
			description:
				'You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time',
		},
		features: [
			{
				icon: 'Palette',
				title: 'Beautiful designs premade',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
				link: '#',
			},
			{
				icon: 'Code2',
				title: 'Coded with much care & notes',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
				link: '#',
			},
			{
				icon: 'LayoutDashboard',
				title: 'Amazing demos included',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
				link: '#',
			},
		],
	}),
});
