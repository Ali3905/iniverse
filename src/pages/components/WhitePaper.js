import React from 'react';
import img1 from '../../assets/logo/iniverse.png'
import img2 from '../../assets/logo/dee.png'
import img3 from '../../assets/logo/upwork.png'
import img4 from '../../assets/logo/frelance.png'
import img5 from '../../assets/logo/fiver.png'
import Image from 'next/image';



const WhitePaper = () => {
    return (
        <div className=' max-w-screen-lg mx-auto pt-12'>
            <h1 className='text-white font-bold text-center text-[26px]'>For more detail, please read our <span className='bg-white rounded-lg p-1 text-purple-600'>White Paper !</span></h1>
            <div className='my-12 border border-white rounded-lg flex gap-2 w-full'>
                <div className='grid grid-cols-1 text-white items-center h-full text-center gap-3 text-[15px] w-[50%] lg:w-[18%]'>

                    <div className='text-start ps-2 rounded-md py-2 lg:py-5 w-full'></div>
                    <div className='text-start ps-2 rounded-md py-2 bg-[#aa43e16d]'>Client Fee</div>
                    <div className='text-start ps-2 rounded-md  py-2' style={{ backgroundColor: '#aa43e16d' }}>Freelancer Fee</div>

                    <div className='text-start ps-2 rounded-md text-[16px] py-2' style={{ backgroundColor: '#aa43e16d' }}>Withdrawal Fee</div>
                    <div className='text-start ps-2 rounded-md py-2' style={{ backgroundColor: '#aa43e16d' }}>Decentralized Fee</div>
                    <div className='text-start ps-2 rounded-md py-2' style={{ backgroundColor: '#aa43e16d' }}>Refund Guarantee</div>
                    <div className='text-start ps-2 rounded-md py-2' style={{ backgroundColor: '#aa43e16d' }}>Staff Recruitment</div>
                </div>
                <div className='grid grid-cols-5 text-white gap-3 text-center me-3 items-center lg:items-start  text-[15px] w-[50%] lg:w-[80%] h-full'>

                    {/* logo  */}

                    <Image src={img1} alt="img" className='w-full h-[15px] lg:h-full' />
                    <Image src={img2} alt="img" className='w-full h-[15px] lg:h-full' />
                    <Image src={img3} alt="img" className='w-full h-[15px] lg:h-full' />
                    <Image src={img4} alt="img" className='w-full h-[15px] lg:h-full' />
                    <Image src={img5} alt="img" className='w-full h-[15px] lg:h-full ' />

                    <div className='bg-[#aa43e16d] rounded-md py-2'> 0</div>
                    <div className='bg-[#aa43e16d] rounded-md py-2'> 0</div>
                    <div className='bg-[#aa43e16d] rounded-md py-2'> 0</div>
                    <div className='bg-[#aa43e16d] rounded-md py-2'> 0</div >
                    <div className='bg-[#aa43e16d] rounded-md py-2' > 0</div >
                    {/* 2nd */}

                    <div className='bg-[#aa43e16d] rounded-md  py-2'> 5%</div>
                    <div className='bg-[#aa43e16d] rounded-md  py-2'> 5%</div>
                    <div className='bg-[#aa43e16d] rounded-md  py-2'> 5%</div>
                    <div className='bg-[#aa43e16d] rounded-md  py-2'> 5%</div >
                    <div className='bg-[#aa43e16d] rounded-md  py-2' >5%</div >
                    {/* 3rd  */}

                    <div className='bg-[#aa43e16d] rounded-md py-2'> 0</div>
                    <div className='bg-[#aa43e16d] rounded-md py-2'> 0</div>
                    <div className='bg-[#aa43e16d] rounded-md py-2'> 0</div>
                    <div className='bg-[#aa43e16d] rounded-md py-2'> 0</div >
                    <div className='bg-[#aa43e16d] rounded-md py-2' > 0</div >
                    {/* 4th  */}

                    <div className='bg-[#aa43e16d] rounded-md py-2'> Yes</div>
                    <div className='bg-[#aa43e16d] rounded-md py-2'> Yes</div>
                    <div className='bg-[#aa43e16d] rounded-md py-2'> Yes</div>
                    <div className='bg-[#aa43e16d] rounded-md py-2'> Yes</div >
                    <div className='bg-[#aa43e16d] rounded-md py-2' >Yes</div >
                    {/* 5th  */}

                    <div className='bg-[#aa43e16d] rounded-md py-2'> Yes</div>
                    <div className='bg-[#aa43e16d] rounded-md py-2'> Yes</div>
                    <div className='bg-[#aa43e16d] rounded-md py-2'> Yes</div>
                    <div className='bg-[#aa43e16d] rounded-md py-2'> Yes</div >
                    <div className='bg-[#aa43e16d] rounded-md py-2' >Yes</div >
                    {/* 6th  */}

                    <div className='bg-[#aa43e16d] rounded-md py-2'> Yes</div>
                    <div className='bg-[#aa43e16d] rounded-md py-2'> Yes</div>
                    <div className='bg-[#aa43e16d] rounded-md py-2'> Yes</div>
                    <div className='bg-[#aa43e16d] rounded-md py-2'> Yes</div >
                    <div className='bg-[#aa43e16d] rounded-md py-2'> Yes</div >
                </div >
            </div >
        </div >
    );
};

export default WhitePaper;