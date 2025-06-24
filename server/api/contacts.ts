export default defineEventHandler(async (event) => {
	const body = await readBody(event);

	const { name, email, message } = body;

	// 🔐 Basic validation
	if (!name || !email || !message) {
		throw createError({ statusCode: 400, statusMessage: 'Missing fields' });
	}

	// For now, just log it — later you can send email or save it
	console.log('Contact form submitted:', { name, email, message });

	// You can also integrate Nodemailer, Sendgrid, etc.
	return { success: true };
});
