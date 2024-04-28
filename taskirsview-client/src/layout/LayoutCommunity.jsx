import { Link, Outlet } from "react-router-dom";
import PageTitle from "../components/PageTitle";

function LayoutCommunity() {
  return (
    <>
    <PageTitle title={"COMMUNITY"} />
      <div role="tablist" className="tabs tabs-lifted  max-w-screen-sm overflow-scroll mx-auto">
        <Link to='/community' role="tab" className="tab">All</Link>
        <Link to='/community/blogs' role="tab" className="tab tab-active">Blogs</Link>
        <Link to='/community/ebook' role="tab" className="tab">eBook</Link>
        <Link to='/community/case' role="tab" className="tab">Case Studies</Link>
        <Link to='/community/videos' role="tab" className="tab">Videos</Link>
      </div> 
      <Outlet />
    </>
  );
}

export default LayoutCommunity;
