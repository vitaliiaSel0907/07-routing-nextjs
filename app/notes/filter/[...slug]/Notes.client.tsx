  'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api/notes';
import NoteList from '@/components/NoteList/NoteList';

interface Props {
  tag?: string;
}

export default function NotesClient({ tag }: Props) {
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

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading notes</p>;

  return <NoteList notes={data?.notes ?? []} />;
}
