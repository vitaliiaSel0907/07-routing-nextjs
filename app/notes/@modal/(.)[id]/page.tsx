'use client';

import { useRouter } from 'next/navigation';
import { fetchNoteById } from '@/lib/api/notes';
import Modal from '@/components/Modal/Modal';
import NotePreview from '@/components/NotePreview/NotePreview';
import { useEffect, useState } from 'react';
import type { Note } from '@/types/note';

interface NoteModalPageProps {
  params: {
    id: string;
  };
}

export default function NoteModalPage({ params }: NoteModalPageProps) {
  const router = useRouter();
  const [note, setNote] = useState<Note | null>(null);

  useEffect(() => {
    fetchNoteById(params.id).then(setNote);
  }, [params.id]);

  if (!note) return null;

  return (
    <Modal onClose={() => router.back()}>
      <NotePreview note={note} />
    </Modal>
  );
}
