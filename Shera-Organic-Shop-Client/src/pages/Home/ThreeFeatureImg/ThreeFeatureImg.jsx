import { Link } from "react-router-dom"

function ThreeFeatureImg() {
    return (
        <div className=" bg-gray-white">
            <div className=" container flex flex-col md:flex-wrap lg:flex-nowrap md:flex-row w-full pb-24 pt-20  px-4 lg:px-8 justify-center items-center mx-auto gap-5 md:gap-16 lg:gap-5">
                <Link  className='md:w-5/12 lg:w-1/3' >
                    <img src="https://grostore.themetags.com/public/uploads/media/lRO6RGarVXCtrAuPXn6oMliqZaWAgfg3jIf3T8YO.png" alt="" />
                </Link>
                <Link  className='md:w-5/12 lg:w-1/3' >
                    <img src="https://grostore.themetags.com/public/uploads/media/NGIQT4Mc9zLGCPqY2CkmhwX6xjC6puVnnfRz3YIw.png" alt="" />
                </Link>
                <Link  className='md:w-5/12 lg:w-1/3' >
                    <img src="https://grostore.themetags.com/public/uploads/media/7tT6NXMpePFm0cBcBd3Hm4PC6lZkMcpB0XywjHf2.png" alt="" />
                </Link>
            </div>
        </div>
    )
}

export default ThreeFeatureImg
