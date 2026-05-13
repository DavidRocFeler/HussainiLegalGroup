// src/api/subscribe.server.ts
'use server'
import { sanityWriteClient } from '@/lib/sanity';
import { revalidatePath } from 'next/cache';

export async function createSubscription(data: {
  email: string;
  interests?: string[];
  source?: string;
}) {
  try {    
    const { email, source, interests } = data;

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
          .set({ 
            isActive: true, 
            subscribedAt: new Date().toISOString(),
            interests: interests || [],
          })
          .commit();
        return { success: true, message: 'Subscription reactivated successfully', id: result._id };
      }
      throw new Error('Email already subscribed');
    }

    const subscription = {
      _type: 'subscribeForm',
      email: email.trim(),
      interests: interests || [],
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
    const interestsRaw = formData.get('interests') as string;
    const interests = interestsRaw ? JSON.parse(interestsRaw) : [];

    const result = await createSubscription({
      email: email.trim(),
      interests,
      source
    });

    revalidatePath('/subscribe');
    return {
      success: true,
      message: result.message || 'Successfully subscribed to our newsletter!'
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message || 'Something went wrong. Please try again.',
      error: error.message
    };
  }
}