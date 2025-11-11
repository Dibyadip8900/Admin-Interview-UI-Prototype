import React, { useState, useEffect } from 'react';
import { Copy, Eye, Play } from 'lucide-react';

export function CodeViewer() {
  const [code, setCode] = useState(`function reverseString(str) {
  // Your implementation
  return str;
}

// Test cases
console.log(reverseString("hello")); // Expected: "olleh"`);

  const [linesChanged, setLinesChanged] = useState(0);
  const [keystrokes, setKeystrokes] = useState(145);

  // Simulate typing activity
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setKeystrokes(prev => prev + 1);
        setLinesChanged(prev => prev + (Math.random() > 0.9 ? 1 : 0));
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full flex flex-col bg-slate-950">
      {/* Code Header */}
      <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4 text-slate-400" />
            <span className="text-slate-400 text-sm">Real-time Code View</span>
          </div>
          <div className="text-slate-500 text-sm">
            Language: <span className="text-white">JavaScript</span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <span className="text-slate-400">Lines Changed: <span className="text-white">{linesChanged}</span></span>
          <span className="text-slate-400">Keystrokes: <span className="text-white">{keystrokes}</span></span>
        </div>
      </div>

      {/* Problem Statement */}
      <div className="bg-slate-900 px-4 py-3 border-b border-slate-800">
        <div className="text-slate-400 text-sm mb-1">Current Problem:</div>
        <div className="text-white">Reverse a String</div>
      </div>

      {/* Code Editor */}
      <div className="flex-1 overflow-auto">
        <div className="font-mono text-sm">
          {code.split('\n').map((line, index) => (
            <div key={index} className="flex hover:bg-slate-900/50">
              <div className="w-12 text-slate-600 text-right pr-4 py-1 select-none flex-shrink-0">
                {index + 1}
              </div>
              <div className="flex-1 py-1 pr-4">
                <code className="text-slate-300">
                  {line.includes('function') && (
                    <span className="text-purple-400">function </span>
                  )}
                  {line.includes('return') && !line.includes('function') && (
                    <span className="text-pink-400">return </span>
                  )}
                  {line.includes('console.log') && (
                    <span className="text-yellow-400">console.log</span>
                  )}
                  {line.includes('//') && (
                    <span className="text-slate-500">{line}</span>
                  )}
                  {!line.includes('//') && 
                   !line.includes('function') && 
                   !line.includes('return') && 
                   !line.includes('console.log') && line}
                </code>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Output Section */}
      <div className="border-t border-slate-800 bg-slate-900">
        <div className="px-4 py-2 border-b border-slate-800 flex items-center justify-between">
          <span className="text-slate-400 text-sm">Output</span>
          <button className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-sm flex items-center gap-2">
            <Play className="w-3 h-3" />
            Run Code
          </button>
        </div>
        <div className="px-4 py-3 font-mono text-sm">
          <div className="text-green-400">{'>'} Ready to run</div>
          <div className="text-slate-500 mt-1">Click "Run Code" to see output</div>
        </div>
      </div>

      {/* Activity Indicators */}
      <div className="border-t border-slate-800 bg-slate-900 px-4 py-2">
        <div className="flex items-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-slate-400">Candidate actively coding</span>
          </div>
          <div className="text-slate-400">Last activity: <span className="text-white">2s ago</span></div>
        </div>
      </div>
    </div>
  );
}
