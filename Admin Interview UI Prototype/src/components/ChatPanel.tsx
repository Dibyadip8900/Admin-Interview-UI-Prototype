import React, { useState } from 'react';
import { Send, MessageSquare } from 'lucide-react';

interface Message {
  id: number;
  sender: 'admin' | 'candidate';
  text: string;
  timestamp: string;
}

export function ChatPanel() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: 'admin', text: 'Welcome! Feel free to ask any questions during the interview.', timestamp: '10:00' },
    { id: 2, sender: 'candidate', text: 'Thank you! I\'m ready to begin.', timestamp: '10:01' },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        sender: 'admin',
        text: inputValue,
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };

  return (
    <div className="h-72 flex flex-col">
      {/* Chat Header */}
      <div className="px-4 py-3 border-b border-slate-800 flex items-center gap-2">
        <MessageSquare className="w-4 h-4 text-slate-400" />
        <h3 className="text-white">Chat</h3>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex flex-col ${message.sender === 'admin' ? 'items-end' : 'items-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg px-3 py-2 ${
                message.sender === 'admin'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800 text-slate-200'
              }`}
            >
              <div className="text-sm">{message.text}</div>
            </div>
            <div className="text-xs text-slate-500 mt-1">{message.timestamp}</div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-3 border-t border-slate-800">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type a message..."
            className="flex-1 bg-slate-800 text-white px-3 py-2 rounded text-sm outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center gap-2 transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
