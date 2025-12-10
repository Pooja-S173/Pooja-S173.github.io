import { useState } from "react";

export default function AddNote({ addNote }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;
    addNote(text);
    setText("");
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow-lg flex gap-3">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your note..."
        className="w-full border border-gray-300 p-2 rounded-lg"
      />
      <button 
        onClick={handleAdd} 
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Add
      </button>
    </div>
  );
}
