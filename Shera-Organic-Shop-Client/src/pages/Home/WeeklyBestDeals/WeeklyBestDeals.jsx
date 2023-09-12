import { Link } from "react-router-dom"
import ProductCardSmall from "../../../components/ProductCard/ProductCardSmall"
import CountdownTimer from "./countDownTimer"

function WeeklyBestDeals() {
    return (
        <div className="bg-gray-white">
            <div className="container mx-auto pb-20 md:px-7">
            <div className="flex gap-3 flex-col md:flex-row">
                <div className=" w-full md:w-1/3 px-3 md:px-0 flex justify-center items-center sm:items-start">
                    <Link>
                        <img src="https://grostore.themetags.com/public/uploads/media/xANvWdU5lMHnp1MSSNTpnQMlqAUEMUcgl1Bu9IzB.png" alt="" />
                    </Link>
                </div>
                <div className=" w-full md:w-2/3 px-3 md:px-0 flex flex-col">
                    <div className=" border-2 border-dashed border-secondary rounded-lg h-full md:h-20  p-4 w-full mb-5 flex justify-between items-center flex-col md:flex-row">
                        <h2 className=" text-2xl font-bold">Weekly Best Deals</h2>
                        <CountdownTimer></CountdownTimer>
                        {/* <ul className="flex items-center gap-2" data-date="04/30/2025 00:00:00">
                            <li className="position-relative z-1 d-flex align-items-center justify-content-center flex-column rounded-2">
                            <h5 className="mb-0 days">595</h5>
                            <span className="gshop-subtitle fs-xxs d-block">Days</span>
                        </li>
                        <li className="position-relative z-1 d-flex align-items-center justify-content-center flex-column rounded-2">
                            <h5 className="mb-0 hours">04</h5>
                            <span className="gshop-subtitle fs-xxs d-block">Hours</span>
                        </li>
                        <li className="position-relative z-1 d-flex align-items-center justify-content-center flex-column rounded-2">
                            <h5 className="mb-0 minutes">12</h5>
                            <span className="gshop-subtitle fs-xxs d-block">Min</span>
                        </li>
                        <li className="position-relative z-1 d-flex align-items-center justify-content-center flex-column rounded-2">
                            <h5 className="mb-0 seconds">19</h5>
                            <span className="gshop-subtitle fs-xxs d-block">Sec</span>
                        </li>
                    </ul> */}
                    </div>
                    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5  px-1 md:px-0 ">
                        <ProductCardSmall></ProductCardSmall>
                        <ProductCardSmall></ProductCardSmall>
                        <ProductCardSmall></ProductCardSmall>
                        <ProductCardSmall></ProductCardSmall>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default WeeklyBestDeals
