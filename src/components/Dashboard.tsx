import React from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { useDashboardStore } from '../store';
import { Block } from '../types';
import { Line, Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        color: '#fff',
      },
    },
  },
  scales: {
    x: {
      grid: {
        color: '#374151',
      },
      ticks: {
        color: '#fff',
      },
    },
    y: {
      grid: {
        color: '#374151',
      },
      ticks: {
        color: '#fff',
      },
    },
  },
};

const pieChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        color: '#fff',
      },
    },
  },
};

export const Dashboard: React.FC<{ isEditMode: boolean }> = ({ isEditMode }) => {
  const { blocks, updateLayout, removeBlock } = useDashboardStore();

  const handleLayoutChange = (layout: any[]) => {
    updateLayout(layout);
  };

  const renderBlock = (block: Block) => {
    switch (block.type) {
      case 'line-chart':
        return <Line data={block.content.data} options={chartOptions} />;
      case 'bar-chart':
        return <Bar data={block.content.data} options={chartOptions} />;
      case 'pie-chart':
        return <Pie data={block.content.data} options={pieChartOptions} />;
      case 'image':
        return (
          <img
            src={block.content.url}
            alt={block.content.alt}
            className="w-full h-full object-cover"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-4">
      <GridLayout
        className="layout"
        layout={blocks.map((block) => ({
          i: block.id,
          x: block.x,
          y: block.y,
          w: block.w,
          h: block.h,
        }))}
        cols={12}
        rowHeight={60}
        width={1200}
        isDraggable={isEditMode}
        isResizable={isEditMode}
        onLayoutChange={handleLayoutChange}
        margin={[16, 16]}
      >
        {blocks.map((block) => (
          <div
            key={block.id}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            {isEditMode && (
              <button
                onClick={() => removeBlock(block.id)}
                className="absolute top-2 right-2 z-10 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
              >
                ×
              </button>
            )}
            <div className="p-4 h-full">{renderBlock(block)}</div>
          </div>
        ))}
      </GridLayout>
    </div>
  );
};