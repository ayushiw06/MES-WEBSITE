import React from 'react';

// Reusable SpeakerCard component for displaying speaker details
const SpeakerCard = ({ imageUrl, name, title }) => (
  <div className="flex flex-col items-center p-4 bg-black bg-opacity-75 rounded-lg transition-colors duration-300">
    <img src={imageUrl} alt={name} className="w-32 h-32 rounded-full mb-4 border-2 border-purple-300 shadow" />
    <h3 className="text-lg font-semibold text-whitesmoke">{name}</h3>
    <p className="text-sm text-violet-300">{title}</p>
  </div>
);

const Finance = () => {
  return (

    <div className="max-w-xl bg-black bg-opacity-90 shadow-xl shadow-violet-300 rounded-xl mx-auto my-8 p-6 sm:p-8 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      
      <div className="absolute -top-8 right-0 sm:top-0 sm:right-0 m-4 py-1 px-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full text-white text-xs font-bold shadow-lg">
        Free Event
      </div>

      
      <h1 className="text-5xl font-bold text-whitesmoke mb-6 text-center">Fintech Workshop</h1>

      <div className="grid grid-cols-1 gap-4 mb-6">
        <SpeakerCard
          imageUrl="https://i.ibb.co/41RRStg/efhrf.jpg"
          name="Agathya Selvakumar"
          title="Founder, Fin N Min"
        />
      </div>
      <div className="text-gray-400">
        <p className="mb-6">
          Discover the latest in finance tech, where the session expert unpack trends and new tools shaping money matters, helping you navigate the  world of fintech with confidence.
        </p>

        <div className="text-whitesmoke">
          <p className="text-l text-center font-semibold">Date: 13th February</p>
          <h2 className="text-l text-center font-semibold">Time: 18:00-19:00</h2>
          <p className="text-l text-center font-semibold">Location: MV Seminar Hall</p>

        </div>
      </div>
    </div>
  );
};

export default Finance;
