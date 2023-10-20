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
    userid: "",
    password: "",
  });

  const onChangeAccount = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
    // console.log(account);
  };

  const onClickHandler = (e) => {
    console.log(account.userid, account.password);
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
          name="userid"
          value={account.userid}
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
