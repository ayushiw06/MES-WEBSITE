import React from 'react';

// Reusable SpeakerCard component for displaying speaker details
const SpeakerCard = ({ imageUrl, name, title }) => (

  <div className="flex flex-col items-center p-4 bg-black bg-opacity-75 rounded-lg transition-colors duration-300">
    <img src={imageUrl} alt={name} className="w-32 h-32 rounded-full mb-4"/>
    <h3 className="text-lg font-bold text-center text-whitesmoke">{name}</h3>
    <p className="text-sm text-center text-violet-300">{title}</p>

  </div>
);

const Gaming = () => {
  return (

    <div className="max-w-2xl bg-black bg-opacity-90 shadow-xl shadow-violet-300 rounded-xl mx-auto my-8 p-6 sm:p-8 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      
      <div className="absolute -top-8 right-0 sm:top-0 sm:right-0 m-4 py-1 px-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full text-white text-xs font-bold shadow-lg">
        Free Event
      </div>

      
      <h1 className="text-5xl font-bold text-whitesmoke mb-6 text-center">Gaming Workshop</h1>


      {/* Ensured a 2x2 layout on smaller screens */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <SpeakerCard imageUrl="https://i.ibb.co/w749swM/efhrf.jpg" name="Akshat Rathee" title="Founder, Nodwin Gaming" />
        <SpeakerCard imageUrl="https://i.ibb.co/d6Zf88h/efhrf.jpg" name="Rushindra Sinha" title="Founder, Global ESports" />
        <SpeakerCard imageUrl="https://i.ibb.co/Q8RHrNc/efhrf.jpg" name="Rohit Jagasia" title="Founder, Revenant Esport" />
        
        <SpeakerCard imageUrl="https://i.ibb.co/3hdNWmr/efhrf.jpg" name="Yash Bhanushali" title="Founder, Orangutan Gaming" />
        
      </div>


      <div className="text-gray-400">
        <p className="mb-7">
        Explore the inner workings of the esports industry and unlock entrepreneurial opportunities within gaming, where you'll gain valuable insights into the ever-evolving landscape of esports and its potential for business innovation.
</p>
        <div className="text-whitesmoke">
          <p className="text-l text-center font-semibold">Date: 10th February</p>
          <h2 className="text-l text-center font-semibold">Time: 16:00</h2>
          <p className="text-l text-center font-semibold">location: Library Auditorium</p>

        </div>
      </div>
    </div>
  );
};

export default Gaming;
