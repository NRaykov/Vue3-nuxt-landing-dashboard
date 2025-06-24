import { defineStore } from 'pinia';

export const useTeamSection = defineStore('teamSection', {
	state: () => ({
		heading: {
			label: 'Team',
			title: 'Experienced & Professional Team',
			description:
				'Here you can check Demos we created you can easily use it. Its quite easy to Create your own dream website & dashboard in No-time.',
		},
		members: [
			{
				name: 'Michael Doe',
				role: 'Property Specialist',
				image: 'https://landingpro-nuxt-free.netlify.app/images/team/team-1.jpg',
				socials: [
					{ href: '#', icon: 'FacebookIcon' },
					{ href: '#', icon: 'TwitterIcon' },
					{ href: '#', icon: 'InstagramIcon' },
					{ href: '#', icon: 'LinkedinIcon' },
				],
			},
			{
				name: 'Michael Doe',
				role: 'Property Specialist',
				image: 'https://landingpro-nuxt-free.netlify.app/images/team/team-2.jpg',
				socials: [
					{ href: '#', icon: 'FacebookIcon' },
					{ href: '#', icon: 'TwitterIcon' },
					{ href: '#', icon: 'InstagramIcon' },
					{ href: '#', icon: 'LinkedinIcon' },
				],
			},
			{
				name: 'Michael Doe',
				role: 'Property Specialist',
				image: 'https://landingpro-nuxt-free.netlify.app/images/team/team-3.jpg',
				socials: [
					{ href: '#', icon: 'FacebookIcon' },
					{ href: '#', icon: 'TwitterIcon' },
					{ href: '#', icon: 'InstagramIcon' },
					{ href: '#', icon: 'LinkedinIcon' },
				],
			},
			{
				name: 'Michael Doe',
				role: 'Property Specialist',
				image: 'https://landingpro-nuxt-free.netlify.app/images/team/team-4.jpg',
				socials: [
					{ href: '#', icon: 'FacebookIcon' },
					{ href: '#', icon: 'TwitterIcon' },
					{ href: '#', icon: 'InstagramIcon' },
					{ href: '#', icon: 'LinkedinIcon' },
				],
			},
		],
	}),
});
