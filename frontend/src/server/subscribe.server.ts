// src/api/subscribe.server.ts
'use server'

import { sanityWriteClient } from '@/lib/sanity';
import { revalidatePath } from 'next/cache';

export async function createSubscription(data: {
  email: string;
  source?: string;
}) {
  try {    
    const { email, source } = data;

    if (!email) {
      throw new Error('Email is required');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Invalid email format');
    }

    const existingSubscriber = await sanityWriteClient.fetch(
      `*[_type == "subscribeForm" && email == $email][0]`,
      { email: email.trim() }
    );

    if (existingSubscriber) {
      if (!existingSubscriber.isActive) {
        const result = await sanityWriteClient
          .patch(existingSubscriber._id)
          .set({ isActive: true, subscribedAt: new Date().toISOString() })
          .commit();
        
        return { success: true, message: 'Subscription reactivated successfully', id: result._id };
      }
      
      throw new Error('Email already subscribed');
    }

    const subscription = {
      _type: 'subscribeForm',
      email: email.trim(),
      subscribedAt: new Date().toISOString(),
      isActive: true,
      source: source || 'website'
    };

    const result = await sanityWriteClient.create(subscription);
        
    return { success: true, message: 'Subscribed successfully', id: result._id };

  } catch (error: any) {
    throw error;
  }
}

export async function subscribeAction(formData: FormData) {
  try {
    const email = formData.get('email') as string;
    const source = formData.get('source') as string || 'website';

    const result = await createSubscription({
      email: email.trim(),
      source
    });

    revalidatePath('/subscribe');

    return {
      success: true,
      message: result.message || 'Successfully subscribed to our newsletter!'
    };

  } catch (error: any) {
    console.error('Subscribe action error:', error);
    
    return {
      success: false,
      message: error.message || 'Something went wrong. Please try again.',
      error: error.message
    };
  }
}