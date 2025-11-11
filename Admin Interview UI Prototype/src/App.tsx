import React, { useState, useEffect } from 'react';
import { TopHeader } from './components/TopHeader';
import { VideoFeed } from './components/VideoFeed';
import { AIDetection } from './components/AIDetection';
import { CodeEditor } from './components/CodeEditor';
import { Whiteboard } from './components/Whiteboard';
import { SecurityMonitor } from './components/SecurityMonitor';
import { ActivityLog } from './components/ActivityLog';
import { Questions } from './components/Questions';
import { Notes } from './components/Notes';
import { Evaluation } from './components/Evaluation';
import { Performance } from './components/Performance';
import { WarningResetDialog } from './components/WarningResetDialog';

export default function App() {
  const [warnings, setWarnings] = useState(2);
  const [isVerified, setIsVerified] = useState(true);
  const [recordingTime, setRecordingTime] = useState(323); // 00:05:23
  const [isRecording, setIsRecording] = useState(true);
  const [showResetDialog, setShowResetDialog] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  
  // View state - AI Detection is now part of center view
  const [centerView, setCenterView] = useState<'ai' | 'code' | 'whiteboard' | 'security' | 'activity'>('ai');
  const [rightView, setRightView] = useState<'questions' | 'notes' | 'evaluation'>('questions');

  useEffect(() => {
    if (isRecording) {
      const interval = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRecording]);

  const handleResetWarnings = (explanation: string) => {
    console.log('Warnings reset with explanation:', explanation);
    setWarnings(0);
    setShowResetDialog(false);
    alert('Warning reset recorded and logged in session history.');
  };

  const handleScreenShare = () => {
    setIsScreenSharing(!isScreenSharing);
    if (!isScreenSharing) {
      alert('Screen sharing request sent to candidate');
    }
  };

  return (
    <div className="h-screen bg-gray-50 text-gray-900 flex flex-col overflow-hidden">
      <TopHeader 
        recordingTime={recordingTime}
        isRecording={isRecording}
        isVerified={isVerified}
        warnings={warnings}
        onToggleRecording={() => setIsRecording(!isRecording)}
        onResetWarnings={() => setShowResetDialog(true)}
        onScreenShare={handleScreenShare}
        isScreenSharing={isScreenSharing}
      />

      <div className="flex-1 flex gap-4 p-4 overflow-hidden">
        {/* Left Section */}
        <div className="flex-1 flex flex-col gap-4 min-w-0">
          {/* Video Feed - Larger */}
          <div className="h-[40%]">
            <VideoFeed isVerified={isVerified} />
          </div>

          {/* Tabs for Center Views - Including AI Detection */}
          <div className="flex gap-2 border-b-2 border-gray-200 bg-white">
            <button
              onClick={() => setCenterView('ai')}
              className={`px-4 py-3 flex items-center gap-2 transition-colors ${
                centerView === 'ai'
                  ? 'text-blue-600 border-b-2 border-blue-600 -mb-0.5'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              AI Detection
            </button>
            <button
              onClick={() => setCenterView('code')}
              className={`px-4 py-3 flex items-center gap-2 transition-colors ${
                centerView === 'code'
                  ? 'text-blue-600 border-b-2 border-blue-600 -mb-0.5'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span className="text-sm">&lt;&gt;</span>
              Code Editor
            </button>
            <button
              onClick={() => setCenterView('whiteboard')}
              className={`px-4 py-3 flex items-center gap-2 transition-colors ${
                centerView === 'whiteboard'
                  ? 'text-blue-600 border-b-2 border-blue-600 -mb-0.5'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Whiteboard
            </button>
            <button
              onClick={() => setCenterView('security')}
              className={`px-4 py-3 flex items-center gap-2 transition-colors ${
                centerView === 'security'
                  ? 'text-blue-600 border-b-2 border-blue-600 -mb-0.5'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Security Monitor
            </button>
            <button
              onClick={() => setCenterView('activity')}
              className={`px-4 py-3 flex items-center gap-2 transition-colors ${
                centerView === 'activity'
                  ? 'text-blue-600 border-b-2 border-blue-600 -mb-0.5'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Activity Log
            </button>
          </div>

          {/* Center View Content */}
          <div className="flex-1 min-h-0 overflow-hidden">
            {centerView === 'ai' && <AIDetection warnings={warnings} onWarningsChange={setWarnings} />}
            {centerView === 'code' && <CodeEditor />}
            {centerView === 'whiteboard' && <Whiteboard />}
            {centerView === 'security' && <SecurityMonitor warnings={warnings} isVerified={isVerified} />}
            {centerView === 'activity' && <ActivityLog />}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-96 flex flex-col gap-4">
          {/* Top Section - Questions/Notes/Evaluation */}
          <div className="flex-1 flex flex-col bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setRightView('questions')}
                className={`flex-1 px-4 py-3 transition-colors ${
                  rightView === 'questions'
                    ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Questions
              </button>
              <button
                onClick={() => setRightView('notes')}
                className={`flex-1 px-4 py-3 transition-colors ${
                  rightView === 'notes'
                    ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Notes
              </button>
              <button
                onClick={() => setRightView('evaluation')}
                className={`flex-1 px-4 py-3 transition-colors ${
                  rightView === 'evaluation'
                    ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Evaluation
              </button>
            </div>

            {/* Right View Content */}
            <div className="flex-1 overflow-hidden">
              {rightView === 'questions' && <Questions />}
              {rightView === 'notes' && <Notes />}
              {rightView === 'evaluation' && <Evaluation />}
            </div>
          </div>

          {/* Bottom Section - Performance */}
          <div className="h-64">
            <Performance />
          </div>
        </div>
      </div>

      {showResetDialog && (
        <WarningResetDialog
          currentWarnings={warnings}
          onConfirm={handleResetWarnings}
          onCancel={() => setShowResetDialog(false)}
        />
      )}
    </div>
  );
}