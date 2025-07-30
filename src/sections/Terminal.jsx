import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // If you're using React Router

const FloatingTerminalInput = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [command, setCommand] = useState('');
  const navigate = useNavigate(); // If you're using Vercel with pages, use `window.location.href`

  const handleFocus = () => setIsExpanded(true);

  const handleBlur = () => {
    if (!command.trim()) setIsExpanded(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = command.trim().toLowerCase();

    window.open('https://terminal.agrawalvansh.me/');
    setCommand('');
    setIsExpanded(false);
  };

  return (
    <div
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out ${isExpanded ? 'w-[355px]' : 'w-[250px]'} hover:scale-105 focus-within:hover:scale-100`}
    >
      <form onSubmit={handleSubmit} className="relative">
        <div className="mb-1 text-xs text-white text-center bg-gray-800 px-2 py-1 rounded-t-[24px] font-mono">
          {'>'} Welcome to Vansh's Assistant 👋
        </div>
        <label className="shadow-black-4 bg-[#ffffff99] relative flex w-full rounded-b-[24px] shadow-sm backdrop-blur-xl">
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="placeholder:text-white-50 text-white-50 text-nav-mobile md:text-p2 h-md pr-md mx-3 w-full bg-transparent focus:outline-none"
            placeholder="> Type a command..."
            aria-label="Floating Terminal Input"
          />
          <button
            type="submit"
            className="bg-primary-100 text-secondary-100 disabled:bg-primary-44 disabled:text-secondary-60 absolute right-2 top-2 h-8 w-8 flex-none rounded-full p-0 hover:opacity-70 disabled:hover:opacity-100"
            aria-label="Execute command"
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 22L16 10M16 10L11 15M16 10L21 15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </button>
        </label>
      </form>
    </div>
  );
};

export default FloatingTerminalInput;
