import React, { useState } from 'react';
import { Plus, Clock, ChevronDown, ChevronRight } from 'lucide-react';

interface Question {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  time: string;
  status: 'active' | 'completed' | 'pending';
  statement: string;
}

export function Questions() {
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
      statement: 'Implement inorder, preorder, and postorder traversal for a binary tree.'
    },
    {
      id: 3,
      title: 'System Design: Chat Application',
      difficulty: 'Hard',
      time: '00:00',
      status: 'pending',
      statement: 'Design a scalable real-time chat application.'
    }
  ]);

  const [expandedQuestion, setExpandedQuestion] = useState<number>(1);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-500 text-white';
      case 'Medium': return 'bg-yellow-500 text-white';
      case 'Hard': return 'bg-red-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
        <span className="text-gray-900">Interview Questions</span>
        <button className="text-blue-600 hover:text-blue-700 transition-colors">
          <Plus className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-auto">
        {questions.map((question) => (
          <div key={question.id} className="border-b border-gray-200">
            <button
              onClick={() => setExpandedQuestion(expandedQuestion === question.id ? 0 : question.id)}
              className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                question.status === 'active' ? 'bg-blue-50' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="text-gray-900 text-sm mb-2">{question.title}</div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs px-2 py-0.5 rounded ${getDifficultyColor(question.difficulty)}`}>
                      {question.difficulty}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-gray-600">
                      <Clock className="w-3 h-3" />
                      {question.time}
                    </div>
                  </div>
                </div>
                {question.status === 'active' && (
                  <div className="px-2 py-1 bg-blue-600 text-white rounded text-xs ml-2">
                    Active
                  </div>
                )}
              </div>
            </button>

            {expandedQuestion === question.id && (
              <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
                <div className="text-gray-600 text-xs mb-2">Problem Statement</div>
                <div className="text-gray-700 text-sm leading-relaxed">
                  {question.statement}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}