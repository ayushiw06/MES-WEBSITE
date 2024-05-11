import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/random1.jpg";
import img2 from "../assets/random2.jpeg";
import img3 from "../assets/random3.jpeg";
import img4 from "../assets/samay.jpg"
import img5 from "../assets/IMG_6967.jpg"

export function CarouselDefault() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            <div>
                <img
                    src={img3}
                    alt="image 1"
                    className="sm:h-[500px] sm:w-[500px] w-[300px] h-[300px] m-auto object-cover"
                />
            </div>
            <div>
                <img
                    src={img2}
                    alt="image 2"
                    className="sm:h-[500px] sm:w-[500px] w-[300px] h-[300px] m-auto object-cover"
                />
            </div>
            <div>
                <img
                    src={img4}
                    alt="image 4"
                    className="sm:h-[500px] sm:w-[500px] w-[300px] h-[300px] m-auto object-fit"
                />
            </div>
            <div>
                <img
                    src={img5}
                    alt="image 3"
                    className="sm:h-[500px] sm:w-[500px] w-[300px] h-[300px] m-auto object-fit"
                />
            </div>
        </Slider>
    );
}