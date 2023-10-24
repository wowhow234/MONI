import React from "react";

const Main3 = () => {
  return (
    <div>
      <div className="mainbox5">
        <div className="mainbox5-1">
          <span className="text_orange">최근 많이 검색한⌨️</span>
          <span className="text_black">포토샵부터 일러스트까지</span>
        </div>
        <div className="mainbox5-2">
          <div className="design-banner-box">
            <img src="/images/index/design-banner1.png" />
            <div className="design-banner-bottom">
              <div className="region">수성</div>
              <div className="BEST-">[DESIGN] 난생처음 포토샵</div>
              <span className="star">★</span>
              <span className="star_count">10</span>
              <span className="pencil">🖊️</span>
              <span className="review_count">후기 5</span>
              <div className="price">40,000원</div>
            </div>
          </div>
          <div className="design-banner-box">
            <img src="/images/index/design-banner2.png" />
          </div>

          <div className="design-banner-box">
            <img src="/images/index/design-banner3.png" />
          </div>

          <div className="design-banner-box">
            <img src="/images/index/design-banner4.png" />
          </div>

          <div className="design-banner-box">
            <img src="/images/index/design-banner5.png" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .mainbox5 {
          border: 2px solid orange;
        }
        .mainbox5-1 {
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
        .mainbox5-2 {
          border: 3px solid pink;
          display: flex;
          justify-content: space-between;
          margin-bottom: 50px;
        }
        .design-banner-box {
          border: 2px solid yellow;
          width: fit-content;
          display: flex;
          flex-direction: column;
        }
        .design-bottom {
          border: 2px solid black;
          width: fit-content;
        }
      `}</style>
    </div>
  );
};

export default Main3;
