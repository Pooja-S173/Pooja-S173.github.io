import NoteCard from "./NoteCard";

export default function NotesList({ notes, deleteNote, updateNote }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      {notes.map((note) => (
        <NoteCard 
          key={note.id} 
          note={note} 
          deleteNote={deleteNote}
          updateNote={updateNote}
        />
      ))}
    </div>
  );
}

