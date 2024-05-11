import React from 'react';

const SpeakerGroupCard = () => {
  
  return (
    
    <div className="max-w-md bg-black ${isHovered ? 'text-black' : 'text-gray-600'}` shadow-violet-300 opacity-100 hover:bg-purple-400 p-8 rounded-xl shadow-lg mx-6 mb-8">
     
      <div classname="hover: text-black">
      <h1 className="text-3xl font-bold mb-6 text-center text-whitesmoke">WORKSHOP name: dsckjhfvb</h1>
      <div>
      <h2 className="text-2xl font-semibold mb-1 text-whitesmoke">Time:23:00</h2>
      <p className="text-2xl font-semibold mb-2 text-whitesmoke">Location: xyz</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        
        <div className="flex flex-col items-center">
        <img
            src="https://i.ibb.co/kSdzJmY/efhrf.jpg"  
            alt="Speaker 1"
          />
          <h2 className="text-whitesmoke font-normal text-center">Shravani </h2>
          <p className="text-gray-200 text-center">CEO</p>
        </div>

        
        <div className="flex flex-col items-center">
        <img
            src="https://i.ibb.co/kSdzJmY/efhrf.jpg" 
            alt="Speaker 2"
          />
          <h2 className="font-normal text-whitesmoke text-center">Sujan</h2>
          <p className="text-gray-200 text-center">Director</p>
        </div>

      
        <div className="flex-col items-center">
          <img
            src="https://i.ibb.co/kSdzJmY/efhrf.jpg"  
            alt="Speaker 3"
          />
          <h2 className="text-whitesmoke font-normal text-center">Rishabh</h2>
          <p className="text-gray-200 text-center">Head</p>
        </div>

      
        <div className="flex flex-col items-center">
        <img
            src="https://i.ibb.co/kSdzJmY/efhrf.jpg"  
            alt="Speaker 4"
          />
          <h2 className="text-whitesmoke font-normal text-center">Abcd</h2>
          <p className="text-gray-200 text-center">Nonsense</p>
        </div>
      </div>

      <h2 className="text-gray-200 font-semibold mt-6">
Description:
      </h2>
      <p className="text-gray-200 mt-1">
        Join us for an exciting event featuring industry experts and thought leaders. Gain valuable insights and network with professionals from various fields.
      </p>
</div>
      
      
    </div>
  );
}; 


export default SpeakerGroupCard;