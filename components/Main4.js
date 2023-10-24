import React from "react";

const Main4 = () => {
  return (
    <div>
      <div className="mainbox4">
        <div className="mainbox4-1">
          <span class="text_black">인기 있는 지역</span>
        </div>
        <div className="mainbox4-2">
          <div className="bext-box">
            <img src="/images/index/best-img1.png" />
          </div>
          <div className="bext-box">
            <img src="/images/index/best-img2.png" />
          </div>
          <div className="bext-box">
            <img src="/images/index/best-img3.png" />
          </div>
          <div className="bext-box">
            <img src="/images/index/best-img4.png" />
          </div>
          <div className="bext-box">
            <img src="/images/index/best-img5.png" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .mainbox4 {
          border: 2px solid orange;
        }
        .mainbox4-1 {
          margin-bottom: 20px;
          display: inline-grid;
        }
        .text_black {
          font-size: 20px;
          letter-spacing: -0.2px;
        }
        .mainbox4-2 {
          border: 3px solid pink;
          display: flex;
          justify-content: space-between;
          margin-bottom: 120px;
        }
        .best-box {
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

export default Main4;
