// src/api/contact.server.ts
'use server'

import { sanityWriteClient } from '@/lib/sanity';
import { revalidatePath } from 'next/cache';

export async function createContactMessage(data: {
  name: string;
  email: string;
  company?: string;
  message: string;
}) {
  try {    
    const { name, email, company, message } = data;

    if (!name || !email || !message) {
      throw new Error('Missing required fields');
    }

    const contactMessage = {
      _type: 'contactMessage',
      name: name.trim(),
      email: email.trim(),
      company: company ? company.trim() : undefined,
      message: message.trim(),
      receivedAt: new Date().toISOString(),
      isRead: false,
    };

    const result = await sanityWriteClient.create(contactMessage);
        
    return { success: true, message: 'Message sent successfully', id: result._id };

  } catch (error: any) {
    throw error;
  }
}

export async function contactAction(formData: FormData) {
  try {
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;
    const message = formData.get('message') as string;

    if (!firstName || !lastName || !email || !message) {
      return {
        success: false,
        message: 'Missing required fields',
        error: 'Missing required fields'
      };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        success: false,
        message: 'Please enter a valid email address',
        error: 'Please enter a valid email address'
      };
    }

    if (message.trim().length < 10) {
      return {
        success: false,
        message: 'Message must be at least 10 characters long',
        error: 'Message must be at least 10 characters long'
      };
    }

    const fullName = `${firstName.trim()} ${lastName.trim()}`;

    const result = await createContactMessage({
      name: fullName,
      email: email.trim(),
      company: company ? company.trim() : undefined,
      message: message.trim()
    });

    revalidatePath('/contact');

    return {
      success: true,
      message: result.message || 'Message sent successfully!'
    };

  } catch (error: any) {
    console.error('Contact action error:', error);
    
    return {
      success: false,
      message: error.message || 'Failed to send message. Please try again.',
      error: error.message
    };
  }
}