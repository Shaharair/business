import React from 'react'
import LinkedRR from "../assets/linked.png"

const Linked = () => {
  return (
    <section>
        <div className="container px-3 lg:px-0 mx-auto">
            <div className="lg:flex justify-between lg:mt-[100px] mt-[30px]">
                <div className="lg:w-[60%] w-full">
                    <h5 className="font-Manrope font-medium lg:text-[18px] text-[16px] text-[#3734A9] uppercase">Our Feature</h5>
                    <h3 className="font-Manrope font-bold lg:text-[64px] text-[30px] text-black">All payments are linked to your Financy account</h3>
                    <p className="font-Manrope font-medium lg:text-[16px] text-[14px] text-[#757095] lg:pr-[100px]">Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
                    <div className="lg:mt-[50px] mt-[20px]">
                        <button className="font-Manrope font-semibold lg:text-[18px] text-[14px] text-black border-2 border-[#3734A9] lg:w-[200px] w-[150px] lg:h-[60px] h-[50px] rounded hover:bg-[#3734A9] hover:text-white duration-500 ease-in-out">Get Started</button>
                    </div>
                </div>
                <div className="lg:w-[40%] w-full">
                    <img src={LinkedRR} alt="linked" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Linked