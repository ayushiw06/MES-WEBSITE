import React from 'react';

// SpeakerCard component for displaying each founder's information
const SpeakerCard = ({ imageUrl, name, title }) => (
  <div className="flex flex-col items-center p-4 bg-black bg-opacity-75 rounded-lg transition-colors duration-300">
    <img src={imageUrl} alt={name} className="w-28 h-28 rounded-full mb-6" />
    <h3 className="text-lg font-bold mb-1 text-whitesmoke text-center">{name}</h3>
    <p className="text-sm text-violet-300 text-center">{title}</p>
  </div>
);

const Founders = () => {
  return (
    <div className="max-w-2xl bg-black bg-opacity-90 shadow-xl shadow-violet-300 rounded-xl mx-auto my-8 p-6 sm:p-8 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      {/* Responsive Paid Badge positioning */}
      <div className="absolute -top-8 right-0 sm:top-0 sm:right-0 m-4 py-1 px-3 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full text-white text-xs font-bold shadow-lg">
        Paid Event
      </div>

      <h1 className="text-5xl font-bold text-whitesmoke mb-6 text-center">Founder's Conclave</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
        <SpeakerCard imageUrl="https://i.ibb.co/g3CygD0/image.png" name="Nikita Baliarsingh" title="Founder, Nexus Power" />
        <SpeakerCard imageUrl="https://i.ibb.co/g7CMWJV/uds.jpg" name="Shivi Singh" title="Founder, ClearDekho" />
        <SpeakerCard imageUrl="https://i.ibb.co/8M6hdqM/ug.jpg" name="Arpita Aditi" title="Founder, Dil Foods" />
      </div>

      <div className="text-gray-200">
        <p className="mb-6 text-gray-400">
          An engaging event designed for audiences to hear directly from successful business founders as they share their experiences, insights, and strategies for success.
        </p>
        <div className="text-whitesmoke">
          <p className="text-l text-center font-semibold">Date: 15th February</p>
          <h2 className="text-l text-center font-semibold">Time: 17:00-18:30</h2>
          <p className="text-l text-center font-semibold">Location: Library Auditorium</p>
        </div>
      </div>
    </div>
  );
};

export default Founders;
