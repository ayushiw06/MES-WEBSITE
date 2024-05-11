import footlogo from "../assets/footlogo.jpg";
import Navbar from "../Components/Navbar";
import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import "./App2.css";
import CountUp from "react-countup";

//declaring mapping function
const Events = ({ title, level, description, register, isLastInLastSet }) => {
  const [countUpVisible, setCountUpVisible] = useState(false);

  const handleVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountUpVisible(true);
    }
  };

  return (
    <div className="border-7 animate-hover:bounce sm:mx-auto rounded-2xl p-3 hover:bg-purple-300 hover:text-black  bg-black m-0 w-[425px] h-[300px] basis-[24rem] flex flex-col justify-between animate-[wiggle_1s_ease-in-out_infinite] flex-shrink-0 mb-4 text-white  shadow-purple-200 opacity-75 shadow-xl ...">
      <div className="flex flex-col my-3 ">
      </div>
      <h1 className="font-extrabold text-xl">{title}</h1>
      <h4 className="mt-2 text-gray-500 text-base">Description</h4>
      <p className="font-medium tracking-wide my-2">{description}</p>
      {isLastInLastSet ? null : (
        <a
          href={register}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <button class="btn">{/*  */} KNOW MORE</button>
        </a>
      )}
    </div>
  );
};
//declaring counter
const AboutUs = () => {
  const [countUpVisible, setCountUpVisible] = useState(false);

  const handleVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountUpVisible(true);
    }
  };

  return (
    <div className="bg-[url('img.jpg')]">
      <div className="max-w-6xl mx-auto sm:p-6 mt-10 text-center">
        {/* <p className="text-[32px] font-bold sm:font-bold text-center align-middle text-white "> */}
        <h1 className="text-center m-8  text-xlm-8">
        <span className="  text-center font-bold size-10 text-5xl mt-10 mb-10 justify-middle align-middle shadow-lg shadow-violet-700  text-white">Our Statistics</span>
        </h1>
 

        <div className="flex  flex-col sm:flex-row align-middle lg:gap-3  text-center   text-white">
          <div className="pt-[75px] mb-4 sm:mb-0 p-4 flex-grow  text-center">
            <VisibilitySensor
              onChange={handleVisibilityChange}
              partialVisibility
            >
            
              <p className="text-5xl   text-white font-bold sm:font-bold text-center">
                {countUpVisible && <CountUp end={30} duration={4} />}+{" "}
              </p>
            </VisibilitySensor>
            <p className="text-normal  text-xl font-medium sm:font-medium text-center">
            
              Events
            </p>
          </div>
          <div className="pt-[75px] mb-4 sm:mb-0 p-4 flex-grow">
            <VisibilitySensor
              onChange={handleVisibilityChange}
              partialVisibility
            >
              <p className="text-5xl font-bold sm:font-bold text-center">
                {" "}
                {countUpVisible && <CountUp end={10000} duration={3} />}+
              </p>
            </VisibilitySensor>
            <p className="text-normal  text-xl font-medium sm:font-medium text-center">
              Participations
            </p>
          </div>
          <div className="pt-[75px] mb-4 sm:mb-0 p-4 flex-grow space-x-1 justify-start">
            <VisibilitySensor
              onChange={handleVisibilityChange}
              partialVisibility
            >
              <p className="text-5xl  font-bold sm:font-bold sm:mr-4 text-center">
                {" "}
                {countUpVisible && <CountUp end={1000000} duration={3} />}+
              </p>
            </VisibilitySensor>
            <p className="text-normal text-xl font-medium  sm:font-medium text-center">
              Prize Money
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

const Event = () => {
  //  App component logic goes here
  <h1 className="text-white mb-6 shadow-lg">MAHE LEVEL</h1>;

  const competitions1 = [
    // First set of competition data...
    {
      title: "CASEMAZE",
      level: "India Level",
      description:
        "Have a bit of interest in understanding and creating optimal solutions for companies?🤓🧐Case-Maze is here to get your brain cells running!",
      registeredStudents: 121,
      register:
        "https://unstop.com/competitions/case-maze-manipal-entrepreneurship-summit-2024-manipal-academy-of-higher-education-mahe-karnataka-848204",
    },
    {
      title: "PROD-A-TRON",
      level: "India Level",
      description:
        "PROD-A-TRON provides a dynamic challenge, simulating real-world scenarios where participants must make strategic decisions for product success!📈📈",
      registeredStudents: 121,
      register:
        "https://unstop.com/competitions/prod-a-tron-manipal-entrepreneurship-summit-2024-manipal-academy-of-higher-education-mahe-karnataka-848329",
    },
    {
      title: "PROMOQUEST",
      level: "India Level",
      description:
        "💪 Immerse yourself in a spirited competition where you'll face off with like-minded individuals, showcase your marketing knowledge, and vie for some seriously cool prizes.",
      registeredStudents: 121,
      register:
        "https://unstop.com/competitions/promoquest-manipal-entrepreneurship-summit-2024-manipal-academy-of-higher-education-mahe-karnataka-847211",
    },
  ];

  const competitions2 = [
    // Second set of competition data...
    {
      title: "MONEYQUEST",
      level: "India Level",
      description:
        "an exhilarating event that combines the excitement of a treasure hunt with the strategic thrill of a bidding competition involving a dynamic landscape of strategy, negotiation, and resource management",
      registeredStudents: 121,
      register:
        "https://unstop.com/competitions/money-quest-manipal-entrepreneurship-summit-2024-manipal-institute-of-technology-manipal-848539",
    },
    {
      title: "REROUTE AND RESURGE",
      level: "India Level",
      description:
        "Dive into the fascinating world of innovation as we present you with real problem statements derived from the setbacks of well-known startups",
      registeredStudents: 121,
      register: "Click here",
    },
    {
      title: "ENTREPREUNERIAL JACKPOT",
      level: "India Level",
      description:
        "A thrilling entrepreneurial game with three rounds. Accumulated tokens are crucial, leading to the grand 'Innovation Showcase Finale' where surviving teams present AI solutions for final token rewards",
      registeredStudents: 121,
      register:
        "https://unstop.com/competitions/reroute-and-resurge-manipal-entrepreneurship-summit-2024-manipal-academy-of-higher-education-mahe-karnataka-848325",
    },
  ];

  const competitions3 = [
    {
      title: "PITCH TANK",
      level: "India Level",
      description:
        "💸! This is a closed door event where you 🫡🫵, students and start-ups can pitch in your ideas to our esteemed judges who happen to be venture capitalists, angel investors and alumni",
      registeredStudents: 121,
      register:
        "https://unstop.com/competitions/pitch-tank-manipal-entrepreneurship-summit-2024-manipal-academy-of-higher-education-mahe-karnataka-848347",
    },
    {
      title: "INNOVATION MELA",
      level: "India Level",
      description:
        "Experience the thrill of exploration as we bring together innovators, thinkers, and visionaries from diverse fields. The Innovation Mela is not just an event; it's a celebration of human creativity, pushing the boundaries of what's possible.",
      registeredStudents: 121,
      register:
        "https://deeply-beaufort-a88.notion.site/Innovation-Mela-MES-24-Manipal-Entrepreneurship-Summit-58bacdabbd99424a87905e504faf4beb?pvs=4",
    },
  ];

  return (
    <>
      <Navbar />
      <div className style={{ backgroundImage: "url('img.jpg')" }}>
        <br></br>
        {/* <h1 className="mb-8 mt-10 text-center text-white text-5xl underline underline-offset-8 font-bold shadow-lg  font-"> */}
          <h1 className="text-center m-8">
        <span className="  text-center font-bold text-5xl mt-24 mb-10 justify-middle align-middle shadow-lg shadow-violet-700  text-white">PAN INDIA LEVEL</span>
        </h1>
        <br></br>
        <div className="flex flex-wrap justify-around mb-4">
          {competitions1.map((competition, index) => (
            <Events key={index} {...competition} />
          ))}
        </div>
        <br></br>

        {/* <h1 className="mb-8 mt-10 text-center text-white text-5xl underline underline-offset-8  shadow-xl font-bold">
          MAHE LEVEL
        </h1> */}
        <h1 className="text-center m-8">
        <span className="  text-center font-bold text-5xl mt-10 mb-10 justify-middle align-middle shadow-lg shadow-violet-700  text-white">MAHE LEVEL</span>
        </h1>
        <br></br>
        <div className="flex flex-wrap justify-around mb-4">
          {competitions2.map((competition, index) => (
            <Events key={index} {...competition} />
          ))}
          <br></br>
        </div>
        <br></br>
        {/* <h1 className="mb-8 mt-10 text-center text-white text-5xl font-bold underline underline-offset-8 shadow-xl">
          FLAGSHIP EVENTS
        </h1> */}
        <h1 className="text-center m-8">
        <span className="  text-center font-bold mt-10 mb-10 text-5xl justify-middle align-middle shadow-lg shadow-violet-700  text-white">FLAGSHIP EVENTS</span>
        </h1>
        <br></br>
        <br></br>
        <div className="flex flex-wrap justify-around mb-4">
          {competitions3.map((competition, index) => (
            <Events
              key={index}
              {...competition}
            />
          ))}
        </div>
        <div></div>
      <div className="bg-[url('img.jpg')]">
        <AboutUs />
      </div>
      </div>
      
 {/* //making the footer component */}
      <footer
        className="bg-black pt-8"
      >
        <div className="py-4 text-gray-400 ">
          <div className="container px-4 mx-auto">
            <div className="-mx-4 flex flex-wrap justify-between">
              <div className="px-4 my-4 w-full xl:w-1/5">
                <a href="/" className="block w-full mb-10">

                  <img src={footlogo} alt="Tailwindow Logo" className="w-full h-auto mb-10" />
                </a>

              </div>

              <div className="px-4 my-4 w-full sm:w-auto lg:block hidden">
                <div>
                  <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600  text-white">Know More</h2>
                </div>
                <ul className="leading-8">
                  <li><a href="#" className="hover:text-blue-400  text-white">About Us</a></li>
                  <li><a href="#" className="hover:text-blue-400  text-white">Speakers</a></li>
                  <li><a href="#" className="hover:text-blue-400  text-white">Events</a></li>
                  <li><a href="#" className="hover:text-blue-400  text-white">Contact Us</a></li>
                </ul>
              </div>
              <div className="px-4 flex flex-col items-center my-4 w-full sm:w-auto">
                <div>
                  <h2 className="text-2xl pb-4 mb-4 border-b-4 border-blue-600 justify-center md:w-auto text-white">Contact Us</h2>
                </div>

                <ul className="leading-8">
                  <li><a href="https://www.linkedin.com/in/ashutosh-kanodia-b467241b6/" className="hover:text-blue-400  text-white">Ashutosh Kanodia </a> <span> (+91-89962977444)  </span>
                  </li>
                  <li><a href="https://www.linkedin.com/in/vanshnyati/" className="hover:text-blue-400  text-white">Vansh Nyati</a> <span> (+91-8890461763)  </span>
                  </li>
                  <li><a href="https://www.linkedin.com/in/svgnix/" className="hover:text-blue-400  text-white">Sagnik &nbsp;&nbsp;</a> <span> (+91-8240606650)  </span>
                  </li>
                </ul>
              </div>

              <div className="px-4 my-4 w-full md:w-auto xl:w-1/5">
                <div>
                  <h2 className=" text-2xl pb-4 mb-4 border-b-4 border-blue-600 md:w-auto text-white">Connect With Us</h2>
                </div>

                <div className="flex lg:flex-row items-center justify-center sm:flex-row " >
                  <a href="https://www.linkedin.com/company/ecellmit/"
                    type="button"
                    className="m-1 h-8 sm:h-9 w-8 sm:w-9 rounded-full border-2 border-white uppercase leading-normal  text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto h-full w-3 sm:w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.instagram.com/ecell.mit/?hl=en"
                    type="button"
                    className="m-1 h-8 sm:h-9 w-8 sm:w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto h-full w-3 sm:w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="https://mobile.twitter.com/ecellmit" type="button" className="m-1 h-8 sm:h-9 w-8 sm:w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0" data-te-ripple-init data-te-ripple-color="light" >
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-full w-3 sm:w-4" fill="currentColor" viewBox="4 0 8 14">
                      <path
                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCjxa0qInEzuaJR0adwh3VCQ"
                    type="button"
                    className="m-1 h-8 sm:h-9 w-8 sm:w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto h-full w-3 sm:w-4"
                      fill="currentColor"
                      viewBox="10 10 30 32"
                    >
                      <path
                        d="M20.2838235,29.7208546 L20.2817697,19.3775851 L30.0092421,24.5671906 L20.2838235,29.7208546 Z M41.6409276,17.5856462 C41.6409276,17.5856462 41.2890436,15.0488633 40.2097727,13.9319394 C38.8405739,12.4655276 37.3060444,12.4583393 36.6026186,12.3724221 C31.5649942,12 24.008044,12 24.008044,12 L23.9922983,12 C23.9922983,12 16.4356904,12 11.398066,12.3724221 C10.6939556,12.4583393 9.16045298,12.4655276 7.79091194,13.9319394 C6.71164104,15.0488633 6.36009927,17.5856462 6.36009927,17.5856462 C6.36009927,17.5856462 6,20.5646804 6,23.5437145 L6,26.3365376 C6,29.3152295 6.36009927,32.2946059 6.36009927,32.2946059 C6.36009927,32.2946059 6.71164104,34.8310466 7.79091194,35.9483127 C9.16045298,37.4147246 10.9592378,37.3681718 11.7605614,37.5218644 C14.6406709,37.8042616 24.0001711,37.8915481 24.0001711,37.8915481 C24.0001711,37.8915481 31.5649942,37.8799099 36.6026186,37.5074878 C37.3060444,37.4219129 38.8405739,37.4147246 40.2097727,35.9483127 C41.2890436,34.8310466 41.6409276,32.2946059 41.6409276,32.2946059 C41.6409276,32.2946059 42,29.3152295 42,26.3365376 L42,23.5437145 C42,20.5646804 41.6409276,17.5856462 41.6409276,17.5856462 L41.6409276,17.5856462 Z"
                        fill-rule="evenodd"
                        id="Shape"
                        fill="white"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>


          </div>
          <div className="container mx-auto px-4">
            <div className="flex justify-center items-center">
              <p className="font-helvetica text-white text-sm sm:text-base md:text-lg lg:text-xl">
                Made with ❤ by ECell Technical Team 
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};


export default Event; // Export Event component and competitions array
