import React from "react";

const SpeakerCard = ({ imageUrl, name }) => (
  <div className="flex flex-col items-center p-4 bg-black bg-opacity-75 rounded-lg ">
    <img
      src={imageUrl}
      alt={name}
      className="w-32 h-32 rounded-full mb-4 border-2 border-purple-300 shadow"
    />
    <h3 className="text-lg font-bold text-center text-whitesmoke">{name}</h3>
  </div>
);

const Speakergroupcard2 = () => {
  return (
    <div className="max-w-xl bg-black bg-opacity-90 shadow-xl shadow-violet-300 rounded-xl mx-auto my-8 p-6 sm:p-8 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <div className="absolute -top-8 right-0 sm:top-0 sm:right-0 m-4 py-1 px-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full text-white text-xs font-bold shadow-lg">
        Free Event
      </div>

      <h1 className="text-5xl font-bold text-whitesmoke mb-6 text-center">
        Entertainment Night
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <SpeakerCard
          imageUrl="https://i.ibb.co/52MqYsn/efhrf.jpg"
          name="Yash Rathi"
        />
        <SpeakerCard
          imageUrl="https://i.ibb.co/qghGMjK/efhrf.jpg"
          name="Nishant Suri"
        />
      </div>

      <div className="text-gray-400">
        <p className="mb-6">
          Get ready to laugh out loud! Join us for an electrifying evening
          featuring two hilarious stand-up comedians who will tickle your funny
          bone and leave you in stitches. Unwind and enjoy a night filled with
          laughter, fun, and memorable moments.
        </p>

        <div className="text-whitesmoke">
          <p className="text-l text-center font-semibold">
            Date: 16th February
          </p>
          <h2 className="text-l text-center font-semibold">
            Time: 18:00-19:30
          </h2>
          <p className="text-l text-center font-semibold">
            Location: MIT Quadrangle
          </p>
        </div>
      </div>
    </div>
  );
};

export default Speakergroupcard2;
