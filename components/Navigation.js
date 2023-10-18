import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <div>
        <Link legacyBehavior href="/">
          <a>HOME</a>
        </Link>
        <Link legacyBehavior href="/page1">
          <a>PAGE1</a>
        </Link>
        <Link legacyBehavior href="/page2">
          <a>PAGE2</a>
        </Link>
        <Link legacyBehavior href="/page3">
          <a>PAGE3</a>
        </Link>
        <br />
      </div>
    </nav>
  );
};

export default NavBar;
