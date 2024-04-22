import SectionTitle from "../../../components/SectionTitle";

function Governance() {
  return (
    <div className=" container mx-auto py-16">

        {/* COMPANY INTRODUCTION */}
      <>
        <SectionTitle title="COMPANY INTRODUCTION" position="text-start" />
        <section>
          <div
            className="container flex flex-col justify-center p-6 mx-auto  lg:flex-row lg:justify-between"
            bis_skin_checked="1"
          >
            <div
              className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left"
              bis_skin_checked="1"
            >
              <p className="mt-6 mb-4 text-lg sm:mb-12">
                Mobvista is a leading mobile technology company providing a
                complete suite of advertising and analytics tools for app
                developers and marketers seeking global growth. Providing a
                range of tailored solutions, such as user acquisition,
                monetization, analytics, creative automation, and cross-channel
                media buying, Mobvista enables mobile businesses to maximize
                their potential. Founded in 2013, Mobvista has been listed on
                the Main Board of the Stock Exchange of Hong Kong (01860.HK)
                since December 2018.
              </p>
            </div>
            <div
              className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
              bis_skin_checked="1"
            >
              <img
                className=" image-full"
                src="https://www.mobvista.com/_nuxt/img/section-one-img.7e59b8f.png"
                alt=""
              />
            </div>
          </div>
        </section>
      </>

      {/* GOVERNANCE */}
      <>
        <SectionTitle title="GOVERNANCE" position="text-start" />
        <section>
          <div
            className="container flex flex-col justify-center p-6 mx-auto  lg:flex-row lg:justify-between"
            bis_skin_checked="1"
          >
            <div
              className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left"
              bis_skin_checked="1"
            >
              <p className="mt-6 mb-4 text-lg sm:mb-12">
              The Company is committed to achieving and maintaining high standards of corporate governance by focusing on the principles of integrity, accountability, transparency, independence, responsibility and fairness. The Company has developed and implemented sound corporate governance policies and measures, and the Board is responsible for performing such corporate governance of the Company, as well as various internal policies and procedures with reference to the Corporate Governance Code and Corporate Governance Report set out in Appendix 14 to the Listing Rules and other applicable legal and regulatory requirement so as to maintain a high standard of corporate governance of the Company.
              </p>
            </div>
            <div
              className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
              bis_skin_checked="1"
            >
              <img
                className=" image-full"
                src="https://www.mobvista.com/_nuxt/img/section-two-img-en.57a2ac7.png"
                alt=""
              />
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

export default Governance;
