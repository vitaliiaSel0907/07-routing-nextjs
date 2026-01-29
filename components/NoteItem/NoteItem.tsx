import Link from 'next/link';
import css from './NoteItem.module.css';
import { Note } from '@/types/note';

interface NoteItemProps {
  note: Note;
}

export default function NoteItem({ note }: NoteItemProps) {
  return (
    <li className={css.item}>
      <Link href={`/notes/${note.id}`} className={css.link}>
        <h3 className={css.title}>{note.title}</h3>
        <p className={css.tag}>{note.tag}</p>
      </Link>
    </li>
  );
}
