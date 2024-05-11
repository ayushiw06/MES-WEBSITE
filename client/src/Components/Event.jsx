import React from 'react';

const Event = ({ date, time, title, level, description, isAuthenticated, registerEvent, eventRegistered, index }) => (
  
  <div className="border border-black rounded-2xl p-3 bg-white m-0  w-[425px] h-[300px] basis-[24rem] flex flex-col justify-evenly ">
    <div className="bg-[#b8abe6] rounded-3xl w-5/12 flex p-2">
      <img src="src\assets\cal.png" alt="popcorn" className="size-[1.1rem] m-2" />
      <div className="flex flex-col my-3">
        <h3 className="w-full text-[.5rem] font-bold">{date}</h3>
        <p className="text-gray-500 text-xs">{time}</p>
      </div>
    </div>
    <h1 className="font-extrabold text-xl">{title}</h1>
    <div className="rounded-md bg-[#FFC661] w-[32%] px-5 text-xs py-1 text-center ">{level}</div>
    <h4 className="mt-2 text-gray-500  text-base">Description</h4>
    <p className="font-medium tracking-wide my-2">{description}</p>
    {/* <hr className="border-black" />  */}

    {/* <button className="rounded-full border border-black bg-[#674BB1] w-full h-10">
      <div className=" font-bold text-white px-5 text-base py-1">Register Now</div>
    </button> */}
    {/* {isAuthenticated && (
      <button
        className={`rounded-full border border-black bg-[#674BB1] w-5/12 h-10 mt-3 ${eventRegistered ? 'cursor-not-allowed opacity-50' : 'hover:bg-[#674BB1]'
          }`}
        onClick={() => registerEvent(title, index)}
        disabled={eventRegistered}
      >
        <div className="font-bold text-white px-5 text-base py-1">
          {eventRegistered ? 'Registered' : 'Register Now'}
        </div>
      </button>
    )} */}
  </div>
);

export default Event;