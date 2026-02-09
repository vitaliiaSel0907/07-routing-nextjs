import { fetchNoteById } from '@/lib/api/notes';
import NoteDetails from './NoteDetails.client';

interface Props {
  params: {
    id: string;
  };
}

export default async function NotePage({ params }: Props) {
  const note = await fetchNoteById(params.id);

  return <NoteDetails note={note} />;
}
