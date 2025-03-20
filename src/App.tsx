import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from './components/Header';
import { Toolbar } from './components/Toolbar';
import { Dashboard } from './components/Dashboard';
import { Save } from 'lucide-react';

function App() {
  const [isEditMode, setIsEditMode] = useState(true);

  const handleSave = () => {
    setIsEditMode(false);
    toast.success('Dashboard saved successfully!', {
      position: 'top-right',
      autoClose: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main className="container mx-auto pt-8">
        <div className="flex justify-end mb-4">
          {isEditMode ? (
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
            >
              <Save className="w-5 h-5" />
              Save Dashboard
            </button>
          ) : (
            <button
              onClick={() => setIsEditMode(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Edit Dashboard
            </button>
          )}
        </div>
        <Toolbar isEditMode={isEditMode} />
        <Dashboard isEditMode={isEditMode} />
      </main>
      <ToastContainer theme="dark" />
    </div>
  );
}

export default App;