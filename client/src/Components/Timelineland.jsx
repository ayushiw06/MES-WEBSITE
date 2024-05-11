import React, { useEffect } from "react";
// You may need to adjust the CSS file import path

function Timeline() {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate");

    const fadeInUp = (element) => {
      element.style.opacity = 0;
      element.style.transform = "translateY(40px)";
      element.style.transition = "opacity 3s, transform 3s";

      let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.style.opacity = 50;
            element.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      });

      observer.observe(element);
    };

    elements.forEach((el) => {
      fadeInUp(el);
    });
  }, []);

  return (
    <div
      className="bg-black font-sans overflow-hidden text-gray-800"
      style={{ backgroundImage: "url('img.jpg')" }}
    >
      <div className="flex flex-col items-center my-8">
        {/* Timeline events here */}
        <div className="timeline-line h-[2990px] w-2 sm:bg-gray-500 absolute top-16 left-1/2 transform -translate-x-1/2"></div>
        {/* left 
     <div className="container mx-auto p-5">
        
          <div className="text-center mb-4">
            <h2 className="text-[32px] sm:text-[24px] font-semibold text-gray-300">10th February</h2>
          </div>
          <div className="timeline-events">
            <div className="timeline-event w-full sm:w-[470px] mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-8 p-5 flex flex-col sm:flex-row items-center animate fadeInUp">
              <div className="icon bg-purple-400 text-green-800 p-4 rounded-full mr-4 flex-shrink-0">
                <i className="lni-clipboard text-2xl"></i>
              </div>
              <div className="date text-sm text-white bg-green-500 rounded-md py-2 px-4 mr-4">
                4:30PM - 5:30PM
              </div>
              <div className="content flex-1">
                <h3 className="text-xl font-bold text-green-800 mb-3">MES’24 LAUNCH</h3>
                <p className="text-gray-700 ">Library Auditorium</p>
              </div>
            </div>
          
          </div>
        </div>*/}
        <div className="container sm:-ml-72 mx-auto p-5">
          <div className="text-center mb-4">
            <h2 className="text-[32px] sm:ml-[260px] font-semibold text-gray-300">
              10th February
            </h2>
          </div>
          <div className="timeline-events">
            <div className="timeline-event w-80 sm:w-[470px] mx-auto  bg-white rounded-lg shadow-md overflow-hidden mb-8 p-5 flex flex-col md:flex-row items-center animate fadeInUp">
              <div className="icon bg-purple-400 text-green-800 p-4 rounded-full mr-4 flex-shrink-0">
                <i className="lni-clipboard text-2xl"></i>
              </div>
              <div className="date text-sm text-white bg-purple-600 rounded-md py-2 px-4 mr-4">
                4:30PM - 5:30PM
              </div>
              <div className="content flex-1">
                <h3 className="text-xl font-bold text-green-800 mt-2 mb-3">
                  MES’24 LAUNCH
                </h3>
                <p className="text-gray-700 ">Library Auditorium</p>
              </div>
            </div>
            <div className="timeline-event w-80 sm:w-[470px] mx-auto bg-white rounded-lg shadow-md overflow-hidden -mb-24 p-5 flex flex-col md:flex-row items-center animate fadeInUp">
              <div className="icon bg-purple-400 text-blue-800 p-4 rounded-full mr-4 flex-shrink-0">
                <i className="lni-calendar text-2xl"></i>
              </div>
              <div className="date text-sm text-white bg-purple-600 rounded-md py-2 px-4 ml-4">
                5:30PM - 7:30PM
              </div>
              <div className="content flex-1">
                <h3 className="text-xl font-bold text-green-800 mb-3">
                  GAMING WORKSHOP
                </h3>
                <p className="text-gray-700">Library Auditorium</p>
              </div>
            </div>
          </div>
        </div>

        {/* left */}
        <div className="container ms:mt-0 mt-24 sm:ml-72 mx-auto p-5">
          <div className="text-center mb-4">
            <h2 className="text-[32px] sm:-ml-[260px] font-semibold text-gray-300">
              11th February
            </h2>
          </div>
          <div className="timeline-events">
            <div className="timeline-event w-80 sm:w-[470px] mx-auto    bg-white rounded-lg shadow-md overflow-hidden mb-8 p-5 flex flex-col md:flex-row items-center animate fadeInUp">
              <div className="icon bg-purple-400 text-green-800 p-4 rounded-full mr-4 flex-shrink-0">
                <i className="lni-clipboard text-2xl"></i>
              </div>
              <div className="date text-sm text-white bg-purple-600 rounded-md py-2 px-4 mr-4">
                2:00PM - 5:00
              </div>
              <div className="content flex-1">
                <h3 className="text-xl font-bold text-blue-800 mb-3">
                  ENTREPRENEURIAL JACKPOT
                </h3>
                <p className="text-gray-700 ">NLH-103</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container sm:-mt-24 sm:-ml-72 mx-auto p-5">
          <div className="text-center mb-4">
            <h2 className="text-[32px] sm:ml-[260px] font-semibold text-gray-300">
              12th February
            </h2>
          </div>
          <div className="timeline-events">
            <div className="timeline-event w-80 sm:w-[470px] mx-auto  bg-white rounded-lg shadow-md overflow-hidden mb-8 p-5 flex flex-col md:flex-row items-center animate fadeInUp">
              <div className="icon bg-purple-400 text-green-800 p-4 rounded-full mr-4 flex-shrink-0">
                <i className="lni-clipboard text-2xl"></i>
              </div>
              <div className="date text-sm text-white bg-purple-600 rounded-md py-2 px-4 mr-4">
                5:00PM - 7:00PM
              </div>
              <div className="content flex-1">
                <h3 className="text-xl font-bold text-green-800 mb-3">
                  MEDTECH WORKSHOP
                </h3>
                <p className="text-gray-700 ">KMC</p>
              </div>
            </div>
            <div className="timeline-event w-80 sm:w-[470px] mx-auto  bg-white rounded-lg shadow-md overflow-hidden mb-8 p-5 flex flex-col md:flex-row items-center animate fadeInUp">
              <div className="icon bg-purple-400 text-green-800 p-4 rounded-full mr-4 flex-shrink-0">
                <i className="lni-clipboard text-2xl"></i>
              </div>
              <div className="date text-sm text-white bg-purple-600 rounded-md py-2 px-4 mr-4">
                4:30PM - 6:30PM
              </div>
              <div className="content flex-1">
                <h3 className="text-xl font-bold text-green-800 mb-3">
                  {" "}
                  WOMEN ENTREPRENEURSHIP PANEL
                </h3>
                <p className="text-gray-700 ">Library Auditorium</p>
              </div>
            </div>

            <div className="timeline-event w-80 sm:w-[470px] mx-auto bg-white rounded-lg shadow-md overflow-hidden -mb-24 p-5 flex flex-col md:flex-row items-center animate fadeInUp">
              <div className="icon bg-purple-400 text-blue-800 p-4 rounded-full mr-4 flex-shrink-0">
                <i className="lni-calendar text-2xl"></i>
              </div>
              <div className="date text-sm text-white bg-purple-600 rounded-md py-2 px-4 ml-4">
                6:30PM - 8:30PM
              </div>
              <div className="content flex-1">
                <h3 className="text-xl font-bold text-green-800 mb-3">
                  REROUTE AND RESURGE FINALS
                </h3>
                <p className="text-gray-700">MV SEMINAR HALL</p>
              </div>
            </div>
          </div>
        </div>

        {/* left */}
        <div className="container  sm:ml-72 sm:mt-0 mt-32 mx-auto p-5">
          <div className="text-center mb-4">
            <h2 className="text-[32px] sm:-ml-[260px] font-semibold text-gray-300">
              13th February
            </h2>
          </div>
          <div className="timeline-events">
            <div className="timeline-event w-80 sm:w-[470px] mx-auto  bg-white rounded-lg shadow-md overflow-hidden mb-8 p-5 flex flex-col md:flex-row items-center animate fadeInUp">
              <div className="icon bg-purple-400 text-green-800 p-4 rounded-full mr-4 flex-shrink-0">
                <i className="lni-clipboard text-2xl"></i>
              </div>
              <div className="date text-sm text-white bg-purple-600 rounded-md py-2 px-4 mr-4">
                5:00PM - 6:00PM
              </div>
              <div className="content flex-1">
                <h3 className="text-xl font-bold text-blue-800 mb-3">
                  THE MANAGLORE PANEL DISCUSSION
                </h3>
                <p className="text-gray-700 ">MV SEMINAR HALL</p>
              </div>
            </div>

            <div className="timeline-event w-80 sm:w-[470px] mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-8 p-5 flex flex-col md:flex-row items-center animate fadeInUp">
              <div className="icon bg-purple-400 text-blue-800 p-4 rounded-full mr-4 flex-shrink-0">
                <i className="lni-calendar text-2xl"></i>
              </div>
              <div className="date text-sm text-white bg-purple-600 rounded-md py-2 px-4 ml-4">
                5:00PM - 8:00PM
              </div>
              <div className="content flex-1">
                <h3 className="text-xl font-bold text-blue-800 mb-3">
                  MONEY QUEST
                </h3>
                <p className="text-gray-700">MIT BASKETBALL COURT</p>
              </div>
            </div>
          </div>
        </div>

        {/* left */}

        <div className="container sm:-mt-32 sm:-ml-72 mx-auto p-5">
          <div className="text-center mb-4">
            <h2 className="text-[32px] sm:ml-[260px]  font-semibold text-gray-300">
              14th February
            </h2>
          </div>
          <div className="timeline-events">
            <div className="timeline-event w-80 sm:w-[470px] mx-auto  bg-white rounded-lg shadow-md overflow-hidden mb-8 p-5 flex flex-col md:flex-row items-center animate fadeInUp">
              <div className="icon bg-purple-400 text-green-800 p-4 rounded-full mr-4 flex-shrink-0">
                <i className="lni-clipboard text-2xl"></i>
              </div>
              <div className="date text-sm text-white bg-purple-600 rounded-md py-2 px-4 mr-4">
                4:00PM - 5:00PM
              </div>
              <div className="content flex-1">
                <h3 className="text-xl font-bold text-green-800 mb-3">
                  MES’24 INAUGURATION
                </h3>
                <p className="text-gray-700 ">MIT QUADRANGLE</p>
              </div>
            </div>
            <div className="timeline-event w-80 sm:w-[470px] mx-auto bg-white rounded-lg shadow-md overflow-hidden -mb-24 p-5 flex flex-col md:flex-row items-center animate fadeInUp">
              <div className="icon bg-purple-400 text-blue-800 p-4 rounded-full mr-4 flex-shrink-0">
                <i className="lni-calendar text-2xl"></i>
              </div>
              <div className="date text-sm text-white bg-purple-600 rounded-md py-2 px-4 ml-4">
                5:00PM - 6:00PM
              </div>
              <div className="content flex-1">
                <h3 className="text-xl font-bold text-green-800 mb-3">
                  KEYNOTE SESSION
                </h3>
                <p className="text-gray-700">MIT QUADRANGLE</p>
              </div>
            </div>
            <div className="timeline-event mt-32 w-80 sm:w-[470px] mx-auto bg-white rounded-lg shadow-md overflow-hidden -mb-24 p-5 flex flex-col md:flex-row items-center animate fadeInUp">
              <div className="icon bg-purple-400 text-blue-800 p-4 rounded-full mr-4 flex-shrink-0">
                <i className="lni-calendar text-2xl"></i>
              </div>
              <div className="date text-sm text-white bg-purple-600 rounded-md py-2 px-4 ml-4">
                6:00PM - 8:00PM
              </div>
              <div className="content flex-1">
                <h3 className="text-xl font-bold text-green-800 mb-3">
                  CREATOR'S CONCLAVE
                </h3>
                <p className="text-gray-700">MIT QUADRANGLE</p>
              </div>
            </div>
          </div>
        </div>

        {/* left */}
        <div className="container mt-32 sm:mt-0 sm:ml-72 mx-auto p-5">
          <div className="text-center mb-4">
            <h2 className="text-[32px] sm:-ml-[260px] font-semibold text-gray-300">
              15th February
            </h2>
          </div>
          <div className="timeline-events">
            <div className="timeline-event w-80 sm:w-[470px] mx-auto  bg-white rounded-lg shadow-md overflow-hidden mb-8 p-5 flex flex-col md:flex-row items-center animate fadeInUp">
              <div className="icon bg-purple-400 text-green-800 p-4 rounded-full mr-4 flex-shrink-0">
                <i className="lni-clipboard text-2xl"></i>
              </div>
              <div className="date text-sm text-white bg-purple-600 rounded-md py-2 px-4 mr-4">
                1:30PM - 5:00PM
              </div>
              <div className="content flex-1">
                <h3 className="text-xl font-bold text-blue-800 mb-3">
                  PITCH TANK FINALS
                </h3>
                <p className="text-gray-700 ">LIBRARY AUDITORIUM</p>
              </div>
            </div>
            <div className="timeline-event w-80 sm:w-[470px] mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-8 p-5 flex flex-col md:flex-row items-center animate fadeInUp">
              <div className="icon bg-purple-400 text-blue-800 p-4 rounded-full mr-4 flex-shrink-0">
                <i className="lni-calendar text-2xl"></i>
              </div>
              <div className="date text-sm text-white bg-purple-600 rounded-md py-2 px-4 ml-4">
                5:00PM - 6:00PM
              </div>
              <div className="content flex-1">
                <h3 className="text-xl font-bold text-blue-800 mb-3">
                  FOUNDER'S CONCLAVE
                </h3>
                <p className="text-gray-700">MIT QUADRANGLE</p>
              </div>
            </div>
            <div className="timeline-event w-80 sm:w-[470px] mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-8 p-5 flex flex-col md:flex-row items-center animate fadeInUp">
              <div className="icon bg-purple-400 text-blue-800 p-4 rounded-full mr-4 flex-shrink-0">
                <i className="lni-calendar text-2xl"></i>
              </div>
              <div className="date text-sm text-white bg-purple-600 rounded-md py-2 px-4 ml-4">
                2:30PM - 4:30PM
              </div>
              <div className="content flex-1">
                <h3 className="text-xl font-bold text-blue-800 mb-3">
                  PROD-A-TRON FINALS
                </h3>
                <p className="text-gray-700">ONLINE</p>
              </div>
            </div>
            <div className="timeline-event w-80 sm:w-[470px] mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-8 p-5 flex flex-col md:flex-row items-center animate fadeInUp">
              <div className="icon bg-purple-400 text-blue-800 p-4 rounded-full mr-4 flex-shrink-0">
                <i className="lni-calendar text-2xl"></i>
              </div>
              <div className="date text-sm text-white bg-purple-600 rounded-md py-2 px-4 ml-4">
                6:30PM - 7:30PM
              </div>
              <div className="content flex-1">
                <h3 className="text-xl font-bold text-blue-800 mb-3">
                  CHAI PE CHARCHA
                </h3>
                <p className="text-gray-700">MIT QUADRANGLE</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container sm:-mt-32 sm:-ml-72 mx-auto p-5">
          <div className="text-center mb-4">
            <h2 className="text-[32px] sm:ml-[260px] font-semibold text-gray-300">
              16th February
            </h2>
          </div>
          <div className="timeline-events">
            <div className="timeline-event w-80 sm:w-[470px] mx-auto  bg-white rounded-lg shadow-md overflow-hidden mb-8 p-5 flex flex-col md:flex-row items-center animate fadeInUp">
              <div className="icon bg-purple-400 text-green-800 p-4 rounded-full mr-4 flex-shrink-0">
                <i className="lni-clipboard text-2xl"></i>
              </div>
              <div className="date text-sm text-white bg-purple-600 rounded-md py-2 px-4 mr-4">
                9:00AM - 5:00PM
              </div>
              <div className="content flex-1">
                <h3 className="text-xl font-bold text-green-800 mb-3">
                  INNOVATION MELA
                </h3>
                <p className="text-gray-700 ">MIT ACADEMIC AREA</p>
              </div>
            </div>
            <div className="timeline-event w-80 sm:w-[470px] mx-auto  bg-white rounded-lg shadow-md overflow-hidden mb-8 p-5 flex flex-col md:flex-row items-center animate fadeInUp">
              <div className="icon bg-purple-400 text-green-800 p-4 rounded-full mr-4 flex-shrink-0">
                <i className="lni-clipboard text-2xl"></i>
              </div>
              <div className="date text-sm text-white bg-purple-600 rounded-md py-2 px-4 mr-4">
                10:30AM - 12:30PM
              </div>
              <div className="content flex-1">
                <h3 className="text-xl font-bold text-green-800 mb-3">
                  CASE MAZE FINALS
                </h3>
                <p className="text-gray-700 ">MV SEMINAR HALL</p>
              </div>
            </div>
            <div className="timeline-event w-80 sm:w-[470px] mx-auto  bg-white rounded-lg shadow-md overflow-hidden mb-8 p-5 flex flex-col md:flex-row items-center animate fadeInUp">
              <div className="icon bg-purple-400 text-green-800 p-4 rounded-full mr-4 flex-shrink-0">
                <i className="lni-clipboard text-2xl"></i>
              </div>
              <div className="date text-sm text-white bg-purple-600 rounded-md py-2 px-4 mr-4">
                12:30PM - 2:30PM
              </div>
              <div className="content flex-1">
                <h3 className="text-xl font-bold text-green-800 mb-3">
                  PROMO QUEST FINALS
                </h3>
                <p className="text-gray-700 ">MV SEMINAR HALL</p>
              </div>
            </div>
            <div className="timeline-event w-80 sm:w-[470px] mx-auto  bg-white rounded-lg shadow-md overflow-hidden mb-16 p-5 flex flex-col md:flex-row items-center animate fadeInUp">
              <div className="icon bg-purple-400 text-green-800 p-4 rounded-full mr-4 flex-shrink-0">
                <i className="lni-clipboard text-2xl"></i>
              </div>
              <div className="date text-sm text-white bg-purple-600 rounded-md py-2 px-4 mr-4">
                6:00PM - 7:30PM
              </div>
              <div className="content flex-1">
                <h3 className="text-xl font-bold text-green-800 mb-3">
                  ENTERTAINMENT NIGHT
                </h3>
                <p className="text-gray-700 ">MIT QUADRANGLE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Timeline;
