import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Main2 = () => {
  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
  };

  return (
    <div>
      <div className="mainbox2">
        <div className="mainbox2-1">
          <span className="text_orange">최근 한 달간👀</span>
          <span className="text_black">인기 클래스 모음</span>
        </div>
        <div className="mainbox2-2">
          <Slider {...settings}>
            <div className="top-class-banner-box">
              <img src="/images/index/top-class-banner1.png" />
              <div className="top-class-banner-bottom">
                <div className="region">수성</div>
                <div className="BEST-">[BEST] 어서와 리액트는 처음이지?</div>
                <span className="star">★</span>
                <span className="star_count">10</span>
                <span className="pencil">🖊️</span>
                <span className="review_count">후기 5</span>
                <div className="price">39,000원</div>
              </div>
            </div>
            <div className="top-class-banner-box">
              <img src="/images/index/top-class-banner2.png" />
            </div>
            <div className="top-class-banner-box">
              <img src="/images/index/top-class-banner3.png" />
            </div>
            <div className="top-class-banner-box">
              <img src="/images/index/top-class-banner4.png" />
            </div>
            <div className="top-class-banner-box">
              <img src="/images/index/top-class-banner5.png" />
            </div>
            <div className="top-class-banner-box">
              <img src="/images/index/top-class-banner6.png" />
            </div>
            <div className="top-class-banner-box">
              <img src="/images/index/top-class-banner7.png" />
            </div>
            <div className="top-class-banner-box">
              <img src="/images/index/top-class-banner8.png" />
            </div>
            <div className="top-class-banner-box">
              <img src="/images/index/top-class-banner9.png" />
            </div>
          </Slider>
        </div>
      </div>
      <style jsx>{`
        .mainbox2 {
          border: 2px solid gray;
        }
        .mainbox2-1 {
          margin-bottom: 20px;
          display: inline-grid;
        }
        .text_orange {
          font-weight: 500;
          letter-spacing: -0.15px;
          text-align: left;
          color: #ff7e00;
          margin-bottom: 10px;
        }
        .text_black {
          font-size: 20px;
          letter-spacing: -0.2px;
        }
        .mainbox2-2 {
          border: 3px solid pink;
          /* display: flex;
          justify-content: space-between; */
          margin-bottom: 50px;
        }
        .top-class-banner-box {
          border: 2px solid yellow;
          width: fit-content;
          /* display: flex;
          flex-direction: column; */
        }
        .top-class-banner-bottom {
          border: 2px solid black;
          width: fit-content;
        }
      `}</style>
      <style jsx global>{`
        .slick-prev {
          z-index: 1;
          left: -10px;
        }
        .slick-next {
          right: -10px;
        }
        .slick-prev,
        .slick-next {
          width: 20px;
          height: 20px;
          background: blue;
        }
        .slick-prev:before,
        .slick-next:before {
          font-family: "slick";
          font-size: 20px;
          line-height: 1;

          opacity: 0.75;
          color: rgb(59, 223, 209);
        }
      `}</style>
    </div>
  );
};

export default Main2;
