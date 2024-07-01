import React from 'react';
import 'tailwindcss/tailwind.css';

const ContactSection: React.FC = () => {
  return (
    <div className="bg-[#FFF8F7] flex items-center justify-center min-h-screen">
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8">BASIC INFORMATION</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex flex-col items-center ">
            <div className="bg-[#FFC8C0] p-4 rounded-lg shadow-md w-[25vh] h-[25vh] align-center justify-center m-auto">
              <div className="flex items-center mb-2">
                <span className="material-icons text-pink-600">location_on</span>
                <h3 className="ml-2 text-lg font-semibold">Busdiliya</h3>
              </div>
              <p>Bhairahawa, Nepal</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#704747] text-white p-4 rounded-lg shadow-md w-[35vh] h-[25vh]">
              <div className="flex items-center mb-2">
                <span className="material-icons text-pink-600">phone</span>
                <h3 className="ml-2 text-lg font-semibold">Contact</h3>
              </div>
              <p>+071-5263555/XXXXXX</p>
              <p>+071-5263555/XXXXXX</p>
              <p>+071-5263555/XXXXXX</p>
              <p>saiglobalcollege@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#FFC8C0] p-4 rounded-lg shadow-md w-[25vh] h-[25vh]">
              <div className="flex items-center mb-2">
                <span className="material-icons text-pink-600">access_time</span>
                <h3 className="ml-2 text-lg font-semibold">Hours</h3>
              </div>
              <p>SUNDAY ~ FRIDAY</p>
              <p>7:00 ~ 17:00</p>
            </div>
          </div>
        </div>
        <div className="bg-pink-100 p-6 rounded-lg shadow-lg">
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                className="p-2 border border-gray-300 rounded-lg"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                className="p-2 border border-gray-300 rounded-lg"
                placeholder="Email"
                required
              />
            </div>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Contact Number"
              required
            />
            <textarea
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Message"
              rows={4}
            ></textarea>
            <button type="submit" className="w-full py-2 bg-[#704747] text-white rounded-lg shadow-md">
              CONTACT US
            </button>
          </form>
        </div>
      </div>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    </div>
  );
};

export default ContactSection;
