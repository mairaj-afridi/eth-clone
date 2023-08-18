import React, { useState } from "react";


const Faq = () => {

  const [isOpen, setIsOpen] = useState(null);

  const toggle = (index) => {
    if (isOpen === index) {
      setIsOpen(null);
    } else {
      setIsOpen(index);
    }
  };


  return (
    <section className="text-white w-[80%] mt-32 ">
      <div className="  lg:flex text-white ml-[200px] gap-5 hidden  flex-row ">
        <div className=" wel-img mt-6">
          <img
            className="w-[50px] lg:w-[100px] h-[50px] md:h-[100px]"
            src="/m.png"
          ></img>
        </div>

        <div className=" w-[220px] ">
          <p className="text-[22.75px] wel-text leading-[23.306px] font-normal  uppercase">
            FREQUENTLY MINED QUESTIONS
          </p>
        </div>
      </div>
      <h1 className="text-[96.923px] leading-[-1.938px]">FAQ</h1>

      {/* ...........faq...... */}
      <div className="flex flex-col items-start mb-20 gap-10 ">
      {data.map((item, index) => (
          <div className="flex-col items-start " key={index}>
            <div className="flex-row flex gap-[16px] items-center cursor-pointer " onClick={() => toggle(index)}>
              <h1 className="text-[36px] tracking-[-0.72px] font-normal uppercase">{item.question}</h1>
              <span className="text-[40px]">{isOpen === index ? '' : ''}</span>
            </div>
            <div className="flex justify-between items-center border-dotted border-b-[2px] border-gray-500 "></div>
            {isOpen === index && <p className="{isOpen === index ? 'show' : 'hidden'}  text-[26px]  tracking-[-0.64px] font-normal uppercase">{item.answer}</p>}
          </div>
        ))}
    
      </div>
    </section>
  )
}

const data = [
  {
    question: "Who can claim ETH Miners?",
    answer:
      " Only staked miners can be be claimed into ETH miners and onceclaimed you won’t be able to unstakeOG Solana miners until public ETH mint starts.",
  },
  {
    question: "Are there any ETH GAS FEES?",
    answer: "No. To deliver identical miners as airdrop to your ETH wallet we have to go through expensive and tedious process of uploading collection to blockchain, minting and sending NFTs as airdrop.",
  },
  {
    question: "What happens with unclaimed miners?",
    answer: "All unclaimed miners will be distributed through regular public ETH mint. Price of the public mint will be around $19.80 + gas fees. It will be random mint of remaining unclaimed miners.",
  },
  {
    question: "story of eth clones?",
    answer: " ​Thousands of years later Semigod landed on deserted Mars. ​Using  genome sequence they created perfect copies of our Solana miners so they could dig and find the lost city. The Fungo City​.",
  },
];
export default Faq;
