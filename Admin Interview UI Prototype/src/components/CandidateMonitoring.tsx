import React, { useState, useEffect } from 'react';
import { Eye, AlertTriangle, CheckCircle2, User, Wifi } from 'lucide-react';

interface CandidateMonitoringProps {
  isVerified: boolean;
  warnings: number;
  onWarningsChange: (warnings: number) => void;
}

export function CandidateMonitoring({ isVerified, warnings, onWarningsChange }: CandidateMonitoringProps) {
  const [faceDetected, setFaceDetected] = useState(true);
  const [eyeGazeStatus, setEyeGazeStatus] = useState<'focused' | 'away' | 'suspicious'>('focused');
  const [multipleFaces, setMultipleFaces] = useState(false);
  const [audioActivity, setAudioActivity] = useState(false);

  // Simulate real-time AI detection changes
  useEffect(() => {
    const interval = setInterval(() => {
      const rand = Math.random();
      
      if (rand < 0.05) {
        setEyeGazeStatus('away');
        setTimeout(() => setEyeGazeStatus('focused'), 2000);
      } else if (rand < 0.08) {
        setEyeGazeStatus('suspicious');
        onWarningsChange(warnings + 1);
        setTimeout(() => setEyeGazeStatus('focused'), 3000);
      }

      if (rand > 0.95) {
        setFaceDetected(false);
        setTimeout(() => setFaceDetected(true), 1500);
      }

      if (rand > 0.97) {
        setMultipleFaces(true);
        onWarningsChange(warnings + 1);
        setTimeout(() => setMultipleFaces(false), 2000);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [warnings, onWarningsChange]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-white">Live Candidate Monitoring</h2>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-slate-400">Live</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Main Video Feed */}
        <div className="col-span-2 relative bg-slate-800 rounded-lg overflow-hidden aspect-video">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-slate-700 flex items-center justify-center">
                <User className="w-16 h-16 text-slate-500" />
              </div>
              {/* Face Detection Overlay */}
              {faceDetected && (
                <div className="absolute inset-0 border-2 border-green-500 rounded-full animate-pulse" />
              )}
            </div>
          </div>

          {/* AI Detection Overlays */}
          <div className="absolute top-3 left-3 space-y-2">
            <div className={`px-3 py-1 rounded text-xs flex items-center gap-2 ${
              faceDetected ? 'bg-green-900/80 text-green-300' : 'bg-red-900/80 text-red-300'
            }`}>
              <Eye className="w-3 h-3" />
              YOLO: {faceDetected ? 'Face Detected' : 'No Face'}
            </div>
            
            <div className={`px-3 py-1 rounded text-xs flex items-center gap-2 ${
              isVerified ? 'bg-green-900/80 text-green-300' : 'bg-red-900/80 text-red-300'
            }`}>
              <CheckCircle2 className="w-3 h-3" />
              FaceNet: {isVerified ? 'Verified' : 'Not Verified'}
            </div>

            <div className={`px-3 py-1 rounded text-xs flex items-center gap-2 ${
              eyeGazeStatus === 'focused' ? 'bg-blue-900/80 text-blue-300' :
              eyeGazeStatus === 'away' ? 'bg-yellow-900/80 text-yellow-300' :
              'bg-red-900/80 text-red-300'
            }`}>
              <Eye className="w-3 h-3" />
              Gaze: {eyeGazeStatus === 'focused' ? 'On Screen' : eyeGazeStatus === 'away' ? 'Looking Away' : 'Suspicious'}
            </div>

            {multipleFaces && (
              <div className="px-3 py-1 rounded text-xs bg-red-900/80 text-red-300 flex items-center gap-2 animate-pulse">
                <AlertTriangle className="w-3 h-3" />
                Multiple Faces Detected!
              </div>
            )}
          </div>

          {/* Connection Status */}
          <div className="absolute top-3 right-3">
            <div className="px-3 py-1 rounded text-xs bg-green-900/80 text-green-300 flex items-center gap-2">
              <Wifi className="w-3 h-3" />
              Connected
            </div>
          </div>

          {/* Recording Indicator */}
          <div className="absolute bottom-3 left-3">
            <div className="px-3 py-1 rounded text-xs bg-red-900/80 text-red-300 flex items-center gap-2">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
              Recording
            </div>
          </div>

          <div className="absolute bottom-3 right-3 px-3 py-1 rounded text-xs bg-slate-900/80 text-white">
            Sarah Johnson (Candidate)
          </div>
        </div>

        {/* Audio Monitoring */}
        <div className="bg-slate-800 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400 text-sm">Audio Activity</span>
            <div className={`w-2 h-2 rounded-full ${audioActivity ? 'bg-green-500' : 'bg-slate-600'}`} />
          </div>
          <div className="space-y-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="h-1 bg-slate-700 rounded overflow-hidden">
                <div 
                  className="h-full bg-green-500 transition-all duration-300"
                  style={{ width: `${Math.random() * 100}%` }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Screen Activity */}
        <div className="bg-slate-800 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400 text-sm">Tab Switches</span>
            <span className="text-white">0</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-400 text-sm">Copy/Paste</span>
            <span className="text-white">1</span>
          </div>
        </div>
      </div>
    </div>
  );
}
