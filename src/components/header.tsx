import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="flex justify-between">
        <div>
          <Link href="/">Home</Link>
        </div>
        <div>
          <Link href="/signup">Sign Up</Link>
        </div>
      </nav>
    </header>
  );
}
