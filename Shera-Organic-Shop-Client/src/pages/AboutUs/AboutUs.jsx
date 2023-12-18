import SectionTitle from "../../components/Pages/SectionTitle";
import mango from "./../../assets/images/bg/mango.png"
import aboutFeature1 from "./../../assets/images/about/about-feature-1.png"
import aboutFeature2 from "./../../assets/images/about/about-feature-2.png"
import hand from "./../../assets/images/icon/hand-icon.svg"

function AboutUs() {

  return (
    <div className=" bg-gray-white">
      <SectionTitle title={"About Us"} />
      <section className=" container mx-auto">
      <img
        src={mango}
        alt={mango}
        className="absolute mango z--1"
      />
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-4 items-center">
          <div className="col-span-1 md:col-span-1">
            <div className="ab-left px-5">
              <img
                src={aboutFeature1}
                alt={aboutFeature1}
                className="w-full h-auto"
              />
              <div className="text-right">
                <div className="ab-quote p-4 text-left">
                  <h4 className="mb-0 font-normal text-white">
                    “Assertively target market Lorem ipsum is simply free consectetur notted elit sed do eiusmod”{" "}
                    <span className="text-md font-medium relative">George Scholll</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1">
            <div className=" px-5">
              <div className="subtitle flex items-center gap-3 flex-wrap">
                <span className="gshop-subtitle">100% Organic Food Provide</span>
                <span>
                  <svg width="78" height="16" viewBox="0 0 78 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.0138875" y1="7.0001" x2="72.0139" y2="8.0001" stroke="#FF7C08" strokeWidth="2"></line>
                    <path d="M78 8L66 14.9282L66 1.0718L78 8Z" fill="#FF7C08"></path>
                  </svg>
                </span>
              </div>
              <h2 className="mb-4 text-2xl md:text-4xl">Be healthy &amp; <br /> eat fresh organic food</h2>
              <p className="mb-8">
                Assertively target market lorem ipsum is simply free text available dolor sit amet, consectetur notted
                adipisicing elit sed do eiusmod tempor incididunt simply freeutation labore et dolore.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="hover:bg-base-100 transition-all hover:scale-125">
                  <div className="image-box py-6 px-4 border">
                    <div className="icon relative">
                      <img
                        src={hand}
                        alt={hand}
                      />
                    </div>
                    <h4 className="mt-3 text-2xl font-bold">Our Mission</h4>
                    <p className="mb-0">
                      Continually transform virtual meta- methodologies. leverage existing alignments.
                    </p>
                  </div>
                </div>
                <div className="col-span-1 md:col-span-1 hover:bg-base-100 transition-all hover:scale-125">
                  <div className="image-box py-6 px-4 border">
                    <div className="icon relative">
                      <img
                        src={hand}
                        alt={hand}
                      />
                    </div>
                    <h4 className="mt-3 text-2xl font-bold">Our Vision</h4>
                    <p className="mb-0">
                      Continually transform virtual meta- methodologies. leverage existing alignments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="about-us-section pt-20 pb-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="col-span-1 md:col-span-1">
            <div className="about-us-right px-5">
              <div className="section-title-mx mb-6">
                <div className="flex items-center gap-2 flex-wrap mb-2">
                  <h6 className="mb-0 gshop-subtitle text-secondary">Why Choose Us</h6>
                  <span>
                    <svg width="58" height="10" viewBox="0 0 58 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="-6.99382e-08" y1="5.2" x2="52" y2="5.2" stroke="#FF7C08" strokeWidth="1.6"></line>
                      <path d="M58 5L50.5 9.33013L50.5 0.669872L58 5Z" fill="#FF7C08"></path>
                    </svg>
                  </span>
                </div>
                <h2 className="mb-3 text-2xl md:text-4xl">We do not Buy from the <br /> Open Market</h2>
                <p className="mb-0">
                  Compellingly fashion intermandated opportunities and multimedia based fnsparent e-business.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="col-span-1 md:col-span-1">
                  <div className="horizontal-icon-box flex items-center gap-4 bg-white rounded p-4 hover-shadow flex-wrap md:flex-nowrap">
                    <span className="icon-wrapper relative flex-shrink-0">
                      <img
                        src={hand}
                        alt={hand}
                        className="w-full h-auto"
                      />
                    </span>
                    <div className="content-right">
                      <h5 className="mb-3">Trusted Partner</h5>
                      <p className="mb-0">
                        Compellingly fashion intermandat opportunities e-business fashion intermandated business.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 md:col-span-1">
                  <div className="horizontal-icon-box flex items-center gap-4 bg-white rounded p-4 hover-shadow flex-wrap md:flex-nowrap">
                    <span className="icon-wrapper relative flex-shrink-0">
                      <img
                        src={hand}
                        alt={hand}
                        className="w-full h-auto"
                      />
                    </span>
                    <div className="content-right">
                      <h5 className="mb-3">Return Policy</h5>
                      <p className="mb-0">
                        Compellingly fashion intermandat opportunities e-business fashion intermandated business.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 md:col-span-1">
                  <div className="horizontal-icon-box flex items-center gap-4 bg-white rounded p-4 hover-shadow flex-wrap md:flex-nowrap">
                    <span className="icon-wrapper relative flex-shrink-0">
                      <img
                        src={hand}
                        alt={hand}
                        className="w-full h-auto"
                      />
                    </span>
                    <div className="content-right">
                      <h5 className="mb-3">100% Organic Fresh</h5>
                      <p className="mb-0">
                        Compellingly fashion intermandat opportunities e-business fashion intermandated business.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 md:col-span-1">
                  <div className="horizontal-icon-box flex items-center gap-4 bg-white rounded p-4 hover-shadow flex-wrap md:flex-nowrap">
                    <span className="icon-wrapper relative flex-shrink-0">
                      <img
                        src={hand}
                        alt={hand}
                        className="w-full h-auto"
                      />
                    </span>
                    <div className="content-right">
                      <h5 className="mb-3">Secured Payment</h5>
                      <p className="mb-0">
                        Compellingly fashion intermandat opportunities e-business fashion intermandated business.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1">
            <div className="about-us-left px-5 relative">
              <img
                src={aboutFeature2}
                alt={aboutFeature2}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default AboutUs