import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import img1 from '../../assets/icons/1.png'
import img2 from '../../assets/icons/2.png'
import img3 from '../../assets/icons/3.png'
import img4 from '../../assets/icons/4.png'
import Image from 'next/image';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';


const TokenInfo = () => {
    const swiperRef = useRef(null);

    const handlePrevClick = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleNextClick = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };



    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.update();
        }
    }, []);

    return (
        <div className='text-white max-w-screen-lg mx-auto pb-6' id='buy'>
            <h1 className='font-semibold text-center text-[26px] py-2'>How To Buy $ini Token?</h1>
            <p className='text-center font-normal text-[14px] pb-12'>The $ini token is your chance to be a part of a revolutionary new blockchain freelancing platform that promises to reform the freelancing industry. By purchasing $ini tokens during the presale, you'll be taking a first step toward becoming a part of the thriving Iniverse Ecosystem.</p>
            <div className=' max-w-screen-lg mx-auto'>
                <div className=" flex items-center lg:mx-12">
                    <button className='bg-white rounded-full text-black p-[2px] lg:p-2 text-[10px] lg:text-[20px] lg:ml-[-5%]' onClick={handlePrevClick}>
                        <BsArrowLeft />
                    </button>
                    <Swiper
                        ref={swiperRef}
                        effect={'coverflow'}
                        grabCursor={true}
                        slidesPerView={3}
                        slidesPerGroup={2}
                        // centeredSlides={true}
                        loop={true}
                        coverflowEffect={{
                            rotate: 1,
                            stretch: 0,
                            depth: 100,
                            modifier: 3.5,
                        }}
                        modules={[EffectCoverflow]}
                        className="swiper_container w-[100%]"


                        onSlideChange={(swiper) => {
                            console.log('Slide changed to: ', swiper.realIndex);
                        }}
                    >
                        <SwiperSlide className=''>
                            <div style={{ backgroundColor: 'rgba(204, 80, 232, 0.819)' }} className='p-5 lg:p-12 rounded-xl lg:w-[350px]' >
                                <div className='flex justify-center lg:gap-6 lg:ms-12 gap-2'>
                                    <Image src={img1} alt="slide_image" className='lg:w-16 w-6' />
                                    <Image src={img4} alt="slide_image" className='lg:w-16 w-6' />
                                </div>
                                <p className='text-white text-center my-[5px] text-semibold text-[15px] lg:text-[22px]'>Buy With ETH or BNB</p>
                                <p className='text-center text-white text-[10px] lg:text-[15px] '>If you have Ether or BNB in your wallet, select the relevant network and enter how much Ether or BNB you wish to swap for $ini tokens. Note the gas cost, and confirm the transaction in your wallet.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className=''>
                            <div style={{ backgroundColor: 'rgba(204, 80, 232, 0.819)' }} className='p-5 lg:p-12 rounded-xl lg:w-[350px]'>
                                <div className='flex justify-center'>
                                    <Image src={img2} alt="slide_image" className='lg:w-16 w-12' />
                                </div>
                                <p className='text-white text-center my-[5px] text-semibold text-[15px] lg:text-[22px]'>Buy With USDT</p>
                                <p className='text-center text-white text-[10px] lg:text-[15px] '>If you have USDT in your wallet, select the relevant network and enter how much USDT you wish to swap for $ini tokens. Approve the use of USDT, take note of gas cost, and confirm the transaction.</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide >
                            <div style={{ backgroundColor: 'rgba(204, 80, 232, 0.819)' }} className='p-5 lg:p-12 rounded-xl lg:w-[350px]'>
                                <div className='flex justify-center'>
                                    <Image src={img3} alt="slide_image" className='lg:w-16 w-12' />
                                </div>
                                <p className='text-white text-center my-[5px] text-semibold text-[15px] lg:text-[22px]'>Buy With Card</p>
                                <p className='text-center text-white text-[10px] lg:text-[15px] '>You can also purchase $ini tokens using your bank card. First connect your wallet, then select card option in the widget, and fill out an order. Your tokens will be sendt to your connected wallet.</p>
                            </div>
                        </SwiperSlide>





                    </Swiper>
                    <button className='bg-white rounded-full text-black p-[2px] lg:p-2 text-[10px] lg:text-[20px]' onClick={handlePrevClick}>
                        <BsArrowRight />
                    </button>

                </div>
            </div>
            {/* new to crypto  */}
            <div className='new-to-crypto h-[250px] flex items-center lg:h-full rounded-md bg-[#A214ED] text-center justify-center p-[40px] mt-12 lg:mt-24'>
                <div>
                    <h1 className='text-[20px] lg:text-[26px] font-semibold'>New to Crypto Purchase?</h1>
                    <div className='text-[12px] lg:text-[14px]  lg:mt-3 font-normal flex flex-col lg:gap-1'> <p>Do you want to purchase $INI token and join the new era of decentralized freelancing, but not sure where to start?</p>
                        <p>Don't worry. You can exchange your fiat money to cryptocurrency easily on <span className='text-[#FECF02]'>THIS</span> </p>
                        <p>Or Fill <span className='text-[#FECF02]'>OUR FORM,</span> and one of our team members will guide you through the process.</p>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default TokenInfo;