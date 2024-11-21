import React, { useState } from 'react'
import LogoRR from "../assets/logo.png"
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";

const Navbar = () => {

    let [show, setShow] = useState(false)

    return (
        <section>
            <div className="container px-3 lg:px-0 mx-auto lg:pt-[30px]">
                <div className="flex items-center justify-between">
                    <div className="w-[20%]">
                        <img className="lg:opacity-100 opacity-0" src={LogoRR} alt="logo" />
                        <div onClick={() => setShow(!show)} className="lg:hidden text-[24px]">
                            {show == true ? <RxCross2 /> : <FaBars />}
                        </div>
                    </div>
                    <div className="w-[60%]">
                        <ul className={`lg:flex items-center gap-[30px] absolute top-[50px] left-0 lg:static duration-700 ease-in-out pt-[60px] lg:pt-0 ${show == true ? "bg-[gray] w-[200px] h-[250px] rounded-[10px]" : "left-[-200px]"}`}>
                            <li className="font-Manrope font-semibold text-[18px] text-center lg:text-start lg:text-black text-white">Product</li>
                            <li className="font-Manrope font-semibold text-[18px] text-center lg:text-start lg:text-black text-white py-2 lg:py-0">Template</li>
                            <li className="font-Manrope font-semibold text-[18px] text-center lg:text-start lg:text-black text-white">Blog</li>
                            <li className="font-Manrope font-semibold text-[18px] text-center lg:text-start lg:text-black text-white pt-2 lg:pt-0">Pricing</li>
                        </ul>
                    </div>
                    <div className="lg:w-[20%] w-full">
                        <ul className="flex items-center lg:gap-[30px] gap-[20px]">
                            <li className="font-Manrope font-semibold lg:text-[18px] text-[14px] text-black border-2 border-[#3734A9] lg:w-[200px] w-[100px] lg:h-[60px] h-[40px] text-center lg:pt-[15px] pt-[8px] rounded hover:bg-[#3734A9] hover:text-white duration-500 ease-in-out">Sign in</li>
                            <li className="font-Manrope font-semibold lg:text-[18px] text-[14px] text-black border-2 border-[#3734A9] lg:w-[200px] w-[100px] lg:h-[60px] h-[40px] text-center lg:pt-[15px] pt-[8px] rounded hover:bg-[#3734A9] hover:text-white duration-500 ease-in-out">Start Free</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navbar