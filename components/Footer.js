import React from "react";

const Footer = () => {
  return (
    <footer>
      <hr />
      <div className="footer_wrapper">
        <div className="footer-box-1">
          <div className="footer-box-info">
            <div className="footer-box-info-1a">COMPANY</div>
            <div className="footer-box-info-1b">회사소개</div>
            <div className="footer-box-info-1b">블로그</div>
          </div>
          <div className="footer-box-info">
            <div className="footer-box-info-1a">POLICIES</div>
            <div className="footer-box-info-1b">이용약관</div>
            <div
              className="footer-box-info-1b"
              style={{ fontWeight: "bold", color: "black" }}
            >
              개인정보처리방침
            </div>
          </div>
          <div className="footer-box-info">
            <div className="footer-box-info-1a">SUPPORT</div>
            <div className="footer-box-info-1b">자주묻는질문</div>
            <div className="footer-box-info-1b">개인저보처리방침</div>
          </div>
        </div>
        <div className="footer-box-2">
          <div className="footer-box-info-1a">MONI CENTER</div>
          <div className="fb2">모니 고객센터</div>
          <div className="fb3">운영시간</div>
          <div className="fb3">평일 09:00 ~ 18:00 | 점심시간 12:00 ~ 13:00</div>
          <div>instagram / naver blog</div>
        </div>
        <div className="footer-box-3">
          <div className="footer-box-info">
            <div className="footer-box-info-1b">(주)모니</div>
            <div className="footer-box-info-1b">대표자명 : 윤성모</div>
            <div className="footer-box-info-1b">
              사업자등록번호 : 768-13-104563
            </div>
          </div>
          <div className="footer-box-info">
            <div className="footer-box-info-1b">
              주소 : 대구광역시 중구 동성로2길 5 1층
            </div>
          </div>
          <div className="footer-box-info">
            <div className="footer-box-info-1b">
              통신판매업 신고번호 : 2023-대구중구-021356
            </div>
            <div className="footer-box-info-1b">전화번호 : 1577-4645</div>
          </div>
          <div className="footer-box-info-1b" style={{ marginTop: "20px" }}>
            Copyright ⓒ2023 moni inc, Itd. All rights reserved
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer_wrapper {
          border: 3px solid #ef5b37;
          width: 100%;
          display: flex;
          flex-wrap: wrap;
        }
        hr {
          margin-bottom: 40px;
        }
        .footer-box-1 {
          /* border: 1px solid red; */
          background: #fffff1;
          width: 50%;
          margin-top: 10px;
        }
        .footer-box-info {
          /* border: 1px solid black; */
          display: flex;
          margin-bottom: 10px;
        }

        .footer-box-info-1a {
          font-weight: 600;
          margin-right: 30px;
          width: 120px;
        }
        .footer-box-info-1b {
          display: flex;
          color: grey;
          margin-right: 15px;
        }
        .footer-box-2 {
          /* border: 1px solid orange; */
          width: 50%;
        }
        .footer-box-3 {
          /* border: 1px solid orange; */
          background: #bce4f9;
          margin: 30px 0;
        }
        /* div.footer-box-3:last-child {
          margin-top : 10px;
        } */
        div.footer-box-2 > div {
          font-weight: bold;
          margin: 10px 0;
          font-size: 17px;
        }

        .fb2 {
          color: #ffa500;
        }
        .fb3 {
          color: #808080;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
