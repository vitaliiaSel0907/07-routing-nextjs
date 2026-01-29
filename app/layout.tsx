import type { Metadata } from 'next';
import './globals.css';

import Header from '@/components/Header/Header';
import { QueryProvider } from '@/providers/QueryProvider';

export const metadata: Metadata = {
  title: 'NoteHub',
  description: 'Notes application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <Header />
          <main>{children}</main>
        </QueryProvider>
      </body>
    </html>
  );
}
