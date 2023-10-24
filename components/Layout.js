import NavBar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <NavBar />
      <div>{children}</div>
      ----footer----
      <Footer />
    </>
  );
};

export default Layout;
