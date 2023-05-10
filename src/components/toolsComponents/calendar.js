import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../styles/todo.css'

const Cal = () => {
  const [date, setDate] = useState(new Date());
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState({});

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const selectedDate = `${year}-${month}-${day}`;

  // 날짜 변경
  const onChange = date => {
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
      newTodos[selectedDate] = [...newTodos[selectedDate], { text: inputValue, completed: false }]; // 새로운 배열을 생성해 todos 상태를 변경
      return newTodos;
    });
    setInputValue("");
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
      newTodos[selectedDate][index].completed = !newTodos[selectedDate][index].completed;
      return newTodos;
    });
  };

  // 캘린더 내부에 todo 개수 넣기( 내용 넣기엔 지저분할 수도 )
  const getTileContent = ({ date, view }) => {
    const [year, month, day] = [date.getFullYear(), date.getMonth() + 1, date.getDate()];
    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    const todoCount = todos[formattedDate]?.length;
    if (view === 'month' && todoCount) {
      return <p class= "dot">{todoCount}</p>;
    }
    return null;
  };

  return (
    <div>
      <h2>My To Do Lists</h2>
      <Calendar
        locale="en-EN" //한국어 : "ko-KO" 
        formatDay={(locale, date) => (date, date.getDate())}
        onChange={onChange}
        tileContent={getTileContent}
        value={date}
        calendarType="US"
      />
      {/* 캘린더 아래 내용 */}
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <div className="selected-date">{selectedDate}</div>
      {todos[selectedDate] && (
        <div>
          {/* 길이 표현은 달력에 있어 굳이 표현? */}
          {/* <p> TO-DO : {todos[selectedDate].length}</p> */}
          {todos[selectedDate].map((todo, index) => (
            <ul>
            <li key={index} onDoubleClick={() =>doubleClickTodo(index)}>
                <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                <input type="checkbox" checked={todo.completed} onChange={() => handleToggleTodo(index)}/>
                {todo.text}
                </span>
            </li>
            </ul>
        ))}
        </div>
      )}
    </div>
  );
};

export default Cal;
