import { useState } from "react";

export default function AddTask({ onAddTask }) {
    const [text, setText] = useState('');
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-5">To Do App</h1>
      <div className="flex gap-2">
        <input value = {text} onChange={(e) => setText(e.target.value)} type="text" placeholder="Add task" className="border-2 rounded p-2 "/>
        <button onClick={() => {
            onAddTask(text);
            setText('');
        }} className="bg-blue-500 text-white p-2 rounded">Add</button>
      </div>
    </div>
  );
}
