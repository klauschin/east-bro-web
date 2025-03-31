'use server';
export async function onLogin(data: { username: string; password: string }) {
	const { username, password } = data;
	try {
		const res = await fetch(`${process.env.API_BASE_URL}/api/auth/signin`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				password,
				username,
			}),
		});
		const data = await res.json();
		console.log('🚀 ~ :16 ~ onLogin ~ data:', data);

		return data;
	} catch (error) {
		return error;
	}
}
