import { useState } from 'react';
import "./style.css";

function TaskManager() {
    const [tasks, setTasks] = useState([]);

    const [inputValue, setInputValue] = useState("");

    function addTask() {
        if (inputValue.length === 0) {
            return;
        }
        setTasks([
            ...tasks,

            {
                content: inputValue,
                isComplete: false,
                isEditing: false
            }
        ]);
        setInputValue("");

    }
    function deleteTask(taskIndex) {
        tasks.splice(taskIndex, 1)
        setTasks([
            ...tasks
        ])




    }
    function markCompleted(taskIndex) {
        tasks[taskIndex].isComplete = !tasks[taskIndex].isComplete;
        setTasks([
            ...tasks
        ])

    }
    function editTask(taskIndex) {
        tasks[taskIndex].isEditing = true;
        setTasks(
            [...tasks]
        )
    }
    function updateValue(taskIndex, value) {
        tasks[taskIndex].content = value;
        setTasks(
            [...tasks]
        )
    }
    function saveTask(taskIndex) {
        tasks[taskIndex].isEditing = false;
        setTasks(
            [...tasks]
        )
    }


    return <div className="TaskManager">
        <h1>Task Manager</h1>
        <div className="Task">
            {
                tasks.sort((a) => a.isComplete ? 1 : -1).map(
                    (task, index) => <div className={"Tasks"+task.isComplete ? "completer":"incompleted"} key={index}>
                        <input type='checkbox' checked={task.isComplete} onChange={() => markCompleted} />

                        {
                            task.isEditing ?
                            
                                    <input value={task.content} onChange={(event) => updateValue(index, event.target.value)} className="editInput" />
                                :
                                
                                    <span className="content">  {
                                        task.iscomplete ?
                                            <del>{task.content}</del> :
                                            task.content
                                    }

                                    </span>



                                    
                                
                        }
                        {
                            task.isEditing?
                            <button onClick={() => saveTask(index)} className="save">save</button>:
                            <button onClick={() => editTask(index)} className="edit">Edit</button>
                        }

                        <button onClick={() => deleteTask(task)} className="delete">Delete</button></div>
                )
            }
        </div>


        <div className="add-task-container">
            <input value={inputValue} onChange={(event) => setInputValue(event.target.value)}placeholder='Enter a task' />
            <button onClick={addTask}>Add Task</button>
        </div>
    </div>
}
export default TaskManager;