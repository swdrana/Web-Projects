import SectionTitle from "../../components/Pages/SectionTitle";
import mango from "./../../assets/images/bg/mango.png";
import aboutFeature1 from "./../../assets/images/about/about-feature-1.png";
import aboutFeature2 from "./../../assets/images/about/about-feature-2.png";
import hand from "./../../assets/images/icon/hand-icon.svg";

function AboutUs() {
  return (
    <div className=" bg-gray-white">
      <SectionTitle title={"About Us"} />
      <section className=" container mx-auto">
        <img src={mango} alt={mango} className="absolute mango z--1" />
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
                      “Assertively target market Lorem ipsum is simply free
                      consectetur notted elit sed do eiusmod”{" "}
                      <span className="text-md font-medium relative">
                        George Scholll
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 md:col-span-1">
              <div className=" px-5">
                <div className="subtitle flex items-center gap-3 flex-wrap">
                  <span className="gshop-subtitle">
                    শতভাগ নিরাপদ খাদ্যের নিশ্চয়তা প্রদান
                  </span>
                  <span>
                    <svg
                      width="78"
                      height="16"
                      viewBox="0 0 78 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        x1="0.0138875"
                        y1="7.0001"
                        x2="72.0139"
                        y2="8.0001"
                        stroke="#FF7C08"
                        strokeWidth="2"
                      ></line>
                      <path
                        d="M78 8L66 14.9282L66 1.0718L78 8Z"
                        fill="#FF7C08"
                      ></path>
                    </svg>
                  </span>
                </div>
                <h2 className="mb-4 text-2xl md:text-4xl">
                  বিশুদ্ধ পণ্য আপনার অধিকার - <br /> আমাদের দায়িত্ব তা সরবরাহ
                  করার।
                </h2>
                <p className="mb-8">
                  সুস্থ্য জীবন সব শ্রেণীর মানুষের একটা চাওয়া; যার মূলমন্ত্র হলো
                  ভালো খাবার। এই প্রতিপাদ্যকে সামনে রেখে আমরা নিরাপদ খাদ্য,
                  অর্গানিক খাদ্য, ভেজাল মুক্ত ও হোম-মেইড খাদ্য সরবরাহে সর্বাত্নক
                  চেষ্টা চালিয়ে যাচ্ছি। তাই পণ্যের মান বা কোয়ালিটিতে আমরা ছাড়
                  দেয় না যদিও দাম একটু বেশী হয়।
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="hover:bg-base-100 transition-all hover:scale-125">
                    <div className="image-box py-6 px-4 border">
                      <div className="icon relative">
                        <img src={hand} alt={hand} />
                      </div>
                      <h4 className="mt-3 text-2xl font-bold">আমাদের লক্ষ্য</h4>
                      <p className="mb-0">
                        আমাদের লক্ষ্য হল মানসম্মত, স্বাস্থ্যকর এবং নিরাপদ খাদ্য
                        সর্বোত্তম ‍উপায়ে সংগ্রহ করে তা নিরাপদ খাদ্য প্রেমী
                        মানুষের জন্য সরবরাহ করা। এবং মানুষকে ভেজালের ‍বিরুদ্ধে
                        সচেতন করা।
                      </p>
                    </div>
                  </div>
                  <div className="col-span-1 md:col-span-1 hover:bg-base-100 transition-all hover:scale-125">
                    <div className="image-box py-6 px-4 border">
                      <div className="icon relative">
                        <img src={hand} alt={hand} />
                      </div>
                      <h4 className="mt-3 text-2xl font-bold">
                        আমাদের সার্ভিস
                      </h4>
                      <p className="mb-0 pb-16">
                        দেশী-বিদেশী অর্গানিক পণ্য, ন্যাচারাল পণ্য, হোম-মেইড
                        পণ্য, ভেষজ পণ্য ইত্যাদি।
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
                    <h6 className="mb-0 gshop-subtitle text-secondary">
                      কেন আমরা?
                    </h6>
                    <span>
                      <svg
                        width="58"
                        height="10"
                        viewBox="0 0 58 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="-6.99382e-08"
                          y1="5.2"
                          x2="52"
                          y2="5.2"
                          stroke="#FF7C08"
                          strokeWidth="1.6"
                        ></line>
                        <path
                          d="M58 5L50.5 9.33013L50.5 0.669872L58 5Z"
                          fill="#FF7C08"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <h2 className="mb-3 text-2xl md:text-4xl">
                    আমরা কোন ওপেন মার্কেট বা <br /> কোন পাইকার থেকে পণ্য ক্রয়
                    করি না।
                  </h2>
                  <p className="mb-0">
                    আমাদের প্রতিটা পণ্য সরাসরি মাঠ পর্যায় থেকে, উৎপাদক ও
                    আমদানিকারক থেকে সংগ্রহ করা। মধ্যবর্তী কোন মাধ্যম না থাকাই
                    আমরা যাচাই-বাছাই করে উৎকৃষ্ট মানের পণ্য নির্বাচন করতে পারি ।
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="col-span-1 md:col-span-1">
                    <div className="horizontal-icon-box flex items-center gap-4 bg-white rounded p-4 hover-shadow flex-wrap md:flex-nowrap">
                      <span className="icon-wrapper relative flex-shrink-0">
                        <img src={hand} alt={hand} className="w-full h-auto" />
                      </span>
                      <div className="content-right">
                        <h5 className="mb-3">সহজ অর্ডার</h5>
                        <p className="mb-0">
                        আমাদের কাছে অগ্রিম কোন জামানত ছাড়াই অর্ডার করতে পারবেন। এবং ডেলিভারিম্যান থাকা অবস্থায় পণ্য চেক করে নেওয়ার সুবিধা পাবেন।
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 md:col-span-1">
                    <div className="horizontal-icon-box flex items-center gap-4 bg-white rounded p-4 hover-shadow flex-wrap md:flex-nowrap">
                      <span className="icon-wrapper relative flex-shrink-0">
                        <img src={hand} alt={hand} className="w-full h-auto" />
                      </span>
                      <div className="content-right">
                        <h5 className="mb-3">স্বচ্ছ রিটার্ন পলিসি</h5>
                        <p className="mb-0"> আমাদের পণ্যের মেয়াদ থাকাকালীন পণ্যে কোন প্রকার ত্রুটি দেখাদিলে সাথে সাথে রিটার্ন করে নতুন পণ্য দেওয়া হবে।
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 md:col-span-1">
                    <div className="horizontal-icon-box flex items-center gap-4 bg-white rounded p-4 hover-shadow flex-wrap md:flex-nowrap">
                      <span className="icon-wrapper relative flex-shrink-0">
                        <img src={hand} alt={hand} className="w-full h-auto" />
                      </span>
                      <div className="content-right">
                        <h5 className="mb-3">নির্ভেজাল পণ্যের নিশ্চয়তা</h5>
                        <p className="mb-0">আমরা দায়িত্ব নিয়ে পণ্য সংগ্রহ ও উৎপাদন করে থাকি। পণ্যে ভেজালতো দূরে থাক গুণগত মানসম্মত না হলে পণ্য সরবরাহ করি না।
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 md:col-span-1">
                    <div className="horizontal-icon-box flex items-center gap-4 bg-white rounded p-4 hover-shadow flex-wrap md:flex-nowrap">
                      <span className="icon-wrapper relative flex-shrink-0">
                        <img src={hand} alt={hand} className="w-full h-auto" />
                      </span>
                      <div className="content-right">
                        <h5 className="mb-3">তথ্যের নিরাপত্তা</h5>
                        <p className="mb-0">
                        আপনার প্রদত্ত প্রতিটি তথ্যের গোপণীয়তা রক্ষা করতে আমরা বদ্ধপরিকর।
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
  );
}

export default AboutUs;
