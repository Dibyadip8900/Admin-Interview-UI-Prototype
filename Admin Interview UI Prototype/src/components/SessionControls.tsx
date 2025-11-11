import React, { useState } from 'react';
import { Video, Mic, MessageSquare, Settings, Flag, PhoneOff, Download, Pause, Play } from 'lucide-react';

interface SessionControlsProps {
  isRecording: boolean;
  onToggleRecording: () => void;
}

export function SessionControls({ isRecording, onToggleRecording }: SessionControlsProps) {
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [showEndDialog, setShowEndDialog] = useState(false);

  const handleEndInterview = () => {
    if (confirm('Are you sure you want to end this interview? This will disconnect the candidate and stop the recording.')) {
      alert('Interview ended. Session data saved.');
    }
  };

  return (
    <div className="flex items-center gap-3">
      {/* Media Controls */}
      <button
        onClick={() => setVideoEnabled(!videoEnabled)}
        className={`p-2 rounded-lg transition-colors ${
          videoEnabled 
            ? 'bg-slate-700 hover:bg-slate-600 text-white' 
            : 'bg-red-600 hover:bg-red-700 text-white'
        }`}
        title={videoEnabled ? 'Turn off camera' : 'Turn on camera'}
      >
        <Video className="w-5 h-5" />
      </button>

      <button
        onClick={() => setAudioEnabled(!audioEnabled)}
        className={`p-2 rounded-lg transition-colors ${
          audioEnabled 
            ? 'bg-slate-700 hover:bg-slate-600 text-white' 
            : 'bg-red-600 hover:bg-red-700 text-white'
        }`}
        title={audioEnabled ? 'Mute microphone' : 'Unmute microphone'}
      >
        <Mic className="w-5 h-5" />
      </button>

      <div className="w-px h-8 bg-slate-700" />

      {/* Recording Control */}
      <button
        onClick={onToggleRecording}
        className={`p-2 rounded-lg transition-colors ${
          isRecording 
            ? 'bg-red-600 hover:bg-red-700' 
            : 'bg-slate-700 hover:bg-slate-600'
        } text-white`}
        title={isRecording ? 'Pause recording' : 'Resume recording'}
      >
        {isRecording ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
      </button>

      <div className="w-px h-8 bg-slate-700" />

      {/* Action Buttons */}
      <button
        className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white transition-colors"
        title="Download session logs"
      >
        <Download className="w-5 h-5" />
      </button>

      <button
        className="p-2 rounded-lg bg-yellow-600 hover:bg-yellow-700 text-white transition-colors"
        title="Flag incident"
      >
        <Flag className="w-5 h-5" />
      </button>

      <button
        className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white transition-colors"
        title="Settings"
      >
        <Settings className="w-5 h-5" />
      </button>

      <div className="w-px h-8 bg-slate-700" />

      {/* End Interview */}
      <button
        onClick={handleEndInterview}
        className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white transition-colors flex items-center gap-2"
      >
        <PhoneOff className="w-5 h-5" />
        End Interview
      </button>
    </div>
  );
}
