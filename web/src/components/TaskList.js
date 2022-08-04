import React from "react";

import TaskItem from "./TaskItem";
import classes from "./TaskList.module.css";

const TaskList = (props) => {
  return (
    <div className={classes["task-list"]}>
      {props.tasks.map((task, index) => {
        return (
          <TaskItem
            key={index}
            title={task.title}
            completed={task.completed}
            onEditTask={() => props.onEditTask(task)}
            onDeleteTask={() => props.onDeleteTask(task)}
            onToggleComplete={() => props.onToggleComplete(task)}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
