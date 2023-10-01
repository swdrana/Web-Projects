import { Link } from "react-router-dom";
import { styled } from "styled-components";
const AnimationBG = styled.div`
  height: 120px;
  background: url("https://grostore.themetags.com/public/frontend/default/assets/img/shapes/section-curve.png")
    repeat-x;
  animation: scroll-anim 30s linear infinite;
  @keyframes scroll-anim {
  100% {
		background-position: -100% 0;
	}
`;

const Footer = () => {
  return (
    <div className=" pb-8 md:pb-14 lg:pb-0 relative bg-gray-white">
      <AnimationBG className=""></AnimationBG>
      <footer className="footer justify-between p-10 bg-[#191D28] text-white">
        <div>
          <span className="footer-title">Category</span>
          <Link> Beauty & Health </Link>
          <Link> Breakfast </Link>
          <Link> Baby Care </Link>
          <Link> Pet Care </Link>
          <Link> Cold Drinks </Link>
        </div>
        <div>
          <span className="footer-title">Quick Links</span>
          <Link> Terms & Conditions </Link>
          <Link> Return Policy</Link>
          <Link> Privacy Policy </Link>
        </div>
        <div>
          <span className="footer-title">Customer Pages</span>
          <Link> Your Account </Link>
          <Link> Your Orders</Link>
          <Link> Your Wishlist </Link>
          <Link> Address Book </Link>
          <Link> Update Profile </Link>
        </div>
        <div>
          <span className="footer-title">Contact Info</span>
          <Link>Kalaroa Bajar, Satkhira - 9410, Bangladesh.</Link>
          <Link>+8801793143054</Link>
          <Link to="https://www.facebook.com/sheraorganicshop"> facebook.com/sheraorganicshop </Link>
        </div>
      </footer>
      <footer className="footer  justify-between  px-10 py-4 border-t bg-[#191D28] items-center  text-white border-base-300">
        <div className="items-center grid-flow-col">
          <p>
            ©2019-2023 All Rights Reserved by Mehedi Hasan
          </p>
        </div>
        <div className="items-center grid-flow-col">
          <Link className="flex items-center w-[100%]"><img className=" w-16" src=" https://i.ibb.co/8xhhZQk/Shera-Organic-Shop-logo.png" alt="" /></Link>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <img src='https://i.ibb.co/nb2WyYQ/payment-logo.png' className=" w-96" alt="" />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
