import { useState } from "react";

export default function NoteCard({ note, deleteNote, updateNote }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(note.text);

  const handleSave = () => {
    updateNote(note.id, newText);
    setIsEditing(false);
  };

  return (
    <div className="bg-yellow-200 p-4 rounded-xl shadow-md">
      {isEditing ? (
        <textarea
          className="w-full p-2 rounded border"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        ></textarea>
      ) : (
        <p className="text-gray-800">{note.text}</p>
      )}

      <div className="flex gap-2 mt-3">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => deleteNote(note.id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

