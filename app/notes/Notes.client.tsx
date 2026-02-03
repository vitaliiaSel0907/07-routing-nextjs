'use client';

import { useQuery } from '@tanstack/react-query';
import NoteList from '@/components/NoteList/NoteList';
import { fetchNotes } from '@/lib/api/notes';

interface NotesClientProps {
  tag?: string;
}

export default function NotesClient({ tag }: NotesClientProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['notes', tag],
    queryFn: () =>
      fetchNotes({
        page: 1,
        perPage: 12,
        search: '',
        tag: tag === 'all' ? undefined : tag,
      }),
  });

  if (isLoading) {
    return <p>Loading notes...</p>;
  }

  if (isError) {
    return <p>Failed to load notes.</p>;
  }

  return <NoteList notes={data?.notes ?? []} />;
}
