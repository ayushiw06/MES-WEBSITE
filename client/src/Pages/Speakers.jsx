import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "../Components/Navbar";
import Founders from "../Components/Founders";
import Creator from "../Components/Creator";
import Women from "../Components/Women";
import Gaming from "../Components/Gaming";
import Finance from "../Components/Finance";
import Med from "../Components/Med";
import Speakergroupcard2 from "../Components/Speakergroupcard2";
import backgroundImage from "../assets/bgmes24.jpeg";
import footlogo from "../assets/footlogo.jpg";
import a from "../assets/a.png";
import b from "../assets/b.png";
import c from "../assets/c.png";
import d from "../assets/d.png";
import e from "../assets/e.png";
import f from "../assets/f.png";
import g from "../assets/g.png";
import h from "../assets/h.png";
import i from "../assets/i.png";
import j from "../assets/j.png";
import "./App2.css";

const Speakers = () => {
  const { user, isAuthenticated } = useAuth0();
  const [eventRegistered, setEventRegistered] = useState({});

  useEffect(() => {
    const registeredEvents = JSON.parse(
      localStorage.getItem("registeredEvents") || "{}"
    );
    setEventRegistered(registeredEvents);
  }, []);

  const VCsData = [
    {
      id: 1,
      name: "Manish Verma",
      designation: "Founder, AngelBlue Holdings Pvt Ltd.",
      imageUrl: "https://i.ibb.co/qpqQ8rx/dh.jpg",
    },
    {
      id: 2,
      name: "Nitesh Aggarwal",
      designation: "VC, Single Family Office Fund",
      imageUrl: "https://i.ibb.co/KNCm1vL/shje.jpg",
    },
    {
      id: 3,
      name: "Prashant Gupta",
      designation: "Founder, Caerus3 Advisors & Think Tank",
      imageUrl: "https://i.ibb.co/f4FW35W/dfb.jpg",
    },
    {
      id: 4,
      name: "Shashank Randev",
      designation: "CEO,100x VC",
      imageUrl: "https://i.ibb.co/Swh8kyJ/image.png",
    },
    {
      id: 5,
      name: "Karann Mittal",
      designation: "Partner, EV2 Ventures",
      imageUrl: "https://i.ibb.co/82yNnHv/shj.jpg",
    },
    {
      id: 6,
      name: "Rony Saha",
      designation: "VC, Alkemi Growth Capital",
      imageUrl: "https://i.ibb.co/pnkjsX1/sds.jpg",
    },
    {
      id: 7,
      name: "Simran Rana",
      designation: "Investor, BRE",
      imageUrl: "https://i.ibb.co/k2ZHvQS/image.png",
    },
    {
      id: 8,
      name: "Anshika Sinha",
      designation: "VP, Lightbox Venture",
      imageUrl: "https://i.ibb.co/wL2Tkbt/image.png",
    },
    {
      id: 9,
      name: "Siddharth Yedgaonkar",
      designation: "VC, Ankur Capital",
      imageUrl: "https://i.ibb.co/9VWVpkQ/image.png",
    },
  ];

  const VCs = () => {
    return (
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VCsData.map((vc) => (
            <div
              key={vc.id}
              className="bg-black bg-opacity-80 hover:bg-opacity-90 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="w-full h-56 overflow-hidden">
                {" "}
                {/* Container for the image */}
                <img
                  src={vc.imageUrl}
                  alt={vc.name}
                  className="w-full h-full object-contain" // Updated for proper scaling without cropping
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-center text-white">
                  {vc.name}
                </h2>
                <p className="text-gray-400 text-center">{vc.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // const registerEvent = async (eventName) => {
  //   if (!isAuthenticated || !user || !user.name) {
  //     console.error("User is not authenticated or user name is not available");
  //     return;
  //   }

  //   try {
  //     const response = await fetch("http://localhost:5000/register-event", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         eventName,
  //         userName: user.name,
  //       }),
  //     });

  //     if (response.status === 200) {
  //       const updatedRegisteredEvents = {
  //         ...eventRegistered,
  //         [eventName]: true,
  //       };
  //       setEventRegistered(updatedRegisteredEvents);
  //       localStorage.setItem(
  //         "registeredEvents",
  //         JSON.stringify(updatedRegisteredEvents)
  //       );
  //     } else {
  //       console.error(
  //         "Event registration failed with status:",
  //         response.status
  //       );
  //     }
  //   } catch (error) {
  //     console.error("Error registering event:", error);
  //   }
  // };

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Navbar />
      {/* <div className="text-justify m-auto pt-0 sm:pt-10 text-black text-36 font-poppins py-12">
      <div className="font-bold m-auto text-center text-[32px] text-white shadow-lg shadow-violet-700">Keynote Speaker</div>
    </div>
    <div className="flex justify-center mb-">
      <div className="max-w-4xl mx-4 sm:mx-auto bg-black shadow-violet-300 opacity-100 hover:bg-purple-400 hover:text-black shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row w-full sm:max-w-sm md:max-w-4xl">
        <img className="w-full md:w-2/3 h-auto" src="https://i.ibb.co/dgxhLcr/dhgd.jpg" alt="Person" />
        <div className="p-6">
          <h2 className="text-xl font-bold mb-2 text-whitesmoke">John Doe</h2>
          <p className="text-gray-200 mb-2">CEO, Company X</p>
          <p className="text-gray-200 mb-4 mt-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ligula purus. Nam sodales sem non est hendrerit, ut elementum tortor tristique.</p>
        </div>
      </div>
    </div>
 */}

      <div className="container mx-auto px-4 py-12">
        <p className="text-[36px] text-white font-bold sm:font-bold text-center ">
          <span className="shadow-lg shadow-violet-700">Keynote Speaker</span>
        </p>
        <div className="flex justify-center items-center mt-10 mb-8">
          <div className="bg-black rounded-lg overflow-hidden shadow-lg hover:shadow-violet-500/50 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 max-w-xl md:flex">
            <img
              className="w-full md:w-2/5 h-auto object-cover"
              src="https://i.ibb.co/Jpd6hqh/amangupta.jpg"
              alt="Aman Gupta"
            />
            <div className="p-6 flex flex-col justify-between relative">
              <div>
                <div className="absolute -top-8 right-0 sm:top-0 sm:right-0 m-4 py-1 px-3 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full text-white text-xs font-bold shadow-lg z-10">
                  Paid Event
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Aman Gupta
                </h2>
                <p className="text-purple-300">
                  Co-Founder & CMO , Boat Lifestyle
                </p>
              </div>
              <p className="text-gray-400 mt-4">
                Aman Gupta, co-founder of boAt, has transformed the audio
                industry with innovative marketing and deep market
                understanding, making boAt India's top audio brand and globally
                second. His entrepreneurial spirit and commitment to quality
                have made boAt a consumer electronics trailblazer.
              </p>
              <p className="text-gray-400 mt-4">Date: 14th February</p>
              <p className="text-gray-400 mt-4">Time: 5pm Onwards</p>
              <p className="text-gray-400 mt-4">Location: MIT Quadrangle</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-white text-center space-y-4 rounded-lg shadow-xl">
        <h1 className="text-center text-9xl font-bold font-poppins text-white z-10 pb-8">
          <span className="shadow-lg shadow-violet-700">Conclave Pass</span>
        </h1>

        <div className="mx-auto text-lg pt-4 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4">
            Your Pass Includes Exclusive Access:
          </h2>
          <ul className="list-none space-y-4 w-full md:w-8/12 lg:w-6/12 mb-8">
            <li className="flex items-center justify-center">
              <svg
                className="h-6 w-6 text-green-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              An engaging Keynote Session with Aman Gupta, a journey through
              innovation and success.
            </li>
            <li className="flex items-center justify-center">
              <svg
                className="h-6 w-6 text-green-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              An intimate Entry to Chai pe Charcha with Prafull Billore, an
              opportunity to brew insights over tea.
            </li>
            <li className="flex items-center justify-center">
              <svg
                className="h-6 w-6 text-green-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Exclusive Entry to the Founders Panel Discussion, a deep dive into
              the minds of industry pioneers.
            </li>
            <li className="flex items-center justify-center">
              <svg
                className="h-6 w-6 text-green-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Access to the Creators Panel Discussion, a creative confluence of
              leading content creators.
            </li>
          </ul>
        </div>

        <img
          src="https://i.ibb.co/SP27QYw/Black-Beige-Modern-Music-Festival-Event-Ticket.png"
          alt="Ticket"
          className="mx-auto w-1/2 h-auto rounded-lg shadow-md"
        />
        <div className="text-lg mt-2 pt-2">
          Don't miss out on this unique opportunity to connect with industry
          leaders and like-minded individuals.
        </div>
        {/* {!isAuthenticated ? (
          <a onClick={() => loginWithRedirect()} className="bg-purple-700 hover:bg-purple-800 text-white py-3 px-6 no-underline rounded-full inline-block transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">Login</a>
        ) : (
          <a href="/pass" className="bg-purple-700 hover:bg-purple-800 text-white py-3 px-6 no-underline rounded-full inline-block transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">Purchase Pass</a>
        )} */}

        <a
          href="https://pay.ecellmit.com"
          className="bg-purple-700 hover:bg-purple-800 text-white py-3 px-6 no-underline rounded-full inline-block transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg"
        >
          Purchase Pass
        </a>
      </div>

      <div className="container mx-auto px-4 py-12">
        <p className="text-[36px] text-white font-bold sm:font-bold text-center ">
          <span className="shadow-lg shadow-violet-700">Chai pe Charcha</span>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="flex justify-center items-center mt-10 mb-8">
            <div className="bg-black rounded-lg overflow-hidden shadow-lg hover:shadow-violet-500/50 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 max-w-xl md:flex">
              <img
                className="w-full md:w-2/5 h-auto object-cover"
                src="https://i.ibb.co/mRtTW03/fuf.jpg"
                alt="Prafull Billore"
              />
              <div className="p-6 flex flex-col justify-between relative">
                <div>
                  <div className="absolute -top-8 right-0 sm:top-0 sm:right-0 m-4 py-1 px-3 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full text-white text-xs font-bold shadow-lg z-10">
                    Paid Event
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Prafull Billore
                  </h2>
                  <p className="text-purple-300">Founder, MBA Chaiwala</p>
                </div>
                <p className="text-gray-400 mt-4">
                  He's an icon among the youth. He represents India on national
                  and international stages. Overcoming challenges with
                  unwavering resolve, he transformed from facing setbacks to
                  establishing the iconic MBA CHAI WALA, a testament to his
                  entrepreneurial vision and progress.
                </p>
                <p className="text-gray-400 mt-4">Date: 15th February</p>
                <p className="text-gray-400 mt-4">Time: 6:30pm Onwards</p>
                <p className="text-gray-400 mt-4">Location: MIT Quadrangle</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mt-10 mb-8">
            <div className="bg-black rounded-lg overflow-hidden shadow-lg hover:shadow-violet-500/50 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 max-w-xl md:flex">
              <img
                className="w-full md:w-2/5 h-auto object-cover"
                src="https://i.ibb.co/y5M2SWb/image.png"
                alt="Ravi K Ranjan"
              />
              <div className="p-6 flex flex-col justify-between relative">
                <div>
                  <div className="absolute -top-8 right-0 sm:top-0 sm:right-0 m-4 py-1 px-3 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full text-white text-xs font-bold shadow-lg z-10">
                    Paid Event
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Ravi K Ranjan
                  </h2>
                  <p className="text-purple-300">
                    TEDx speakers, Ex Shark Tank Producer
                  </p>
                </div>
                <p className="text-gray-400 mt-4">
                  Ravi was the curator and business advisor for Shark Tank India
                  Launch. He is an Entrepreneurship Evangelist, Startup Expert,
                  and Govt. Advisor (Entrepreneurship), Expert in Open
                  Innovation, Policy Advocacy as well as a 2x TEDx Speaker and a
                  sought-after professional Public Speaker.
                </p>
                <p className="text-gray-400 mt-4">Date: 15th February</p>
                <p className="text-gray-400 mt-4">Time: 6:30pm Onwards</p>
                <p className="text-gray-400 mt-4">Location: MIT Quadrangle</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-8">
        <div className="text-justify m-auto sm:pt-2 text-black text-36 font-poppins py-12">
          <p className="font-bold m-auto text-center text-[32px] ">
            <span className=" shadow-lg shadow-violet-500  text-white">
              Panel Discussion
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col items-center">
            <Founders />
            {/* {isAuthenticated && (
      <button
        className={`rounded-full border border-black bg-[#674BB1] w-10/12 h-10 ${eventRegistered["founder"] ? 'cursor-not-allowed opacity-50' : 'hover:bg-[#674BB1]'
          }`}
        onClick={() => registerEvent("founder", user.name)}
        disabled={eventRegistered["founder"]}
      >
        <div className="font-bold text-white text-base py-1">
          {eventRegistered["founder"] ? 'Registered' : 'Register Now'}
        </div>
      </button>
    )} */}
          </div>
          <div className="flex flex-col items-center">
            <Creator />
            {/* {isAuthenticated && (
      <button
        className={`rounded-full border border-black bg-[#674BB1] w-10/12 h-10 ${eventRegistered["creators-conclave"] ? 'cursor-not-allowed opacity-50' : 'hover:bg-[#674BB1]'
          }`}
        onClick={() => registerEvent("creators-conclave")}
        disabled={eventRegistered["creators-conclave"]}
      >
        <div className="font-bold text-white text-base py-1">
          {eventRegistered["creators-conclave"] ? 'Registered' : 'Register Now'}
        </div>
      </button>
    )} */}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col items-center">
            <Women />
            {/* {isAuthenticated && (
      <button
        className={`rounded-full border border-black bg-[#674BB1] w-10/12 h-10 ${eventRegistered["women"] ? 'cursor-not-allowed opacity-50' : 'hover:bg-[#674BB1]'
          }`}
        onClick={() => registerEvent("women")}
        disabled={eventRegistered["women"]}
      >
        <div className="font-bold text-white text-base py-1">
          {eventRegistered["women"] ? 'Registered' : 'Register Now'}
        </div>
      </button>
    )} */}
          </div>
        </div>
      </div>

      {/* //WORKSHOPS(Backend to be put) */}
      <div className="max-w-5xl mx-auto p-8">
        <div className="text-center mb-12">
          <p className="text-[36px] pt-14 text-white font-bold sm:font-bold text-center ">
            <span className="shadow-lg shadow-violet-700">Workshops</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col items-center">
            <Gaming />
            {/* {isAuthenticated && (
      <button
        className={`rounded-full border border-black bg-[#674BB1] w-10/12 h-10 ${eventRegistered["gaming"] ? 'cursor-not-allowed opacity-50' : 'hover:bg-[#674BB1]'
          }`}
        onClick={() => registerEvent("gaming", user.name)}
        disabled={eventRegistered["gaming"]}
      >
        <div className="font-bold text-white text-base py-1">
          {eventRegistered["gaming"] ? 'Registered' : 'Register Now'}
        </div>
      </button>
    )} */}
          </div>
          <div className="flex flex-col items-center">
            <Med />
            {/* {isAuthenticated && (
      <button
        className={`rounded-full border border-black bg-[#674BB1] w-10/12 h-10 ${eventRegistered["med"] ? 'cursor-not-allowed opacity-50' : 'hover:bg-[#674BB1]'
          }`}
        onClick={() => registerEvent("med", user.name)}
        disabled={eventRegistered["med"]}
      >
        <div className="font-bold text-white text-base py-1">
          {eventRegistered["med"] ? 'Registered' : 'Register Now'}
        </div>
      </button>
    )} */}
          </div>
        </div>
      </div>
      <div className="text-center mb-12">
        <p className="text-[36px] pt-14 text-white font-bold sm:font-bold text-center ">
          <span className="shadow-lg shadow-violet-700">Our VCs</span>
        </p>
      </div>
      <VCs />

      <div className="max-w-5xl mx-auto p-8">
        <div className="text-justify m-auto pt-0 sm:pt-10 text-black text-36 font-poppins py-12">
          <p className="font-bold m-auto text-center text-[32px] ">
            <span className=" shadow-lg shadow-violet-500  text-white">
              Entertainment Night
            </span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <div className="flex flex-col items-center">
              <Speakergroupcard2 />
              {/* {isAuthenticated && (
      <button
        className={`rounded-full border border-black bg-[#674BB1] w-10/12 h-10 ${eventRegistered["comedy"] ? 'cursor-not-allowed opacity-50' : 'hover:bg-[#674BB1]'
          }`}
        onClick={() => registerEvent("comedy", user.name)}
        disabled={eventRegistered["comedy"]}
      >
        <div className="font-bold text-white text-base py-1">
          {eventRegistered["comedy"] ? 'Registered' : 'Register Now'}
        </div>
      </button>
    )} */}
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <p className="text-[36px] pt-14 text-white font-bold sm:font-bold text-center ">
            <span className="shadow-lg shadow-violet-700">Past Speakers</span>
          </p>
        </div>
      </div>
      <div
        x-data="{}"
        x-init="$nextTick(() => {
    let ul = $refs.logos;
    ul.insertAdjacentHTML('afterend', ul.outerHTML);
    ul.nextSibling.setAttribute('aria-hidden', 'true');
  })"
        className="w-full inline-flex flex-nowrap overflow-x-hidden mb-10"
      >
        <ul
          x-ref="logos"
          className="flex items-center justify-center md:justify-start [&_li]:mx-12 [&_img]:max-w-none animate-scroll"
        >
          <li>
            <img src={a} />
          </li>
          <li>
            <img src={b} />
          </li>
          <li>
            <img src={c} />
          </li>
          <li>
            <img src={d} />
          </li>
          <li>
            <img src={e} />
          </li>
          <li>
            <img src={f} />
          </li>
          <li>
            <img src={g} />
          </li>
          <li>
            <img src={h} />
          </li>
          <li>
            <img src={i} />
          </li>
          <li>
            <img src={j} />
          </li>
          <li>
            <img src={a} />
          </li>
          <li>
            <img src={b} />
          </li>
          <li>
            <img src={c} />
          </li>
          <li>
            <img src={d} />
          </li>
          <li>
            <img src={e} />
          </li>
          <li>
            <img src={f} />
          </li>
          <li>
            <img src={g} />
          </li>
          <li>
            <img src={h} />
          </li>
          <li>
            <img src={i} />
          </li>
          <li>
            <img src={j} />
          </li>
          <li>
            <img src={a} />
          </li>
          <li>
            <img src={b} />
          </li>
          <li>
            <img src={c} />
          </li>
          <li>
            <img src={d} />
          </li>
          <li>
            <img src={e} />
          </li>
          <li>
            <img src={f} />
          </li>
          <li>
            <img src={g} />
          </li>
          <li>
            <img src={h} />
          </li>
          <li>
            <img src={i} />
          </li>
          <li>
            <img src={j} />
          </li>
          <li>
            <img src={a} />
          </li>
          <li>
            <img src={b} />
          </li>
          <li>
            <img src={c} />
          </li>
          <li>
            <img src={d} />
          </li>
          <li>
            <img src={e} />
          </li>
          <li>
            <img src={f} />
          </li>
          <li>
            <img src={g} />
          </li>
          <li>
            <img src={h} />
          </li>
          <li>
            <img src={i} />
          </li>
          <li>
            <img src={j} />
          </li>
          <li>
            <img src={a} />
          </li>
          <li>
            <img src={b} />
          </li>
          <li>
            <img src={c} />
          </li>
          <li>
            <img src={d} />
          </li>
          <li>
            <img src={e} />
          </li>
          <li>
            <img src={f} />
          </li>
          <li>
            <img src={g} />
          </li>
          <li>
            <img src={h} />
          </li>
          <li>
            <img src={i} />
          </li>
          <li>
            <img src={j} />
          </li>
          <li>
            <img src={a} />
          </li>
          <li>
            <img src={b} />
          </li>
          <li>
            <img src={c} />
          </li>
          <li>
            <img src={d} />
          </li>
          <li>
            <img src={e} />
          </li>
          <li>
            <img src={f} />
          </li>
          <li>
            <img src={g} />
          </li>
          <li>
            <img src={h} />
          </li>
          <li>
            <img src={i} />
          </li>
          <li>
            <img src={j} />
          </li>
          <li>
            <img src={a} />
          </li>
          <li>
            <img src={b} />
          </li>
          <li>
            <img src={c} />
          </li>
          <li>
            <img src={d} />
          </li>
          <li>
            <img src={e} />
          </li>
          <li>
            <img src={f} />
          </li>
          <li>
            <img src={g} />
          </li>
          <li>
            <img src={h} />
          </li>
          <li>
            <img src={i} />
          </li>
          <li>
            <img src={j} />
          </li>
        </ul>
      </div>

      <footer className="bg-black">
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

              <div className="px-4 my-4 w-full md:w-auto xl:w-1/5 justify-center">
                <div>
                  <h2 className="flex text-2xl pb-4 mb-4 border-b-4 border-blue-600 item-center justify-center md:w-auto text-white">
                    Connect With Us
                  </h2>
                </div>

                <div className="flex lg:flex-col items-center justify-center sm:flex-row ">
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
                Made with ❤ by ECell Technical Team
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Speakers;
