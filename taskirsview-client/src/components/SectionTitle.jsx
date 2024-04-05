function SectionTitle({ title = "", description = "" }) {
  return (
    <div className=" mt-0 md:mt-10">
      <div className="container px-5 mx-auto" bis_skin_checked="1">
        <div className="text-center" bis_skin_checked="1">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            {title}
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            {description}
          </p>
          <div className="flex mt-6 justify-center" bis_skin_checked="1">
            <div
              className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"
              bis_skin_checked="1"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTitle;
