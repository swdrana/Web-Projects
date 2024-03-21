import { FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
const LayoutMain = () => {
  return (
    <div className=" relative">
      <Header />
      <Outlet />
      <div className=" fixed bottom-10 right-10 z-50">
        <div className=" mb-2">
          <Link target="_blank" to={"https://wa.me/+8801793143054"}>
            <FaWhatsapp size={30} color="#25D366" />
          </Link>
        </div>
        <div>
          <Link
            target="_blank"
            to={"https://www.facebook.com/messages/t/105274921383668"}
          >
            <FaFacebookMessenger size={30} color="#1877F2" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LayoutMain;
