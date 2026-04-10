import type { LayoutServerLoad } from '../$types';
import { PUBLIC_API_URL } from '$env/static/public';
import { error, redirect } from '@sveltejs/kit';
import { resolve } from 'path';

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
			error(response.status);
		}
		const result = await response.json();
		console.log(result);
	} else {
		redirect(308, resolve('/account/login/'));
	}
};
