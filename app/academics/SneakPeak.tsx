import React from 'react';

const SneakPeek: React.FC = () => {
  return (
    <div className="bg-pink-100">
      <div className="container mx-auto p-4">
        <h1 className="text-center text-3xl font-bold text-pink-500">SNEAK PEEK INTO OUR WORLD</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <div className="rounded-lg shadow-md">
            <img src="https://i.ibb.co/rQ1t33f/image.png" alt="Image 1" className="rounded-t-lg w-full" />
            <div className="p-4">
              <p className="text-gray-700 text-lg font-medium">Image Description 1</p>
            </div>
          </div>
          <div className="rounded-lg shadow-md">
            <img src="https://i.ibb.co/h9yH8D1/image.png" alt="Image 2" className="rounded-t-lg w-full" />
            <div className="p-4">
              <p className="text-gray-700 text-lg font-medium">Image Description 2</p>
            </div>
          </div>
          <div className="rounded-lg shadow-md">
            <img src="https://i.ibb.co/1q8f29m/image.png" alt="Image 3" className="rounded-t-lg w-full" />
            <div className="p-4">
              <p className="text-gray-700 text-lg font-medium">Image Description 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SneakPeek;
