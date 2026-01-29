import { ReactNode } from 'react';

export default function NotesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section>
      {children}
    </section>
  );
}
