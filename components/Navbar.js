import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <div>
        <Link legacyBehavior href="/page1">
          <a>
            <span>실무역량</span>
          </a>
        </Link>
        <Link legacyBehavior href="/page2">
          <a>
            <span>디자인·영상</span>
          </a>
        </Link>
        <Link legacyBehavior href="/page3">
          <a>
            <span>개발·데이터</span>
          </a>
        </Link>
        <Link legacyBehavior href="/page3">
          <a>
            <span>외국어</span>
          </a>
        </Link>

        <br />
      </div>
      <hr />
      <style jsx>{`
        nav {
          margin-top: 38px;
        }
        span {
          width: 68px;
          height: 18px;
          margin: 38px 30px 104px 0;
          font-family: Pretendard;
          font-size: 20px;
          font-weight: 600;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: -0.2px;
          text-align: left;
          color: #383838;
        }
        hr {
          width: 1925px;
          height: 2px;
          margin: 25px 0 70px 0;
          border: solid 1px #d3d6d8;
          background-color: #d3d6d8;
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
