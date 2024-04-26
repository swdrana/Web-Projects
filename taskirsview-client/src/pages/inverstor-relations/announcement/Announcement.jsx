import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle";

function Announcement() {
  return (
    <div className=" py-10">
      <SectionTitle position="start" title={"ANNOUNCEMENTS"} />
      <div className=" container mx-auto pt-10">
        <ul className=" grid grid-cols-1  md:grid-cols-2 px-6 pb-16 gap-5">
          <li className="hover:text-primary">
            <Link
              to="https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0415/2024041501502.pdf"
              target="_blank"
              className="hover:text-primary-wrap"
            >
              <div className="hover:text-primary-text">
                <h2 className="font-bold">
                  2023 ENVIRONMENTAL, SOCIAL AND GOVERNANCE REPORT
                </h2>{" "}
                <p className="opacity-60 ">April 16, 2024</p>
              </div>
            </Link>
          </li>
          <li className="hover:text-primary">
            <Link
              to="https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0415/2024041501498.pdf"
              target="_blank"
              className="hover:text-primary-wrap"
            >
              <div className="hover:text-primary-text">
                <h2 className="font-bold">
                  NOTIFICATION LETTER TO REGISTERED SHAREHOLDERS
                </h2>{" "}
                <p className="opacity-60">April 16, 2024</p>
              </div>
            </Link>
          </li>
          <li className="hover:text-primary">
            <Link
              to="https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0415/2024041501496.pdf"
              target="_blank"
              className="hover:text-primary-wrap"
            >
              <div className="hover:text-primary-text">
                <h2 className="font-bold">
                  Form of proxy for use by shareholders at the Annual General
                  Meeting to be held on Tuesday, 18 June 2024
                </h2>{" "}
                <p className="opacity-60">April 16, 2024</p>
              </div>
            </Link>
          </li>
          <li className="hover:text-primary">
            <Link
              to="https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0415/2024041501494.pdf"
              target="_blank"
              className="hover:text-primary-wrap"
            >
              <div className="hover:text-primary-text">
                <h2 className="font-bold">
                  NOTICE OF ANNUAL GENERAL MEETING
                </h2>{" "}
                <p className="opacity-60">April 16, 2024</p>
              </div>
            </Link>
          </li>
          <li className="hover:text-primary">
            <Link
              to="https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0415/2024041501490.pdf"
              target="_blank"
              className="hover:text-primary-wrap"
            >
              <div className="hover:text-primary-text">
                <h2 className="font-bold">
                  PROPOSALS FOR GENERAL MANDATES TO ISSUE SHARES AND REPURCHASE
                  SHARES; RE-ELECTION OF RETIRING DIRECTORS; AND NOTICE OF
                  ANNUAL GENERAL MEETING
                </h2>{" "}
                <p className="opacity-60">April 16, 2024</p>
              </div>
            </Link>
          </li>
          <li className="hover:text-primary">
            <Link
              to="https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0415/2024041501488.pdf"
              target="_blank"
              className="hover:text-primary-wrap"
            >
              <div className="hover:text-primary-text">
                <h2 className="font-bold">ANNUAL REPORT 2023</h2>{" "}
                <p className="opacity-60">April 16, 2024</p>
              </div>
            </Link>
          </li>
          <li className="hover:text-primary">
            <Link
              to="https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0408/2024040801790.pdf"
              target="_blank"
              className="hover:text-primary-wrap"
            >
              <div className="hover:text-primary-text">
                <h2 className="font-bold">
                  Monthly Return of Equity Issuer on Movements in Securities for
                  the month ended 31 March 2024
                </h2>{" "}
                <p className="opacity-60">April 9, 2024</p>
              </div>
            </Link>
          </li>
          <li className="hover:text-primary">
            <Link
              to="https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0326/2024032601543.pdf"
              target="_blank"
              className="hover:text-primary-wrap"
            >
              <div className="hover:text-primary-text">
                <h2 className="font-bold">NEXT DAY DISCLOSURE RETURN</h2>{" "}
                <p className="opacity-60">March 27, 2024</p>
              </div>
            </Link>
          </li>
          <li className="hover:text-primary">
            <Link
              to="https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0325/2024032500931.pdf"
              target="_blank"
              className="hover:text-primary-wrap"
            >
              <div className="hover:text-primary-text">
                <h2 className="font-bold">NEXT DAY DISCLOSURE RETURN</h2>{" "}
                <p className="opacity-60">March 26, 2024</p>
              </div>
            </Link>
          </li>
          <li className="hover:text-primary">
            <Link
              to="https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0322/2024032201057.pdf"
              target="_blank"
              className="hover:text-primary-wrap"
            >
              <div className="hover:text-primary-text">
                <h2 className="font-bold">NEXT DAY DISCLOSURE RETURN</h2>{" "}
                <p className="opacity-60">March 23, 2024</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Announcement;
