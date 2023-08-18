import React from "react";
import ImageSection from "./imageSection/ImageSection";
import Faq from "../faq/Faq";

const Welcome = () => {
  return (
    <section className="w-full h-full   bg-[#403A30] flex flex-col justify-center items-center  ">
      <div className=" w-[100%] h-[63px] flex pl-4 pr-4 justify-between items-center text-white ">
        {/* logo */}
        <div className="flex items-start ">
          <h1 className="text-[20px] md:text-[33.389px] font-normal  ">
            MiNERS OF MARS
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
          <div className="hidden sm:flex w-[115px] h-[44px] md:w-[196px] md:h-[63px] p-[6px] md:p-[12px] justify-center items-center gap-[9.171px] bg-[#34302A] rounded-[7.451px] ">
            <h1 className="text-[12px] md:text-[18px] text-center font-medium ">
              Disconnect ...84GX
            </h1>
          </div>
        </div>
      </div>
      {/* ...............end on nav.......... */}

      <div className="flex flex-col justify-center items-center  mt-16  text-center  text-white">
        <h1 className=" text-[40px] md:text-[58px]">WELCOME ...84GX</h1>
        <p className=" w-[300px] md:w-[688px] text-[18px] md:text-[24px] font-bold">
          We will send all cloned miner(s) to your ETH WalleTha. Select your
          miners and create claim ticket for the ETH mint.
        </p>
      </div>

      <div className="flex flex-col text-white w-[270px] md:w-[600px] lg:w-[850px] xl:w-[1144px]  h-[41px] item-center justify-between mt-20">
        <div className="flex justify-between items-center border-dotted border-b-[2px] border-gray-500  ">
          <h1 className="font-normal text-[24px] tracking-[-0.72px]">
            Pick Miners (8)
          </h1>
          <h1 className="font-normal text-[14px] tracking-[-0.24px]">
            Pick all
          </h1>
        </div>
      </div>

      {/* ...........main section.......... */}
      <ImageSection />
      <div className="flex flex-col text-white w-[270px] md:w-[600px] lg:w-[850px] xl:w-[1184px]  h-[41px] item-center justify-between mt-20">
        <div className="flex justify-between items-center border-dotted border-b-[2px] border-gray-500  ">
          <h1 className="font-normal text-[24px] tracking-[-0.72px]">
            Cloned Miners (7)
          </h1>
          <h1 className="font-normal text-[14px] tracking-[-0.24px]">Help</h1>
        </div>
      </div>

      {/* ............>images-list........... */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 mt-10 gap-10">
        <img className=" w-[137px] h-[137px]" src="/picc1.png"></img>
        <img className="w-[137px] h-[137px] " src="/picc2.png"></img>
        <img className="w-[137px] h-[137px] " src="/picc3.png"></img>
        <img className="w-[137px] h-[137px] " src="/picc4.png"></img>
        <img className="w-[137px] h-[137px] " src="/picc5.png"></img>
        <img className="w-[137px] h-[137px] " src="/picc6.png"></img>
        <img className="w-[137px] h-[137px] " src="/picc7.png"></img>
      </div>
      {/* .......................faq seaction.......... */}
      <Faq/>
    </section>
  );
};

export default Welcome;
