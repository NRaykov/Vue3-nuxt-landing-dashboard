<template>
	<section class="py-20 bg-gray-50 dark:bg-gray-800">
		<div class="text-center mb-12">
			<div class="flex items-center justify-center gap-2 mb-2">
				<span class="bg-purple-500 rounded-full w-3 h-3"></span>
				<span
					class="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase"
					>{{ heading.label }}</span
				>
			</div>
			<h2
				class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white"
			>
				{{ heading.title }}
			</h2>
			<p class="mt-2 text-gray-500 dark:text-gray-400">
				{{ heading.description }}
			</p>
		</div>

		<div class="grid md:grid-cols-4 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
			<div
				v-for="(member, index) in teamMembers"
				:key="index"
				class="group rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-700"
			>
				<div class="relative w-full h-64">
					<img
						:src="member.image"
						alt="Team Member"
						class="w-full h-full object-cover"
					/>
					<div
						class="absolute inset-0 bg-purple-600 bg-opacity-90 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
					>
						<a
							v-for="(icon, idx) in member.socials"
							:key="idx"
							:href="icon.href"
							class="text-white hover:text-purple-200"
							target="_blank"
							rel="noopener noreferrer"
						>
							<component
								:is="iconMap[icon.icon]"
								class="w-5 h-5"
							/>
						</a>
					</div>
				</div>

				<div class="text-center py-4">
					<h4
						class="text-lg font-semibold text-gray-900 dark:text-white"
					>
						{{ member.name }}
					</h4>
					<p class="text-sm text-gray-500 dark:text-gray-400">
						{{ member.role }}
					</p>
				</div>
			</div>
		</div>
	</section>
</template>
<script setup>
	import {
		FacebookIcon,
		TwitterIcon,
		InstagramIcon,
		LinkedinIcon,
	} from 'lucide-vue-next';

	// Import the store
	import { useTeamSection } from '~/stores/teamSection';

	// Icon mapping as strings
	const iconMap = {
		FacebookIcon,
		TwitterIcon,
		InstagramIcon,
		LinkedinIcon,
	};

	// 🧠 Initialize the store
	const teamStore = useTeamSection();

	// 🪄 Destructure data from store
	const heading = teamStore.heading;
	const teamMembers = teamStore.members;
</script>

<style scoped>
	/* Optional smoother fade */
	.group:hover .group-hover\:opacity-100 {
		opacity: 1 !important;
	}
</style>
