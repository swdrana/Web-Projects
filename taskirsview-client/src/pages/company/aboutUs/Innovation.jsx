import { useEffect } from "react";

function Innovation() {
    
  useEffect(() => {
    const video = document.getElementById('aboutUsVideo');
    video.play();
  }, []);
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
        <div
          className="container flex flex-col justify-center p-6 mx-auto  lg:flex-row lg:justify-between"
          bis_skin_checked="1"
        >
          <div
            className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left"
            bis_skin_checked="1"
          >
            <h1 className="text-3xl font-bold leading-none sm:text-4xl">
              EMPOWER INNOVATION  <br />
              <span className="dark:text-violet-600">ACCELERATE GROWTH</span>
            </h1>
            <p className="mt-6 mb-4 text-lg sm:mb-12">
              TaskirView delivers the technology that drives app businesses towards global growth. Our suite of software is powered by advanced machine learning and 
              <br className="hidden md:inline lg:hidden" />
              supports every phase of the user journey. We provide meaningful user engagement, make user acquisition efficient, and maximize the revenue potential of your app.
            </p>
          </div>
          <div
            className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            bis_skin_checked="1"
          >
            <video id="aboutUsVideo" src="https://assets-official.mobvista.com/uploads/2024/01/09/EN_x264.mp4" type="video/mp4" autoPlay muted loop controls />
          </div>
        </div>
      </section>
    )
}

export default Innovation
