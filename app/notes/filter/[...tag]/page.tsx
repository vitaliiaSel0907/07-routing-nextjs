  import { fetchNotes } from '@/lib/api/notes';
import NoteList from '@/components/NoteList/NoteList';

interface TagPageProps {
  params: {
    tag?: string[];
  };
}

export default async function TagPage({ params }: TagPageProps) {
  const tag = params.tag?.[0];

  const data = await fetchNotes({
    page: 1,
    perPage: 12,
    search: '',
    tag: tag === 'all' ? undefined : tag,
  });

  return <NoteList notes={data.notes} />;
}
