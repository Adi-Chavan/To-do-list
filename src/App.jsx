import React, { useEffect, useState } from 'react'
import './App.css'
import Taskform from './components/Taskform'
import TaskColumn from './components/TaskColumn'
import TodoIcon from './assets/direct-hit.png'
import doingIcon from './assets/glowing-star.png'
import doneIcon from './assets/check-mark-button.png'


const oldTask = localStorage.getItem('tasks');

function App() {
  const [tasks, setTasks] = useState(JSON.parse(oldTask) || []);


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))

  } , [tasks])
  
  const HandleDelete =(taskIdx) => {
    const newTasks = tasks.filter((task,idx) => idx !== taskIdx);
    setTasks(newTasks);
  }

  return (
    <div className='app'>
      <Taskform setTasks={setTasks} />
      <div className="app_main">
        <TaskColumn title="To Do" Icon={TodoIcon} tasks={tasks} status="todo" HandleDelete={HandleDelete} />
        <TaskColumn title="Doing" Icon={doingIcon} tasks={tasks} status="doing" HandleDelete={HandleDelete} />
        <TaskColumn title="Done" Icon={doneIcon} tasks={tasks} status="done" HandleDelete={HandleDelete} />
      </div>

    </div>
  )
}

export default App
