import React from 'react';
import { Activity, Code, Eye, MessageSquare, AlertTriangle } from 'lucide-react';

export function ActivityLog() {
  const activities = [
    { id: 1, type: 'code', message: 'Started coding problem: Reverse a String', timestamp: '00:01:23', icon: Code },
    { id: 2, type: 'security', message: 'Face verification successful', timestamp: '00:02:15', icon: Eye },
    { id: 3, type: 'code', message: 'Code execution completed successfully', timestamp: '00:03:45', icon: Code },
    { id: 4, type: 'warning', message: 'Tab switch detected', timestamp: '00:05:12', icon: AlertTriangle },
    { id: 5, type: 'chat', message: 'Candidate asked a clarification question', timestamp: '00:06:30', icon: MessageSquare },
    { id: 6, type: 'warning', message: 'Eye tracking: Looking away detected', timestamp: '00:08:20', icon: AlertTriangle },
    { id: 7, type: 'code', message: 'Modified function implementation', timestamp: '00:09:15', icon: Code },
    { id: 8, type: 'security', message: 'Audio level spike detected', timestamp: '00:10:05', icon: Eye },
  ];

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'code': return 'text-blue-600 bg-blue-50';
      case 'security': return 'text-green-600 bg-green-50';
      case 'warning': return 'text-yellow-600 bg-yellow-50';
      case 'chat': return 'text-purple-600 bg-purple-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm h-full flex flex-col overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
        <h3 className="text-gray-900 flex items-center gap-2">
          <Activity className="w-5 h-5" />
          Activity Log
        </h3>
        <button className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
          Export
        </button>
      </div>

      <div className="flex-1 overflow-auto p-4">
        <div className="space-y-2">
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <div
                key={activity.id}
                className="p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded ${getActivityColor(activity.type)}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-gray-700 text-sm">{activity.message}</div>
                    <div className="text-gray-500 text-xs mt-1">{activity.timestamp}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}