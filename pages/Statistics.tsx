import React from 'react';

const StatisticsSection: React.FC = () => {
  return (
    <div className="bg-[#1a2b3c] py-8">
      <div className="container mx-auto flex justify-around items-center">
        <div className="flex justify-around items-center w-full">
          <div className="text-center mx-4">
            <div className="text-4xl font-bold text-white">16</div>
            <div className="text-white mt-2">Years Of Experience</div>
          </div>
          <div className="border-l border-white h-12 mx-8"></div>
          <div className="text-center mx-4">
            <div className="text-4xl font-bold text-white">XX</div>
            <div className="text-white mt-2">Faculty Member</div>
          </div>
          <div className="border-l border-white h-12 mx-8"></div>
          <div className="text-center mx-4">
            <div className="text-4xl font-bold text-white">XX</div>
            <div className="text-white mt-2">Enrolled</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;
