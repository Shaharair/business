import React from 'react'

const Possible = () => {
    return (
        <section className="bg-[#3734A9] lg:py-[50px] py-[30px] lg:mt-[100px] mt-[30px]">
            <div className="container px-3 lg:px-0 mx-auto">
                <div className="lg:flex justify-between">
                    <div className="lg:w-[60%] w-full">
                        <h5 className="font-Manrope font-medium lg:text-[18px] text-[14px] text-white uppercase">Why Choose Us</h5>
                        <h3 className="font-Manrope font-bold lg:text-[54px] text-[30px] text-white lg:pr-[300px]">Track your crytpo portfolio on the best way possible</h3>
                        <p className="font-Manrope font-medium lg:text-[16px] text-[14px] text-white pt-[10px] lg:pr-[300px]">End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
                    </div>
                    <div className="lg:w-[40%] w-full mt-[30px] lg:mt-0">
                        <div className="">
                            <input type="text" placeholder="Email Address" className="font-Manrope font-medium lg:text-[16px] text-[14px] text-[#BBB5E0] lg:w-[500px] w-[300px] lg:h-[60px] h-[50px] lg:pl-4 pl-2 outline-none" />
                        </div>
                        <div className="lg:mt-[50px] mt-[30px]">
                            <input type="text" placeholder="Password" className="font-Manrope font-medium lg:text-[16px] text-[14px] text-[#BBB5E0] lg:w-[500px] w-[300px] lg:h-[60px] h-[50px] lg:pl-4 pl-2 outline-none" />
                        </div>
                        <div className="lg:mt-[50px] mt-[30px]">
                            <button className="font-Manrope font-semibold lg:text-[18px] text-[16px] text-white border-2 border-[#FF7F5C] lg:w-[500px] w-[300px] lg:h-[60px] h-[50px] rounded hover:bg-[#FF7F5C] duration-500 ease-in-out">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Possible