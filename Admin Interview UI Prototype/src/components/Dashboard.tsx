import React from 'react';
import { Clock, Wifi, TrendingUp, Activity } from 'lucide-react';

interface DashboardProps {
  warnings: number;
}

export function Dashboard({ warnings }: DashboardProps) {
  return (
    <div className="bg-white rounded-lg border-2 border-gray-200 p-4 h-full shadow-sm">
      <div className="grid grid-cols-5 gap-4 h-full">
        {/* Session Duration */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3 border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-4 h-4 text-blue-600" />
            <span className="text-blue-900 text-sm">Duration</span>
          </div>
          <div className="text-blue-900 text-xl">05:23</div>
        </div>

        {/* Network Status */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-3 border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <Wifi className="w-4 h-4 text-green-600" />
            <span className="text-green-900 text-sm">Network</span>
          </div>
          <div className="text-green-900 text-xl">Stable</div>
          <div className="text-green-700 text-xs">28ms</div>
        </div>

        {/* Problems Solved */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-3 border border-purple-200">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-purple-600" />
            <span className="text-purple-900 text-sm">Progress</span>
          </div>
          <div className="text-purple-900 text-xl">1/3</div>
          <div className="text-purple-700 text-xs">Problems</div>
        </div>

        {/* Activity Status */}
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-3 border border-orange-200">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-4 h-4 text-orange-600" />
            <span className="text-orange-900 text-sm">Activity</span>
          </div>
          <div className="text-orange-900 text-xl">Active</div>
          <div className="text-orange-700 text-xs">Coding</div>
        </div>

        {/* Warnings */}
        <div className={`bg-gradient-to-br rounded-lg p-3 border ${
          warnings > 2 ? 'from-red-50 to-red-100 border-red-200' : 
          warnings > 0 ? 'from-yellow-50 to-yellow-100 border-yellow-200' : 
          'from-gray-50 to-gray-100 border-gray-200'
        }`}>
          <div className="flex items-center gap-2 mb-2">
            <Activity className={`w-4 h-4 ${
              warnings > 2 ? 'text-red-600' : 
              warnings > 0 ? 'text-yellow-600' : 
              'text-gray-600'
            }`} />
            <span className={`text-sm ${
              warnings > 2 ? 'text-red-900' : 
              warnings > 0 ? 'text-yellow-900' : 
              'text-gray-900'
            }`}>Warnings</span>
          </div>
          <div className={`text-xl ${
            warnings > 2 ? 'text-red-900' : 
            warnings > 0 ? 'text-yellow-900' : 
            'text-gray-900'
          }`}>{warnings}</div>
          <div className={`text-xs ${
            warnings > 2 ? 'text-red-700' : 
            warnings > 0 ? 'text-yellow-700' : 
            'text-gray-700'
          }`}>
            {warnings === 0 ? 'No issues' : warnings > 2 ? 'High Risk' : 'Monitor'}
          </div>
        </div>
      </div>
    </div>
  );
}
