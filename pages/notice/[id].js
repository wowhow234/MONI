// 공지사항 각각 게시글 동적 라우팅으로 연결하기
import React from "react";
import { useRouter } from "next/router";

const DetailNotice = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <div>공지사항 세부 내용 입니다.</div>
      <h1>게시글 {id}</h1>
    </div>
  );
};

export default DetailNotice;
