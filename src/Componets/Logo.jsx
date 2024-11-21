import React from 'react'
import LogoMM from "../assets/logo1.png"
import LogoQQ from "../assets/logo2.png"
import LogoBB from "../assets/logo3.png"
import LogoUU from "../assets/logo4.png"
import LogoXX from "../assets/logo5.png"
import LogoTT from "../assets/logo6.png"

const Logo = () => {
    return (
        <section>
            <div className="container px-3 lg:px-0 mx-auto">
                <p className="font-Manrope font-medium lg:text-[16px] text-[14px] text-black text-center">Over 32k+ software  businesses growing with AR Shakir</p>
                <div className="flex items-center justify-between lg:pt-[60px] pt-[20px] flex-wrap">
                    <div className="w-[48%] lg:w-[15%]">
                        <img src={LogoMM } alt="logo1" />
                    </div>
                    <div className="w-[48%] lg:w-[15%]">
                        <img src={ LogoQQ} alt="logo2" />
                    </div>
                    <div className="w-[48%] lg:w-[15%] pt-[20px] lg:pt-0">
                        <img src={LogoBB } alt="logo3" />
                    </div>
                    <div className="w-[48%] lg:w-[15%] pt-[20px] lg:pt-0">
                        <img src={LogoUU } alt="logo4" />
                    </div>
                    <div className="w-[48%] lg:w-[15%] pt-[20px] lg:pt-0">
                        <img src={LogoXX } alt="logo5" />
                    </div>
                    <div className="w-[48%] lg:w-[15%] pt-[20px] lg:pt-0">
                        <img src={LogoTT } alt="logo6" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Logo