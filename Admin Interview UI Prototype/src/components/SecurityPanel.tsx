import React, { useState, useEffect } from 'react';
import { Shield, AlertTriangle, CheckCircle, XCircle, Activity, Eye } from 'lucide-react';

interface SecurityPanelProps {
  isVerified: boolean;
  warnings: number;
  onVerificationToggle: () => void;
}

interface SecurityEvent {
  id: number;
  type: 'warning' | 'info' | 'alert';
  message: string;
  timestamp: string;
}

export function SecurityPanel({ isVerified, warnings, onVerificationToggle }: SecurityPanelProps) {
  const [securityEvents, setSecurityEvents] = useState<SecurityEvent[]>([
    { id: 1, type: 'info', message: 'Face verification successful', timestamp: '10:02:15' },
    { id: 2, type: 'warning', message: 'Candidate looked away for 3 seconds', timestamp: '10:05:42' },
    { id: 3, type: 'alert', message: 'Multiple faces detected', timestamp: '10:08:23' },
  ]);

  const [aiConfidence, setAiConfidence] = useState(98);
  const [attentionScore, setAttentionScore] = useState(94);

  useEffect(() => {
    const interval = setInterval(() => {
      setAiConfidence(95 + Math.floor(Math.random() * 5));
      setAttentionScore(90 + Math.floor(Math.random() * 10));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getRiskLevel = () => {
    if (warnings === 0) return { level: 'Low', color: 'text-green-400', bg: 'bg-green-900/20' };
    if (warnings <= 2) return { level: 'Medium', color: 'text-yellow-400', bg: 'bg-yellow-900/20' };
    return { level: 'High', color: 'text-red-400', bg: 'bg-red-900/20' };
  };

  const risk = getRiskLevel();

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-white flex items-center gap-2">
          <Shield className="w-5 h-5" />
          Security Monitor
        </h2>
      </div>

      {/* Verification Status */}
      <div className={`p-4 rounded-lg ${isVerified ? 'bg-green-900/20' : 'bg-red-900/20'}`}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-slate-300">Identity Verification</span>
          {isVerified ? (
            <CheckCircle className="w-5 h-5 text-green-400" />
          ) : (
            <XCircle className="w-5 h-5 text-red-400" />
          )}
        </div>
        <div className={`${isVerified ? 'text-green-400' : 'text-red-400'}`}>
          {isVerified ? 'Verified via FaceNet' : 'Not Verified'}
        </div>
      </div>

      {/* Warnings Counter */}
      <div className={`p-4 rounded-lg ${risk.bg}`}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-slate-300">Security Warnings</span>
          <AlertTriangle className={`w-5 h-5 ${risk.color}`} />
        </div>
        <div className="flex items-center justify-between">
          <span className={`text-2xl ${risk.color}`}>{warnings}</span>
          <span className={`text-sm ${risk.color}`}>Risk: {risk.level}</span>
        </div>
      </div>

      {/* AI Confidence Metrics */}
      <div className="space-y-3">
        <div className="p-3 bg-slate-800 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400 text-sm">AI Confidence</span>
            <span className="text-white">{aiConfidence}%</span>
          </div>
          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-500 transition-all duration-300"
              style={{ width: `${aiConfidence}%` }}
            />
          </div>
        </div>

        <div className="p-3 bg-slate-800 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400 text-sm">Attention Score</span>
            <span className="text-white">{attentionScore}%</span>
          </div>
          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-green-500 transition-all duration-300"
              style={{ width: `${attentionScore}%` }}
            />
          </div>
        </div>
      </div>

      {/* Real-time Detection Status */}
      <div className="p-4 bg-slate-800 rounded-lg space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-slate-400 text-sm">Face Detection (YOLO)</span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-400 text-sm">Active</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-slate-400 text-sm">Face Verification (FaceNet)</span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-400 text-sm">Active</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-slate-400 text-sm">Eye Gaze Tracking</span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-400 text-sm">Active</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-slate-400 text-sm">Audio Monitoring</span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-400 text-sm">Active</span>
          </div>
        </div>
      </div>

      {/* Security Events Log */}
      <div className="space-y-2">
        <h3 className="text-slate-300 text-sm flex items-center gap-2">
          <Activity className="w-4 h-4" />
          Recent Events
        </h3>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {securityEvents.map((event) => (
            <div key={event.id} className="p-3 bg-slate-800 rounded text-xs">
              <div className="flex items-start gap-2">
                {event.type === 'warning' && <AlertTriangle className="w-4 h-4 text-yellow-400 flex-shrink-0" />}
                {event.type === 'alert' && <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0" />}
                {event.type === 'info' && <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />}
                <div className="flex-1 min-w-0">
                  <div className="text-slate-300">{event.message}</div>
                  <div className="text-slate-500 mt-1">{event.timestamp}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
