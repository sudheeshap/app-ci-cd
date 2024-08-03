import Link from 'next/link';
import Button from '@/components/button';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Rider Signup</h1>
      <p className="mb-8">Join us and start riding today!</p>
      <Link href="/signup">
        <Button>Sign Up as a Rider</Button>
      </Link>
    </div>
  );
}
