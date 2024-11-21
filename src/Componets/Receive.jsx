import React from 'react'
import ImagesRR from "../assets/images.png"

const Receive = () => {
  return (
    <section className="bg-[#F3F7FA] lg:py-[50px] py-[30px] mt-[30px] lg:mt-0">
        <div className="container px-3 lg:px-0 mx-auto">
            <div className="lg:flex justify-between">
                <div className="lg:w-[60%] w-full">
                    <h5 className="font-Manrope font-medium lg:text-[18px] text-[14px] text-[#3734A9] uppercase">Our Feature</h5>
                    <h3 className="font-Manrope font-bold lg:text-[64px] text-[24px] text-black">Receive payments quickly from anywhere</h3>
                    <p className="font-Manrope font-medium lg:text-[16px] text-[14px] text-[#757095] lg:pr-[100px]">Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
                </div>
                <div className="lg:w-[40%] w-full mt-[20px] lg:mt-0 relative">
                    <h3 className="font-Manrope font-semibold lg:text-[24px] text-[18px] text-[#3734A9] lg:pb-[30px] pb-[20px]">Get Started for Free</h3>
                    <div className="">
                        <input type="text" placeholder="Email Address" className="font-Manrope font-medium lg:text-[16px] text-[14px] text-[#64607D] lg:pl-3 pl-2 w-full lg:h-[60px] h-[40px] outline-none" />
                    </div>
                    <div className="mt-[30px]">
                        <input type="text" placeholder="Password" className="font-Manrope font-medium lg:text-[16px] text-[14px] text-[#64607D] lg:pl-3 pl-2 w-full lg:h-[60px] h-[40px] outline-none" />
                    </div>
                    <div className="lg:mt-[50px] mt-[30px]">
                        <button className="font-Manrope font-semibold lg:text-[18px] text-[14px] text-black border-2 border-[#FF7F5C] lg:w-[300px] w-[200px] lg:h-[60px] h-[40px] rounded hover:bg-[#FF7F5C] hover:text-white duration-500 ease-in-out">Get Started</button>
                    </div>
                    <div className=" absolute top-[-70px] right-0">
                        <img className="lg:opacity-100 opacity-0" src={ImagesRR} alt="images" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Receive