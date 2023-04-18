import React, {useContext, createContext} from "react";
import {useAddress, useContract, useMetamask, useContractWrite} from '@thirdweb-dev/react';
import {ethers} from 'ethers';

const StateContext = createContext();

export const StateContextProvider = ({children}) => {
    const {contract} = useContract('0xdF5ee89F2915A718455d33d95b7f7C378d0C5Cf2');
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
    }

    return (
        <StateContext.Provider value={{address, contract, connect, createCampaign: publishCampaign}}>
           {children} 
        </StateContext.Provider>
    )

}

export const useStateContext = () => useContext(StateContext);
