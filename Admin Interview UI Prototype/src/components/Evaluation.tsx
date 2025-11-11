import React, { useState } from 'react';
import { Star, ThumbsUp, ThumbsDown } from 'lucide-react';

export function Evaluation() {
  const [ratings, setRatings] = useState({
    technical: 4,
    problemSolving: 5,
    communication: 4,
    codeQuality: 4,
  });

  const [recommendation, setRecommendation] = useState<'hire' | 'maybe' | 'reject' | null>('hire');

  const RatingStars = ({ rating, onChange }: { rating: number; onChange: (val: number) => void }) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => onChange(star)}
            className="transition-colors"
          >
            <Star
              className={`w-5 h-5 ${
                star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
              }`}
            />
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col overflow-auto">
      <div className="px-4 py-3 border-b border-gray-200">
        <span className="text-gray-900">Candidate Evaluation</span>
      </div>

      <div className="flex-1 overflow-auto p-4 space-y-6">
        {/* Rating Categories */}
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-700 text-sm">Technical Skills</span>
              <span className="text-gray-600 text-xs">{ratings.technical}/5</span>
            </div>
            <RatingStars
              rating={ratings.technical}
              onChange={(val) => setRatings({ ...ratings, technical: val })}
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-700 text-sm">Problem Solving</span>
              <span className="text-gray-600 text-xs">{ratings.problemSolving}/5</span>
            </div>
            <RatingStars
              rating={ratings.problemSolving}
              onChange={(val) => setRatings({ ...ratings, problemSolving: val })}
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-700 text-sm">Communication</span>
              <span className="text-gray-600 text-xs">{ratings.communication}/5</span>
            </div>
            <RatingStars
              rating={ratings.communication}
              onChange={(val) => setRatings({ ...ratings, communication: val })}
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-700 text-sm">Code Quality</span>
              <span className="text-gray-600 text-xs">{ratings.codeQuality}/5</span>
            </div>
            <RatingStars
              rating={ratings.codeQuality}
              onChange={(val) => setRatings({ ...ratings, codeQuality: val })}
            />
          </div>
        </div>

        {/* Overall Score */}
        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div className="text-gray-600 text-sm mb-2">Overall Score</div>
          <div className="text-gray-900 text-3xl">
            {((ratings.technical + ratings.problemSolving + ratings.communication + ratings.codeQuality) / 4).toFixed(1)}/5
          </div>
        </div>

        {/* Recommendation */}
        <div className="space-y-3">
          <div className="text-gray-700 text-sm">Recommendation</div>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setRecommendation('hire')}
              className={`p-3 rounded-lg transition-colors border-2 ${
                recommendation === 'hire'
                  ? 'bg-green-500 text-white border-green-600'
                  : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
              }`}
            >
              <ThumbsUp className="w-5 h-5 mx-auto mb-1" />
              <div className="text-xs">Hire</div>
            </button>
            <button
              onClick={() => setRecommendation('maybe')}
              className={`p-3 rounded-lg transition-colors border-2 ${
                recommendation === 'maybe'
                  ? 'bg-yellow-500 text-white border-yellow-600'
                  : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
              }`}
            >
              <div className="text-lg mx-auto mb-1">?</div>
              <div className="text-xs">Maybe</div>
            </button>
            <button
              onClick={() => setRecommendation('reject')}
              className={`p-3 rounded-lg transition-colors border-2 ${
                recommendation === 'reject'
                  ? 'bg-red-500 text-white border-red-600'
                  : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
              }`}
            >
              <ThumbsDown className="w-5 h-5 mx-auto mb-1" />
              <div className="text-xs">Reject</div>
            </button>
          </div>
        </div>

        {/* Comments */}
        <div className="space-y-2">
          <label className="text-gray-700 text-sm">Final Comments</label>
          <textarea
            className="w-full bg-gray-50 text-gray-900 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            rows={4}
            placeholder="Add final evaluation comments..."
          />
        </div>

        <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
          Submit Evaluation
        </button>
      </div>
    </div>
  );
}