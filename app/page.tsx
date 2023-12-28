import Header from './components/header';
import List from './components/list';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <List />
    </main>
  );
}
