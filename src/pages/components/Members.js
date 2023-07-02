import Image from 'next/image';
import React from 'react';
import kikuchi from '../../assets/images/kikuchi.png'
import cheris from '../../assets/images/chris.png'
import linkedin from '../../assets/icons/ylinkedin.png'
import willium from '../../assets/images/willium.png'
import markis from '../../assets/images/markis.png'
import elmira from '../../assets/images/elmira.png'
import koki from '../../assets/images/koki.png'

const Members = () => {
    return (
        <div className=' max-w-screen-xl mx-auto rounded-lg py-24' id='team'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-24 lg:gap-5'>
                {/* 1st  */}
                <div className='py-12 px-8 rounded-lg relative' style={{ backgroundColor: 'rgb(188, 75, 213)' }}>
                    <div className='flex justify-center' >
                        <div className='border-white border-4 rounded-full w-[150px] mt-[-116px] absolute'>
                            <Image src={kikuchi} alt='img' className='w-[150px] ' />
                        </div>
                    </div>
                    <div className='mt-3'>
                        <Image src={linkedin} alt='img' />
                    </div>
                    <h1 className='text-white font-medium text-[20px] my-3'>Kikuchi Isao</h1>
                    <p className='text-[14px] text-[#F0C600] font-semibold'>CEO</p>
                    <p className='text-[14px] text-white mt-3'>Muramoto is a successful CEO with a background in business administration and management. With two decades of business model development experience, she has gained a distinct understanding of the demands and difficulties faced by the freelancing industry in today's digital landscape.</p>
                </div>
                {/* 2nd  */}
                <div className='py-12 px-8 rounded-lg ' style={{ backgroundColor: 'rgb(188, 75, 213)' }}>
                    <div className='flex justify-center' >
                        <div className='border-white border-4 rounded-full w-[150px] mt-[-116px] absolute'>
                            <Image src={cheris} alt='img' className='w-full' />
                        </div>
                    </div>
                    <div className='mt-3'>
                        <Image src={linkedin} alt='img' />
                    </div>
                    <h1 className='text-white font-medium text-[20px] my-3'>Chris Bright</h1>
                    <p className='text-[14px] text-[#F0C600] font-semibold'>CTO</p>
                    <p className='text-[14px] text-white mt-3'>Chris is a passionate and experienced CTO with more than 16 years of software development history. He has led several technically tough projects to success and now works as the CTO of SoftTalents, a company that specializes in Web3 technology. With his knowledge and innovative approach, Chris plays a pivotal role in Iniverse project development.</p>
                </div>
                {/* 3rd  */}
                <div className='py-12 px-8 rounded-lg ' style={{ backgroundColor: 'rgb(188, 75, 213)' }}>
                    <div className='flex justify-center' >
                        <div className='border-white border-4 rounded-full w-[150px] mt-[-116px] absolute'>
                            <Image src={willium} alt='img' className='w-full' />
                        </div>
                    </div>
                    <div className='mt-3'>
                        <Image src={linkedin} alt='img' />
                    </div>
                    <h1 className='text-white font-medium text-[20px] my-3'>William Cheung</h1>
                    <p className='text-[14px] text-[#F0C600] font-semibold'>CMO</p>
                    <p className='text-[14px] text-white mt-3'>William is an enthusiastic CMO with more 5 years of experience in community building, marketing, public and client relations, content writing and creation, and social media management including projects in web3, gamefi, and defi. With his devoted marketing activity, William is a driving force of ecosystem construction.</p>
                </div>   </div>
            {/* 4th */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-24 lg:gap-5 mt-28'>
                <div className='py-12 px-8 rounded-lg ' style={{ backgroundColor: 'rgb(188, 75, 213)' }}>
                    <div className='flex justify-center' >
                        <div className='border-white border-4 rounded-full w-[150px] mt-[-116px] absolute'>
                            <Image src={markis} alt='img' className='w-full' />
                        </div>
                    </div>
                    <div className='mt-3'>
                        <Image src={linkedin} alt='img' />
                    </div>
                    <h1 className='text-white font-medium text-[20px] my-3'>Jan Markis</h1>
                    <p className='text-[14px] text-[#F0C600] font-semibold'>Head of Site Dev Team</p>
                    <p className='text-[14px] text-white mt-3'>Jan is a driven software developer with an exceptional ability to suggest outstanding solutions for difficult problems. His passion for technology and his determination to succeed make him an asset to any development team.</p>
                </div>
                {/* 5th */}
                <div className='py-12 px-8 rounded-lg ' style={{ backgroundColor: 'rgb(188, 75, 213)' }}>
                    <div className='flex justify-center' >
                        <div className='border-white border-4 rounded-full w-[150px] mt-[-116px] absolute'>
                            <Image src={elmira} alt='img' className='w-full' />
                        </div>
                    </div>
                    <div className='mt-3'>
                        <Image src={linkedin} alt='img' />
                    </div>
                    <h1 className='text-white font-medium text-[20px] my-3'>Elmira Amgalan</h1>
                    <p className='text-[14px] text-[#F0C600] font-semibold'>Web & UI/UX Designer</p>
                    <p className='text-[14px] text-white mt-3'>Elmira is a talented Web & UI/UX Designer with 8 years of experience. She has designed lots of excellent websites and UI/UX for various software companies worldwide. Her artistic eyes and inspiration make our platform a more brilliant one.</p>
                </div>
                {/* 6th */}
                <div className='py-12 px-8 rounded-lg ' style={{ backgroundColor: 'rgb(188, 75, 213)' }}>
                    <div className='flex justify-center' >
                        <div className='border-white border-4 rounded-full w-[150px] mt-[-116px] absolute'>
                            <Image src={koki} alt='img' className='w-full' />
                        </div>
                    </div>
                    <div className='mt-3'>
                        <Image src={linkedin} alt='img' />
                    </div>
                    <h1 className='text-white font-medium text-[20px] my-3'>Miyashita Koki</h1>
                    <p className='text-[14px] text-[#F0C600] font-semibold'>Head of Blockchain Team</p>
                    <p className='text-[14px] text-white mt-3'>As an experienced full-stack developer Miyashita has worked in the web, and blockchain spaces for more than 10 years. During this time he built dozens of modern and professional platforms that are today making profits for companies worldwide. His commitment to user-friendly solutions made his in-demand in the tech community.</p>
                </div>
            </div>
        </div>
    );
};

export default Members;