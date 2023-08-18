import React from "react";

const Hero = () => {
  return (
    <section className=" flex bg-[#EBE0CE] flex-col w-full ">

        
      <div className="flex items-center justify-between">
        <h1 className="sm:pt-[25px] pt-[12px] pl-[18px] sm:pl-[32px] font-extrabold text-[16px]  sm:text-[23px] md:text-[33.389px] ">
          MINERS OF MARS
        </h1>
        <h1 className="sm:pt-[25px] pt-[12px] pr-[18px] sm:pr-[34px] font-extrabold text-[12px] md:text-[19.389px] ">
          2,348 Cloned Miners
        </h1>
      </div>


<div className="lg:flex-row flex  flex-col   h-[100%]">
      {/* ...........left......... */}
      <div className="pt-[230px] pl-4 pr-4  lg:pl-[65px] gap-2 md:gap-4 items-center justify-center text-center lg:items-start lg:justify-start lg:text-start w-[100%] lg:w-[45%]  flex flex-col">
       
        <h1 className=" text-[70px] md:text-[98.39px] leading-[66.512px] tracking-[-1.688px]  uppercase  flex flex-col ">
          <span className="text-[40px] md:text-[50px]">CLONE YOUR</span> MINER
        </h1>
   
        <p className="text-[22px]  justify-center items-center text-center lg:text-start font-semibold leading-[28.8px] tracking-[-0.44px]   ">
          Clone your Solana miner to the Ethereum blockchain. Once you connect
          your wallet you will have option to select your miners and create
          claim ticket for ETH mint.
        </p>

        <div className="hero flex w-80 items-center justify-center px-[22px] py-[20px]">
          
          <h2 className="text-[35.358px] font-bold ">Connect Wallet</h2>
        </div>
      </div>

      {/* ..............write div */}
      <div className="lg:w-[60%] w-[100%]">
        <img className="w-full h-full " src="/Group1.png"></img>
      </div>
      </div>
    </section>
  );
};

export default Hero;
