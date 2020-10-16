import React, {useState} from 'react';
import TaskItem from "./TaskItem";

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const [count, setCount] = useState(0);

    const onTaskClicked = () => {
        let newTask = {
            id: count,
            text: 'This is an editable paragraph'
        };
        setCount(count+1);
        setTasks(tasks.concat(newTask));
    };

    const onCloseClick = ({info}) => {
        const newList = [].concat(tasks);
        let index = tasks.indexOf(info);
        newList.splice(index, 1);
        setTasks(newList);
    };

    const tasksList = tasks.map((item, index) => <TaskItem key={item.id} info={item} index={index} onCloseClick={onCloseClick}/>);

    return (
        <div className='container text-center mt-3'>
            <button type="button"
                    className="btn btn-secondary"
                    onClick={onTaskClicked}>Add task</button>

            <div className='container grid mt-3'>
                {tasksList}
            </div>
        </div>
    );
};
export default Tasks;