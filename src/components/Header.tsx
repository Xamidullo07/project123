import React from 'react';
import { User } from 'lucide-react';

export const Header: React.FC = () => {
  const username = "Demo User"; // In a real app, this would come from authentication

  return (
    <header className="bg-gray-800 text-white p-4 border-b border-gray-700">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Dashboard Builder</h1>
        <div className="flex items-center gap-2">
          <User className="w-5 h-5" />
          <span>{username}</span>
        </div>
      </div>
    </header>
  );
};