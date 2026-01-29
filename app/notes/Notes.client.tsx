'use client';

import { useQuery } from '@tanstack/react-query';
import NoteList from '@/components/NoteList/NoteList';
import { fetchNotes } from '@/lib/api/notes';


export default function NotesClient() {
  const { data } = useQuery({
    queryKey: ['notes'],
    queryFn: () =>
      fetchNotes({
        page: 1,
        perPage: 12,
        search: '',
      }),
  });

  return <NoteList notes={data?.notes ?? []} />;
}
