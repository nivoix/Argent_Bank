/* eslint-disable react/prop-types */
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Layout.scss";

const Layout = ({ children }) => {
  console.log(children.length);
  return (
    <>
      <Navbar />
      <main className={children.length === 2 ? "" : "main bg-dark"}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
