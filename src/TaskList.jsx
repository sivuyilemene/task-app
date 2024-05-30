import React from "react";

function TaskList({ tasks, toggleTaskCompletion }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li
          key={index}
          onClick={() => toggleTaskCompletion(index)}
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
        >
          {task.text}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
