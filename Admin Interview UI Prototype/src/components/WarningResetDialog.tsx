import React, { useState } from 'react';
import { AlertTriangle, X } from 'lucide-react';

interface WarningResetDialogProps {
  currentWarnings: number;
  onConfirm: (explanation: string) => void;
  onCancel: () => void;
}

export function WarningResetDialog({ currentWarnings, onConfirm, onCancel }: WarningResetDialogProps) {
  const [explanation, setExplanation] = useState('');

  const handleConfirm = () => {
    if (explanation.trim().length < 10) {
      alert('Please provide a detailed explanation (at least 10 characters)');
      return;
    }
    onConfirm(explanation);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg border border-gray-300 shadow-xl w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-gray-900">Reset Security Warnings</h3>
              <p className="text-gray-600 text-sm">Current warnings: {currentWarnings}</p>
            </div>
          </div>
          <button
            onClick={onCancel}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-4 space-y-4">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-yellow-800">
                <p className="mb-2">This action will be recorded in the session logs.</p>
                <p>Please provide a detailed explanation for resetting the warnings. This will be available for review during evaluation.</p>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-2">
              Explanation <span className="text-red-500">*</span>
            </label>
            <textarea
              value={explanation}
              onChange={(e) => setExplanation(e.target.value)}
              placeholder="Example: Warnings were caused by technical issues with candidate's setup, not by suspicious activity. Candidate adjusted their camera position and the issue is now resolved."
              className="w-full bg-gray-50 text-gray-900 border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              rows={5}
            />
            <div className="text-xs text-gray-500 mt-1">
              {explanation.length} / 500 characters (minimum 10 required)
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-600 border border-gray-200">
            <div className="mb-1">📝 This reset will be recorded with:</div>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Timestamp: {new Date().toLocaleString()}</li>
              <li>Admin ID: admin@interviewpro.com</li>
              <li>Previous warning count: {currentWarnings}</li>
              <li>Your explanation</li>
            </ul>
          </div>
        </div>

        {/* Actions */}
        <div className="px-6 py-4 border-t border-gray-200 flex gap-3 justify-end">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            disabled={explanation.trim().length < 10}
            className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
          >
            Confirm Reset
          </button>
        </div>
      </div>
    </div>
  );
}