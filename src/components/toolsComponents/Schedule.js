import React, {useState} from 'react';
import '../../main.css';

function Schedule() {
  const [monday, setMonday] = useState([]);
  const [tuesday, setTuesday] = useState([]);
  const [wednesday, setWednesday] = useState([]);
  const [thursday, setThursday] = useState([]);
  const [friday, setFriday] = useState([]);

  const [mondayInput, setMondayInput] = useState("");
  const [tuesdayInput, setTuesdayInput] = useState("");
  const [wednesdayInput, setWednesdayInput] = useState("");
  const [thursdayInput, setThursdayInput] = useState("");
  const [fridayInput, setFridayInput] = useState("");

  const handleAddMonday = () => {
    setMonday([...monday, mondayInput]);
    setMondayInput("");
  };

  const handleAddTuesday = () => {
    setTuesday([...tuesday, tuesdayInput]);
    setTuesdayInput("");
  };

  const handleAddWednesday = () => {
    setWednesday([...wednesday, wednesdayInput]);
    setWednesdayInput("");
  };

  const handleAddThursday = () => {
    setThursday([...thursday, thursdayInput]);
    setThursdayInput("");
  };

  const handleAddFriday = () => {
    setFriday([...friday, fridayInput]);
    setFridayInput("");
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>월요일</th>
            <th>화요일</th>
            <th>수요일</th>
            <th>목요일</th>
            <th>금요일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                value={mondayInput}
                onChange={(e) => setMondayInput(e.target.value)}
              />
              <button onClick={handleAddMonday}>Add</button>
              <ol>
                {monday.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
            </td>
            <td>
              <input
                type="text"
                value={tuesdayInput}
                onChange={(e) => setTuesdayInput(e.target.value)}
              />
              <button onClick={handleAddTuesday}>Add</button>
              <ol>
                {tuesday.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
            </td>
            <td>
              <input
                type="text"
                value={wednesdayInput}
                onChange={(e) => setWednesdayInput(e.target.value)}
              />
              <button onClick={handleAddWednesday}>Add</button>
              <ol>
                {wednesday.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
            </td>
            <td>
              <input
                type="text"
                value={thursdayInput}
                onChange={(e) => setThursdayInput(e.target.value)}
              />
              <button onClick={handleAddThursday}>Add</button>
              <ol>
                {thursday.map((item, index) => (
                  <li key={index}>{item}</li>
                  ))}
                </ol>
              </td>
              <td>
              <input
                type="text"
                value={fridayInput}
                onChange={(e) => setFridayInput(e.target.value)}
              />
              <button onClick={handleAddFriday}>Add</button>
              <ol>
                {friday.map((item, index) => (
                  <li key={index}>{item}</li>
                  ))}
                </ol>
              </td>
              </tr>
              </tbody>
              </table>
              </div>
  );}

export default Schedule;
