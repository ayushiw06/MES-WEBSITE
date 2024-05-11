import { useState } from "react";
import director from "../assets/anil.jpeg";
import Navbar from "../Components/Navbar";
import footlogo from "../assets/footlogo.jpg";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";
import Accordion from "../Components/Accordion";
import Timeline from "../Components/Timeline";
import CardCarousel from "../Components/CardCarousel";

const AboutUs = () => {
  const [countUpVisible, setCountUpVisible] = useState(false);
  const handleVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountUpVisible(true);
    }
  };

  return (
    <div className="font-poppins overflow-x-hidden text-32 font-normal">
      <Navbar />
      <main style={{ backgroundImage: "url('img.jpg')" }}>
        <div>
          <p className="text-[36px] pt-14 text-white font-bold sm:font-bold text-center ">
            <span className="shadow-lg shadow-violet-700">About Manipal</span>
          </p>
          <Accordion />
        </div>
        <div className="max-w-6xl mx-auto sm:p-8 mt-10">
          <p className="text-[36px] font-bold sm:font-bold text-center">
            <spam className="shadow-lg shadow-violet-700 text-white">
              Our Statistics
            </spam>
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 lg:grid-cols-6 lg:gap-8">
            <div className="pt-[75px] mb-4 sm:mb-0 p-4 flex-grow">
              <VisibilitySensor
                onChange={handleVisibilityChange}
                partialVisibility
              >
                <p className="text-[30px] text-white font-bold sm:font-bold text-center">
                  {countUpVisible && <CountUp end={150} duration={4} />}+{" "}
                </p>
              </VisibilitySensor>
              <p className="text-white text-normal text-[24px] font-medium sm:font-medium text-center">
                Startups Launched
              </p>
            </div>
            <div className="pt-[75px] mb-4 sm:mb-0 p-4 flex-grow">
              <VisibilitySensor
                onChange={handleVisibilityChange}
                partialVisibility
              >
                <p className="text-[30px] font-bold sm:font-bold text-center text-white">
                  {" "}
                  {countUpVisible && <CountUp end={30000} duration={3} />}+
                </p>
              </VisibilitySensor>
              <p className="text-normal text-[24px] font-medium sm:font-medium text-center text-white">
                Footfall
              </p>
            </div>
            <div className="pt-[75px] mb-4 sm:mb-0 p-4 flex-grow">
              <VisibilitySensor
                onChange={handleVisibilityChange}
                partialVisibility
              >
                <p className="text-[30px] font-bold sm:font-bold text-center text-white">
                  {" "}
                  {countUpVisible && <CountUp end={15} duration={4} />}+
                </p>
              </VisibilitySensor>
              <p className="text-normal text-[24px] font-medium sm:font-medium text-center text-white">
                VC's Connected
              </p>
            </div>
            <div className="pt-[75px] mb-4 sm:mb-0 p-4 flex-grow">
              <VisibilitySensor
                onChange={handleVisibilityChange}
                partialVisibility
              >
                <p className="text-[30px] font-bold sm:font-bold text-center text-white">
                  {" "}
                  {countUpVisible && <CountUp end={40} duration={4} />}+
                </p>
              </VisibilitySensor>
              <p className="text-normal text-[24px] font-medium sm:font-medium text-center text-white">
                Guest Speakers
              </p>
            </div>
            <div className="pt-[75px] mb-4 sm:mb-0 p-4 flex-grow">
              <VisibilitySensor
                onChange={handleVisibilityChange}
                partialVisibility
              >
                <p className="text-[30px] font-bold sm:font-bold text-center text-white">
                  {" "}
                  {countUpVisible && <CountUp end={30} duration={4} />}+
                </p>
              </VisibilitySensor>
              <p className="text-normal text-[24px] font-medium sm:font-medium text-center text-white">
                Events
              </p>
            </div>
            <div className="pt-[75px] mb-4 sm:mb-0 p-4 text-white flex-grow">
              <VisibilitySensor
                onChange={handleVisibilityChange}
                partialVisibility
              >
                <p className="text-[30px] font-bold sm:font-bold text-center text-white">
                  {" "}
                  {countUpVisible && <CountUp end={3} duration={4} />}
                </p>
              </VisibilitySensor>
              <p className="text-normal text-[24px] font-medium sm:font-medium text-center text-white">
                Years of Operation
              </p>
            </div>
          </div>
        </div>

        <div className="text-justify m-auto pt-10 sm:pt-10 text-36 font-poppins py-12">
          <p className="font-bold m-auto text-center text-[36px] ">
            <span className=" shadow-lg shadow-violet-700  text-white">
              E-Cell
            </span>
          </p>
          <div className="-mt-24 sm:mt-0">
            <Timeline />
          </div>
        </div>

        <div className="text-center md:text-left pt-0 sm:pt-0 md:pt-0 md:text-4xl lg:text-5xl font-poppins py-6">
          <p className="mb-12 font-bold m-auto text-center text-[36px]">
            <span className="shadow-lg shadow-violet-700 text-white">
              Director's Note
            </span>
          </p>
        </div>

        <div className="flex flex-col md:flex-row">
          <img
            src={director}
            alt="Mission Icon"
            className=" sm:w-96 sm:h-[300px] w-80 rounded-3xl m-auto md:ml-12 mb-3 md:my-0"
          />
          <p className="text-white px-8 sm:ml-12 sm:mr-24 md:px-4 md:ml-8 py-4 text-base md:text-lg text-justify">
            Youth unemployment is one of the major challenges that India and the
            whole world is facing in present times. According to world bank
            estimate globally we need 600 million new jobs in the next 10 years
            to keep global employment constant. India’s unemployment rate is
            estimated to be 7.11 percent and is set to rise due to pandemic
            situation. Our Prime Minister has also stressed the need for
            Atmanirbhar Bharat and encouraged the need for new businesses to be
            established to provide solutions for large scale unemployment. Youth
            entrepreneurship attempts to provide inventive answers for economic
            growth among young adults. Keeping this in mind MIT has launched an
            E -Cell where, our students would be encouraged and trained to
            become successful entrepreneurs by equipping them with specialized
            skill sets. Starting a business can be full of challenges but it is
            a beneficial quest which leads to attaining wealth of knowledge,
            impressive skill sets, and most importantly the ability to face and
            overcome failures. Our students will acquire the confidence to deal
            with the real-world problems and follow their dreams. MIT E-cell
            will help students develop an inquisitive, analytical, creative and
            entrepreneurial mindset. It will also help them through various
            support programs to seek the entrepreneurial pathway and channel
            their skill sets into successful business ventures.
          </p>
        </div>

        <div className="container mx-auto">
          <p className="text-[36px]  mt-24 ml-auto -mb-24 font-extrabold  text-white text-center ">
            <span className="shadow-lg shadow-violet-700">Testimonials</span>
          </p>
          <div>
            <CardCarousel />
          </div>
        </div>
      </main>
      <footer className="bg-black pt-8">
        <div className="py-4 text-gray-400 ">
          <div className="container px-4 mx-auto">
            <div className="-mx-4 flex flex-wrap justify-between">
              <div className="px-4 my-4 w-full xl:w-1/5">
                <a href="/" className="block w-full mb-10">
                  <img
                    src={footlogo}
                    alt="Tailwindow Logo"
                    className="w-full h-auto mb-10"
                  />
                </a>
              </div>

              <div className="px-4 my-4 w-full sm:w-auto lg:block hidden">
                <div>
                  <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600  text-white">
                    Know More
                  </h2>
                </div>
                <ul className="leading-8">
                  <li>
                    <a href="#" className="hover:text-blue-400  text-white">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400  text-white">
                      Speakers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400  text-white">
                      Events
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400  text-white">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="px-4 flex flex-col items-center my-4 w-full sm:w-auto">
                <div>
                  <h2 className="text-2xl pb-4 mb-4 border-b-4 border-blue-600 justify-center md:w-auto text-white">
                    Contact Us
                  </h2>
                </div>

                <ul className="leading-8">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/ashutosh-kanodia-b467241b6/"
                      className="hover:text-blue-400  text-white"
                    >
                      Ashutosh Kanodia{" "}
                    </a>{" "}
                    <span> (+91-89962977444) </span>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/vanshnyati/"
                      className="hover:text-blue-400  text-white"
                    >
                      Vansh Nyati
                    </a>{" "}
                    <span> (+91-8890461763) </span>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/svgnix/"
                      className="hover:text-blue-400  text-white"
                    >
                      Sagnik &nbsp;&nbsp;
                    </a>{" "}
                    <span> (+91-8240606650) </span>
                  </li>
                </ul>
              </div>

              <div className="px-4 my-4 w-full md:w-auto xl:w-1/5">
                <div>
                  <h2 className=" text-2xl pb-4 mb-4 border-b-4 border-blue-600 md:w-auto text-white">
                    Connect With Us
                  </h2>
                </div>

                <div className="flex lg:flex-row items-center justify-center sm:flex-row ">
                  <a
                    href="https://www.linkedin.com/company/ecellmit/"
                    type="button"
                    className="m-1 h-8 sm:h-9 w-8 sm:w-9 rounded-full border-2 border-white uppercase leading-normal  text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                  >
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
                  <a
                    href="https://mobile.twitter.com/ecellmit"
                    type="button"
                    className="m-1 h-8 sm:h-9 w-8 sm:w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto h-full w-3 sm:w-4"
                      fill="currentColor"
                      viewBox="4 0 8 14"
                    >
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
                Made with ❤ by  ECell Technical Team 
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
