import * as React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../styles/todo.css'
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { Checkbox, Button, Box } from '@mui/material';


export default function Cal() {
  const [date, setDate] = React.useState(dayjs());
  const [inputValue, setInputValue] = React.useState('');
  const [todos, setTodos] = React.useState({});

  const selectedDate = dayjs(date).format('YYYY-MM-DD');

  // 날짜 변경
  const onChange = (date) => {
    setDate(date);
  };

  // input내용 변경
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // todolist추가
  const handleAddTodo = () => {
    // 빈문자열은 포함하지 않음
    if (!inputValue) return;
    // 날짜에 할일 넣기
    setTodos((prevTodos) => {
      const newTodos = { ...prevTodos };
      if (!newTodos[selectedDate]) {
        newTodos[selectedDate] = [];
      }
      newTodos[selectedDate] = [
        ...newTodos[selectedDate],
        { text: inputValue, completed: false },
      ]; // 새로운 배열을 생성해 todos 상태를 변경
      return newTodos;
    });
    setInputValue('');
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos[selectedDate]];
    newTodos.splice(index, 1);
    setTodos((prevTodos) => {
      const newTodoObj = { ...prevTodos };
      newTodoObj[selectedDate] = newTodos;
      return newTodoObj;
    });
  };

  // todo 더블클릭
  const doubleClickTodo = (index) => {
    deleteTodo(index);
  };

  // todo 완료/미완료 처리
  const handleToggleTodo = (index) => {
    setTodos((prevTodos) => {
      const newTodos = { ...prevTodos };
      newTodos[selectedDate][index].completed =
        !newTodos[selectedDate][index].completed;
      return newTodos;
    });
  };

  // 캘린더 내부에 todo 개수 넣기( 내용 넣기엔 지저분할 수도 )
  const getTileContent = ({ date, view }) => {
    const formattedDate = dayjs(date).format('YYYY-MM-DD');
    const todoCount = todos[formattedDate]?.length;
    if (view === 'month' && todoCount) {
      return <p class="dot">{todoCount}</p>;
    }
    return null;
  };

  return (
    <div style={{margin:'23px'}}>
      <h2>My To Do Lists</h2>
      <div style={{display: 'flex'}}>
      <Calendar
        locale="en-EN" //한국어 : "ko-KO"
        onChange={onChange}
        tileContent={getTileContent}
        value={date}
        calendarType="US"
      />
      {/* 캘린더 아래 내용 */}
      <div style={{marginLeft:'23px'}}>
      <TextField value={inputValue} onChange={handleInputChange} label="To-Do" variant="standard" size='small'/>
      <Button onClick={handleAddTodo} style={{margin: '10px'}}>Add Todo</Button>
      
      {todos[selectedDate] && (
        <div>
          {todos[selectedDate].map((todo, index) => (
              <li key={index} onDoubleClick={() => doubleClickTodo(index)} style={{listStyle : 'none'}}>
                <span
                  style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                  }}>
                  <Checkbox
                    checked={todo.completed}
                    onChange={() => handleToggleTodo(index)}
                  />
                  {todo.text}
                </span>
              </li>
          ))}
        </div>
      )}
    </div>
    </div>
    </div>
  );
}
