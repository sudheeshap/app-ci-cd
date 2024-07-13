import React from 'react';
import Link from 'next/link';
import SignupForm from '../signup-form';

const DetailsPage = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-2xl my-3">{title}</h1>
      <Link href="/" className="text-sky-600 my-3">
        Home
      </Link>
      <img
        src="https://via.placeholder.com/200"
        alt="placeholder"
        width="200"
        height="200"
      />
      <SignupForm />
    </div>
  );
};

export default DetailsPage;
