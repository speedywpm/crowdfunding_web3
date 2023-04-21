import React, {useContext, createContext} from "react";
import {useAddress, useContract, useMetamask, useContractWrite} from '@thirdweb-dev/react';
import {ethers} from 'ethers';

const StateContext = createContext();

export const StateContextProvider = ({children}) => {
    const {contract} = useContract(`0xdF5ee89F2915A718455d33d95b7f7C378d0C5Cf2`);
    const {mutateAsync: createCampaign} = useContractWrite(contract, 'createCampaign');
    const address = useAddress();
    const connect = useMetamask();
    
    const publishCampaign = async (form) => {
        try
        {
            const data = await createCampaign({ args:[
                address,
                form.title,
                form.description,
                form.target,
                new Date(form.deadline).getTime(),
                form.image
            ]})

            console.log("Contract call is successful", data)
        }
        catch(error)
        {
            console.log("Contract call has failed", error)
        }  
    };

    const getCampaigns = async () => {
        const campaigns = await contract.call('getCampaigns');

        const parsedCampaigns = campaigns.map((campaign, i) => ({
            owner: campaign.owner,
            title: campaign.title,
            description: campaign.description,
            target: ethers.utils.formatEther(campaign.target.toString()),
            deadline: campaign.deadline.toNumber(),
            amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
            image: campaign.image,
            pId: i,
            //donate,
            //getDonations,
        }));

        return parsedCampaigns;
    };

    const getUserCampaigns = async () => {
        const allCampaigns = await getCampaigns();

        const filteredCampaigns = allCampaigns.filter((campaign) => campaign.owner === address);

        return filteredCampaigns;
    };

    const donate = async (pId, amount) => {
        const data = await contract.call("donateToCampaign", [pId], {
          value: ethers.utils.parseEther(amount),
        });
      };

    const getDonations = async (pId) => {
        const donations = await contract.call('getDonators', [pId]);
        const numberOfDonations = donations[0].length;
        const parsedDonations=[];

        for(let i = 0; i < numberOfDonations; i++)
        {
            parsedDonations.push({
                donator: donations[0][i],
                donations: ethers.utils.formatEther(donations[1][i].toString())
            })
        }

        return parsedDonations;
    };

    const withdrawFunds = async (campaignId) => {
        try {
          const tx = await contract.call("withdrawFunds", [campaignId]);
          await tx.wait();
          alert("Funds withdrawn successfully!");
        } catch (error) {
          console.error("Error withdrawing funds:", error);
          alert("Error withdrawing funds. Check console for details.");
        }
      };

    return (
        <StateContext.Provider value={{address, contract, connect, createCampaign: publishCampaign, getCampaigns,getUserCampaigns, getDonations, donate, withdrawFunds}}>
           {children} 
        </StateContext.Provider>
    )

}

export const useStateContext = () => useContext(StateContext);
