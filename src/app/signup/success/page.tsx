import Button from '@/components/button';
import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Signup Successful</h1>
      <p className="mb-8">
        Thank you for signing up as a rider. We will get back to you soon!
      </p>
      <Link href="/">
        <Button>Go to Home</Button>
      </Link>
    </div>
  );
}
