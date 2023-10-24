import React from "react";

const Footer = () => {
  return (
    <div>
      <hr />
      <div className="footer-box-1">
        <div className="footer-box-info">
          <div className="footer-box-info-1a">COMPANY</div>
          <div className="footer-box-info-1b">
            <span>회사소개</span>
            <span>블로그</span>
          </div>
        </div>
        <div className="footer-box-info">
          <div className="footer-box-info-1a">POLICIES</div>
          <div className="footer-box-info-1b">
            <span>이용약관</span>
            <span style={{ fontWeight: "bold" }}>개인정보처리방침</span>
          </div>
        </div>
        <div className="footer-box-info">
          <div className="footer-box-info-1a">SUPPORT</div>
          <div className="footer-box-info-1b">
            <span>자주묻는질문</span>
            <span>개인정보처리방침</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        hr {
          width: 1925px;
          height: 2px;
          margin: 25px 0 70px 0;
          border: solid 1px #d3d6d8;
          background-color: #d3d6d8;
        }
        .footer-box-1 {
          border: 1px solid red;
          background: #fffff1;
        }
        .footer-box-info {
          border: 1px solid black;
          display: flex;
        }
        .footer-box-info-1a {
          font-weight: 600;
          margin-right: 30px;
          width: 80px;
        }
        .footer-box-info-1b span {
          color: grey;
          margin: 0 10px;
        }
      `}</style>
    </div>
  );
};

export default Footer;
