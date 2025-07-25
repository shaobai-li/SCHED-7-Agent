import './ChatInput.css';
import { useState } from 'react';
import sendButton from './icons8-send-button-90.png';

export default function ChatInput({ onSendMessage }) {
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue.trim());
      setInputValue('');
    }
  }

  return (
    <div className="chat-input">
      <input
        className="input-field"
        placeholder="Ask anything"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className="chat-button-container">
        <button 
        className="send-button"
        onClick={handleSendMessage}>
          <img src={sendButton} alt="Send" width={20} height={20}/>
        </button>
      </div>
    </div>
  )
}