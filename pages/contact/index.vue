<template>
	<section
		class="max-w-xl mx-auto px-6 py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
	>
		<h1
			class="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white"
		>
			Contact Us
		</h1>

		<form
			class="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md dark:shadow-none border dark:border-gray-700"
			@submit.prevent="handleSubmit"
		>
			<div>
				<label
					class="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300"
				>
					Name
				</label>
				<input
					v-model="form.name"
					type="text"
					placeholder="Your name"
					class="w-full p-3 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
				/>
			</div>

			<div>
				<label
					class="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300"
				>
					Email
				</label>
				<input
					v-model="form.email"
					type="email"
					placeholder="you@example.com"
					class="w-full p-3 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
				/>
			</div>

			<div>
				<label
					class="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300"
				>
					Message
				</label>
				<textarea
					v-model="form.message"
					rows="5"
					placeholder="How can we help you?"
					class="w-full p-3 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
				></textarea>
			</div>

			<BaseButton type="submit" variant="purple">
				{{ loading ? 'Sending...' : 'Send Message' }}
			</BaseButton>

			<p
				v-if="success"
				class="text-green-600 dark:text-green-400 text-sm mt-2"
			>
				Message sent successfully!
			</p>
			<p v-if="error" class="text-red-600 dark:text-red-400 text-sm mt-2">
				There was an error sending the message.
			</p>
		</form>
	</section>
</template>

<script setup>
	import BaseButton from '../components/elements/BaseButton.vue';

	const form = reactive({
		name: '',
		email: '',
		message: '',
	});

	const loading = ref(false);
	const success = ref(false);
	const error = ref(false);

	const handleSubmit = async () => {
		loading.value = true;
		success.value = false;
		error.value = false;

		try {
			await $fetch('/api/contact', {
				method: 'POST',
				body: { ...form },
			});
			success.value = true;
			form.name = '';
			form.email = '';
			form.message = '';
		} catch (err) {
			error.value = true;
		}
		loading.value = false;
	};
</script>
