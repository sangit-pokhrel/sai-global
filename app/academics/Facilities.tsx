import React from 'react';

const Facilities = () => {
  return (
    <div className='bg-facilities h-[50vh] p-10'>
      <div className="text-center align-center justify-center m-auto flex-wrap facilities-academics max-w-3xl p-5">
        <h2 className="text-3xl font-bold p-3 tracking-widest">OUR FACILITIES</h2>
        <div className="flex flex-wrap justify-around px-[4rem] py-3 gap-[2rem]">
        
                {/* Left Column */}
                <ul className="flex-2 text-left list-disc"> {/* Utilizing all space */}
                  <li>Spacious and well-ventilated classrooms</li>
                  <li>Well-equipped library</li>
                  <li>Science lab</li>
                  <li>Computer lab</li>
                  <li>Playground</li>
                  <li>Transportation</li>
                  <li>Hygienic canteen</li>
                </ul>
                {/* Right Column */}
                <ul className="flex-2 text-left list-disc"> {/* Utilizing all space */}
                  <li>Spacious and well-ventilated classrooms</li>
                  <li>Well-equipped library</li>
                  <li>Science lab</li>
                  <li>Computer lab</li>
                  <li>Playground</li>
                  <li>Transportation</li>
                  <li>Hygienic canteen</li>
                </ul>
              </div>
          
     
      </div>
    </div>
  );
}

export default Facilities;
