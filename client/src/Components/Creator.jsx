import React from 'react';

// SpeakerCard component for displaying each creator's information
const SpeakerCard = ({ imageUrl, name, title }) => (
  <div className="flex flex-col items-center p-4 bg-black bg-opacity-75 rounded-lg transition-colors duration-300">
    <img src={imageUrl} alt={name} className="w-32 h-32 rounded-full mb-4 border-2 border-purple-300" />
    <h3 className="text-lg font-bold mb-1 text-whitesmoke text-center">{name}</h3>
    <p className="text-sm text-violet-300 text-center">{title}</p>
  </div>
);

const Creator = () => {
  return (
    <div className="relative max-w-xl bg-black bg-opacity-90 shadow-xl shadow-violet-300 rounded-xl mx-auto my-8 p-6 sm:p-8 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      {/* Adjusted Paid Badge for better fit */}
      <div className="absolute -top-8 right-0 sm:top-0 sm:right-0 m-4 py-1 px-3 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full text-white text-xs font-bold shadow-lg">
        Paid Event
      </div>

      <h1 className="text-5xl font-bold text-whitesmoke mb-6 text-center">Creator's Conclave</h1>

      <div className="grid sm:grid-cols-2 mb-5"> {/* Adjusted for 2 speakers */}
        <SpeakerCard imageUrl="https://i.ibb.co/sgYMrqH/fw.jpg" name="Garv Malik" title="Chief Meme Officer, Slice" />
        <SpeakerCard imageUrl="https://i.ibb.co/rGS0ZKt/1704814644322.jpg" name="Paritosh Anand" title="Founder, WeSmile" />
      </div>

      <div className="text-gray-200">
        <p className="mb-6 text-gray-400">
          Witness the minds behind successful ventures as they take the stage for a captivating discussion, where company founders and creators share their journeys and challenges for success.
        </p>

        <div className="text-whitesmoke">
          <p className="text-l text-center font-semibold">Date: 14th February</p>
          <h2 className="text-l text-center font-semibold">Time: 18:00-20:00</h2>
          <p className="text-l text-center font-semibold">Location: MIT Quadrangle</p>
        </div>
      </div>
    </div>
  );
};

export default Creator;
