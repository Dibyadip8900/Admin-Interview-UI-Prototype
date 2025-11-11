import React, { useState } from 'react';
import { CheckCircle2, Circle, Clock, ChevronRight } from 'lucide-react';

interface Question {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  duration: string;
  status: 'completed' | 'current' | 'pending';
}

export function QuestionPanel() {
  const [questions] = useState<Question[]>([
    { id: 1, title: 'Reverse a String', difficulty: 'Easy', duration: '12:34', status: 'completed' },
    { id: 2, title: 'Binary Tree Traversal', difficulty: 'Medium', duration: '00:00', status: 'current' },
    { id: 3, title: 'System Design: Chat Application', difficulty: 'Hard', duration: '00:00', status: 'pending' },
  ]);

  const [selectedQuestion, setSelectedQuestion] = useState<number>(2);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-400 bg-green-900/20';
      case 'Medium': return 'text-yellow-400 bg-yellow-900/20';
      case 'Hard': return 'text-red-400 bg-red-900/20';
      default: return 'text-slate-400 bg-slate-800';
    }
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-white">Interview Questions</h3>
        <span className="text-slate-400 text-sm">2/3 Active</span>
      </div>

      {/* Questions List */}
      <div className="space-y-2">
        {questions.map((question) => (
          <div
            key={question.id}
            onClick={() => setSelectedQuestion(question.id)}
            className={`p-3 rounded-lg cursor-pointer transition-colors ${
              selectedQuestion === question.id
                ? 'bg-blue-900/20 border border-blue-700'
                : 'bg-slate-800 hover:bg-slate-700 border border-transparent'
            }`}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-start gap-2 flex-1">
                {question.status === 'completed' ? (
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                ) : question.status === 'current' ? (
                  <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                    <div className="w-full h-full rounded-full border-2 border-blue-400 border-t-transparent animate-spin" />
                  </div>
                ) : (
                  <Circle className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                )}
                <div className="flex-1 min-w-0">
                  <div className="text-white text-sm mb-1">{question.title}</div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs px-2 py-0.5 rounded ${getDifficultyColor(question.difficulty)}`}>
                      {question.difficulty}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-slate-400">
                      <Clock className="w-3 h-3" />
                      {question.duration}
                    </div>
                  </div>
                </div>
              </div>
              <ChevronRight className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform ${
                selectedQuestion === question.id ? 'rotate-90' : ''
              }`} />
            </div>

            {/* Expanded Details */}
            {selectedQuestion === question.id && (
              <div className="mt-3 pt-3 border-t border-slate-700 space-y-2">
                <div className="text-xs text-slate-400">
                  <div className="mb-1">Problem Statement:</div>
                  <div className="text-slate-300">
                    {question.id === 1 && 'Write a function that reverses a string. The input string is given as an array of characters.'}
                    {question.id === 2 && 'Implement inorder, preorder, and postorder traversal for a binary tree. Use the whiteboard to explain your approach.'}
                    {question.id === 3 && 'Design a scalable real-time chat application. Consider user authentication, message storage, and WebSocket connections.'}
                  </div>
                </div>
                <div className="text-xs">
                  <span className="text-slate-400">Status: </span>
                  <span className={
                    question.status === 'completed' ? 'text-green-400' :
                    question.status === 'current' ? 'text-blue-400' :
                    'text-slate-400'
                  }>
                    {question.status.charAt(0).toUpperCase() + question.status.slice(1)}
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Add Question Button */}
      <button className="w-full py-2 border border-slate-700 hover:border-slate-600 rounded-lg text-slate-400 hover:text-white transition-colors text-sm">
        + Add Question
      </button>
    </div>
  );
}
