import React, { useState } from 'react';
import { TrendingUp, Award } from 'lucide-react';

export function Performance() {
  const [performanceRating, setPerformanceRating] = useState(4);
  const [quickNotes, setQuickNotes] = useState('Strong problem-solving skills');

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm h-full flex flex-col">
      <div className="px-4 py-3 border-b border-gray-200 flex items-center gap-2">
        <TrendingUp className="w-5 h-5 text-blue-600" />
        <h3 className="text-gray-900">Performance Rating</h3>
      </div>

      <div className="flex-1 overflow-auto p-4 space-y-4">
        {/* Quick Rating */}
        <div className="space-y-2">
          <label className="text-gray-700 text-sm">Overall Performance</label>
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                onClick={() => setPerformanceRating(rating)}
                className={`w-10 h-10 rounded-lg transition-colors ${
                  rating <= performanceRating
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                }`}
              >
                {rating}
              </button>
            ))}
          </div>
          <div className="text-xs text-gray-500">
            {performanceRating === 5 && 'Excellent'}
            {performanceRating === 4 && 'Good'}
            {performanceRating === 3 && 'Average'}
            {performanceRating === 2 && 'Below Average'}
            {performanceRating === 1 && 'Poor'}
          </div>
        </div>

        {/* Quick Performance Notes */}
        <div className="space-y-2">
          <label className="text-gray-700 text-sm">Quick Notes</label>
          <textarea
            value={quickNotes}
            onChange={(e) => setQuickNotes(e.target.value)}
            className="w-full bg-gray-50 text-gray-900 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            rows={3}
            placeholder="Add quick performance notes..."
          />
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-blue-50 rounded-lg">
            <div className="text-xs text-blue-600 mb-1">Problems Solved</div>
            <div className="text-xl text-blue-700">1/3</div>
          </div>
          <div className="p-3 bg-green-50 rounded-lg">
            <div className="text-xs text-green-600 mb-1">Code Quality</div>
            <div className="text-xl text-green-700">Good</div>
          </div>
        </div>

        {/* Save Button */}
        <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm flex items-center justify-center gap-2">
          <Award className="w-4 h-4" />
          Save Performance
        </button>
      </div>
    </div>
  );
}
