import React, { useState, useEffect } from 'react';
import { Wifi, Clock, Activity, Code } from 'lucide-react';

export function InterviewMetrics() {
  const [metrics, setMetrics] = useState({
    network: 'Excellent',
    latency: '32ms',
    duration: 0,
    codeCompletions: 1,
    whiteboardUsage: 3,
    candidateActivity: 'Active'
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        duration: prev.duration + 1,
        latency: `${28 + Math.floor(Math.random() * 10)}ms`
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="grid grid-cols-6 gap-4">
      {/* Connection Quality */}
      <div className="bg-slate-900 rounded-lg p-3">
        <div className="flex items-center gap-2 mb-2">
          <Wifi className="w-4 h-4 text-green-400" />
          <span className="text-slate-400 text-sm">Network</span>
        </div>
        <div className="text-white">{metrics.network}</div>
        <div className="text-slate-500 text-xs mt-1">{metrics.latency}</div>
      </div>

      {/* Interview Duration */}
      <div className="bg-slate-900 rounded-lg p-3">
        <div className="flex items-center gap-2 mb-2">
          <Clock className="w-4 h-4 text-blue-400" />
          <span className="text-slate-400 text-sm">Duration</span>
        </div>
        <div className="text-white text-xl">{formatDuration(metrics.duration)}</div>
      </div>

      {/* Code Completions */}
      <div className="bg-slate-900 rounded-lg p-3">
        <div className="flex items-center gap-2 mb-2">
          <Code className="w-4 h-4 text-purple-400" />
          <span className="text-slate-400 text-sm">Problems</span>
        </div>
        <div className="text-white text-xl">{metrics.codeCompletions}/3</div>
      </div>

      {/* Whiteboard Usage */}
      <div className="bg-slate-900 rounded-lg p-3">
        <div className="flex items-center gap-2 mb-2">
          <Activity className="w-4 h-4 text-yellow-400" />
          <span className="text-slate-400 text-sm">Whiteboard</span>
        </div>
        <div className="text-white text-xl">{metrics.whiteboardUsage}</div>
        <div className="text-slate-500 text-xs mt-1">times used</div>
      </div>

      {/* Candidate Status */}
      <div className="bg-slate-900 rounded-lg p-3">
        <div className="flex items-center gap-2 mb-2">
          <Activity className="w-4 h-4 text-green-400" />
          <span className="text-slate-400 text-sm">Status</span>
        </div>
        <div className="text-green-400">{metrics.candidateActivity}</div>
      </div>

      {/* Session Info */}
      <div className="bg-slate-900 rounded-lg p-3">
        <div className="text-slate-400 text-sm mb-2">Session ID</div>
        <div className="text-white text-xs">INT-2025-4782</div>
      </div>
    </div>
  );
}
