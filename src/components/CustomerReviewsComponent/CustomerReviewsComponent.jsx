import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import BackComponent from "../BackComponent/BackComponent";
import NextComponent from "../NextComponent/NextComponent";
import FeedBackComponent from "../FeedBackComponent/FeedBackComponent";
import TitleComponent from "../TitleComponent/TitleComponent";

const CustomerReviewsComponent = ({isInViewport, isInMobile}) => {
  const reviews = [
    { id: 1, name: "Sarah M.", review: "Rất nhiều sản phẩm cho cún yêu có ở cửa hàng, mình có thể tìm thấy mọi thứ ở đây." },
    { id: 2, name: "Alex K.", review: "Điểm đến ưa thích mỗi khi muốn shopping cho boss nhà mình!!" },
    { id: 3, name: "James L.", review: "Điểm đến ưa thích mỗi khi muốn shopping cho boss nhà mình!!" },
    { id: 4, name: "Phi Thông", review: "Rất nhiều sản phẩm cho cún yêu có ở cửa hàng, mình có thể tìm thấy mọi thứ ở đây." },
    { id: 5, name: "Quang Vũ", review: "Điểm đến ưa thích mỗi khi muốn shopping cho boss nhà mình!!" },
    { id: 6, name: "Thiên Vũ", review: "Điểm đến ưa thích mỗi khi muốn shopping cho boss nhà mình!!" }
  ];

  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextComponent 
        fontSize="5rem"
        color="#000"
        position="absolute"
        zIndex="2"
        top="-80px"
        right="0"
    />,
    prevArrow: <BackComponent 
        fontSize="5rem"
        color="#000"
        position="absolute"
        zIndex="2"
        top="-80px"
        right="50px"
    />
  });

  const handleSettings = () => {
    if (isInViewport || isInMobile) {
      setSettings({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
      });
    }
  };

  useEffect(() => {
    handleSettings();
  }, [isInViewport, isInMobile]);

  return (
    <div>
      <TitleComponent
        title="Khách yêu của PAWFECT nói gì"
        textTransform="none"
        textAlign="left"
        fontSize="4rem"
      />
      <Slider {...settings}>
        {reviews.map((review) => (
            <div key={review.id} className='col'>
                <FeedBackComponent 
                    customer={review.name}
                    review={review.review}
                />
            </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomerReviewsComponent;
