import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export function useRadarChart(active: boolean, data: number[], color: string) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart<'radar'> | null>(null);

  useEffect(() => {
    if (!active || !canvasRef.current || chartRef.current) {
      return undefined;
    }

    const context = canvasRef.current.getContext('2d');
    if (!context) {
      return undefined;
    }

    chartRef.current = new Chart(context, {
      type: 'radar',
      data: {
        labels: ['팽창력(Expansion)', '질량밀도(Mass)', '방사성(Radiation)', '구조화(Structure)', '유동/기저성(Flow)'],
        datasets: [
          {
            label: '물리적 지표',
            data,
            backgroundColor: `${color}22`,
            borderColor: color,
            borderWidth: 2,
            pointBackgroundColor: color
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          r: {
            suggestedMin: 0,
            suggestedMax: 100,
            ticks: { display: false },
            grid: { color: 'rgba(0,0,0,0.05)' },
            pointLabels: {
              font: {
                size: 10,
                family: 'Pretendard'
              }
            }
          }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });

    return () => {
      chartRef.current?.destroy();
      chartRef.current = null;
    };
  }, [active, color, data]);

  useEffect(() => {
    if (!chartRef.current) {
      return;
    }

    chartRef.current.data.datasets[0].data = data;
    chartRef.current.data.datasets[0].borderColor = color;
    chartRef.current.data.datasets[0].backgroundColor = `${color}22`;
    chartRef.current.data.datasets[0].pointBackgroundColor = color;
    chartRef.current.update();
  }, [color, data]);

  return { canvasRef };
}