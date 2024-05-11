import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import logo from '../assets/mes24.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navigationLinks = [
    { to: '/', label: 'HOME' },
    { to: '/Events', label: 'EVENTS' },
    { to: '/Speaker', label: 'SPEAKERS' },
    { to: '/AboutUs', label: 'ABOUT US' },
  ];

  return (
    <nav className="bg-blue-100 flex  items-end justify-between shadow-md" style={{ backgroundImage: "url('img.jpg')" }}>
      <div className="w-full  px-4 mr-2 sm:px-0 lg:px-0 relative">
        {/* Translucent overlay for mobile */}
        {isOpen && (
          <div className="fixed inset-0 bg-black opacity-50 z-50" onClick={toggleNavbar}></div>
        )}

        <div className="flex items-center justify-between h-16">
          <div>
            <Link to="/" className="flex mx-5 my-3  items-center"> {/* Adjusted margin here */}
              <img src={logo} className="w-9 h-9 mr-4" alt="MES Logo" />
              <span className="hidden lg:block font-bold w-96 text-white max-w-[600px] truncate">Manipal Entrepreneurship Summit '24</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4"> {/* Adjusted margin and spacing here */}
            {navigationLinks.map((link, index) => (
              <Link key={index} to={link.to} className="text-gray-300 hover:bg-gray-700 hover:text-white ml-[240px] px-5 py-2 rounded-md text-sm font-medium">
                {link.label}
              </Link>
            ))}
            {/* <button onClick={() => isAuthenticated ? logout({ returnTo: window.location.origin }) : loginWithRedirect()} className="border-2 border-[#8972DA] w-28 h-12 mt-0 flex  sm:ml-0 items-center justify-center  rounded-full text-[#8972DA] bg-gray-100 block text-24 font-bold transition-all duration-300 ease-in-out cursor-pointer focus:bg-[#8972DA] focus:text-white hover:bg-[#8972DA] hover:text-white hover:font-bold">
              {isAuthenticated ? 'LOGOUT' : 'LOGIN'}
            </button> */}
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleNavbar} className="text-gray-400 hover:text-white inline-flex items-center justify-center p-2  rounded-md focus:outline-none">
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 w-full z-50 bg-black">
          <div className="px-2 pt-2 pb-3 sm:px-3">
            {navigationLinks.map((link, index) => (
              <Link key={index} to={link.to} className="text-white block px-3 py-2 rounded-md text-base font-medium">
                {link.label}
              </Link>
            ))}
            {/* <button onClick={() => isAuthenticated ? logout({ returnTo: window.location.origin }) : loginWithRedirect()} className="text-white block px-3 py-2 rounded-md text-base font-medium">
              {isAuthenticated ? 'LOGOUT' : 'LOGIN'}
            </button> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;