import React, { useState } from 'react';
import { Save, Clock } from 'lucide-react';

export function Notes() {
  const [notes, setNotes] = useState(`Technical Skills:
- Good understanding of string manipulation
- Clean code structure
- Proper testing approach

Communication:
- Clear explanation of thought process
- Asks relevant questions

Areas to Improve:
- Could optimize time complexity further`);

  const [lastSaved, setLastSaved] = useState('2 minutes ago');

  const handleSave = () => {
    setLastSaved('Just now');
    alert('Notes saved successfully');
  };

  return (
    <div className="h-full flex flex-col">
      <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
        <span className="text-gray-900">Interview Notes</span>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-white text-sm transition-colors"
        >
          <Save className="w-4 h-4" />
          Save
        </button>
      </div>

      <div className="flex-1 overflow-auto p-4">
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full h-full bg-gray-50 text-gray-900 border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          placeholder="Add your notes about the candidate's performance..."
        />
      </div>

      <div className="px-4 py-3 border-t border-gray-200 flex items-center gap-2 text-xs text-gray-600">
        <Clock className="w-3 h-3" />
        Last saved: {lastSaved}
      </div>
    </div>
  );
}