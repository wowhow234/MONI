import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src="/images/index/main-banner.png" />
        </div>
        <div>
          <img src="/images/index/main-banner2.png" />
        </div>
        <div>
          <img src="/images/index/main-banner3.png" />
          {/* <Image /> 쓰니까 필수요소 width 빠졌다고 에러뜸.. 일일히 적어주기 귀찮고
          걍 원래 사이즈 그대로 적용하고 싶은데 찾아보기도 귀찮고..ㅠ 걍 안쓰고 말지 ㅉㅉ */}
        </div>
      </Slider>
      <style jsx>{`
        img {
          text-align: center;
        }
      `}</style>
      {/* <style jsx global>{`
       
        .slick-prev,
        .slick-next {
          width: 40px;
          height: 40px;
          background: green;
        }
        .slick-prev:before,
        .slick-next:before {
          font-family: "slick";
          font-size: 40px;
          line-height: 1;

          opacity: 0.75;
          color: rgb(59, 223, 209);
        }
      `}</style> */}
    </div>
  );
};

export default SimpleSlider;
