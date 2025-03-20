import React from 'react';
import { LineChart, BarChart2, PieChart, Image } from 'lucide-react';
import { useDashboardStore } from '../store';

export const Toolbar: React.FC<{ isEditMode: boolean }> = ({ isEditMode }) => {
  const addBlock = useDashboardStore((state) => state.addBlock);

  if (!isEditMode) return null;

  const handleAddLineChart = () => {
    addBlock({
      id: `line-chart-${Date.now()}`,
      type: 'line-chart',
      content: {
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              label: 'Dataset 1',
              data: [65, 59, 80, 81, 56, 75],
              borderColor: '#10B981',
              tension: 0.4,
            }
          ],
        }
      },
      x: 0,
      y: 0,
      w: 6,
      h: 4,
    });
  };

  const handleAddBarChart = () => {
    addBlock({
      id: `bar-chart-${Date.now()}`,
      type: 'bar-chart',
      content: {
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              label: 'Dataset 1',
              data: [-65, 59, -80, 81, -56, 75],
              backgroundColor: '#3B82F6',
            },
            {
              label: 'Dataset 2',
              data: [28, -48, 40, -19, 86, -27],
              backgroundColor: '#10B981',
            }
          ],
        }
      },
      x: 0,
      y: 0,
      w: 6,
      h: 4,
    });
  };

  const handleAddPieChart = () => {
    addBlock({
      id: `pie-chart-${Date.now()}`,
      type: 'pie-chart',
      content: {
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
          datasets: [
            {
              data: [12, 19, 3, 5, 2],
              backgroundColor: [
                '#EF4444',
                '#3B82F6',
                '#F59E0B',
                '#10B981',
                '#8B5CF6',
              ],
            }
          ],
        }
      },
      x: 0,
      y: 0,
      w: 4,
      h: 4,
    });
  };

  const handleAddImage = () => {
    addBlock({
      id: `image-${Date.now()}`,
      type: 'image',
      content: {
        url: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809',
        alt: 'Sample Image',
      },
      x: 0,
      y: 0,
      w: 4,
      h: 3,
    });
  };

  return (
    <div className="fixed left-0 top-20 bg-gray-800 p-4 shadow-lg rounded-r-lg">
      <div className="flex flex-col gap-4">
        <button
          onClick={handleAddLineChart}
          className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors"
        >
          <LineChart className="w-5 h-5" />
          Add Line Chart
        </button>
        <button
          onClick={handleAddBarChart}
          className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors"
        >
          <BarChart2 className="w-5 h-5" />
          Add Bar Chart
        </button>
        <button
          onClick={handleAddPieChart}
          className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors"
        >
          <PieChart className="w-5 h-5" />
          Add Pie Chart
        </button>
        <button
          onClick={handleAddImage}
          className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors"
        >
          <Image className="w-5 h-5" />
          Add Image
        </button>
      </div>
    </div>
  );
};