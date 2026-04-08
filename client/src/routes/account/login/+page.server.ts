import type { Actions } from "./$types";

export const actions: Actions = {
	login: async ({ cookies }) => {
		console.log('willkommen!');
		console.log(cookies.get('userid'));
	}
};
