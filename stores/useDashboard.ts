export const useDashboard = defineStore('dashboard', () => {
	const counter = ref(0);
	const increment = () => counter.value++;

	return { counter, increment };
});

function defineStore(
	arg0: string,
	arg1: () => {
		counter: globalThis.Ref<number, number>;
		increment: () => number;
	},
) {
	throw new Error('Function not implemented.');
}
