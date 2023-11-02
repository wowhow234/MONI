import Layout from "@/components/Layout";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import HeadLayout from "@/components/layout/HeadLayout";
import FooterLayout from "@/components/layout/FooterLayout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SessionProvider>
        <div className="wrapper">
          <HeadLayout />
        </div>
        <div className="border" />
        <div className="wrapper">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
        <div className="border" />
        <div className="wrapper">
          <FooterLayout />
        </div>
      </SessionProvider>
      <style jsx>{`
        .wrapper {
          width: 1318px;
          height: auto;
          border: 3px solid skyblue;
          margin: 16px auto;
        }
        .border {
          border-bottom: 1px solid #b1b1b1;
        }
      `}</style>
    </>
  );
}
