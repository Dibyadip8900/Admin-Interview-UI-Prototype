import React from 'react';
import { 
  Video, 
  VideoOff, 
  Mic, 
  MicOff, 
  MonitorUp,
  MessageSquare, 
  Flag,
  PhoneOff,
  Play,
  Pause,
  Settings
} from 'lucide-react';

interface HeaderProps {
  recordingTime: number;
  isRecording: boolean;
  isVerified: boolean;
  warnings: number;
  onToggleRecording: () => void;
  onResetWarnings: () => void;
  onScreenShare: () => void;
  isScreenSharing: boolean;
}

export function Header({ 
  recordingTime, 
  isRecording, 
  isVerified, 
  warnings,
  onToggleRecording,
  onResetWarnings,
  onScreenShare,
  isScreenSharing
}: HeaderProps) {
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
    <div className="bg-[#0f1629] border-b border-slate-800 px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <div>
          <div className="text-white">InterviewPro</div>
          <div className="text-white">Admin</div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full" />
            <span className="text-red-400">Recording</span>
            <span className="text-white">{formatTime(recordingTime)}</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1 rounded bg-green-900/30">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <span className="text-green-400">Verified</span>
          </div>

          <button 
            onClick={onResetWarnings}
            className="flex items-center gap-2 px-3 py-1 rounded bg-yellow-900/30 hover:bg-yellow-900/40 transition-colors"
          >
            <Flag className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400">{warnings}</span>
            <span className="text-yellow-400">Warnings</span>
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* Media Controls */}
        <button
          onClick={() => setVideoEnabled(!videoEnabled)}
          className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors"
        >
          {videoEnabled ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
        </button>

        <button
          onClick={() => setAudioEnabled(!audioEnabled)}
          className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors"
        >
          {audioEnabled ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
        </button>

        <button
          onClick={onScreenShare}
          className={`p-2 rounded-lg transition-colors ${
            isScreenSharing ? 'bg-blue-600' : 'bg-slate-700/50 hover:bg-slate-700'
          }`}
        >
          <MonitorUp className="w-5 h-5" />
        </button>

        <button
          onClick={onToggleRecording}
          className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors"
        >
          {isRecording ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </button>

        <button className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors">
          <MessageSquare className="w-5 h-5" />
        </button>

        <button className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors">
          <Settings className="w-5 h-5" />
        </button>

        <div className="w-px h-6 bg-slate-700 mx-1" />

        <button
          onClick={onResetWarnings}
          className="px-4 py-2 rounded-lg bg-yellow-600 hover:bg-yellow-700 transition-colors flex items-center gap-2"
        >
          <Flag className="w-4 h-4" />
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
