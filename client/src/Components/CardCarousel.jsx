// CardCarousel.js
import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'jquery/dist/jquery.min';
import 'materialize-css/dist/js/materialize.min';
import person from "../assets/avatar.webp";
import r from "../assets/r.jpg";
import v from "../assets/v.jpg";
import jd from "../assets/jd.jpg";
import ani from "../assets/anirudh.jpg";
import s from "../assets/s.jpg";

const CardCarousel = () => {
    useEffect(() => {
        const carousel = document.querySelector('.carousel');
        const instances = window.M.Carousel.init(carousel, { padding: 200 });

        const intervalId = setInterval(() => {
            instances.next();
        }, 4500);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const cardStyle = {
        height: '375px',
        borderRadius: '15px',
        boxShadow: '0 10px 20px rgba(150, 136, 255, 0.4), 0 16px 32px rgba(150, 136, 255, 0.4)',
    };

    // Adjust the width based on screen size
    if (window.innerWidth >= 600) {
        cardStyle.width = '350px';
    } else {
        cardStyle.width = '275px';
        cardStyle.height = '425px';
    }

    const imageStyle = {
        width: '120px', // Adjust the width as needed
        height: '120px', // Adjust the height as needed
        borderRadius: '50%', // Make it a circle
        objectFit: 'cover', // Maintain aspect ratio
        margin: 'auto', // Center the image horizontally
        display: 'block', // Ensure block-level display
    };


    return (
        <div className="carousel" style={{ height: '600px', perspective: '400px', marginTop: '5%' }}>
            <div className="carousel-item black shadow-md p-4 rounded-lg" style={cardStyle}>
                <img src={jd} alt="img" className='w-32 h-32 rounded-full object-cover items-center' style={imageStyle}/>
                <p className='text-white m-auto'>It's amazing to witness seniors and juniors collaborating on successful events. The bonds formed during these experiences last a lifetime. MES is a vivid memory with my peers, enveloped in waves of entrepreneurship and excitement. This opportunity came my way because I chose to join E-cell.</p>
                <p className="mt-2 mb-2 text-slate-400 text-center text-[18px]">-Jaydev Daga</p>
            </div>
            <div className="carousel-item black shadow-md p-4 rounded-lg" style={cardStyle}>
                <img src={ani} alt="img" className='w-32 h-32 rounded-full object-cover items-center' style={imageStyle}/>
                <p className='text-white m-auto'>Ecell has done an amazing job by building a culture of entrepreneurship in Manipal by various initiatives, notably, MES!</p>
                <p className="mt-2 mb-2 text-slate-400 text-center text-[18px]">-Anirudh Murty</p>
            </div>
            <div className="carousel-item black shadow-md p-4 rounded-lg" style={cardStyle}>
                <img src={r} alt="img" className='w-32 h-32 rounded-full object-cover items-center' style={imageStyle}/>
                <p className='text-white'>It's heartwarming to see how MES and E-Cell light up the entrepreneurial spark in students and the community! The way they tackle challenges and craft solutions is not just impressive, but downright adorable. It's always fun and enjoyable to work with them.</p>
                <p className="mt-2 mb-2 text-slate-400 text-center text-[18px]">-Raunak Gupta</p>
            </div>
            <div className="carousel-item black shadow-md p-4 rounded-lg" style={cardStyle}>
                <img src={s} alt="img" className='w-32 h-32 rounded-full object-cover items-center' style={imageStyle}/>
                <p className='text-white'>It's genuinely moving to see MES and E-Cell fuel the entrepreneurial flame in students and the community! The way they navigate challenges and shape solutions is not just commendable but also absolutely charming. Working with them is consistently delightful and emotionally satisfying!</p>
                <p className="mt-2 mb-2 text-slate-400 text-center text-[18px]">-Siddharth Prakash</p>
            </div>
            <div className="carousel-item black shadow-md p-4 rounded-lg" style={cardStyle}>
                <img src={v} alt="img" className='w-32 h-32 rounded-full object-cover items-center' style={imageStyle}/>
                <p className='text-white'>The impact of MES and E-Cell in nurturing the entrepreneurial flame among students and the community is truly inspiring! Their approach to overcoming challenges and crafting solutions is not just commendable, but also undeniably touching. Collaborating with them is consistently joyous and pleasurable!</p>
                <p className="mt-2 mb-2 text-slate-400 text-center text-[18px]">-Vansh Arora</p>
            </div>
        </div>
    );
};

export default CardCarousel;
