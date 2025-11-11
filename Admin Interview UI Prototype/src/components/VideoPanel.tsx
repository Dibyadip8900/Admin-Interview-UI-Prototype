import React from 'react';
import { Eye, CheckCircle2, Camera } from 'lucide-react';

interface VideoPanelProps {
  isVerified: boolean;
}

export function VideoPanel({ isVerified }: VideoPanelProps) {
  return (
    <div className="bg-[#0f1629] rounded-lg border-2 border-green-500 overflow-hidden">
      <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 aspect-video flex items-center justify-center">
        {/* Camera Placeholder */}
        <Camera className="w-24 h-24 text-slate-600" />

        {/* AI Detection Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <div className="px-3 py-1 bg-green-900/90 text-green-300 rounded text-xs flex items-center gap-1.5">
            <Eye className="w-3 h-3" />
            YOLO: Face Detected
          </div>
          <div className="px-3 py-1 bg-blue-900/90 text-blue-300 rounded text-xs flex items-center gap-1.5">
            <CheckCircle2 className="w-3 h-3" />
            FaceNet: Verified
          </div>
        </div>

        {/* Recording Badge */}
        <div className="absolute top-3 right-3 px-3 py-1 bg-red-900/90 text-red-300 rounded flex items-center gap-2">
          <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
          <span>REC</span>
        </div>

        {/* Candidate Info */}
        <div className="absolute bottom-3 left-3">
          <div className="text-white">Sarah Johnson</div>
          <div className="text-slate-400 text-sm">Full Stack Developer</div>
        </div>
      </div>
    </div>
  );
}
