import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi'; 
import { FaMicrophone } from 'react-icons/fa';  
import '../css/ChatInterface.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
const ChatInterface = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isRecording, setIsRecording] = useState(false);

  const handleSend = () => {
    if (input.trim()) {
      const newMessage = { type: 'user', text: input };
      setMessages([...messages, newMessage]);
      setInput('');
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <>
  <Header/>

    <div className="chat-container">
      <div className="chat-dialogue">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-bubble ${msg.type}`}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="input-bar">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button className="mic-icon" onClick={toggleRecording}>
          <FaMicrophone />
        </button>
        <button className="send-icon" onClick={handleSend}>
          <FiSend />
        </button>
      </div>
    </div>

    <Footer></Footer>
    </>
  );
};

export default ChatInterface;
