import type { LayoutServerLoad } from './$types';
import { PUBLIC_API_URL } from '$env/static/public';
import { error, redirect } from '@sveltejs/kit';

export const load: LayoutServerLoad = async ({ cookies }) => {
	if (cookies.get('token')) {
		const response = await fetch(`${PUBLIC_API_URL}/api/auth/me`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application-json',
				'Authorization': `Bearer ${cookies.get('token')}`
			}
		});

		console.log(response);

		if (response.status !== 200) {
			error(response.status, response.statusText);
		}
	} else {
		redirect(303, '/account/login?error="unauthorized"');
	}
};
