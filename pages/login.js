import { signIn } from "next-auth/react";
import React, { useState } from "react";

const Login = () => {
  // const savedAccount = {
  //   savedId: localStorage.getItem("userid"),
  //   savedPw: localStorage.getItem("password"),
  //   savedUsername: localStorage.getItem("username"),
  //   savedBirth: localStorage.getItem("birth"),
  // };

  // const { savedId, savedPw, savedBirth, savedUsername } = savedAccount;

  const [account, setAccount] = useState({
    id: "",
    password: "",
  });

  const onChangeAccount = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
    // console.log(account);
  };

  const onClickHandler = async (e) => {
    console.log(account.id, account.password);
    await signIn("credentials", {
      // 정보는 [...nextauth].js 에서 봐야함
      id: account.id.current,
      password: account.password.current,
      redirect: true,
      callbackUrl: "/",
    });

    // 저장된 아디비번 콘솔에 찍기
  };

  // const onSubmitHandler = () => {
  //   e.preventDefault();
  //   console.log();
  // };

  return (
    <div>
      <div>
        <span>아이디 : </span>{" "}
        <input
          type="text"
          name="id"
          value={account.id}
          placeholder="아이디"
          onChange={onChangeAccount}
        />{" "}
        <br />
        <br />
        비밀번호 :{" "}
        <input
          type="password"
          name="password"
          value={account.password}
          placeholder=" 비밀번호"
          onChange={onChangeAccount}
        />{" "}
        <br />
        <button onClick={onClickHandler}>로그인</button>
      </div>
    </div>
  );
};

export default Login;
