import { ReactNode } from 'react';
import SidebarNotes from '@/components/SidebarNotes/SidebarNotes';
import css from './LayoutNotes.module.css';

interface NotesLayoutProps {
  children: ReactNode;
}

export default function NotesLayout({ children }: NotesLayoutProps) {
  return (
    <section className={css.container}>
      <aside className={css.sidebar}>
        <SidebarNotes />
      </aside>

      <main className={css.content}>
        {children}
      </main>
    </section>
  );
}
