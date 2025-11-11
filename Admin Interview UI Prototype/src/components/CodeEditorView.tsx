import React, { useState } from 'react';
import { Code, Copy, Eye, Clock } from 'lucide-react';

export function CodeEditorView() {
  const [code] = useState(`// Candidate's Code (Real-time View)
function reverseString(str) {
  // Your implementation
  return str.split('').reverse().join('');
}

// Test cases
console.log(reverseString("hello")); // Expected: "olleh"`);

  return (
    <div className="bg-slate-900 rounded-lg border border-slate-800 flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <Code className="w-4 h-4 text-slate-400" />
          <span className="text-white">Code Editor</span>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-slate-400">JavaScript</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span>Problem: Reverse a String</span>
          </div>
          <button className="px-3 py-1 bg-slate-700 hover:bg-slate-600 rounded text-slate-300 flex items-center gap-2 transition-colors">
            <Copy className="w-3 h-3" />
            Copy Code
          </button>
          <span className="text-slate-500">|</span>
          <span className="text-slate-400">Last Updated: 2s ago</span>
        </div>
      </div>

      {/* Code Content */}
      <div className="flex-1 overflow-auto">
        <div className="font-mono text-sm">
          {code.split('\n').map((line, index) => (
            <div key={index} className="flex hover:bg-slate-800/50">
              <div className="w-12 text-slate-600 text-right pr-4 py-1 select-none flex-shrink-0 bg-slate-950">
                {index + 1}
              </div>
              <div className="flex-1 py-1 pr-4">
                <pre className="text-slate-300">
                  <code>
                    {line.includes('//') ? (
                      <span className="text-slate-500">{line}</span>
                    ) : line.includes('function') ? (
                      <span>
                        <span className="text-purple-400">function </span>
                        <span className="text-blue-300">reverseString</span>
                        <span className="text-yellow-300">(str)</span>
                        {' {'}
                      </span>
                    ) : line.includes('return') ? (
                      <span>
                        {'  '}
                        <span className="text-pink-400">return </span>
                        <span>str.split(</span>
                        <span className="text-green-400">''</span>
                        <span>).reverse().join(</span>
                        <span className="text-green-400">''</span>
                        <span>);</span>
                      </span>
                    ) : line.includes('console.log') ? (
                      <span>
                        <span className="text-yellow-400">console</span>
                        <span>.log(</span>
                        <span className="text-blue-300">reverseString</span>
                        <span>(</span>
                        <span className="text-green-400">"hello"</span>
                        <span>)); </span>
                        <span className="text-slate-500">// Expected: "olleh"</span>
                      </span>
                    ) : (
                      line
                    )}
                  </code>
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 px-4 py-2 flex items-center gap-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-slate-400">Candidate actively coding</span>
        </div>
        <div className="text-slate-500">|</div>
        <span className="text-slate-400">Lines: 9</span>
        <div className="text-slate-500">|</div>
        <span className="text-slate-400">Characters: 234</span>
      </div>
    </div>
  );
}
