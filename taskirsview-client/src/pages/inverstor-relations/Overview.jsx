import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";

function Overview() {
    const card = (
        <div
          className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800"
          bis_skin_checked="1"
        >
          <img
            src="https://source.unsplash.com/random/300x300/?2"
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
          />
          <div
            className="flex flex-col justify-between p-6 space-y-8"
            bis_skin_checked="1"
          >
            <button
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"
            >
              2023 Annual Report
            </button>
          </div>
        </div>
      );
  return (
    <div className=" container mx-auto py-10">
      <div className=" flex flex-col md:flex-row gap-5">
        <div className=" w-full md:w-1/2">
          <SectionTitle title={"NEWS"} position="start" />
          <div className=" container mx-auto pt-10">
            <ul className=" grid grid-cols-1 px-6 pb-16 gap-5">
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
                      Form of proxy for use by shareholders at the Annual
                      General Meeting to be held on Tuesday, 18 June 2024
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
            </ul>
          </div>
        </div>
        <div className=" w-full md:w-1/2">
          <SectionTitle title={"ANNOUNCEMENTS"} position="start" />
          <div className=" container mx-auto pt-10">
            <ul className=" grid grid-cols-1  px-6 pb-16 gap-5">
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
                      Monthly Return of Equity Issuer on Movements in Securities
                      for the month ended 31 March 2024
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
            </ul>
          </div>
        </div>
      </div>
      <>
        <section className=" mt-10">
          <SectionTitle position="start" title={"PERFORMANCE REPORT"} />
          <div className="container mx-auto my-10">
            <div className="grid gap-5 md:gap-x-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {card}
              {card}
              {card}
              {card}
              {card}
              {card}
              {card}
              {card}
            </div>
          </div>
        </section>
      </>
      <>
        <section className=" mt-20">
          <SectionTitle position="start" title={"BUSINESS BRIEFING"} />
          <div className="container mx-auto my-10">
            <div className="grid gap-5 md:gap-x-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {card}
              {card}
              {card}
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

export default Overview;
