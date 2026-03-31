import { useEffect, useRef } from 'react';

export function useYinYangCanvas(active: boolean, mode: 'wave' | 'particle') {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timeRef = useRef(0);
  const animationRef = useRef(0);

  useEffect(() => {
    if (!active) {
      return undefined;
    }

    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) {
      return undefined;
    }

    const context = canvas.getContext('2d');
    if (!context) {
      return undefined;
    }

    const resize = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };

    const render = () => {
      context.fillStyle = 'rgba(15, 23, 42, 0.2)';
      context.fillRect(0, 0, canvas.width, canvas.height);

      if (mode === 'wave') {
        context.beginPath();
        context.strokeStyle = 'rgba(99, 102, 241, 0.8)';
        context.lineWidth = 3;

        for (let x = 0; x < canvas.width; x += 1) {
          const y = canvas.height / 2 + Math.sin(x * 0.02 + timeRef.current) * 50 + Math.sin(x * 0.05 - timeRef.current * 0.5) * 20;
          if (x === 0) {
            context.moveTo(x, y);
          } else {
            context.lineTo(x, y);
          }
        }

        context.stroke();
      } else {
        for (let index = 0; index < 50; index += 1) {
          const angle = index * 137.5 * (Math.PI / 180);
          const radius = 20 + Math.random() * 80;
          const x = canvas.width / 2 + Math.cos(angle + timeRef.current * 1.5) * radius;
          const y = canvas.height / 2 + Math.sin(angle + timeRef.current * 1.5) * radius;
          context.fillStyle = index % 2 === 0 ? '#6366f1' : '#f59e0b';
          context.beginPath();
          context.arc(x, y, 3, 0, Math.PI * 2);
          context.fill();
        }

        context.fillStyle = '#fff';
        context.beginPath();
        context.arc(canvas.width / 2, canvas.height / 2, 5, 0, Math.PI * 2);
        context.fill();
      }

      timeRef.current += 0.04;
      animationRef.current = requestAnimationFrame(render);
    };

    resize();
    render();
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [active, mode]);

  return { canvasRef, containerRef };
}