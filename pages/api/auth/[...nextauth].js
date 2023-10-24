import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "로그인하세요",
      credentials: {
        id: { label: "아이디", type: "text", placeholder: "아이디" },
        password: { label: "비밀번호", type: "password" },
      },
      async authorize(credentials, req) {
        const user = { id: 1, name: "테스트", email: "text@text.com" };
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.SECRET,
});

export default handler;
