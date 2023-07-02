import Image from 'next/image';
import React from 'react';
import audit from '../../assets/images/ayt-removebg-preview.png'
import image from '../../assets/images/Capture.PNG'
import i from '../../assets/images/auditt.png'

const AuditAndKyc = () => {
    return (

        <div className=' py-12 max-w-screen-sm  mx-auto bg-[#A214ED] rounded-lg '>
            <div className='flex items-center gap-2 px-3'>
                <div>
                    <Image src={audit} className='' />
                </div>
                <div className='text-white'>
                    <p className='py-1 px-8 border text-[15px] font-light'>Audit and KYC | 100% secured and verified</p>
                    <div className='flex justify-center bg-[#a945def3] mx-5 rounded-xl py-[1px]'>
                        <Image src={image} alt='img' className='w-[200px]' />
                    </div>
                </div>
            </div>
            <Image src={i} className='mt-[-110px] w-full h-[130px] shadow-2xl' style={{ borderRadius: '59px' }} />
        </div>
    );
};

export default AuditAndKyc;