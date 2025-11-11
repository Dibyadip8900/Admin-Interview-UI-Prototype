import React, { useState, useEffect } from 'react';

interface AIDetectionProps {
  warnings: number;
  onWarningsChange: (warnings: number) => void;
}

export function AIDetection({ warnings, onWarningsChange }: AIDetectionProps) {
  const [faceDetection, setFaceDetection] = useState<'Active' | 'Inactive'>('Active');
  const [faceVerification, setFaceVerification] = useState<'Match' | 'No Match'>('Match');
  const [eyeTracking, setEyeTracking] = useState<'Normal' | 'Away' | 'Suspicious'>('Normal');
  const [audioLevel, setAudioLevel] = useState(75);
  const [tabSwitches, setTabSwitches] = useState(2);
  const [network, setNetwork] = useState<'Stable' | 'Unstable'>('Stable');

  useEffect(() => {
    const interval = setInterval(() => {
      const rand = Math.random();
      setAudioLevel(60 + Math.floor(Math.random() * 40));
      
      if (rand < 0.05) {
        setEyeTracking('Away');
        setTimeout(() => setEyeTracking('Normal'), 2000);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    if (status === 'Active' || status === 'Match' || status === 'Normal' || status === 'Stable') {
      return 'bg-green-500 text-white';
    }
    if (status === 'Away') {
      return 'bg-yellow-500 text-white';
    }
    return 'bg-red-500 text-white';
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm h-full">
      <div className="p-6">
        <h3 className="text-gray-900 mb-6">AI Detection Status</h3>
        
        <div className="space-y-4">
          {/* Face Detection */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <span className="text-gray-700">Face Detection</span>
            <span className={`px-3 py-1 rounded text-sm ${getStatusColor(faceDetection)}`}>
              {faceDetection}
            </span>
          </div>

          {/* Face Verification */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <span className="text-gray-700">Face Verification</span>
            <span className={`px-3 py-1 rounded text-sm ${getStatusColor(faceVerification)}`}>
              {faceVerification}
            </span>
          </div>

          {/* Eye Tracking */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <span className="text-gray-700">Eye Tracking</span>
            <span className={`px-3 py-1 rounded text-sm ${getStatusColor(eyeTracking)}`}>
              {eyeTracking}
            </span>
          </div>

          {/* Audio Level */}
          <div className="p-4 bg-gray-50 rounded-lg space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Audio Level</span>
              <span className="text-gray-600 text-sm">{audioLevel}%</span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-green-500 transition-all duration-300"
                style={{ width: `${audioLevel}%` }}
              />
            </div>
          </div>

          {/* Tab Switches */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <span className="text-gray-700">Tab Switches</span>
            <span className="px-3 py-1 rounded text-sm bg-yellow-100 text-yellow-700">
              {tabSwitches}
            </span>
          </div>

          {/* Network */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <span className="text-gray-700">Network</span>
            <span className={`px-3 py-1 rounded text-sm ${getStatusColor(network)}`}>
              {network}
            </span>
          </div>
        </div>

        {/* AI Model Status */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h4 className="text-gray-700 text-sm mb-4">AI Models Status</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">YOLO v8</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-600">Running</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">FaceNet</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-600">Running</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Eye Tracker</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-600">Running</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
