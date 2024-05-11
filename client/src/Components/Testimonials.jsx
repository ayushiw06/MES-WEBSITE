// TestimonialsSlider.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonialsData = [
  {
    id: 1,
    author: 'John Doe',
    quote: 'Lorem ipsum dolor sit adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    author: 'Jane Smith',
    quote: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 3,
    author: 'Bob Johnson',
    quote: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

const TestimonialsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-5xl mx-auto p-10 ">
      <Slider {...settings}>
        {testimonialsData.map(testimonial => (
          <div key={testimonial.id} className="testimonial-item p-10">
            <div className="bg-white p-22 rounded shadow-2xl shadow-white">
              <p className="text-gray-800 w-64 p-2">{testimonial.quote}</p>
              <p className="text-gray-600 mt-4 p-2">- {testimonial.author}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsSlider;