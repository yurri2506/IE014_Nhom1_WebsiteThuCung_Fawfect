import { Image } from 'antd';
import React from 'react'
import Slider from 'react-slick'

const SliderComponent = ({ arrImages, dots = false, arrows = false, ...props }) => {
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
    return (
        <Slider {...settings}>
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
