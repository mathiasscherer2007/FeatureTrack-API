import { error, fail, redirect, type Actions } from '@sveltejs/kit';
import { PUBLIC_API_URL } from '$env/static/public';
import { resolve } from '$app/paths';

export const actions: Actions = {
	login: async ({ request, cookies }) => {
		const data = await request.formData();
		const emailData = data.get('email')?.toString();
		const passwordData = data.get('password')?.toString();

		if (!emailData || emailData === '') {
			error(422, {
				message: 'Invalid email'
			});
		}
		if (!passwordData || passwordData === '') {
			error(422, {
				message: 'Invalid password'
			});
		}

		const response = await fetch(`${PUBLIC_API_URL}/api/auth/login`, {
			method: 'POST',
			body: JSON.stringify({
				email: emailData,
				password: passwordData
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const result = await response.json();

		if (result.errors) {
			return fail(400, {
				message: result.message,
				errors: result.errors,
				data: {
					email: emailData
				}
			});
		} else {
			cookies.set('token', result.access_token, { path: '/' })
			redirect(303, resolve('/tasks'))
		}
	}
};
