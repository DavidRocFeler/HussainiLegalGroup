// src/api/subscribe.api.ts
import { sanityWriteClient } from '@/lib/sanity';

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