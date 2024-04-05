import { Link } from "react-router-dom";

function SectionCard(props) {
//   console.log(props);
  const {
    id,
    title,
    description1,
    description2,
    link1,
    linkText1,
    link2,
    linkText2,
    imgLink1,
    imgLink2,
  } = props;
  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
        <div className=" px-5">
          {/* Title Section   */}
          <div className="flex items-center mb-5">
            <div className="">
              <div className="badge badge-primary badge-md">{id}</div>
            </div>
            <h2 className=" text-md uppercase font-bold  text-primary ps-5">
              {title}
            </h2>
          </div>

          {/* Info Section  */}
          <div>
            <p className=" text-justify mb-4">{description1}</p>
            <Link to={link1}>
              <button className="btn btn-outline btn-primary w-full">
                {linkText1}
              </button>
            </Link>
          </div>
        </div>

        {/* Img Section  */}
        <img
          className=" h-64 object-cover  object-center w-full"
          src={imgLink1}
          alt=""
        />
      </div>

      {/* 
        BOTTOM SECTION OF CARD 
        ======================*/}

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
        {/* Img Section  */}
        <img
          className=" h-64 object-cover  object-center w-full"
          src={imgLink2}
        />
        <div className=" px-5">
          <div>
            <p className=" text-justify mb-4">{description2}</p>
            <Link to={link2}>
              <button className="btn btn-outline btn-primary w-full">
                {linkText2}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionCard;
