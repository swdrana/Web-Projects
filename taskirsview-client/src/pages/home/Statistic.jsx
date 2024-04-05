import { GiWorld } from "react-icons/gi";
import SectionTitle from "../../components/SectionTitle";
function Statistic() {
  return (
    <section className="text-gray-600 body-font mt-10 md:mt-20">
      <SectionTitle
        title="TRUSTED BY GLOBAL APP DEVELOPERS"
        description="Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table. Franzen you probably
        haven`t heard of them man bun deep jianbing selfies heirloom prism
        food truck ugh squid celiac humblebrag."
      />
      <div className="container px-5 py-10 mx-auto" bis_skin_checked="1">
        {/* CARD 1 */}
        <div className="flex flex-wrap -m-4 text-center" bis_skin_checked="1">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full" bis_skin_checked="1">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <div className=" flex items-center justify-center mb-4">
                <GiWorld className="text-indigo-500" size={45} />
              </div>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                124
              </h2>
              <p className="leading-relaxed">Countries</p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full" bis_skin_checked="1">
            <div
              className="border-2 border-gray-200 px-4 py-6 rounded-lg"
              bis_skin_checked="1"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
              </svg>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                10,000+
              </h2>
              <p className="leading-relaxed">Developers</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full" bis_skin_checked="1">
            <div
              className="border-2 border-gray-200 px-4 py-6 rounded-lg"
              bis_skin_checked="1"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
              </svg>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                200 B
              </h2>
              <p className="leading-relaxed">Daily ad requests</p>
            </div>
          </div>

          {/* CARD 4  */}
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full" bis_skin_checked="1">
            <div
              className="border-2 border-gray-200 px-4 py-6 rounded-lg"
              bis_skin_checked="1"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                99.9%
              </h2>
              <p className="leading-relaxed">Up Time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistic;
