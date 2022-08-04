import React, { useState, useEffect, useCallback, useRef } from "react";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import classes from "./App.module.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [activeItem, setActiveItem] = useState({
    id: null,
    title: "",
    completed: false,
  });
  const [isEditing, setIsEditing] = useState(false);
  const taskInputRef = useRef(null);

  const fetchTasks = useCallback(async () => {
    const response = await fetch("http://127.0.0.1:8000/api/task-list/");
    const data = await response.json();
    setTodoList(data);
  }, [setTodoList]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const inputChangeHandler = (event) => {
    setActiveItem({
      ...activeItem,
      title: event.target.value,
    });
  };

  const taskSubmitHandler = async (event) => {
    event.preventDefault();

    let url = "http://localhost:8000/api/task-create/";
    if (isEditing) {
      url = `http://localhost:8000/api/task-update/${activeItem.id}/`;
      setIsEditing(false);
    }

    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(activeItem),
    });

    fetchTasks();
    setActiveItem({
      id: null,
      title: "",
      completed: false,
    });
  };

  const editTaskHandler = (task) => {
    setIsEditing(true);
    setActiveItem(task);
    taskInputRef.current.focus();
  };

  const deleteTaskHandler = async (task) => {
    await fetch(`http://localhost:8000/api/task-delete/${task.id}/`, {
      method: "DELETE",
    });

    // if task was deleted while in editing mode
    if (isEditing) {
      setIsEditing(false);
      setActiveItem({
        id: null,
        title: "",
        completed: false,
      });
    }

    fetchTasks();
  };

  const toggleCompleteHandler = async (task) => {
    task.completed = !task.completed;
    await fetch(`http://localhost:8000/api/task-update/${task.id}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    fetchTasks();
  };

  return (
    <div className={classes.App}>
      <div className={classes.title}>
        <h1>Todo App</h1>
      </div>
      <div className={classes["form-wrapper"]}>
        <TaskForm
          activeItem={activeItem}
          onChangeInput={inputChangeHandler}
          onAddTask={taskSubmitHandler}
          taskInputRef={taskInputRef}
        />
      </div>
      <div className={classes["list-wrapper"]}>
        <TaskList
          tasks={todoList}
          onEditTask={editTaskHandler}
          onDeleteTask={deleteTaskHandler}
          onToggleComplete={toggleCompleteHandler}
        />
      </div>
    </div>
  );
}

export default App;
