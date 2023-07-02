import React from 'react';
import { LuCopy } from "react-icons/lu";

const Address = () => {
    return (
        <div className=' max-w-screen-xl mx-auto rounded-lg p-5' style={{ backgroundColor: 'rgb(188, 75, 213)' }} id='tokeninfo'>
            <h1 className='text-center text-[#FECF02] text-[26px] font-semibold'>Address</h1>
            <div className='flex justify-center mt-2'>
                <button className='text-white border-white border-2 px-3 font-semibold text-[10px] lg:text-[14px] rounded-lg py-1 flex gap-4 items-center'><span>
                    0xD8b04b7F7a1058C6Fef87991aFEbb4a6f6bCb532
                </span>
                    <LuCopy />
                </button>
            </div>

            <p className='text-[14px] text-center text-white mt-2 '>Please note that you should not send any tokens to this address directly, or you will lose them permanently.</p>
            <div className='grid lg:grid-cols-4 grid-cols-2 gap-2 lg:gap-0 lg:mx-28 mt-10'>
                <div className='flex  justify-center'>
                    <div className='text-[#4A00E0] bg-[#FECF02] rounded-lg text-center w-[200px]'>
                        <p className='text-[16px]'>Symbol</p>
                        <p className='font-semibold text-[15px]'>$ini</p>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='text-[#4A00E0] bg-[#FECF02] rounded-lg text-center w-[200px]'>
                        <p className='text-[16px]'>Decimals</p>
                        <p className='font-semibold text-[15px]'>18</p>
                    </div></div>
                <div className='flex justify-center'>
                    <div className='text-[#4A00E0] bg-[#FECF02] rounded-lg text-center w-[200px]'>
                        <p className='text-[16px]'>Network</p>
                        <p className='font-semibold text-[15px]'>Ethereum</p>
                    </div></div>
                <div className='flex justify-center'>
                    <div className='text-[#4A00E0] bg-[#FECF02] rounded-lg text-center w-[200px]'>
                        <p className='text-[16px]'>Supply</p>
                        <p className='font-semibold text-[15px]'>2,000,000,000</p>
                    </div></div>
            </div>
        </div>
    );
};

export default Address;