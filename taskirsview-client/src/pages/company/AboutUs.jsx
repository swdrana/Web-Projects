import React, { useEffect } from "react";
import Innovation from "./aboutUs/Innovation";
import OurGroth from "./aboutUs/OurGroth";
import OurValues from "./aboutUs/OurValues";
import OurStory from "./aboutUs/OurStory";
import OurLeadership from "./aboutUs/OurLeadership";
import Careers from "./aboutUs/Careers";

function AboutUs() {
  useEffect(() => {
    const video = document.getElementById("aboutUsVideo");
    video.play();
  }, []); // This useEffect runs once when the component mounts

  return (
    <>
      <Innovation />
      <OurGroth />
      <OurValues/>
      <OurStory/>
      <OurLeadership/>
      <Careers/>
    </>
  );
}

export default AboutUs;
