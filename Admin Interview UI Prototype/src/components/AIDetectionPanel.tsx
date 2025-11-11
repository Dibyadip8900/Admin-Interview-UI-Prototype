import React, { useState, useEffect } from 'react';
import { Activity, Wifi } from 'lucide-react';

interface AIDetectionPanelProps {
  warnings: number;
  onWarningsChange: (warnings: number) => void;
}

export function AIDetectionPanel({ warnings, onWarningsChange }: AIDetectionPanelProps) {
  const [faceDetection, setFaceDetection] = useState<'Active' | 'Inactive'>('Active');
  const [faceVerification, setFaceVerification] = useState<'Match' | 'No Match'>('Match');
  const [eyeTracking, setEyeTracking] = useState<'Normal' | 'Away' | 'Suspicious'>('Normal');
  const [audioLevel, setAudioLevel] = useState(65);
  const [tabSwitches, setTabSwitches] = useState(2);
  const [network, setNetwork] = useState<'Stable' | 'Unstable'>('Stable');

  // Simulate real-time changes
  useEffect(() => {
    const interval = setInterval(() => {
      const rand = Math.random();
      
      setAudioLevel(60 + Math.floor(Math.random() * 40));
      
      if (rand < 0.05) {
        setEyeTracking('Away');
        setTimeout(() => setEyeTracking('Normal'), 2000);
      } else if (rand < 0.02) {
        setEyeTracking('Suspicious');
        onWarningsChange(warnings + 1);
        setTimeout(() => setEyeTracking('Normal'), 3000);
      }

      if (rand > 0.98) {
        setTabSwitches(prev => prev + 1);
        onWarningsChange(warnings + 1);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [warnings, onWarningsChange]);

  const getStatusColor = (status: string) => {
    if (status === 'Active' || status === 'Match' || status === 'Normal' || status === 'Stable') {
      return 'text-green-400 bg-green-900/30';
    }
    if (status === 'Away') {
      return 'text-yellow-400 bg-yellow-900/30';
    }
    return 'text-red-400 bg-red-900/30';
  };

  return (
    <div className="bg-slate-900 rounded-lg border border-slate-800 p-4">
      <h3 className="text-white mb-4">AI Detection</h3>
      
      <div className="space-y-3">
        {/* Face Detection */}
        <div className="flex items-center justify-between">
          <span className="text-slate-400 text-sm">Face Detection</span>
          <span className={`px-2 py-1 rounded text-xs ${getStatusColor(faceDetection)}`}>
            {faceDetection}
          </span>
        </div>

        {/* Face Verification */}
        <div className="flex items-center justify-between">
          <span className="text-slate-400 text-sm">Face Verification</span>
          <span className={`px-2 py-1 rounded text-xs ${getStatusColor(faceVerification)}`}>
            {faceVerification}
          </span>
        </div>

        {/* Eye Tracking */}
        <div className="flex items-center justify-between">
          <span className="text-slate-400 text-sm">Eye Tracking</span>
          <span className={`px-2 py-1 rounded text-xs ${getStatusColor(eyeTracking)}`}>
            {eyeTracking}
          </span>
        </div>

        {/* Audio Level */}
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-slate-400 text-sm">Audio Level</span>
          </div>
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-green-500 transition-all duration-300"
              style={{ width: `${audioLevel}%` }}
            />
          </div>
        </div>

        {/* Tab Switches */}
        <div className="flex items-center justify-between">
          <span className="text-slate-400 text-sm">Tab Switches</span>
          <span className={`px-2 py-1 rounded text-xs ${
            tabSwitches > 0 ? 'text-yellow-400 bg-yellow-900/30' : 'text-slate-400 bg-slate-800'
          }`}>
            {tabSwitches}
          </span>
        </div>

        {/* Network */}
        <div className="flex items-center justify-between">
          <span className="text-slate-400 text-sm">Network</span>
          <div className="flex items-center gap-2">
            <Wifi className="w-3 h-3 text-green-400" />
            <span className={`px-2 py-1 rounded text-xs ${getStatusColor(network)}`}>
              {network}
            </span>
          </div>
        </div>
      </div>

      {/* AI Model Status */}
      <div className="mt-4 pt-4 border-t border-slate-800 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-500">YOLO v8</span>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-400">Running</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-500">FaceNet</span>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-400">Running</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-500">Eye Tracker</span>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-400">Running</span>
          </div>
        </div>
      </div>
    </div>
  );
}
