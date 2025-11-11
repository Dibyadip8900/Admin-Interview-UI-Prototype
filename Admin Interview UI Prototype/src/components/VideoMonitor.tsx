import React from 'react';
import { Eye, CheckCircle2, Maximize, Minimize, User, Wifi } from 'lucide-react';

interface VideoMonitorProps {
  isVerified: boolean;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export function VideoMonitor({ isVerified, isFullscreen, onToggleFullscreen }: VideoMonitorProps) {
  const [faceDetected, setFaceDetected] = React.useState(true);

  return (
    <div className="bg-slate-900 rounded-lg border border-slate-800 overflow-hidden flex flex-col">
      {/* Video Feed */}
      <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 aspect-video flex items-center justify-center">
        {/* Placeholder for video */}
        <div className="relative">
          <div className="w-32 h-32 rounded-full bg-slate-700 flex items-center justify-center">
            <User className="w-16 h-16 text-slate-500" />
          </div>
          {faceDetected && (
            <div className="absolute inset-0 border-2 border-green-500 rounded-full" />
          )}
        </div>

        {/* AI Detection Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <div className="px-2 py-1 bg-green-900/90 text-green-300 rounded text-xs flex items-center gap-1.5">
            <Eye className="w-3 h-3" />
            YOLO: Face Detected
          </div>
          <div className={`px-2 py-1 rounded text-xs flex items-center gap-1.5 ${
            isVerified ? 'bg-blue-900/90 text-blue-300' : 'bg-red-900/90 text-red-300'
          }`}>
            <CheckCircle2 className="w-3 h-3" />
            FaceNet: {isVerified ? 'Verified' : 'Not Verified'}
          </div>
        </div>

        {/* Recording Badge */}
        <div className="absolute top-3 right-3 px-2 py-1 bg-red-900/90 text-red-300 rounded text-xs flex items-center gap-1.5">
          <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
          REC
        </div>

        {/* Fullscreen Toggle */}
        <button
          onClick={onToggleFullscreen}
          className="absolute bottom-3 right-3 p-2 bg-slate-900/90 hover:bg-slate-800/90 rounded transition-colors"
          title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
        >
          {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
        </button>

        {/* Candidate Info */}
        <div className="absolute bottom-3 left-3 px-3 py-1 bg-slate-900/90 rounded text-sm">
          <div className="text-white">Sarah Johnson</div>
          <div className="text-slate-400 text-xs">Full Stack Developer</div>
        </div>
      </div>
    </div>
  );
}
