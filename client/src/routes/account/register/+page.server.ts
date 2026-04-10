import { error, fail, type Actions } from '@sveltejs/kit';
import { PUBLIC_API_URL } from '$env/static/public';

export const actions: Actions = {
	register: async ({ request }) => {
		const data = await request.formData();
		const nameData = data.get('name')?.toString();
		const emailData = data.get('email')?.toString();
		const passwordData = data.get('password')?.toString();

		if (!nameData || nameData === '') {
			error(422, {
				message: 'Invalid username'
			});
		}
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

		const response = await fetch(`${PUBLIC_API_URL}/api/auth/register`, {
			method: 'POST',
			body: JSON.stringify({
				name: nameData,
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
					name: nameData,
					email: emailData
				}
			});
		}
	}
};
