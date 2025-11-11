import React, { useState } from 'react';
import { Plus, Clock, CheckCircle, Circle, HelpCircle } from 'lucide-react';

interface Question {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  time: string;
  status: 'active' | 'completed' | 'pending';
  statement: string;
}

export function QuestionsPanel() {
  const [questions] = useState<Question[]>([
    {
      id: 1,
      title: 'Reverse a String',
      difficulty: 'Easy',
      time: '12:34',
      status: 'active',
      statement: 'Write a function that reverses a string. The input string is given as an array of characters. You must do this by modifying the input array in-place with O(1) extra memory.'
    },
    {
      id: 2,
      title: 'Binary Tree Traversal',
      difficulty: 'Medium',
      time: '00:00',
      status: 'pending',
      statement: 'Implement inorder, preorder, and postorder traversal for a binary tree. Use the whiteboard to explain your approach.'
    },
    {
      id: 3,
      title: 'System Design: Chat Application',
      difficulty: 'Hard',
      time: '00:00',
      status: 'pending',
      statement: 'Design a scalable real-time chat application. Consider user authentication, message storage, and WebSocket connections.'
    }
  ]);

  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(1);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-400 bg-green-900/30';
      case 'Medium': return 'text-yellow-400 bg-yellow-900/30';
      case 'Hard': return 'text-red-400 bg-red-900/30';
      default: return 'text-slate-400 bg-slate-800';
    }
  };

  return (
    <div className="h-full flex flex-col bg-slate-900">
      {/* Header */}
      <div className="px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <h3 className="text-white">Questions</h3>
      </div>

      {/* Interview Questions Title */}
      <div className="px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <span className="text-white">Interview Questions</span>
        <button className="text-white hover:text-blue-400 transition-colors">
          <Plus className="w-5 h-5" />
        </button>
      </div>

      {/* Questions List */}
      <div className="flex-1 overflow-y-auto">
        {questions.map((question) => (
          <div
            key={question.id}
            className="border-b border-slate-800"
          >
            <button
              onClick={() => setExpandedQuestion(expandedQuestion === question.id ? null : question.id)}
              className={`w-full px-4 py-3 text-left hover:bg-slate-800/50 transition-colors ${
                question.status === 'active' ? 'bg-blue-900/10' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="text-white mb-1">{question.title}</div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs px-2 py-0.5 rounded ${getDifficultyColor(question.difficulty)}`}>
                      {question.difficulty}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-slate-400">
                      <Clock className="w-3 h-3" />
                      {question.time}
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0 ml-2">
                  {question.status === 'active' ? (
                    <div className="px-2 py-1 bg-blue-900/30 text-blue-400 rounded text-xs">
                      Active
                    </div>
                  ) : question.status === 'completed' ? (
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  ) : (
                    <Circle className="w-5 h-5 text-slate-600" />
                  )}
                </div>
              </div>
            </button>

            {/* Expanded Problem Statement */}
            {expandedQuestion === question.id && (
              <div className="px-4 py-3 bg-slate-950 border-t border-slate-800">
                <div className="text-slate-400 text-xs mb-2">Problem Statement</div>
                <div className="text-slate-300 text-sm leading-relaxed">
                  {question.statement}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Notes Section */}
      <div className="border-t border-slate-800 p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-slate-400 text-sm">Interview Notes</span>
        </div>
        <textarea
          className="w-full bg-slate-800 text-slate-300 rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          rows={3}
          placeholder="Add notes about candidate performance..."
        />
      </div>
    </div>
  );
}
