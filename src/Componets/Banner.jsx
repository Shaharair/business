import React from 'react'
import BannerMM from "../assets/banner.png"
import { FaPlay } from "react-icons/fa";


const Banner = () => {
    return (
        <section>
            <div className="container px-3 lg:px-0 mx-auto">
                <div className="lg:flex justify-between lg:pt-[60px] pt-[30px]">
                    <div className="lg:w-[50%] w-full">
                        <h3 className="font-Manrope font-bold lg:text-[64px] text-[30px] text-black">Managing business payments has never been easier</h3>
                        <p className="font-Manrope font-medium lg:text-[16px] text-[14px] text-[#757095] lg:pr-[300px]">End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
                        <div className="flex items-center lg:gap-[30px] gap-[30px]">
                            <div className="lg:pt-[60px] pt-[20px]">
                                <button className="font-Manrope font-semibold lg:text-[18px] text-[14px] text-black border-2 border-[#3734A9] lg:w-[200px] w-[120px] lg:h-[60px] h-[45px] lg:rounded-[50px] rounded-[20px] hover:bg-[#3734A9] hover:text-white duration-500 ease-in-out">Get Started</button>
                            </div>
                            <div className="flex items-center lg:gap-4 gap-3 lg:pt-[60px] pt-[20px]">
                                <div className="bg-[#22D497] lg:w-[60px] w-[50px] lg:h-[60px] h-[50px] lg:pl-[23px] pl-[17px] lg:pt-[23px] pt-[17px] text-white rounded-full">
                                    <FaPlay />
                                </div>
                                <h5 className="font-Manrope font-medium lg:text-[16px] text-[14px] text-black">See How It Works</h5>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[50%] w-full pt-[30px] lg:pt-0">
                        <img src={BannerMM} alt="banner" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner