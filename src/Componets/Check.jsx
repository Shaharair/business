import React from 'react'
import ImagesNN from "../assets/images1.png"
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Check = () => {
    return (
        <section>
            <div className="container px-3 lg:px-0 mx-auto">
                <div className="lg:flex justify-between lg:mt-[60px] mt-[30px]">
                    <div className="lg:w-[60%] w-full">
                        <h5 className="font-Manrope font-medium lg:text-[18px] text-[14px] text-[#3734A9] uppercase">Testimonials</h5>
                        <h3 className="font-Manrope font-bold lg:text-[64px] text-[30px] text-black lg:pr-[200px]">Check what our clients are saying</h3>
                        <img src={ImagesNN} alt="images1" />
                    </div>
                    <div className="lg:w-[40%] w-full lg:mt-[150px] mt-[30px]">
                        <div className="lg:text-[24px] text-[18px] text-[#FF7F5C]">
                            <FaQuoteLeft />
                        </div>
                        <h3 className="font-Manrope font-semibold lg:text-[36px] text-[18px] text-black lg:py-3 py-2">Save Time Managing Social Media For Your Business</h3>
                        <p className="font-Manrope font-medium lg:text-[16px] text-[14px] text-[#757095]">Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.</p>
                        <h6 className="font-Manrope font-medium lg:text-[16px] text-[14px] text-[#757095] lg:py-[20px] py-[10px]">Believing neglected so so allowance existence departure in. In design active temper be uneasy. </h6>
                        <div className="flex items-center lg:gap-3 gap-2 text-[#F9896B]">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <h4 className="font-Manrope font-semibold lg:text-[24px] text-[18px] text-black lg:pt-[20px] pt-[10px]">Angela Taylor</h4>
                        <h5 className="font-Manrope font-medium lg:text-[16px] text-[14px] text-[#757095] uppercase">Ceo Samsung</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Check