import { Link } from "react-router-dom"
import feature1 from './../../../assets/images/feature/orange.png'
import feature2 from './../../../assets/images/feature/green-vegetable.png'
import feature3 from './../../../assets/images/feature/lic.png'
function ThreeFeatureImg() {
    return (
        <div className=" bg-gray-white">
            <div className=" container flex flex-col md:flex-wrap lg:flex-nowrap md:flex-row w-full pb-24 pt-20  px-4 lg:px-8 justify-center items-center mx-auto gap-5 md:gap-16 lg:gap-5">
                <Link  className='md:w-5/12 lg:w-1/3' >
                    <img src={feature1} alt={feature1} />
                </Link>
                <Link  className='md:w-5/12 lg:w-1/3' >
                    <img src={feature2} alt={feature2} />
                </Link>
                <Link  className='md:w-5/12 lg:w-1/3' >
                    <img src={feature3} alt={feature3} />
                </Link>
            </div>
        </div>
    )
}

export default ThreeFeatureImg
