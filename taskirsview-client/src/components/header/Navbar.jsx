import { Link } from "react-router-dom";
function Navbar() {
  const LinkItems = (
    <>
      <li>
        <details>
          <summary>Products & Services</summary>
          <ul class="p-2 z-[3] border">
            <p className=" font-bold text-primary">User Acquisition & Monetization</p>
            <li>
              <Link to="https://www.mintegral.com/en/">Mintegral</Link>
            </li>
            <hr className=" border-t-primary mt-1" />

            <p className=" font-bold text-primary pt-2">Data Analytics</p>
            <li>
              <Link to="/https://gameanalytics.com/">Game Analytics</Link>
            </li>
            <hr className=" border-t-primary mt-1" />


            <p className=" font-bold text-primary pt-2">Performance Marketing</p>
            <li>
              <Link to="https://www.nativex.com/en/">Nativex</Link>
            </li>
            <hr className=" border-t-primary mt-1" />


            <p className=" font-bold text-primary pt-2">Ad Creative</p>
            <li>
              <Link to="https://www.mindworks-creative.com/">Mindworks Production</Link>
            </li>
            <li>
              <Link to="https://www.mindworks-creative.com/services/#Playturbo">Playturbo Automation</Link>
            </li>
            <hr className=" border-t-primary mt-1" />


            <p className=" font-bold text-primary pt-1">Optimization</p>
            <li>
              <Link to="https://xmp.mobvista.com/en/">
              XMP Cross-channel Marketing Management
              </Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Community</summary>
          <ul class="p-2 z-[2] ">
            <li>
              <Link to="/community/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/community/ebook">eBook</Link>
            </li>
            <li>
              <Link to="/community/case">Case Studies</Link>
            </li>
            <li>
              <Link to="/community/videos">Gallery</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Investor Relations</summary>
          <ul class="p-2 z-10 ">
            <li>
              <Link to="/inverstor-relations/governance">Governance</Link>
            </li>
            <li>
              <Link to="/inverstor-relations/announcement">Announcement</Link>
            </li>
            <li>
              <Link to="/inverstor-relations/financials">Financial Report</Link>
            </li>
            <li>
              <Link to="/inverstor-relations/events">Investor Event</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link to="/about-us">About Us</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl">
          TaskirsView
        </Link>
      </div>
      <div className="navbar-center">
        <ul className=" hidden lg:flex menu menu-horizontal px-1">
          {LinkItems}
        </ul>
      </div>
      <div className="navbar-end lg:hidden ">
        <div className=" lg:hidden flex dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-72"
          >
            {LinkItems}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
