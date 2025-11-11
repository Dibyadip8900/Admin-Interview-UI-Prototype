import React from 'react';
import { 
  Video, 
  VideoOff, 
  Mic, 
  MicOff, 
  MonitorUp, 
  Maximize2, 
  MessageSquare,
  Flag,
  PhoneOff,
  Pause,
  Play
} from 'lucide-react';

interface TopHeaderProps {
  recordingTime: number;
  isRecording: boolean;
  isVerified: boolean;
  warnings: number;
  onToggleRecording: () => void;
  onResetWarnings: () => void;
  onScreenShare: () => void;
  isScreenSharing: boolean;
}

export function TopHeader({ 
  recordingTime, 
  isRecording, 
  isVerified, 
  warnings,
  onToggleRecording,
  onResetWarnings,
  onScreenShare,
  isScreenSharing
}: TopHeaderProps) {
  const [videoEnabled, setVideoEnabled] = React.useState(true);
  const [audioEnabled, setAudioEnabled] = React.useState(true);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleEndInterview = () => {
    if (confirm('Are you sure you want to end this interview?')) {
      alert('Interview ended. Session data saved.');
    }
  };

  return (
    <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-6">
        <h1 className="text-gray-900">InterviewPro<br/>Admin</h1>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full" />
            <span className="text-red-600 text-sm">Recording</span>
            <span className="text-gray-900 text-sm">{formatTime(recordingTime)}</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1 rounded bg-green-50 border border-green-200">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-green-700 text-sm">Verified</span>
          </div>

          <button 
            onClick={onResetWarnings}
            className="flex items-center gap-2 px-3 py-1 rounded bg-yellow-50 border border-yellow-200 hover:bg-yellow-100 transition-colors"
          >
            <Flag className="w-4 h-4 text-yellow-600" />
            <span className="text-yellow-700 text-sm">{warnings}</span>
            <span className="text-yellow-700 text-sm">Warnings</span>
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* Media Controls */}
        <button
          onClick={() => setVideoEnabled(!videoEnabled)}
          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700"
          title={videoEnabled ? 'Turn off camera' : 'Turn on camera'}
        >
          {videoEnabled ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
        </button>

        <button
          onClick={() => setAudioEnabled(!audioEnabled)}
          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700"
          title={audioEnabled ? 'Mute microphone' : 'Unmute microphone'}
        >
          {audioEnabled ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
        </button>

        <button
          onClick={onScreenShare}
          className={`p-2 rounded-lg transition-colors ${
            isScreenSharing 
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
          }`}
          title="Request screen share"
        >
          <MonitorUp className="w-5 h-5" />
        </button>

        <button
          onClick={onToggleRecording}
          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700"
          title={isRecording ? 'Pause recording' : 'Resume recording'}
        >
          {isRecording ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </button>

        <button
          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700"
          title="Fullscreen"
        >
          <Maximize2 className="w-5 h-5" />
        </button>

        <button
          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700"
          title="Chat"
        >
          <MessageSquare className="w-5 h-5" />
        </button>

        <div className="w-px h-6 bg-gray-300 mx-2" />

        <button
          onClick={onResetWarnings}
          className="px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 transition-colors flex items-center gap-2 text-white"
        >
          <Flag className="w-4 h-4" />
          <span className="text-sm">Report Issue</span>
        </button>

        <button
          onClick={handleEndInterview}
          className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition-colors flex items-center gap-2 text-white"
        >
          <PhoneOff className="w-4 h-4" />
          <span className="text-sm">End Interview</span>
        </button>
      </div>
    </div>
  );
}
