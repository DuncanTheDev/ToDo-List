import Logo from "../assets/logo.png";
import "./ToDo.css";
import { useState, useEffect } from "react";
import ToDoItem from "./ToDo-Item";

export default function ToDoList() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const add = () => {
    if (inputValue === "") {
      alert("Please enter a task");
    }
    if (inputValue.trim() !== "") {
      const newTasks = [
        ...tasks,
        { id: Date.now(), text: inputValue, isCompleted: false },
      ];
      setTasks(newTasks);
      setInputValue("");
      localStorage.setItem("tasks", JSON.stringify(newTasks));
    }
  };

  const removeTodo = (id) => {
    const deletedTask = tasks.filter((task) => task.id !== id);
    setTasks(deletedTask);
    localStorage.setItem("tasks", JSON.stringify(deletedTask));
  };

  const toggleComplete = (id) => {
    const updatedTask = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(updatedTask);
    localStorage.setItem("tasks", JSON.stringify(updatedTask));
  };

  return (
    <div className="todo-list">
      <h2 className="title">
        ToDo List <img className="logo" src={Logo} />
      </h2>
      <div className="row">
        <input
          type="text"
          className="task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter Task"
        />
        <button className="add-button" onClick={add}>
          Add
        </button>
      </div>
      <div>
        {tasks.map((task, index) => (
          <ToDoItem
            key={index}
            text={task.text}
            id={task.id}
            isCompleted={task.isCompleted}
            removeTodo={removeTodo}
            toggleComplete={toggleComplete}
          />
        ))}
      </div>
    </div>
  );
}
