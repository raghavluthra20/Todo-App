import React from "react";

import Card from "./UI/Card";
import Input from "./UI/Input";
import Button from "./UI/Button";

import classes from "./TaskForm.module.css";

const TaskForm = (props) => {
  return (
    <Card>
      <form id='form' onSubmit={props.onAddTask}>
        <div className={classes["form-container"]}>
          <div className={classes["form-wrapper"]}>
            <Input
              ref={props.taskInputRef}
              input={{
                type: "text",
                placeholder: "Add task",
                onChange: props.onChangeInput,
                value: props.activeItem.title,
              }}
            />
            <Button type='submit'>Add</Button>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default TaskForm;
