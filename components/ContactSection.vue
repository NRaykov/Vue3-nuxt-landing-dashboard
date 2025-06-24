<template>
	<section class="py-20 bg-white dark:bg-gray-800" id="contact">
		<div class="max-w-7xl mx-auto px-4">
			<h2
				class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center"
			>
				Contact Us
			</h2>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
				<!-- Form -->
				<form
					@submit.prevent="handleSubmit"
					class="md:col-span-2 space-y-6"
				>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
						<input
							v-model="name"
							type="text"
							placeholder="Name"
							class="w-full px-4 py-3 rounded-md border dark:bg-gray-700 dark:border-gray-700 dark:text-white"
						/>
						<input
							v-model="email"
							type="email"
							placeholder="Email"
							class="w-full px-4 py-3 rounded-md border dark:bg-gray-700 dark:border-gray-700 dark:text-white"
						/>
					</div>
					<textarea
						v-model="message"
						rows="5"
						placeholder="Message"
						class="w-full px-4 py-3 rounded-md border dark:bg-gray-700 dark:border-gray-700 dark:text-white"
					></textarea>

					<BaseButton type="submit" variant="purple">
						Send Message
					</BaseButton>

					<p v-if="isSent" class="text-green-600 font-semibold">
						Message sent successfully!
					</p>
					<p v-if="error" class="text-red-600">{{ error }}</p>
				</form>

				<!-- Info Card -->
				<div class="bg-purple-600 text-white rounded-md p-6 space-y-4">
					<h3 class="text-xl font-semibold">Safeguard Web</h3>
					<p>251 546 9442<br />safeguard.bulgaria@gmail.com</p>
					<p>601 Sherwood Ave.<br />San Bernardino, CA 92404</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	import { ref } from 'vue';
	import BaseButton from './elements/BaseButton.vue';

	const name = ref('');
	const email = ref('');
	const message = ref('');
	const isSent = ref(false);
	const error = ref(null);

	const handleSubmit = async () => {
		error.value = null;

		if (!name.value || !email.value || !message.value) {
			error.value = 'Please fill in all fields.';
			return;
		}

		try {
			await $fetch('/api/contact', {
				method: 'POST',
				body: {
					name: name.value,
					email: email.value,
					message: message.value,
				},
			});
			isSent.value = true;
			name.value = '';
			email.value = '';
			message.value = '';
		} catch (err) {
			error.value = 'Something went wrong. Try again later.';
		}
	};
</script>
