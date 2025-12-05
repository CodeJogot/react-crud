import AddTask from "./components/AddTask"
import TaskList from "./components/TaskList"
import { useState } from "react";


const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false}
];

let nextId = 3;

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleAddTask(text) {
    setTasks([...tasks, {id: nextId++, text: text, done: false}]);
  }
  function handleUpdateTask(task) {
    setTasks(tasks.map(t=> {
      if(t.id == task.id) return task;
      else return t;
    }))
  }
  function handleDeleteTask(task) {
    setTasks(tasks.filter(t=> t.id !== task.id));
  }
  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <AddTask onAddTask={handleAddTask}/>
      <TaskList tasks={tasks} onUpdateTask = {handleUpdateTask} onDeleteTask = {handleDeleteTask} />
    </div>
  )
}
