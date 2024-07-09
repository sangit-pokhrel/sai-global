"use client";

import React, { useState } from 'react';
import MontessoriComponent from './MontessoriComponent';
import PlusTwoHomeComponent from './PlusTwoHomeComponent';
import BbaHomeComponent from './BbaHomeComponent';

const AcademicsSection: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState('Montessori');
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const handleButtonClick = (component: string) => {
    setDirection(activeComponent === component ? direction : component === 'Montessori' ? 'left' : 'right');
    setActiveComponent(component);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'Montessori':
        return <MontessoriComponent />;
      case '+2':
        return <PlusTwoHomeComponent />;
      case 'BBA':
        return <BbaHomeComponent />;
      default:
        return null;
    }
  };

  return (
    <div className="relative overflow-hidden bg-gray-100 p-8 rounded-lg  flex flex-col items-start gap-8 min-h-[500px]">
      <div className="flex justify-between w-full">
        <h2 className="text-3xl font-bold mb-4">Academics</h2>
        <div className="flex gap-4">
          <button
            onClick={() => handleButtonClick('Montessori')}
            className={`px-4 py-2 font-semibold rounded-md transition duration-300 ${
              activeComponent === 'Montessori' ? 'bg-blue-500 text-white' : 'bg-gray-800 text-white hover:bg-gray-600'
            }`}
          >
            Montessori
          </button>
          <button
            onClick={() => handleButtonClick('+2')}
            className={`px-4 py-2 font-semibold rounded-md transition duration-300 ${
              activeComponent === '+2' ? 'bg-blue-500 text-white' : 'bg-gray-800 text-white hover:bg-gray-600'
            }`}
          >
            +2
          </button>
          <button
            onClick={() => handleButtonClick('BBA')}
            className={`px-4 py-2 font-semibold rounded-md transition duration-300 ${
              activeComponent === 'BBA' ? 'bg-blue-500 text-white' : 'bg-gray-800 text-white hover:bg-gray-600'
            }`}
          >
            BBA
          </button>
        </div>
      </div>
      <div className={`w-full transition-transform duration-500 ${direction === 'left' ? 'animate-slide-left' : 'animate-slide-right'}`}>
        {renderActiveComponent()}
      </div>
    </div>
  );
};

export default AcademicsSection;
