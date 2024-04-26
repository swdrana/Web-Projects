import { Link, Outlet } from "react-router-dom";
import PageTitle from "../components/PageTitle";

function LayoutInvestorRelations() {
  return (
    <>
    <PageTitle title={"INVESTOR RELATIONS"} />
      <div role="tablist" className="tabs tabs-lifted  max-w-screen-sm overflow-scroll mx-auto">
        <Link to='/inverstor-relations' role="tab" className="tab">Overview</Link>
        <Link to='/inverstor-relations/governance' role="tab" className="tab tab-active">Governance</Link>
        <Link to='/inverstor-relations/announcement' role="tab" className="tab">Announcement</Link>
        <Link to='/inverstor-relations/financials' role="tab" className="tab">Financials</Link>
        <Link to='/inverstor-relations/events' role="tab" className="tab">Events</Link>
        <Link to='/inverstor-relations/contact' role="tab" className="tab">Contact Us</Link>
      </div> 
      <Outlet />
    </>
  );
}

export default LayoutInvestorRelations;
