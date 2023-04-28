import React, { useState } from 'react';

function Todolist() {
  const [todos, setTodos] = useState([
    { id: 1, title: '정처기 1장 끝내기', completed: false },
    { id: 2, title: '알고리즘 학습하기', completed: true },
    { id: 3, title: 'React 공부', completed: false },
  ]);

  const handleToggle = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div class="todolist">
      <h2>My To Do List</h2>
      {todos.map((todo) => (
        <div key={todo.id}>
          <input type="checkbox" checked={todo.completed} onChange={() => handleToggle(todo.id)} />
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.title}</span>
        </div>
      ))}
    </div>
  );
}

export default Todolist;
