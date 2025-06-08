'use client';

import { useState } from 'react';

interface ServiceToggleProps {
  onServiceChange: (service: 'IT' | 'Civil') => void;
}

export default function ServiceToggle({ onServiceChange }: ServiceToggleProps) {
  const [activeService, setActiveService] = useState<'IT' | 'Civil'>('IT');

  const handleToggle = (service: 'IT' | 'Civil') => {
    setActiveService(service);
    onServiceChange(service);
  };

  return (
    <div className="flex justify-center items-center space-x-4 py-6">
      <button
        onClick={() => handleToggle('IT')}
        className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
          activeService === 'IT'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        IT Services
      </button>
      <button
        onClick={() => handleToggle('Civil')}
        className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
          activeService === 'Civil'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        Civil Services
      </button>
    </div>
  );
} 