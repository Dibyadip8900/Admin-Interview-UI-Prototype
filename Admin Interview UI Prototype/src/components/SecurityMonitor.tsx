import React from 'react';
import { Shield, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

interface SecurityMonitorProps {
  warnings: number;
  isVerified: boolean;
}

export function SecurityMonitor({ warnings, isVerified }: SecurityMonitorProps) {
  const getRiskLevel = () => {
    if (warnings === 0) return { level: 'Low', color: 'text-green-600', bg: 'bg-green-50' };
    if (warnings <= 2) return { level: 'Medium', color: 'text-yellow-600', bg: 'bg-yellow-50' };
    return { level: 'High', color: 'text-red-600', bg: 'bg-red-50' };
  };

  const risk = getRiskLevel();

  const securityEvents = [
    { id: 1, type: 'info', message: 'Face verification successful', timestamp: '00:02:15' },
    { id: 2, type: 'warning', message: 'Candidate looked away for 3 seconds', timestamp: '00:05:42' },
    { id: 3, type: 'alert', message: 'Multiple faces detected briefly', timestamp: '00:08:23' },
    { id: 4, type: 'info', message: 'Eye tracking resumed normal', timestamp: '00:08:45' },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm h-full flex flex-col overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-200">
        <h3 className="text-gray-900 flex items-center gap-2">
          <Shield className="w-5 h-5" />
          Security Monitor
        </h3>
      </div>

      <div className="flex-1 overflow-auto p-4 space-y-4">
        {/* Verification Status */}
        <div className={`p-4 rounded-lg ${isVerified ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-700">Identity Verification</span>
            {isVerified ? (
              <CheckCircle className="w-5 h-5 text-green-600" />
            ) : (
              <XCircle className="w-5 h-5 text-red-600" />
            )}
          </div>
          <div className={`${isVerified ? 'text-green-600' : 'text-red-600'}`}>
            {isVerified ? 'Verified via FaceNet' : 'Not Verified'}
          </div>
        </div>

        {/* Risk Level */}
        <div className={`p-4 rounded-lg border ${risk.bg} ${risk.color === 'text-green-600' ? 'border-green-200' : risk.color === 'text-yellow-600' ? 'border-yellow-200' : 'border-red-200'}`}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-700">Security Warnings</span>
            <AlertTriangle className={`w-5 h-5 ${risk.color}`} />
          </div>
          <div className="flex items-center justify-between">
            <span className={`text-2xl ${risk.color}`}>{warnings}</span>
            <span className={`text-sm ${risk.color}`}>Risk: {risk.level}</span>
          </div>
        </div>

        {/* AI Models Status */}
        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 space-y-2">
          <h4 className="text-gray-700 text-sm mb-3">AI Models Status</h4>
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-600">YOLO v8</span>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-600">Active</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-600">FaceNet</span>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-600">Active</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-600">Eye Tracker</span>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-600">Active</span>
            </div>
          </div>
        </div>

        {/* Recent Events */}
        <div className="space-y-2">
          <h4 className="text-gray-700 text-sm">Recent Security Events</h4>
          <div className="space-y-2">
            {securityEvents.map((event) => (
              <div key={event.id} className="p-3 bg-gray-50 rounded border border-gray-200 text-xs">
                <div className="flex items-start gap-2">
                  {event.type === 'warning' && <AlertTriangle className="w-4 h-4 text-yellow-600 flex-shrink-0" />}
                  {event.type === 'alert' && <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0" />}
                  {event.type === 'info' && <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />}
                  <div className="flex-1">
                    <div className="text-gray-700">{event.message}</div>
                    <div className="text-gray-500 mt-1">{event.timestamp}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}