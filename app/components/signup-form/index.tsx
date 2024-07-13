'use client';

import { useCreatePost } from '@/app/hooks/use-create-post';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();

  const { loading, error, request } = useCreatePost();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log(`Name: ${name}, Email: ${email}`);

    try {
      await request();
      console.log('User created successfully');
      router.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="my-3" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Submit'}
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default SignupForm;
