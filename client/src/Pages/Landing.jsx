import logo from '../assets/mes24.png';
import "./App2.css";
import bgvideo from "../assets/bgvideo.mp4";
import log from "../assets/manipal_logo.png";
import Timelineland from "../Components/Timelineland";
import bgg from "../assets/background.jpg";
import backgroundImage from '../assets/bgmes24.jpeg';
import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import bg2video from "../assets/landmes3.mp4";
import Navbar from '../Components/Navbar';
import footlogo from "../assets/footlogo.jpg";
import { useAuth0 } from "@auth0/auth0-react";


export default function App() {

  const { user, isAuthenticated, loginWithRedirect } = useAuth0();

  const Event = ({ title, level, description, register, isLastInLastSet }) => {
    const [countUpVisible, setCountUpVisible] = useState(false);

    const handleVisibilityChange = (isVisible) => {
      if (isVisible) {
        setCountUpVisible(true);
      }
    };

    const containerClasses = `top-44 relative border-7 rounded-2xl p-3 hover:bg-purple-300 hover:text-black bg-black m-0 w-[425px] h-[300px] basis-[24rem] flex flex-col justify-between flex-shrink-0 mb-4 text-white shadow-purple-200 opacity-75 shadow-xl`;

    return (
      <div className={containerClasses} onMouseEnter={() => handleVisibilityChange(true)} onMouseLeave={() => handleVisibilityChange(false)}>
        <h1 className="font-extrabold text-xl">{title}</h1>
        <h4 className="mt-2 text-gray-500 text-base">Description</h4>
        <p className="font-medium tracking-wide my-2">{description}</p>
        {!isLastInLastSet && (
          <a href={register} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            <button className="btn">KNOW MORE</button>
          </a>
        )}
      </div>
    );
  };
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



  return (
    <>
      <Navbar />
      <main style={{ backgroundImage: "url('img.jpg')" }}>


        <body className="relative">
          <div className="h-screen w-full relative">
            <video className="absolute w-full top-0 left-0 h-full object-cover z-10" autoPlay loop muted>
              <source src={bgvideo} type="video/mp4" />
            </video>

            <h1 className="relative z-20 top-44 text-9xl font-serif text-white text-center">
              E-CELL MIT PRESENTS
            </h1>
            <img className="mx-auto -mt-12 relative z-20 w-68 h-56" src={log} alt="Logo" />
            <img className="mx-auto mt-18 relative z-20 w-56 h-56" src={logo} alt="Second Logo" />
            <h1 className="relative z-20 top-4 text-9xl font-serif text-white text-center">
              MANIPAL ENTREPRENEURSHIP SUMMIT'24
            </h1>
            <h1 className="relative z-20 top-8 text-9xl font-serif text-white text-center">
              7TH EDITION
            </h1>
            {/* <a href="/Speaker" className="relative z-20 top-14 ml-[30%] sm:ml-[45%]">
              <button className="rounded-full border border-white bg-black px-10 py-3 text-white hover:bg-gray-200 hover:text-black focus:outline-none">
                REGISTER
              </button>
            </a> */}
          </div>

          <div className=" text-white text-center  space-y-4 rounded-lg shadow-xl">
            <h1 className="text-center text-9xl font-bold font-poppins text-white z-10 pb-8  ">
              <span className="shadow-lg shadow-violet-700">Conclave Pass</span>
            </h1>
            <img src="https://i.ibb.co/SP27QYw/Black-Beige-Modern-Music-Festival-Event-Ticket.png" alt="Ticket" className="mx-auto w-1/2 h-auto rounded-lg shadow-md" />
            <div className="text-lg mt-2 pt-2">Don't miss out on this unique opportunity to connect with industry leaders and like-minded individuals.</div>
            

            {/* {!isAuthenticated ? (
              <a onClick={() => loginWithRedirect()} className="bg-purple-700 hover:bg-purple-800 text-white py-3 px-6 no-underline rounded-full inline-block transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">Login</a>
            ) : (
              
            )} */}

            <a href="https://pay.ecellmit.com" className="bg-purple-700 hover:bg-purple-800 text-white py-3 px-6 no-underline rounded-full inline-block transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">Purchase Pass</a>

    
            
          </div>


          <div className="relative min-h-screen bg-cover bg-center mt-12">
            <h1 className="text-center text-9xl font-bold font-poppins text-white z-10">
              <span className="shadow-lg shadow-violet-700">TIMELINE</span>
            </h1>
            <div className="mx-auto mt-24 text-center text-white font-poppins text-[20px]">
              <Timelineland />
            </div>
          </div>

          <div className="relative min-h-screen bg-cover bg-center">
            <div className="text-center z-10 transform translate-y-1/2">
              <h1 className="text-9xl font-bold font-poppins text-white">
                <span className="shadow-lg shadow-violet-700">EVENTS</span>
              </h1>
            </div>
            <div className="flex flex-wrap justify-around mb-4">
              {competitions1.map((competition, index) => (
                <Event key={competition.id || index} {...competition} />
              ))}
            </div>
          </div>

          <div className="relative h-screen w-full -mt-10">
            <div className="absolute inset-0 flex items-center justify-center lg:pt-12">
              <video className="max-w-full max-h-full" autoPlay muted loop>
                <source src={bg2video} type="video/mp4" />
              </video>
            </div>
          </div>
        </body>

      </main>

      <footer className='bg-black'
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



  )
}