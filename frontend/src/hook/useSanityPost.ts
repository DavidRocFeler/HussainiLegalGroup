// hooks/useSanityPost.ts
'use client'

import { useState } from 'react';

export const useSanityPost = (apiFunction: (data: any) => Promise<any>) => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const postData = async (data: any) => {
    
    setError(null);
    setSuccess(false);
    setIsLoading(true);

    try {
      const result = await apiFunction(data);
      setSuccess(true);
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { postData, error, success, isLoading };
};