import SectionCard from "./SectionCard";

const sectionInfo = [
  {
    id: 1,
    title: "ENGAGE USERS",
    description1:
      "Elevate your brand's impact with our in-house creative studio, Mindworks. Fueled by a team of design experts and exceptional global insights, we're here to deliver eye-catching, high-ROI creatives that truly resonate with your audience. Witness the magic as we transform your ideas into captivating visual experiences that engage and convert.",
    description2:
      "Take your playable and video ads to new heights with Playturbo. Embrace the future of advertising with Playturbo and bid farewell to the mundane, our state-of-the-art automated creative platform. Designed to revolutionize your playable ads, Playturbo streamlines the creative process and maximizes your ROI with unparalleled efficiency.",
    link1: "/",
    linkText1: "Ignite creatives with Mindworks",
    link2: "/",
    linkText2: "Speed up production with Playturbo",
    imgLink1:
      "https://cdn.pixabay.com/photo/2024/03/13/07/41/digital-marketing-8630397_1280.png",
    imgLink2:
      "https://cdn.pixabay.com/photo/2021/10/11/17/54/technology-6701504_1280.jpg",
  },
  {
    id: 2,
    title: "Grow Users",
    description1:
      "Mintegral's global reach allows you to connect with the right audience anywhere in the world. Our advertising suite includes industry-leading algorithms, premium traffic, and captivating creative technology that engages and converts the users you want, maximizing your opportunity to grow.",
    description2:
      "Experience the XMP advantage as we revolutionize your acquisition strategies. Our multi-channel campaign automation, coupled with in-depth creative insights and data analysis, will help you fine-tune your approach and stay ahead of the competition.",
    link1: "/",
    linkText1: "Scale with Mintegral",
    link2: "/",
    linkText2: "Simplify UA with XMP",
    imgLink1:
      "https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg",
    imgLink2:
      "https://cdn.pixabay.com/photo/2018/08/18/13/26/interface-3614766_1280.png",
  },
  {
    id: 3,
    title: "DRIVE REVENUE",
    description1:
      "Uplift your advertising and watch your revenue soar with our cutting-edge ad solutions. We're here to help you harness the full potential of every ad placement while preserving an exceptional user experience. Gain access to our premium traffic network and bolster your business with targeted ad inventory across diverse ad formats and app categories.",
    description2:
      "Our proprietary algorithms and advanced technology ensure optimized bidding strategies that deliver impressive ROAS and higher retention rates.",
    link1: "/",
    linkText1: "Monetize with Mintegral",
    link2: "/",
    linkText2: "Monetize with Mintegral",
    imgLink1:
      "https://cdn.pixabay.com/photo/2023/04/24/08/36/floor-7947584_1280.jpg",
    imgLink2:
      "https://cdn.pixabay.com/photo/2021/10/11/17/54/technology-6701504_1280.jpg",
  },
  {
    id: 4,
    title: "ANALYZE & OPTIMIZE",
    description1:
      "Illuminate your performance and effortlessly extend user LTV with our state-of-the-art analytics platform. Stay ahead of the game with real-time reports on vital metrics, empowering you to identify issues and make data-driven decisions for app enhancements.",
    description2:
      "Pinpoint & optimize with confidence. Unlock the full potential of your app by leveraging our platform's unique features and watch as your app soars to new heights of success.",
    link1: "/",
    linkText1: "Optimize with GameAnalytics",
    link2: "/",
    linkText2: "Optimize with GameAnalytics",
    imgLink1:
      "https://cdn.pixabay.com/photo/2017/11/27/21/31/computer-2982270_1280.jpg",
    imgLink2:
      "https://cdn.pixabay.com/photo/2021/10/11/17/54/technology-6701504_1280.jpg",
  },
];

function SectionTwo() {
  return (
    <section className="flex flex-col">
      {sectionInfo.map((s) => (
        <SectionCard key={s.id} {...s} />
      ))}
    </section>
  );
}

export default SectionTwo;
