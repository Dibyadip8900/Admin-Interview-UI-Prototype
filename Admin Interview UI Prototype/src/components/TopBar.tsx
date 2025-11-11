import React from 'react';
import { 
  Video, 
  VideoOff, 
  Mic, 
  MicOff, 
  MonitorUp, 
  Maximize2, 
  MessageSquare, 
  RotateCcw,
  Flag,
  PhoneOff
} from 'lucide-react';

interface TopBarProps {
  recordingTime: number;
  isRecording: boolean;
  isVerified: boolean;
  warnings: number;
  onToggleRecording: () => void;
  onResetWarnings: () => void;
  onScreenShare: () => void;
  isScreenSharing: boolean;
}

export function TopBar({ 
  recordingTime, 
  isRecording, 
  isVerified, 
  warnings,
  onToggleRecording,
  onResetWarnings,
  onScreenShare,
  isScreenSharing
}: TopBarProps) {
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
    <div className="bg-slate-900 border-b border-slate-800 px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <h1 className="text-white">InterviewPro Admin</h1>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            {isRecording && <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />}
            <span className="text-red-400">Recording</span>
            <span className="text-slate-400">{formatTime(recordingTime)}</span>
          </div>

          <div className={`flex items-center gap-2 px-3 py-1 rounded ${
            isVerified ? 'bg-green-900/20 text-green-400' : 'bg-red-900/20 text-red-400'
          }`}>
            <div className={`w-2 h-2 rounded-full ${isVerified ? 'bg-green-400' : 'bg-red-400'}`} />
            {isVerified ? 'Verified' : 'Not Verified'}
          </div>

          <div className="relative">
            <button 
              onClick={onResetWarnings}
              className={`flex items-center gap-2 px-3 py-1 rounded ${
                warnings > 2 ? 'bg-red-900/20 text-red-400' : 
                warnings > 0 ? 'bg-yellow-900/20 text-yellow-400' : 
                'bg-slate-800 text-slate-400'
              } hover:opacity-80 transition-opacity`}
            >
              <Flag className="w-4 h-4" />
              <span>{warnings}</span>
              <span>Warnings</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* Media Controls */}
        <button
          onClick={() => setVideoEnabled(!videoEnabled)}
          className={`p-2 rounded-lg ${
            videoEnabled ? 'bg-slate-700 hover:bg-slate-600' : 'bg-red-600 hover:bg-red-700'
          } transition-colors`}
          title={videoEnabled ? 'Turn off camera' : 'Turn on camera'}
        >
          {videoEnabled ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
        </button>

        <button
          onClick={() => setAudioEnabled(!audioEnabled)}
          className={`p-2 rounded-lg ${
            audioEnabled ? 'bg-slate-700 hover:bg-slate-600' : 'bg-red-600 hover:bg-red-700'
          } transition-colors`}
          title={audioEnabled ? 'Mute microphone' : 'Unmute microphone'}
        >
          {audioEnabled ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
        </button>

        <button
          onClick={onScreenShare}
          className={`p-2 rounded-lg transition-colors ${
            isScreenSharing 
              ? 'bg-blue-600 hover:bg-blue-700' 
              : 'bg-slate-700 hover:bg-slate-600'
          }`}
          title="Request screen share from candidate"
        >
          <MonitorUp className="w-5 h-5" />
        </button>

        <button
          className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors"
          title="View fullscreen"
        >
          <Maximize2 className="w-5 h-5" />
        </button>

        <button
          className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors"
          title="Chat"
        >
          <MessageSquare className="w-5 h-5" />
        </button>

        <div className="w-px h-6 bg-slate-700 mx-2" />

        <button
          onClick={onResetWarnings}
          className="px-4 py-2 rounded-lg bg-yellow-600 hover:bg-yellow-700 transition-colors flex items-center gap-2"
          title="Reset warnings"
        >
          <RotateCcw className="w-4 h-4" />
          <span className="text-sm">Report Issue</span>
        </button>

        <button
          onClick={handleEndInterview}
          className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition-colors flex items-center gap-2"
        >
          <PhoneOff className="w-5 h-5" />
          <span className="text-sm">End Interview</span>
        </button>
      </div>
    </div>
  );
}
