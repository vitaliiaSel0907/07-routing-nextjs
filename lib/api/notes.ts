import axiosInstance from './axiosInstance';
import type { Note, CreateNotePayload } from '@/types/note';
import type { NotesResponse } from '@/types/notes-response';

// GET ALL NOTES
export const fetchNotes = async ({
  page,
  perPage,
  search,
  tag,
}: {
  page: number;
  perPage: number;
  search: string;
  tag?: string;
}): Promise<NotesResponse> => {
  const { data } = await axiosInstance.get<NotesResponse>('/notes', {
    params: tag ? { page, perPage, search, tag } : { page, perPage, search },
  });

  return data;
};

// GET NOTE BY ID
export const fetchNoteById = async (id: string): Promise<Note> => {
  const { data } = await axiosInstance.get<Note>(`/notes/${id}`);
  return data;
};

// CREATE NOTE
export const createNote = async (
  payload: CreateNotePayload
): Promise<Note> => {
  const { data } = await axiosInstance.post<Note>('/notes', payload);
  return data;
};

// DELETE NOTE ✅
export const deleteNote = async (id: string): Promise<Note> => {
  const { data } = await axiosInstance.delete<Note>(`/notes/${id}`);
  return data;
};
