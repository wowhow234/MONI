import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const NavBar = () => {
  const { data: session, status } = useSession();

  console.log("session 확인----->", session);

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
        <br />
      </div>
    </nav>
  );
};

export default NavBar;
