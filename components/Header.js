import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session, status } = useSession();

  console.log("session 확인----->", session);

  return (
    <header>
      <div className="box1">
        <span className="enrol">클래스 등록</span>
        <div className="box1-1">
          {status === "authenticated" ? (
            <div>
              <span> {session.user.name}님 안녕하세요.</span>
              <span onClick={() => signOut()}>로그아웃</span>
            </div>
          ) : (
            <div>
              <span onClick={() => signIn()}>로그인</span>
              <span>회원가입</span>
            </div>
          )}
          <div>
            <Link legacyBehavior href="/notice">
              <span>
                <a>공지사항</a>
              </span>
            </Link>{" "}
          </div>
          <div>
            <Link legacyBehavior href="/fnq">
              <span>
                <a>F&Q</a>
              </span>
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
          /* border: 1px solid red; */
          display: flex;
          justify-content: space-between;
        }
        .box1-1 {
          /* border: 1px solid green; */
          // width: fit-content;
          display: flex;
        }
        .box1-1 div span {
          margin: 0 10px;
        }
        .box2 {
          /* border: 1px solid black; */
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
          /* border: 1px solid blue; */
          margin-left: auto;
          /* display: block; */
        }
        .CART,
        .MY {
          margin-top: 8px;
        }
        .CART-div,
        .MY-div {
          /* border: 2px solid yellow; */
          display: inline-grid;
          justify-items: center;
        }
        .MY-div {
          margin-left: 40px;
        }
      `}</style>
    </header>
  );
};

export default Header;
