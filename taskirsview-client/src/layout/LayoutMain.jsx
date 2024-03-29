import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";

function LayoutMain() {
  return (
    <div className=" container mx-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default LayoutMain;
