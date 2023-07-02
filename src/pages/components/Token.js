import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper.css';
// import 'swiper/components/navigation/navigation.css';
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from 'swiper';
import img1 from '../../assets/icons/1.png'
import img2 from '../../assets/icons/2.png'
import img3 from '../../assets/icons/3.png'
import img4 from '../../assets/icons/4.png'
import Image from 'next/image';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Slider from 'react-slick'
import Slidar from './Slider';
// import SwiperComponent from './SwiperComponent';

SwiperCore.use([Navigation]);

const cardData = [
    { id: 1, img: [img1, img4], heading: 'Buy With ETH or BNB', para: "If you have Ether or BNB in your wallet, select the relevant network and enter how much Ether or BNB you wish to swap for $ini tokens. Note the gas cost, and confirm the transaction in your wallet.." },
    { id: 2, img: [img2], heading: 'Buy With USDT', para: "If you have USDT in your wallet, select the relevant network and enter how much USDT you wish to swap for $ini tokens. Approve the use of USDT, take note of gas cost, and confirm the transaction" },
    { id: 3, img: [img3], heading: 'Buy With Card', para: "You can also purchase $ini tokens using your bank card. First connect your wallet, then select card option in the widget, and fill out an order. Your tokens will be sendt to your connected wallet." },
  ];

const Token = () => {
    const swiperRef = useRef(null);
    const [slidesPerView, setSlidesPerView] = useState(3);
    const [currentSlide, setCurrentSlide] = useState(0);

    // const handlePrevClick = () => {
    //     if (swiperRef.current && swiperRef.current.swiper) {
    //         swiperRef.current.swiper.slidePrev();
    //     }
    // };

    // const handleNextClick = () => {
    //     if (swiperRef.current && swiperRef.current.swiper) {
    //         swiperRef.current.swiper.slideNext();
    //     }
    // };

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.update();
        }
    }, []);

    // const handleSlideChange = () => {
    //     if (swiperRef.current && swiperRef.current.swiper) {
    //         const { activeIndex } = swiperRef.current.swiper;
    //         setSlidesPerView(activeIndex <= 1 ? 3 : 1);
    //     }
    // };
    const settings = {
        infinite: true,
        speed: 200,
        initialSlide: currentSlide,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 2.99,
        slidesToScroll: 1,
        afterChange: (newIndex) => setCurrentSlide(newIndex),
        responsive: [
            {
                breakpoint: 1015, // Mobile screen breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };
    const sliderRef = useRef(null);
    const nextSlide = () => {
        if (sliderRef.current) {
          sliderRef.current.slickNext();
        }
      };


  const handleCardClassName = (index) => {
    console.log("index", index)
    console.log("curr", currentSlide)
    const baseClass = 'card';
    const activeClass = (index===-1?2:index)  === currentSlide ? 'active' : 'non_active';
    const additionalClasses = 'p-5 lg:p-12 rounded-xl lg:w-[470px] 	bg-violet-800 slider-div'; // Add your additional classes here

    return `${baseClass} ${activeClass} ${additionalClasses}`.trim();
  };



    return (
        <div className='text-white max-w-screen-lg mx-auto pb-6' id='buy'>
            <h1 className='font-semibold text-center text-[26px] py-2'>How To Buy $ini Token?</h1>
            <p className='text-center font-normal text-[14px] pb-12'>The $ini token is your chance to be a part of a revolutionary new blockchain freelancing platform that promises to reform the freelancing industry. By purchasing $ini tokens during the presale, you'll be taking a first step toward becoming a part of the thriving Iniverse Ecosystem.</p>
            <div className=' max-w-screen-lg mx-auto'>
                
                    
                    <Slider {...settings} ref={sliderRef} className='slider'>
         {cardData.map((ele, index)=>{
                            return <div className={handleCardClassName(index -1 )}>
                            <div className='flex justify-center lg:gap-6 lg:ms-12 gap-2'>
                            {ele.img.map((img)=>{
                             return <Image src={img} alt="slide_image" className='lg:w-16 w-6' />
                            })}
                            </div>  
                                <p className='text-white text-center my-[5px] text-semibold text-[15px] lg:text-[22px]'>{ele.heading}</p>
                                <p className='text-center text-white text-[10px] lg:text-[15px] '>{ele.para}</p>
                            </div>
                        })}
                    </Slider>

         
            </div>
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

export default Token;