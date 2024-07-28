import React from 'react';
import Link from 'next/link';
import SignupForm from '../signup-form';
import Image from 'next/image';

const DetailsPage = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col items-center mt-20 text-black">
      <h1 className="text-2xl my-3">{title}</h1>
      <Link href="/" className="text-sky-600 my-3">
        Home
      </Link>
      <div className="relative w-[250px] h-[250px]">
        <Image
          src={
            'https://images.unsplash.com/photo-1470549813517-2fa741d25c92?q=80&w=5068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="placeholder"
        />
      </div>
      <SignupForm />
    </div>
  );
};

export default DetailsPage;
