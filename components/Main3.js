import React from "react";

const Main3 = () => {
  return (
    <div>
      <div className="mainbox3">
        <div className="mainbox3-1">
          <span className="text_orange">기초부터 차근차근🐢</span>
          <span className="text_black">초보도 쉽게 따라하는 클래스</span>
        </div>
        <div className="mainbox3-2">
          <div className="begin-class-banner-box">
            <img src="/images/index/begin-class-banner1.png" />
            <div className="begin-class-banner-bottom">
              <div className="region">수성</div>
              <div className="BEST-">[BEST] 어서와 리액트는 처음이지?</div>
              <span className="star">★</span>
              <span className="star_count">10</span>
              <span className="pencil">🖊️</span>
              <span className="review_count">후기 5</span>
              <div className="price">39,000원</div>
            </div>
          </div>
          <div className="begin-class-banner-box">
            <img src="/images/index/begin-class-banner2.png" />
          </div>
          <div className="begin-class-banner-box">
            <img src="/images/index/begin-class-banner3.png" />
          </div>
          <div className="begin-class-banner-box">
            <img src="/images/index/begin-class-banner4.png" />
          </div>
          <div className="begin-class-banner-box">
            <img src="/images/index/begin-class-banner5.png" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .mainbox3 {
          border: 2px solid orange;
        }
        .mainbox3-1 {
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
        .mainbox3-2 {
          border: 3px solid pink;
          display: flex;
          justify-content: space-between;
          margin-bottom: 80px;
        }
        .begin-class-banner-box {
          border: 2px solid yellow;
          width: fit-content;
          display: flex;
          flex-direction: column;
        }
        .begin-class-banner-bottom {
          border: 2px solid black;
          width: fit-content;
        }
      `}</style>
    </div>
  );
};

export default Main3;
