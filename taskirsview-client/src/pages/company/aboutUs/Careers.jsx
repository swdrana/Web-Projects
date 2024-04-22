function Careers() {
  return (
    <>
      <section className="dark:bg-gray-100 dark:text-gray-800 pb-20">
        <div
          className="container flex flex-col-reverse justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between"
          bis_skin_checked="1"
        >
          <div
            className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left"
            bis_skin_checked="1"
          >
            <h1 className="text-3xl font-bold leading-none sm:text-4xl mb-5">
              CAREERS
            </h1>
            <h2 className=" text-2xl">
              Ready to grow your career at TaskirView?
            </h2>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              We're focused on delivering innovation, collaboration, and
              excellence. Our commitment to developing cutting-edge technology
              helps our clients reach their full potential. Join us today and
              take your career to new heights!
            </p>
            <div
              className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start"
              bis_skin_checked="1"
            >
              <a
                rel="noopener noreferrer"
                href="#"
                className=" btn btn-primary px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
              >
                SEE OPEN POSITIONS
              </a>
            </div>
          </div>
          <div
            className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 "
            bis_skin_checked="1"
          >
            <img
              src="https://assets-official.mobvista.com/v3/page-illustrations/2023/08/10/careers.png"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Careers;
