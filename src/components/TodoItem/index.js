import React from "react";
import classes from "./style.module.scss";

const TodoItem = ({ index, todo, onChecked, onDelete }) => {
  const onCheckedTodo = () => onChecked(todo.id);
  const onDeleteTodo = () => onDelete(todo.id);

  return (
    <li className={classes.todo}>
      <p
        className={`${classes.todoValue} ${todo.done ? classes.done : ""}`}
        onClick={onCheckedTodo}>
        {index}. {todo.value}
      </p>
      <button onClick={onDeleteTodo}>Delete</button>
    </li>
  );
};

export default TodoItem;
