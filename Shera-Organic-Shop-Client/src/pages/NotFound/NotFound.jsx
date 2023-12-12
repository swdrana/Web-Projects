import { Link } from "react-router-dom";
import frame from './../../assets/images/bg/frame-circle.svg';
import pata from './../../assets/images/bg/pata-xs.svg';
import leaf from './../../assets/images/bg/leaf.svg';
import cauliflower from './../../assets/images/bg/cauliflower.png';
import tomatoHalf from './../../assets/images/bg/tomato-half.svg';
import garlic from './../../assets/images/bg/garlic-white.png';
import tomato from './../../assets/images/bg/tomato-slice.svg';
import onion from './../../assets/images/bg/onion.png';
import Error from './../../assets/images/bg/404.png';
function NotFound() {
  return (
    <div className=" bg-gray-white pt-14 md:pt-20 pb-28 overflow-hidden">
      <div className=" container mx-auto relative">
      <img
          src={frame}
          alt="frame circle"
          className="absolute -top-10 left-8 frame-circle hidden sm:block animate-bounce-slow"
        />
        <img
          src={cauliflower}
          alt="cauliflower"
          className="absolute top-72 left-64 animate-pulse"
        />

<img
          src={leaf}
          alt="leaf"
          className=" absolute left-6  bottom-0 animate-spin-slow"
        />
        <img
          src={pata}
          alt="pata"
          className="absolute -top-20 -right-10 animate-spin-slow"
        />
        <img
          src={tomatoHalf}
          alt="tomato"
          className="absolute -right-28 top-20 animate-spin-slow"
        />
        <img
          src={garlic}
          alt="garlic"
          className="absolute -bottom-20 right-52 animate-pulse"
        />
        <img
          src={tomato}
          alt="tomato"
          className="absolute  -right-10 bottom-20 animate-bounce-slow"
        />
        <img
          src={onion}
          alt="onion"
          className="absolute right-28 top-56 animate-pulse"
        />
        <div className=" flex flex-col justify-center items-center">

        <img
          src={Error}
          alt="not found"
          className=" image-full"
        />
        <h2 className="font-bold text-4xl text-center z-10">Sorry, Something Went Wrong</h2>
        <p className=" my-5 text-gray-500 max-w-xl text-center z-10">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link to='/' className="btn btn-secondary btn-md rounded-1 text-white z-10"> Back to Home Page </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
