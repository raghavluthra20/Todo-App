import React from "react";

import Card from "./UI/Card";
import TaskItem from "./TaskItem";
// import classes from "./TaskList.module.css";

const TaskList = (props) => {
  return (
    <Card>
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
    </Card>
  );
};

export default TaskList;
