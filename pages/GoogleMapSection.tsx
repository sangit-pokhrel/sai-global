import React from 'react';

const GoogleMapSection: React.FC = () => {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-semibold text-center mb-4 text-[#1a2b3c]">FIND US ON GOOGLE MAPS</h2>
      <div className="w-full h-[450px] flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed/v1/place?q=27.5104527,83.452753&key=AIzaSyDUO3oOP7ICjWw3Kv8jfh-n0JgynO-iPeM"
          className="w-full h-full border-0"
          allowFullScreen={false}
          loading="lazy"
          title="Sai Global School Location"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMapSection;
