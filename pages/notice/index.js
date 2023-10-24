// 공지사항 메인
import Link from "next/link";

const Notice = () => {
  return (
    <div>
      <div>공지사항 입니다.</div>
      <br />
      <div>
        <Link href={`/notice/1`} legacyBehavior>
          <a>공지사항 게시글</a>
        </Link>
      </div>
    </div>
  );
};

export default Notice;
