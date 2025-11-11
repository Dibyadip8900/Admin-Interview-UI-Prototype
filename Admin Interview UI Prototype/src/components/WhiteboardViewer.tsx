import React, { useState, useRef, useEffect } from 'react';
import { Pencil, Eraser, Square, Circle, Minus, Eye } from 'lucide-react';

export function WhiteboardViewer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [strokes, setStrokes] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Fill with white background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw some example content to simulate candidate drawing
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.font = '16px sans-serif';
    ctx.fillStyle = '#000000';

    // Draw a simple algorithm visualization
    ctx.fillText('Problem: Binary Tree Traversal', 20, 30);
    
    // Draw a tree structure
    const drawNode = (x: number, y: number, value: string) => {
      ctx.beginPath();
      ctx.arc(x, y, 20, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fillText(value, x - 5, y + 5);
    };

    const drawLine = (x1: number, y1: number, x2: number, y2: number) => {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    };

    // Root
    drawNode(300, 80, '1');
    
    // Level 1
    drawLine(300, 100, 200, 140);
    drawLine(300, 100, 400, 140);
    drawNode(200, 160, '2');
    drawNode(400, 160, '3');

    // Level 2
    drawLine(200, 180, 150, 220);
    drawLine(200, 180, 250, 220);
    drawNode(150, 240, '4');
    drawNode(250, 240, '5');

    // Add annotations
    ctx.fillStyle = '#0066cc';
    ctx.fillText('Inorder: 4, 2, 5, 1, 3', 20, 300);
    ctx.fillText('Preorder: 1, 2, 4, 5, 3', 20, 330);
    ctx.fillText('Postorder: 4, 5, 2, 3, 1', 20, 360);

    setStrokes(15);
  }, []);

  return (
    <div className="h-full flex flex-col bg-slate-950">
      {/* Whiteboard Header */}
      <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4 text-slate-400" />
            <span className="text-slate-400 text-sm">Real-time Whiteboard View</span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <span className="text-slate-400">Strokes: <span className="text-white">{strokes}</span></span>
          <span className="text-slate-400">Active Tool: <span className="text-white">Pen</span></span>
        </div>
      </div>

      {/* Whiteboard Canvas */}
      <div className="flex-1 overflow-auto p-4 bg-slate-800">
        <div className="bg-white rounded-lg shadow-lg h-full min-h-[600px]">
          <canvas 
            ref={canvasRef}
            className="w-full h-full"
            style={{ touchAction: 'none' }}
          />
        </div>
      </div>

      {/* Activity Indicators */}
      <div className="border-t border-slate-800 bg-slate-900 px-4 py-2">
        <div className="flex items-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-slate-400">Candidate using whiteboard</span>
          </div>
          <div className="text-slate-400">Last activity: <span className="text-white">5s ago</span></div>
        </div>
      </div>
    </div>
  );
}
