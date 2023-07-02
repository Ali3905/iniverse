import Image from 'next/image';
import React, { useEffect } from 'react';
import why from '../../assets/images/why.png'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsCheck } from "react-icons/bs";



const WhyInverse = () => {

    const setCardPadding = () => {
        const cards = document.querySelectorAll('.slider-slide');

        cards.forEach(card => {
            card.style.paddingLeft = '10px';
            card.style.paddingRight = '10px';
        });
    };

    useEffect(() => {
        setCardPadding();
        window.addEventListener('resize', setCardPadding);

        return () => {
            window.removeEventListener('resize', setCardPadding);
        };
    }, []);
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: '10px',
        responsive: [
            {
                breakpoint: 768, // Mobile screen breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div className='bg-inverse pb-12' id='whyinverse'>
            <div className=' max-w-screen-lg mx-auto py-5 text-white text-center'>
                <h1 className='text-[25px] font-bold mt-5'>Why Inverse?</h1>
                <p>Inverse has a lot of advantages compared to existing or upcoming freelancing platform</p>
                <div className='flex flex-col lg:flex-row mt-16 w-full gap-5 lg:gap-0'>
                    <div className='p-8 rounded-xl w-full lg:w-[30%] flex justify-center' style={{ backgroundColor: 'rgba(141, 55, 160, 0.344)' }}>
                        <Image src={why} alt='img' className='w-[250px]' />
                    </div>
                    <div className='w-full lg:w-[70%] mx-2 px-12'>
                        <div className='slider-container'>
                            <Slider {...settings}>
                                <div className='rounded-xl bg  slider-slide' >
                                    <div className='p-8 h-[445px] lg:h-[380px]' >
                                        <button className='bg-[#F0C600] text-purple-600 rounded-full'>
                                            <BsCheck />
                                        </button>
                                        <div>
                                            <h1 className='text-orange-400  text-[16px]'>Fully Decentralized</h1>
                                            <p className='text-[13px] font-light mt-7'>There are no privileged administrators who decide the fate of freelancers and clients at their will. Everything is decided by clients and freelancers in a decentralized manner.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='rounded-xl bg slider-slide'>
                                    <div className='p-8 h-[445px] lg:h-[380px]' >
                                        <button className='bg-[#F0C600] text-purple-600 rounded-full'>
                                            <BsCheck />
                                        </button>
                                        <div>
                                            <h1 className='text-orange-400  text-[16px]'>Lowest fee for freelancers and clients in the world</h1>
                                            <p className='text-[13px] font-light mt-[2px]'>Iniverse's main purpose is not to make great profits from platform operations but to create a comfortable environment for both clients and freelancers to work together for mutual success and get fair pay by using blockchain technology. Rather than other freelancing platforms, which charge high fees, there is no commission for clients and only a 2% fee for freelancers for site operation. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='rounded-xl bg slider-slide' >
                                    <div className='p-8 h-[445px] lg:h-[380px]' >
                                        <button className='bg-[#F0C600] text-purple-600 rounded-full'>
                                            <BsCheck />
                                        </button>
                                        <div>
                                            <h1 className='text-orange-400  text-[16px]'>World's first Refund-guaranteed Crypto-Payment System</h1>
                                            <p className='text-[13px] font-light mt-[2px]'>The main worry of clients about paying by cryptocurrency for freelancers is that there is no refund guarantee for bad work. Once you send cryptocurrency to another guy, there is no technical way to ask them for a refund for their lying or cheating. Here is where Iniverse comes in. Iniverse makes a refund guarantee for bad-quality work while not asking for a refund for fair work.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='rounded-xl bg slider-slide' >
                                    <div className='p-8 h-[445px] lg:h-[380px]' >
                                        <button className='bg-[#F0C600] text-purple-600 rounded-full'>
                                            <BsCheck />
                                        </button>
                                        <div>
                                            <h1 className='text-orange-400  text-[16px]'>Cross-chain Support</h1>
                                            <p className='text-[13px] font-light mt-[2px]'>Iniverse offers cross-chain crypto payment support not only for ethereum-based cryptos but also TRON, Solana, and Aptos via its own DEX.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='rounded-xl bg slider-slide' >
                                    <div className='p-8 h-[445px] lg:h-[380px]' >
                                        <button className='bg-[#F0C600] text-purple-600 rounded-full'>
                                            <BsCheck />
                                        </button>
                                        <div>
                                            <h1 className='text-orange-400  text-[16px]'>Special treatment for Dedicated Participants</h1>
                                            <p className='text-[13px] font-light mt-[2px]'>Iniverse offers special treatment for dedicated participants. Every month, all participants will get refunded based on the money they spent or earned on our platform. The refunded money might even exceed the spent money, depending on their contribution.</p>
                                        </div>
                                    </div>
                                </div>
                            </Slider></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyInverse;