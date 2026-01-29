 import { fetchNotes } from "@/lib/api/notes";
import NoteList from "@/components/NoteList/NoteList";

export default async function NotesPage() {
  const data = await fetchNotes({
    page: 1,
    perPage: 12,
    search: "",
  });

  return <NoteList notes={data.notes} />;
}
