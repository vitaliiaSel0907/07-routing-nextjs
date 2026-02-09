import NotesClient from './Notes.client';


interface NotesByTagPageProps {
  params: {
    tag?: string[];
  };
}

export default function NotesByTagPage({
  params,
}: NotesByTagPageProps) {
  const tag = params.tag?.[0];

  return <NotesClient tag={tag} />;
}
