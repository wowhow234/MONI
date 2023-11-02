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

      <style jsx>{`
        nav {
          margin-top: 38px;
          border-bottom: 1px solid pink;
        }
        span {
          width: 68px;
          height: 18px;
          margin: 38px 30px 104px 0;
          font-size: 20px;
          font-weight: 600;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: -0.2px;
          text-align: left;
          color: #383838;
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
