import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../../assets/css/main.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="main-content mt-[60px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;