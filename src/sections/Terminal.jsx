import React, { useState, useEffect } from 'react';

const FloatingTerminalInput = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [command, setCommand] = useState('');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  
  const placeholders = [
    "Type a command...",
    "Ask me anything...",
    "Need assistance?",    
    "Try 'help' for options"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTyping) {
        setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
      }
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isTyping]);

  const handleFocus = () => {
    setIsExpanded(true);
    setIsTyping(true);
  };

  const handleBlur = () => {
    if (!command.trim()) {
      setIsExpanded(false);
      setIsTyping(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = command.trim();
    if (!input) return;
    
    window.open("https://terminal.agrawalvansh.me/", '_blank');
    setCommand('');
    setIsExpanded(false);
  };

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 sm:px-0 w-full sm:w-auto">
      <div 
        className={`
          relative transition-all duration-500 
          ease-[cubic-bezier(0.34,1.56,0.64,1)] 
          hover:scale-[1.02] transform-gpu
          w-full
          ${isExpanded ? 'sm:w-[400px]' : 'sm:w-[300px]'}
          max-w-[95vw]
        `}
      >
        {/* Terminal top decoration */}
        <div className="flex justify-center mb-1.5">
          <div className="h-1 w-16 rounded-full bg-[#ffffff30] hover:bg-[#ffffff50] transition-colors"></div>
        </div>
        
        {/* Terminal body */}
        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl group">
          {/* Animated Glow effect */}
          <div className="absolute inset-0 bg-gradient-animate bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-xl sm:rounded-2xl"></div>
          
          {/* Glass terminal container */}
          <div className="
            relative bg-[#0d1117]/90 backdrop-blur-xl 
            border border-[#30363d]/50 rounded-xl sm:rounded-2xl
            shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden
            transition-all duration-300
            group-hover:border-[#30363d]/80
          ">
            {/* Terminal header */}
            <div className="
              flex items-center px-3 sm:px-4 py-2 sm:py-2.5
              bg-gradient-to-r from-[#1a1f27] to-[#161b22] 
              border-b border-[#30363d]/50
            ">
              <div className="flex space-x-1.5 mr-3">
                <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff7b74] transition-colors"></div>
                <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffcd45] transition-colors"></div>
                <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#27c93f] hover:bg-[#3ed955] transition-colors"></div>
              </div>
              <div className="
                text-[10px] sm:text-xs text-white-50 font-mono tracking-wider
                bg-gradient-to-r from-blue-400 to-purple-400 
                bg-clip-text
                truncate
              ">
                Vansh's Assistant Terminal
              </div>
            </div>
            
            {/* Command input */}
            <form onSubmit={handleSubmit} className="relative">
              <div className="flex items-center px-3 group">
                <div className="text-green-400 font-mono mr-2 animate-pulse">{'>'}</div>
                <input
                  type="text"
                  value={command}
                  onChange={(e) => setCommand(e.target.value)}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="
                    flex-1 bg-transparent text-gray-200 
                    font-mono text-xs sm:text-sm placeholder:text-gray-500 
                    focus:outline-none transition-all duration-300
                    focus:placeholder:text-gray-400
                  "
                  placeholder={placeholders[placeholderIndex]}
                  aria-label="Terminal command input"
                />
                <button
                  type="submit"
                  className="
                    ml-2 flex items-center justify-center 
                    w-7 h-7 sm:w-8 sm:h-8 rounded-full 
                    bg-gradient-to-r from-blue-600 to-purple-600 
                    hover:from-blue-500 hover:to-purple-500 
                    transition-all duration-300 group
                    transform hover:scale-110 active:scale-95
                    shadow-lg hover:shadow-xl
                  "
                  aria-label="Execute command"
                >
                  <svg 
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:scale-110 transition-transform" 
                    viewBox="0 0 24 24" 
                    fill="none"
                  >
                    <path 
                      d="M5 12H19M19 12L13 6M19 12L13 18" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Floating animation */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className={`
              absolute w-[120%] h-[120%] 
              rounded-full bg-gradient-animate
              bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 
              blur-xl animate-pulse
              ${isExpanded ? 'scale-125' : 'scale-100'}
              transition-all duration-700
            `}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingTerminalInput;