import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session, status } = useSession();

  console.log("session 확인----->", session);

  return (
    <div>
      <div className="box1">
        <span className="enrol">클래스 등록</span>
        <div className="box1-1">
          {status === "authenticated" ? (
            <div>
              <span> {session.user.name}님 안녕하세요.</span>
              <button onClick={() => signOut()}>로그아웃</button>
            </div>
          ) : (
            <div>
              <button onClick={() => signIn()}>로그인</button>
              <button>회원가입</button>
            </div>
          )}
          <div>
            <Link legacyBehavior href="/notice">
              <a>공지사항</a>
            </Link>{" "}
          </div>
          <div>
            <Link legacyBehavior href="/fnq">
              <a>F&Q</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="box2">
        <div>
          <Link legacyBehavior href="/">
            <a>
              <img src="/images/index/logo.png" />
            </a>
          </Link>
        </div>
        <div>
          <input
            placeholder="당신의 취미를 찾아보세요."
            className="search_box"
          ></input>
          {/* <span className="search_text">당신의 취미를 찾아보세요.</span> */}
        </div>
        <div className="cartmy">
          <div className="CART-div">
            <img src="/images/index/cart.png" />
            <div className="CART">CART</div>
          </div>
          <div className="MY-div">
            <img src="/images/index/my.png" />
            <div className="MY">MY</div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .enrol {
          margin: 0 0 30px 0;
          letter-spacing: -0.15px;
          text-align: left;
        }
        .box1 {
          border: 1px solid red;
          display: flex;
          justify-content: space-between;
        }
        .box1-1 {
          border: 1px solid green;
          // width: fit-content;
          display: flex;
        }
        .box1-1 div {
          margin: 0 10px;
        }
        .box2 {
          border: 1px solid black;
          display: flex;
        }
        .search_box {
          width: 532px;
          height: 20px;
          padding: 20px 43px 24px 42px;
          border-radius: 33.5px;
          background-color: #e6e6e6;
          margin-left: 82px;
          font-size: 20px;
          border: none;
        }
        .cartmy {
          border: 1px solid blue;
          margin-left: auto;
          /* display: block; */
        }
        .CART,
        .MY {
          margin-top: 8px;
        }
        .CART-div,
        .MY-div {
          border: 2px solid yellow;
          display: inline-grid;
          justify-items: center;
          margin: auto 36px;
        }
        /* .MY {
          height: 9px;
          margin: 8px 22px 45px 1px;
        } */
      `}</style>
    </div>
  );
};

export default Header;
