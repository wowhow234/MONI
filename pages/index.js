import Link from "next/link";
import styles from "../styles/index.module.css";

const Index = () => {
  return (
    <div className="wrapper">
      ---header---
      <span>로고 ㅇㄹㅇㄹ</span>
      {/* { session &&  "{session.user.id} 안녕하세요" : } */}
      <div className={styles.main}>
        <span>메인 배너</span>
      </div>
      <div className={styles.main}>
        <span>메인 여러가지</span>
      </div>
      <div>
        ---footer---
        <br />
        <Link legacyBehavior href="/notice">
          <a>공지사항</a>
        </Link>{" "}
        <br />
        <Link legacyBehavior href="/fnq">
          <a>자주 묻는 질문</a>
        </Link>
      </div>
    </div>
  );
};

export default Index;
