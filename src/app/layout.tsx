import Footer from '@/components/footer';
import Header from '@/components/header';
import { ReactNode } from 'react';

import './globals.css';

type PropsType = {
  children?: ReactNode;
};

export default function RootLayout({ children }: PropsType) {
  return (
    <html>
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
