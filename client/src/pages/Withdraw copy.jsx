import React, { useState } from 'react';
import { CustomButton } from '../components';
import {ethlogo} from '../assets'

const Withdraw = () => {
  const handleCoinbase = () => {
    window.open('https://coinbase.com', '_blank');
  };
  const handleKraken = () => {
    window.open('https://kraken.com', '_blank');
  };
  const handleGemini = () => {
    window.open('https://gemini.com', '_blank');
  };
  const handleCryptocom = () => {
    window.open('https://crypto.com', '_blank');
  };

  return (
    <div className="text-white bg-[#1c1c24] mt-[50px] rounded-[10px] p-6 flex flex-col items-center">
      <h3 className="font-epilogue text-[20px] font-semibold">Withdraw Funds</h3>
      <h3 className="font-epilogue my-[10px]">
        There are numerous ways to withdraw ETH to fiat, use one of the trusted exchanges.
      </h3>
      
      <h3 className="font-epilogue my-[10px]">
        So far you have earned
      </h3>
      
      <div className='flex flex-wrap justify-center gap-4'>
      <img src={ethlogo} className='w-[10%]'/>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <CustomButton
          btnType="button"
          title=""
          handleClick={handleCoinbase}
          styles="mt-5 py-4 px-6 bg-[#1dc071] rounded-[10px] hover:bg-[#18a762] max-w-[158px] focus:outline-none"
          showLogo={true}
        />
        <CustomButton
          btnType="button"
          title=""
          handleClick={handleKraken}
          styles="mt-5 py-4 px-6 bg-[#1dc071] rounded-[10px] hover:bg-[#18a762] max-w-[158px] focus:outline-none"
          showLogo1={true}
        />
        <CustomButton
          btnType="button"
          title=""
          handleClick={handleGemini}
          styles="mt-5 py-4 px-6 bg-[#1dc071] rounded-[10px] hover:bg-[#18a762] max-w-[158px] focus:outline-none"
          showLogo2={true}
        />
        <CustomButton
          btnType="button"
          title=""
          handleClick={handleCryptocom}
          styles="mt-5 py-4 px-6 bg-[#1dc071] rounded-[10px] hover:bg-[#18a762] max-w-[158px] focus:outline-none"
          showLogo3={true}
        />
      </div>
    </div>
  );
};

export default Withdraw;