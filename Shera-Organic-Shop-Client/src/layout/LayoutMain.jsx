import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const LayoutMain = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default LayoutMain;
