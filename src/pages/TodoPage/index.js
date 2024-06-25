import React, { useState } from "react";
import TodoItem from "../../components/TodoItem";
import classes from "./style.module.scss";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [isValid, setIsValid] = useState(true);
  const [value, setValue] = useState("");

  const onChangeValue = (event) => setValue(event.target.value);
  const onAddTodo = () => {
    if (!value.length) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    setTodos([
      ...todos,
      { id: todos.length + Math.random(), value, done: false },
    ]);
    setValue("");
  };

  const onDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const onChecked = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
  };

  const todoList = (
    <ul className={classes.todoList}>
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          index={index + 1}
          onChecked={onChecked}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );

  const todosCount = (
    <div className={classes.todosCount}>
      <p>total: {todos.length}</p>
      <p>done: {todos.filter((todo) => todo.done).length}</p>
    </div>
  );

  return (
    <div className={classes.todoPage}>
      <h1>To-Do List</h1>
      <div className={classes.inputContainer}>
        <input
          value={value}
          placeholder="Tap your todo"
          onChange={onChangeValue}
        />
        <button onClick={onAddTodo}>Add</button>
      </div>
      <p
        className={`${classes.validationMessage} ${
          isValid ? classes.isVisible : ""
        }`}>
        Imposible to add empty value
      </p>
      {todos.length ? (
        <React.Fragment>
          {todoList}
          {todosCount}
        </React.Fragment>
      ) : (
        <p className={classes.emtyLabel}>Todo list is empty</p>
      )}
    </div>
  );
};

export default TodoPage;
