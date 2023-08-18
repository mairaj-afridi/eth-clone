import React from 'react'

const Footer = () => {
  return (
    <section className=" flex bg-[#34302A] flex-col w-full ">

        
<div className=" w-[100%] h-[63px] flex pl-4 pr-4 justify-between items-center text-white ">
        {/* logo */}
        <div className="flex items-start ">
          <h1 className="text-[20px] md:text-[33.389px] font-normal  ">
            MiNERS SELECTED
          </h1>
        </div>

        <div className="flex gap-2 sm:gap-3 md:gap-8 items-center justify-center ">
          <ul className="flex gap-2 sm:gap-3 md:gap-8 ">
            <li className="font-bold text-[12px] md:text-[20px]">
              <a>Setup ETH Wallet</a>
            </li>
            <li className="font-bold text-[12px] md:text-[20px]">
              <a>FAQ</a>
            </li>
          </ul>
          <div className="hidden sm:flex w-[115px] h-[44px] md:w-[196px] md:h-[63px] p-[6px] md:p-[12px] justify-center items-center gap-[9.171px] bg-[#2478A8] rounded-[7.451px] ">
            <h1 className="text-[12px] md:text-[18px] text-center font-medium ">
            Clone (1) miners
            </h1>
          </div>
        </div>
      </div>
  </section>
  )
}

export default Footer