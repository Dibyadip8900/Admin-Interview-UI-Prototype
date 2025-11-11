import React from 'react';
import { Camera } from 'lucide-react';

interface VideoFeedProps {
  isVerified: boolean;
}

export function VideoFeed({ isVerified }: VideoFeedProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden h-full">
      <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 h-full flex items-center justify-center">
        {/* Video placeholder */}
        <div className="relative">
          <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center border-4 border-green-500">
            <Camera className="w-16 h-16 text-gray-500" />
          </div>
        </div>

        {/* Top badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <div className="px-3 py-1 bg-green-600 text-white rounded text-xs flex items-center gap-1.5 shadow-md">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
            YOLO: Face Detected
          </div>
          <div className={`px-3 py-1 rounded text-xs flex items-center gap-1.5 shadow-md ${
            isVerified ? 'bg-blue-600 text-white' : 'bg-red-600 text-white'
          }`}>
            <div className={`w-1.5 h-1.5 rounded-full ${isVerified ? 'bg-white' : 'bg-white'}`} />
            FaceNet: {isVerified ? 'Verified' : 'Not Verified'}
          </div>
        </div>

        {/* Recording indicator */}
        <div className="absolute top-3 right-3 px-3 py-1 bg-red-600 text-white rounded text-sm flex items-center gap-2 shadow-md">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          REC
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-3 left-3 bg-white/95 rounded px-3 py-2 shadow-md">
          <div className="text-gray-900 text-sm">Sarah Johnson</div>
          <div className="text-gray-600 text-xs">Full Stack Developer</div>
        </div>
      </div>
    </div>
  );
}
