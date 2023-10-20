import Singup from "@/pages/signup";
import NextAuth from "next-auth/next";
import { CredentialsProvider } from "next-auth/providers";

const nextAuth = () => {
    providers: [
        CredentialsProvider({
            name: "login-credentials",
            credentials: {
                id: { label: "id", type: "text", placeholder: "아이디" },
                password: { label: "password", type: "password" },
            },
            async authorize(credentials) {
                return credentials
            }
        })
    ],
        pages: {
        
            signIn: "/login",
        }
    
};

export default nextAuth;