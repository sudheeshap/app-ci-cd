'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import { FromDataType } from './form.type';
import { useRouter } from 'next/navigation';

export default function SignupForm() {
  const [formData, setFormData] = useState<FromDataType>({
    name: '',
    email: '',
  });

  const router = useRouter();

  const handleFormSubmit = (e: FormEvent) => {
    console.log('Form data:', formData);
    e.preventDefault();
    router.push('/signup/success');
  };

  const handleSetFormData = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    } as FromDataType);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="bg-white p-6 rounded shadow-md w-full max-w-md"
    >
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleSetFormData}
          className="mt-1 block w-full p-2 border-2 border-blue-200 rounded-md shadow-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleSetFormData}
          className="mt-1 block w-full p-2 border-2 border-blue-200 rounded-md shadow-sm"
          required
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 transition duration-300"
      >
        Submit
      </button>
    </form>
  );
}
