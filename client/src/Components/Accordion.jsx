import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import mes from "../assets/IMG_6967.jpg";
import mahe from "../assets/MAHE.jpg";
import mit from "../assets/Quadrangle.jpg";
import ecell from "../assets/icbuilding.jpeg";

const Accordion = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  const handleCardClick = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const cardVariants = {
    expanded: {
      width: isSmallScreen ? "350px" : "400px",
      height: isSmallScreen ? "400px" : "420px",
    },
    collapsed: {
      width: isSmallScreen ? "350px" : "200px",
      height: isSmallScreen ? "150px" : "420px",
    },
  };

  const cardImages = [
    "https://i.ibb.co/nM2bzMk/image-2024-02-12-235442817-min-1.png",
    "https://i.ibb.co/B4XdSnh/MAHE.webp",
    "https://i.ibb.co/cXJjsZR/Quadrangle.jpg",
    "https://i.ibb.co/1LGSjr8/icbuilding.jpg",
  ];

  const cardHeadings = ["MES", "MAHE", "MIT", "ECell"];

  const cardDescriptions = [
    "Manipal Entrepreneurship Summit 2024, hosted by E-Cell MIT, is a dynamic event uniting innovative ideas and industry leaders with a 5-lakh prize pool, offering a platform for engaging with speakers, mentors, and diverse competitions to celebrate and propel entrepreneurship.",
    "Manipal Academy of Higher Education has 250+ global university partnerships, offering faculty and students access to world-class institutions, experiences, and resources in study, research, and service.",
    "Established in 1957 as one of India's pioneering self-financing engineering colleges, Manipal Institute of Technology (MIT) is a private institution under Manipal Academy of Higher Education (MAHE).",
    "E-Cell MIT Manipal, a student-run non-profit, bridges the idea-to-incubation gap, fostering entrepreneurship through a start-up ecosystem and mentorship. Our mission is to empower students, offering a one-stop destination for turning ideas into successful ventures.",
  ];

  return (
    <section className="py-8 pb-[90px] bg-none">
      <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-5">
        {[0, 1, 2, 3].map((index) => (
          <motion.div
            key={index}
            className={`card cursor-pointer bg-cover bg-center rounded-[20px] ${
              index === expandedIndex ? "expanded" : ""
            }`}
            variants={cardVariants}
            initial="collapsed"
            animate={index === expandedIndex ? "expanded" : "collapsed"}
            transition={{ duration: 0.5 }}
            onClick={() => handleCardClick(index)}
            style={{
              backgroundImage: `url(${cardImages[index]})`,
            }}
          >
            <div className="card-content h-full flex flex-col justify-end">
              <div className="card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center">
                <h2 className="text-xl font-semibold text-white text-center">
                  {cardHeadings[index]}
                </h2>
                {index === expandedIndex && (
                  <p className="mt-2 text-gray-300 text-center">
                    {cardDescriptions[index]}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Accordion;
//mes:<a href="https://ibb.co/tpf48pC"><img src="" alt="image-2024-02-12-235442817-min-1" border="0"></a>
//
