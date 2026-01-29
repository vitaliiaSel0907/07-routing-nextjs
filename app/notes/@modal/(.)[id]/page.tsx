 import { fetchNoteById } from "@/lib/api/notes";
import Modal from "@/components/Modal/Modal";
import NotePreview from "@/components/NotePreview/NotePreview";

interface NoteModalPageProps {
  params: {
    id: string;
  };
}

export default async function NoteModalPage({
  params,
}: NoteModalPageProps) {
  const note = await fetchNoteById(params.id);

  return (
    <Modal>
      <NotePreview note={note} />
    </Modal>
  );
}
