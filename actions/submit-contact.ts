'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContact(
  state: { success: boolean | null },
  formData: FormData
) {
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  const { data, error } = await resend.emails.send({
    from: 'Portfolio Contact Form <onboarding@resend.dev>',
    to: 'anton.wyrowski@gmail.com',
    subject: 'Portfolio Contact Form Message',
    text: `You have received a message from the portfolio contact form.

Name: ${name}
Email: ${email}
Message: ${message}

Best regards,
Anton Wyrowski`,
  });

  if (error) {
    console.error(error);
    return { success: false };
  }

  console.log(data);

  return { success: true };
}
