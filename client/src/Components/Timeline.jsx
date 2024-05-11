// Timeline.js

import React, { useEffect, useRef } from 'react';


const Timeline = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const timeline = timelineRef.current;
      const scrollPosition = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      // Calculate the animation progress based on the scroll position
      const animationProgress = Math.min(1, scrollPosition / scrollHeight);

      // Apply animation to events
      const events = timeline.querySelectorAll('.timeline-event');
      events.forEach((event, index) => {
        const distance = (index % 2 === 0 ? -1 : 1) * animationProgress * 50;
        event.style.transform = `translateX(${distance}px)`;
      });
    };


    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative sm:flex items-center  ">

        <div className="timeline-line sm:bg-gray-500 w-2 h-full absolute left-1/2 transform -translate-x-1/2">
        </div>

        <div className="timeline-event shadow-2xl shadow-purple-300  bg-black border border-black p-4 rounded-lg mx-4 sm:-mt-64" >
          <h3 className="text-lg underline font-serif text-white font-semibold my-2 shadow-purple-300  text-center text-[32px]">Vision </h3>
          <p className="text-gray-300 text-wrap sm:w-[350px] text-[20px] ">To empower entrepreneurs by providing them with a vibrant start-up ecosystem and developing ideas into successful ventures through dedicated mentorship and guidance</p>
        </div>

        <div className="timeline-event border shadow-2xl shadow-purple-300  bg-black border-black p-4 rounded-lg mx-4 sm:mt-64 transition-transform ease-out duration-300 transform translate-x-0 mt-12 ">

          <h3 className="text-lg text-white font-serif underline font-semibold my-2 text-center shadow-purple-300 text-[32px]">Mission</h3>
          <p className="text-gray-300 text-wrap sm:w-[350px] text-[20px]">To inculcate the spirit of entrepreneurship within the student community through greater awareness and act as a one-stop destination for students desirous of converting their ideas into viable start-ups</p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;