import { useState } from "react";

export default function Task({ task, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input type="text" value={task.text} className="border rounded p-1" onChange = {(e)=>onUpdate({...task, text: e.target.value})}/>
        <button onClick={()=>setIsEditing(false)} className="bg-blue-500 text-white p-2 rounded">Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        <span>{task.text}</span>
        <button onClick={()=>setIsEditing(true)} className="bg-green-500 text-white p-2 rounded">Edit</button>
      </>
    );
  }

  return (
    <div className="flex gap-1 items-center mt-2">
      <input type="checkbox" checked={task.done} onChange = {(e)=>onUpdate({...task, done: e.target.checked})}/>
      {taskContent}
      <button onClick={()=>onDelete(task)} className="bg-red-500 text-white p-2 rounded">Delete</button>
    </div>
  );
}
