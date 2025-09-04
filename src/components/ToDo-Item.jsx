import unchecked from "../assets/unchecked.png";
import remove from "../assets/delete.png";
import checked from "../assets/checked.png";
import "./ToDo.css";

export default function ToDoItem({ text, isCompleted, id, removeTodo, toggleComplete }) {
  return (
    <div className="task-container">
      <div onClick={() => toggleComplete(id)} className="task-list">
        <img  className="unchecked" src={isCompleted ? checked : unchecked} alt="" />
        <p className={isCompleted ? "completed" : ""}>{text}</p>
      </div>
      <img
        onClick={() => {
          removeTodo(id);
        }}
        className="remove"
        src={remove}
        alt=""
      />
    </div>
  );
}
