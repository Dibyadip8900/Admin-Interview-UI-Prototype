import React from 'react';
import { Copy } from 'lucide-react';

export function CodeEditor() {
  const code = `// Candidate's Code (Real-time View)
function reverseString(str) {
  // Your implementation
  return str.split('').reverse().join('');
}

// Test cases
console.log(reverseString("hello")); // Expected: "olleh"`;

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm h-full flex flex-col">
      {/* Header */}
      <div className="px-4 py-2 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <select className="bg-gray-100 text-gray-900 px-3 py-1 rounded text-sm outline-none border border-gray-300">
            <option>JavaScript</option>
            <option>Python</option>
            <option>Java</option>
          </select>
          <span className="text-gray-600 text-sm">Problem: Reverse a String</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded text-gray-700 flex items-center gap-2 text-sm transition-colors">
            <Copy className="w-3 h-3" />
            Copy Code
          </button>
          <span className="text-gray-400 text-sm">|</span>
          <span className="text-gray-600 text-sm">Last Updated: 2s ago</span>
        </div>
      </div>

      {/* Code Content */}
      <div className="flex-1 overflow-auto font-mono text-sm">
        {code.split('\n').map((line, index) => (
          <div key={index} className="flex hover:bg-gray-50">
            <div className="w-12 text-gray-400 text-right pr-4 py-1 select-none flex-shrink-0 bg-gray-50">
              {index + 1}
            </div>
            <div className="flex-1 py-1 pr-4">
              <pre className="text-gray-700">
                <code>
                  {line.includes('//') ? (
                    <span className="text-gray-500">{line}</span>
                  ) : line.includes('function') ? (
                    <span>
                      <span className="text-purple-600">function </span>
                      <span className="text-blue-600">reverseString</span>
                      <span className="text-orange-600">(str)</span>
                      {' {'}
                    </span>
                  ) : line.includes('return') ? (
                    <span>
                      {'  '}
                      <span className="text-pink-600">return </span>
                      <span>str.split(</span>
                      <span className="text-green-600">''</span>
                      <span>).reverse().join(</span>
                      <span className="text-green-600">''</span>
                      <span>);</span>
                    </span>
                  ) : line.includes('console.log') ? (
                    <span>
                      <span className="text-yellow-600">console</span>
                      <span>.log(</span>
                      <span className="text-blue-600">reverseString</span>
                      <span>(</span>
                      <span className="text-green-600">"hello"</span>
                      <span>)); </span>
                      <span className="text-gray-500">// Expected: "olleh"</span>
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
  );
}