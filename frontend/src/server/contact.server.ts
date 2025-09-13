// src/api/contact.api.ts
import { sanityWriteClient } from '@/lib/sanity';

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