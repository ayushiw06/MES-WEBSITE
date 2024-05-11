import React from 'react';

// Reusable SpeakerCard component for displaying speaker details
const SpeakerCard = ({ imageUrl, name, title }) => (
  <div className="flex flex-col items-center p-4 bg-black bg-opacity-75 rounded-lg transition-colors duration-300">
    <img src={imageUrl} alt={name} className="w-32 h-32 rounded-full mb-4 border-2 border-purple-300 shadow" />
    <h3 className="text-lg text-center font-bold mb-1 text-whitesmoke">{name}</h3>
    <p className="text-sm text-center text-violet-300">{title}</p>
  </div>
);

const WomenEntrepreneurshipPanel = () => {
  return (
    <div className="relative max-w-xl bg-black bg-opacity-90 shadow-xl shadow-violet-300 rounded-xl mx-auto my-8 p-3 sm:p-5 pt-12 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      {/* Adjusted positioning of Free Event badge and increased top padding of the container */}
      <div className="absolute -top-8 right-0 mt-6 mr-6 py-1 px-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full text-white text-xs font-bold shadow-lg">
        Free Event
      </div>

      <h1 className="text-5xl font-bold text-whitesmoke mb-6 text-center">Women Entrepreneurship Panel</h1>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <SpeakerCard imageUrl="https://i.ibb.co/qxCFhhR/efhrf.jpg" name="Ananya Maloo" title="Founder, Nuutjob" />
        <SpeakerCard imageUrl="https://i.ibb.co/VVB4GXz/efhrf.jpg" name="Aishwarya" title="Founder, AULI Lifestyles" />
        <SpeakerCard imageUrl="https://i.ibb.co/0rZd2X7/efhrf.jpg" name="Aditi Madan" title="Founder, BluePine Foods" />
        <SpeakerCard imageUrl="https://i.ibb.co/sR38Jck/efhrf.jpg" name="Vidushi Vijayvergiya" title="Founder, Issak Fragrances" />
      </div>

      <div className="text-gray-400">
        <p className="mb-6">
          An event dedicated to empowering women in business full of inspiring talks, discussions, and networking opportunities to support and celebrate female entrepreneurs on their journey to success.
        </p>

        <div className="text-whitesmoke">
          <p className="text-l text-center font-semibold">Date: 12th February</p>
          <h2 className="text-l text-center font-semibold">Time: 16:30-18:30</h2>
          <p className="text-l text-center font-semibold mb-4">Location: Library Auditorium</p>
        </div>
      </div>
    </div>
  );
};

export default WomenEntrepreneurshipPanel;
