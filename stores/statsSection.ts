// stores/statsSection.ts
import { defineStore } from 'pinia';

export const useStatsSection = defineStore('statsSection', {
	state: () => ({
		stats: [
			{
				icon: 'Star',
				value: '4.86',
				description:
					'Out of 5 stars from 3896 reviews\non Google platform',
			},
			{
				icon: 'UserRound',
				value: '364',
				description: 'Client testimonials received\nin year 2023',
			},
			{
				icon: 'Briefcase',
				value: '45M+',
				description:
					'Revenue generated through\nnew projects & marketing',
			},
		],
	}),
});
