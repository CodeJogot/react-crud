import Task from "./Task"

export default function TaskList({ tasks, onUpdateTask, onDeleteTask }) {
  return (
    <div>
        {
            tasks.map(task => (
                <Task key={task.id} task={task} onUpdate={onUpdateTask} onDelete={onDeleteTask} />
            ))
        }
    </div>
  )
}
