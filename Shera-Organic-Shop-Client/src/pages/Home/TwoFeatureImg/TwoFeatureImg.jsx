function TwoFeatureImg() {
    return (
        <div className="  relative">
            <div className="bg-gray-white py-7 ">
            <div className="container px-4 mx-auto flex flex-col xl:flex-row gap-5 justify-center items-center ">
                <img className="" src="https://grostore.themetags.com/public/uploads/media/QJUt9UPbamzfUoaKlKD5wdU9lvunk2egpHkDRS5o.png" alt="" />
                <img  className=" hidden lg:block" src="https://grostore.themetags.com/public/uploads/media/3n2vTDtOFNza27allQZ2pn3mGBTJCxnjSZuteoW8.png" alt="" />
            </div>
            

      {/* <img
        className="absolute bottom-0"
        src=""
        alt=""
      /> */}
      </div>
            <div className=" -mt-16  h-16 bottom-0 z-50 bg-center" style={{backgroundImage: 'url(https://grostore.themetags.com/public/frontend/default/assets/img/shapes/bg-shape.png)'}}>
            </div>
        </div>
    )
}

export default TwoFeatureImg
