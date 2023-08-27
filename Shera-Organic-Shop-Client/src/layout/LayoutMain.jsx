import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const LayoutMain = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default LayoutMain;
