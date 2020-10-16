import React from 'react';
import TaskItemStyle from './TaskItem.css'

const TaskItem = ({info, onCloseClick}) => {

    return (
        <div className='card taskCard'>
            <div className="row ml-0">
                <div className="col-2 mx-auto checkBoxContainer">
                    <input className='taskCheckBox' type="checkbox" value=""/>
                </div>
                <div className="col-10">
                    <div className="card-body">
                        <h6 className="card-title">Task №{info.id}</h6>
                        <p contentEditable="true" suppressContentEditableWarning={true}>{info.text}</p>
                        <i className="fa fa-close closeIcon" onClick={() => onCloseClick({info})}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TaskItem;