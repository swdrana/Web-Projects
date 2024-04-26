import { Link } from "react-router-dom";
function Navbar() {
  const LinkItems = (
    <>
      <li>
        <details>
          <summary>Products & Services</summary>
          <ul class="p-2">
            <li>
              User Acquisition & Monetization
              <Link to="/blogs">Mintegral</Link>
            </li>
            <li>
              <Link to="/advertisers">Data Analytics GameAnalytics</Link>
            </li>
            <li>
              <Link to="/publishers">Performance Marketing Nativex</Link>
            </li>
            <li>
              <Link to="/blogs">Ad Creative Mindworks Production</Link>
            </li>
            <li>
              <Link to="/blogs">Playturbo Automation</Link>
            </li>
            <li>
              <Link to="/blogs">
                Optimization XMP Cross-channel Marketing Management
              </Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Community</summary>
          <ul class="p-2">
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/advertisers">Advertisers</Link>
            </li>
            <li>
              <Link to="/publishers">Publishers</Link>
            </li>
            <li>
              <Link to="/blogs">Financial Report</Link>
            </li>
            <li>
              <Link to="/blogs">Investor Event</Link>
            </li>
            <li>
              <Link to="/blogs">Announcement</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Investor Relations</summary>
          <ul class="p-2">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {LinkItems}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
