import { Image } from 'antd';
import React from 'react'
import Slider from 'react-slick'
import NextComponent from '../NextComponent/NextComponent';
import BackComponent from '../BackComponent/BackComponent';

const SliderComponent = ({ arrImages, dots = false, arrows = false, defaultArrows = true, ...props }) => {
    var settings = {
        dots: dots,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: arrows
    };

    var settings2 = {
        dots: dots,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: (
          <NextComponent
            fontSize="4rem"
            color="rgba(0, 0, 0, 0.8)"
            position="absolute"
            zIndex="2"
            top="50%"
            transform="translateY(-50%)"
            right="-9px"
          />
        ),
        prevArrow: (
          <BackComponent
            fontSize="4rem"
            color="rgba(0, 0, 0, 0.8)"
            position="absolute"
            zIndex="2"
            top="50%"
            transform="translateY(-50%)"
            left="-9px"
          />
        ),
      };

    const sliderSettings = defaultArrows ? settings : settings2;

    return (
        <Slider {...sliderSettings}>
            {arrImages.map((image) => {
                return (
                    <Image 
                        key={image}
                        src={image} 
                        alt="Poster" 
                        preview={false}
                        width="100%"
                        height="100%"
                        {...props}
                    />
                )
            })}
        </Slider>
    )
}

export default SliderComponent
