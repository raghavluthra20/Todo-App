import React from "react";

import classes from "./TaskItem.module.css";
import Card from "./UI/Card";

const TaskItem = (props) => {
  return (
    <div className={classes["task-item"]}>
      <Card>
        <div className={classes["first-line"]}>
          <div className={classes["task-item__title"]}>
              <span className={props.completed ? classes["task-item__completed"] : undefined}>
                {props.title}
              </span>
          </div>
          <div className={classes["task-item__edit"]}>
            <button onClick={props.onEditTask}>Edit</button>
          </div>
          <div className={classes["task-item__delete"]}>
            <button onClick={props.onDeleteTask}>Delete</button>
          </div>
        </div>
        <input type='checkbox' checked={props.completed} onChange={props.onToggleComplete} />
      </Card>
    </div>
  );
};

export default TaskItem;
