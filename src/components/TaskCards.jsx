import React from 'react'
import './TaskCards.css'
import Tag from "./Tag"
import deleteIcon from "../assets/delete.png"

const TaskCards = ({ title, tags, HandleDelete , idx }) => {
  return (
    <div className='taskCard'>
      <p className="tasktext">
        {title}
      </p>
      <div className="task_card_bottom_line">
        <div className="task_tag">
          {
            tags.map((tag, idx) => 
              <Tag Name={tag} key={idx} selected />
            )
          }
        </div>
        <div className='delete_div' onClick={()=> 
          HandleDelete(idx)
        }>
          <img src={deleteIcon} alt="" className="delete_icon" />
        </div>


      </div>
    </div>
  )
}

export default TaskCards
