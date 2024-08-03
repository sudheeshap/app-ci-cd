import SignupForm from './form';

export default function SignupPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Rider Signup</h1>
      <SignupForm />
    </div>
  );
}
