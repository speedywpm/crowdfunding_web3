import React, { useState } from 'react';
import { useStateContext } from '../context';

const Withdraw = () => {
  const [campaignId, setCampaignId] = useState('');
  const { withdrawFunds } = useStateContext();

  const handleWithdraw = () => {
    withdrawFunds(campaignId);
  };

  return (
    <div className="text-white bg-[#1c1c24] mt-[50px] rounded-[10px] p-6 flex flex-col items-center">
      <h3 className="font-epilogue text-[20px] font-semibold">Withdraw Funds</h3>
      <h3 className="font-epilogue my-[10px]">
        Enter the Campaign ID to withdraw funds:
      </h3>
      <div className="bg-[#1c1c33] px-3 py-1.5 rounded-[20px] text-center">
        <input
          className="font-mono text-[14px] sm:text-base md:text-lg lg:text-xl bg-transparent text-white focus:outline-none w-full"
          type="number"
          value={campaignId}
          onChange={(e) => setCampaignId(e.target.value)}
          placeholder="Campaign ID"
        />
      </div>
      <button
        className="mt-5 py-2 px-6 text-white font-semibold bg-[#5773e2] rounded-[10px] hover:bg-[#3e58b3] focus:outline-none"
        onClick={handleWithdraw}
      >
        Withdraw Funds
      </button>
    </div>
  );
};

export default Withdraw;
