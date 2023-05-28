import * as React from 'react';
import '../tmp.css';

export default function Groups() {
  const [clientId] = React.useState(Math.floor(new Date().getTime() / 1000));
  const [websckt, setWebsckt] = React.useState();
  const [message, setMessage] = React.useState('');
  const [messages, setMessages] = React.useState([]);
  React.useEffect(() => {
    const url = `ws://localhost:8000/ws/${clientId}`;
    const ws = new WebSocket(url);
    ws.onmessage = function (e) {
      const data = JSON.parse(e.data);
      // console.log(data, [...messages, data]);
      setMessages([...messages, data]);
    };
    ws.onopen = () => ws.send('Connect');
    setWebsckt(ws);

    return () => ws.close();
  }, [clientId]);

  const sendMessage = () => {
    websckt.send(message);
    websckt.onmessage = (e) => setMessages([...messages, JSON.parse(e.data)]);
    setMessage([]);
  };

  return (
    <div className="container">
      <h1>Chat</h1>
      <h2>your client id: {clientId} </h2>
      <div className="chat-container">
        <div className="chat">
          {messages.map((value, index) => {
            if (value.clientId === clientId) {
              return (
                <div key={index} className="my-message-container">
                  <div className="my-message">
                    <p className="client">client id : {clientId}</p>
                    <p className="message">{value.message}</p>
                  </div>
                </div>
              );
            } else {
              return (
                <div key={index} className="another-message-container">
                  <div className="another-message">
                    <p className="client">client id : {clientId}</p>
                    <p className="message">{value.message}</p>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="input-chat-container">
          <input
            className="input-chat"
            type="text"
            placeholder="Chat message ..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}></input>
          <button className="submit-chat" onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
