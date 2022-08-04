import React from "react";

import Card from "./UI/Card";
import Input from "./UI/Input";
import Button from "./UI/Button";

const TaskForm = (props) => {
  return (
    <Card>
      <form onSubmit={props.onAddTask}>
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
      </form>
    </Card>
  );
};

export default TaskForm;
