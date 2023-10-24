import React from "react";

const Main6 = () => {
  return (
    <div>
      <div className="mainbox6">
        <div className="mainbox6-1">
          <span className="text_black">초보도 쉽게 따라하는 클래스</span>
        </div>
        <div className="mainbox6-2">
          <div className="etc-banner-box">
            <img src="/images/index/etc-banner1.png" />
          </div>
          <div className="etc-banner-box">
            <img src="/images/index/etc-banner2.png" />
          </div>
          <div className="etc-banner-box">
            <img src="/images/index/etc-banner3.png" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .mainbox6 {
          border: 2px solid orange;
        }
        .mainbox6-1 {
          margin-bottom: 20px;
          display: inline-grid;
        }
        .text_black {
          font-size: 20px;
          letter-spacing: -0.2px;
        }
        .mainbox6-2 {
          border: 3px solid pink;
          display: flex;
          justify-content: space-between;
          margin-bottom: 80px;
        }
        .etc-banner-box {
          border: 2px solid yellow;
          width: fit-content;
          display: flex;
          flex-direction: column;
        }
        .etc-banner-bottom {
          border: 2px solid black;
          width: fit-content;
        }
      `}</style>
    </div>
  );
};

export default Main6;
