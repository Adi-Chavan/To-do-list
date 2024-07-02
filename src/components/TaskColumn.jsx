import React from 'react'
import "./TaskColumn.css"
import TaskCards from './TaskCards'

const TaskColumn = ({Icon, title, tasks , status, HandleDelete }) => {
  return (
    <div className="taskcolumn">
        <h2 className='task_column_heading'>
          <img className="task_column_img" src={Icon} alt="" />
        {title}
        </h2>

        {
          tasks.map((task, idx) => 
            task.status === status && <TaskCards key={idx} title={task.task} tags={task.tags} 
            HandleDelete={HandleDelete}
            idx={idx}
            />
          )
        }
    </div>
  )
}

export default TaskColumn
