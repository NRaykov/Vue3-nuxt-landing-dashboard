<template>
	<footer
		class="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border-t border-gray-100 dark:border-gray-700 pt-12 pb-6"
	>
		<div class="max-w-7xl mx-auto px-4">
			<div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
				<!-- Address -->
				<div>
					<h4
						class="font-semibold text-gray-900 dark:text-white mb-2"
					>
						Address
					</h4>
					<p class="text-sm">
						71 Amsteroum Avenue Cronish Night,<br />
						NY 35098
					</p>
				</div>

				<!-- Phone -->
				<div>
					<h4
						class="font-semibold text-gray-900 dark:text-white mb-2"
					>
						Phone
					</h4>
					<p class="text-sm">Reception : +205 123 4567</p>
					<p class="text-sm">Office : +207 235 7890</p>
				</div>

				<!-- Email -->
				<div>
					<h4
						class="font-semibold text-gray-900 dark:text-white mb-2"
					>
						Email
					</h4>
					<p class="text-sm">Office : safeguard.bulgaria@gmail.com</p>
					<p class="text-sm">Site : www.safeguardbg.com</p>
				</div>

				<!-- Social -->
				<div>
					<h4
						class="font-semibold text-gray-900 dark:text-white mb-2"
					>
						Social
					</h4>
					<div class="flex gap-3 mt-2">
						<a
							href="#"
							class="bg-purple-50 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-gray-700 p-2 rounded-full text-purple-600 dark:text-purple-400"
						>
							<LucideFacebook class="w-4 h-4" />
						</a>
						<a
							href="#"
							class="bg-purple-50 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-gray-700 p-2 rounded-full text-purple-600 dark:text-purple-400"
						>
							<LucideTwitter class="w-4 h-4" />
						</a>
						<a
							href="#"
							class="bg-purple-50 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-gray-700 p-2 rounded-full text-purple-600 dark:text-purple-400"
						>
							<LucideGithub class="w-4 h-4" />
						</a>
						<a
							href="#"
							class="bg-purple-50 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-gray-700 p-2 rounded-full text-purple-600 dark:text-purple-400"
						>
							<LucideYoutube class="w-4 h-4" />
						</a>
						<a
							href="#"
							class="bg-purple-50 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-gray-700 p-2 rounded-full text-purple-600 dark:text-purple-400"
						>
							<LucideInstagram class="w-4 h-4" />
						</a>
					</div>
				</div>
			</div>

			<div
				class="border-t border-gray-100 dark:border-gray-700 pt-4 flex flex-col md:flex-row justify-between text-sm"
			>
				<p>All Rights Reserved by Safeguard Bulgaria</p>
				<div class="flex gap-6 mt-2 md:mt-0">
					<a href="#" class="hover:underline">Terms of Use</a>
					<a href="#" class="hover:underline">Legal Disclaimer</a>
					<a href="#" class="hover:underline">Privacy Policy</a>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup>
	import {
		Facebook as LucideFacebook,
		Twitter as LucideTwitter,
		Github as LucideGithub,
		Youtube as LucideYoutube,
		Instagram as LucideInstagram,
	} from 'lucide-vue-next';
</script>
