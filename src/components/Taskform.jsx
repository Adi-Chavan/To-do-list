import React, { useState } from 'react';
import './Taskform.css'
import Tag from './Tag';

function Taskform({ setTasks }) {

    const [taskData, setTaskData] = useState({
        task: "",
        status: "todo",
        tags: [],
    });


    const checkTags = (tag) => {
        return taskData.tags.some(item => item === tag);
    }

    const selectTag = (tag) => {
        if (taskData.tags.some(item => item === tag)) {
            const filterTags = taskData.tags.filter(item => item !== tag);
            setTaskData((prev) => {
                return { ...prev, tags: filterTags }
            })

        } else {
            setTaskData((prev) => {
                return { ...prev, tags: [...prev.tags, tag] }
            })
        }
    };


    const HandleChange = (e) => {
        const { name, value } = e.target;

        setTaskData((prev) => {
            return { ...prev, [name]: value };
        })
    }

    const HandleSubmit = (e) => {
        e.preventDefault()
        // console.log(taskData)

        setTasks(prevs => {
            return [...prevs, taskData]
        })

        setTaskData({
            task: "",
            status: "todo",
            tags: [],
        })
    }

    return (
        <div className="app_header">
            <form onSubmit={HandleSubmit}>

                <input type="text"
                    placeholder='Enter Your Task'
                    value={taskData.task}
                    name='task'
                    className='taskinput'
                    onChange={HandleChange}

                />
                <div className="bottomLine">
                    <div className="tagButtons">
                        <Tag Name="HTML" selectTag={selectTag} selected={checkTags("HTML")} />
                        <Tag Name="CSS" selectTag={selectTag} selected={checkTags("CSS")} />
                        <Tag Name="JavaScript" selectTag={selectTag} selected={checkTags("JavaScript")} />
                        <Tag Name="React" selectTag={selectTag} selected={checkTags("React")} />

                    </div>

                    <div>
                        <select className='taskStatus' name='status' onChange={HandleChange} value={taskData.status}>
                            <option value="todo">To Do</option>
                            <option value="doing">Doing</option>
                            <option value="done">Done</option>
                        </select>
                        <button type='submit' className='taskSubmit'>+ Add Task</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Taskform
