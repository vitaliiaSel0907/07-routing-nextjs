import css from './FilterLayout.module.css';

export default function FilterLayout({
  sidebar,
  notes,
}: {
  sidebar: React.ReactNode;
  notes: React.ReactNode;
}) {
  return (
    <div className={css.container}>
      <aside className={css.sidebar}>{sidebar}</aside>
      <section className={css.content}>{notes}</section>
    </div>
  );
}
