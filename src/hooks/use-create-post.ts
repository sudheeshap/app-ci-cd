import { useState } from 'react';

export function useCreatePost() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts/1',
        {
          method: 'PUT',
          body: JSON.stringify({
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        },
      );

      if (!response.ok) {
        throw new Error('API call failed');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      // @ts-ignore
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, request };
}
