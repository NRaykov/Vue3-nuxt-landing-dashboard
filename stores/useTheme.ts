import { defineStore } from 'pinia';

export const useTheme = defineStore('theme', () => {
	const isDark = ref(false);

	const toggleTheme = () => {
		isDark.value = !isDark.value;
		const html = document.documentElement;

		if (isDark.value) {
			html.classList.add('dark');
		} else {
			html.classList.remove('dark');
		}
	};

	return { isDark, toggleTheme };
});
