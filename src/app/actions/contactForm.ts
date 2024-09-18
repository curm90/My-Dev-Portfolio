'use server';

import { Resend } from 'resend';
import { getErrorMessage, validateEmailDataString } from '@/lib/utils';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: FormData) {
  const message = data.get('message');
  const email = data.get('email');

  if (!validateEmailDataString(message, 500)) {
    return {
      error: 'Invalid message',
    };
  }

  if (!validateEmailDataString(email, 5000)) {
    return {
      error: 'Invalid email',
    };
  }

  try {
    await resend.emails.send({
      from: 'Contact form <onboarding@resend.dev>',
      to: 'sutton.liam77@gmail.com',
      subject: 'Hellow from Resend',
      replyTo: email as string,
      text: message as string,
    });
  } catch (error: unknown) {
    return getErrorMessage(error);
  }
}
