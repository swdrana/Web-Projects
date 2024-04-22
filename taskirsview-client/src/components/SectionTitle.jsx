function SectionTitle({ title = "", description = "", position="text-center" }) {
  return (
    <div className=" mt-0 ">
      <div className="container px-5 mx-auto" bis_skin_checked="1">
        <div className={`${position}`} bis_skin_checked="1">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-base-content">
            {title}
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            {description}
          </p>
          <div className={`flex mt-6 ${position=='text-center'?'justify-center':''}`} bis_skin_checked="1">
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
