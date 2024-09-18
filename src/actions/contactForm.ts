'use server';

import React from 'react';
import { Resend } from 'resend';
import { getErrorMessage, validateEmailDataString } from '@/lib/utils';
import ContactFormEmail from '@/email/ContactFormEmail';

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
      subject: 'Hello from Resend',
      replyTo: email as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: email as string,
      }),
    });
  } catch (error: unknown) {
    return getErrorMessage(error);
  }
}
