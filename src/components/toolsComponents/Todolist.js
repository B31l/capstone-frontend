import React, { useState } from 'react';

function Todolist() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const InputChange = (event) => {
    setInputValue(event.target.value);
  };

  const AddTodo = () => {
    if (inputValue) {
      setTodos([...todos, {text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const DeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const DoubleClickTodo = (index) => {
    DeleteTodo(index);
  };

  const ToggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div class="todolist">
      <h2>My To Do Lists</h2>
      <input value={inputValue} onChange={InputChange} />
      <button onClick={AddTodo}>추가</button>
      <ul>
        {todos.map((todo, index) => (
          <li className="lists" key={index} onDoubleClick={() =>DoubleClickTodo(index)} >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => ToggleTodo(index)}
            />
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
