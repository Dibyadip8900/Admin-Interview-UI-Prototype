import React, { useRef, useEffect } from 'react';

export function Whiteboard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // White background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw example content
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.font = '16px sans-serif';
    ctx.fillStyle = '#000000';

    ctx.fillText('Problem: Binary Tree Traversal', 20, 30);
    
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

    // Tree
    drawNode(300, 80, '1');
    drawLine(300, 100, 200, 140);
    drawLine(300, 100, 400, 140);
    drawNode(200, 160, '2');
    drawNode(400, 160, '3');
    drawLine(200, 180, 150, 220);
    drawLine(200, 180, 250, 220);
    drawNode(150, 240, '4');
    drawNode(250, 240, '5');

    ctx.fillStyle = '#0066cc';
    ctx.fillText('Inorder: 4, 2, 5, 1, 3', 20, 300);
    ctx.fillText('Preorder: 1, 2, 4, 5, 3', 20, 330);
    ctx.fillText('Postorder: 4, 5, 2, 3, 1', 20, 360);
  }, []);

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm h-full flex flex-col">
      <div className="px-4 py-2 border-b border-gray-200">
        <span className="text-gray-900 text-sm">Candidate's Whiteboard (Real-time)</span>
      </div>
      <div className="flex-1 p-4 overflow-auto bg-gray-50">
        <canvas ref={canvasRef} className="w-full h-full bg-white rounded shadow-sm" />
      </div>
    </div>
  );
}