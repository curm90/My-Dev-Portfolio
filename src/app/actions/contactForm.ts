'use server';

export async function sendEmail(data: FormData) {
  console.log({ formData: data.get('email') });
  console.log({ formData: data.get('message') });
}
