import { useEffect, useState } from "react";
import NavBer from "./NavBer/NavBer";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`relative z-50 ${isScrolled? 'sticky top-0':''}`}>
      <NavBer isScrolled={isScrolled}></NavBer>
    </div>
  );
};

export default Header;
