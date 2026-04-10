import { PUBLIC_API_URL } from '$env/static/public';
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	logout: async ({ cookies }) => {
		if (cookies.get('token')) {
			const response = await fetch(`${PUBLIC_API_URL}/api/auth/logout`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${cookies.get('token')}`
				}
			});

			if (response.status === 200) {
				cookies.delete('token', { path: '/' });
				redirect(303, '/account/login');
			} else {
                throw new Error(response.statusText);
            }
		}
	}
};
