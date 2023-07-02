import React, { useEffect, useState } from 'react';
import bit from '../../assets/images/bitforex.PNG'
import change from '../../assets/images/change.PNG'
import digfinix from '../../assets/images/digfinix.PNG'
import Lbank from '../../assets/images/Lbank.PNG'
import uni from '../../assets/images/uniswap.PNG'
import trank from '../../assets/images/tank.PNG'
import cont from '../../assets/images/Cont.PNG'
import Image from 'next/image';
import progressBar from '../../assets/logo/progressBar.png'
import share from '../../assets/icons/share.png'
import twitter from '../../assets/icons/twitter.png'
import telegram from '../../assets/icons/telegram.png'
import game from '../../assets/icons/game.png'
import linkedin from '../../assets/icons/linkedin.png'
import Slider from 'react-slick';

const Banner = () => {


    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        prevArrow: false,
        nextArrow: false,
    };

    const initialCountdown = {
        days: 200,
        hours: 0,
        minutes: 0,
        seconds: 0,
    };

    const [countdown, setCountdown] = useState(initialCountdown);

    useEffect(() => {
        const calculateCountdown = () => {
            setCountdown((prevCountdown) => {
                let { days, hours, minutes, seconds } = prevCountdown;

                if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
                    // Reset countdown to 200 days
                    return initialCountdown;
                }

                if (seconds === 0) {
                    if (minutes === 0) {
                        if (hours === 0) {
                            // Reduce a day
                            days--;
                            hours = 23;
                            minutes = 59;
                            seconds = 59;
                        } else {
                            // Reduce an hour
                            hours--;
                            minutes = 59;
                            seconds = 59;
                        }
                    } else {
                        // Reduce a minute
                        minutes--;
                        seconds = 59;
                    }
                } else {
                    // Reduce a second
                    seconds--;
                }

                return { days, hours, minutes, seconds };
            });
        };

        const timer = setInterval(calculateCountdown, 1000); // Update countdown every second

        return () => {
            clearInterval(timer);
        };
    }, []);

    // progress bar 
    const [progress, setProgress] = useState(20);
    const circlePosition = {
        left: `${progress}%`,
        transform: 'translate(-50%, -50%)',
    };
    return (
        <div className='banner-bg w-full'>
            <div className=' max-w-screen-lg mx-auto px-5 lg:0'>
                <div className='grid grid-cols-1 mx-5 lg:mx-0 gap-2 lg:grid-cols-2 items-center py-12'>
                    <div className='text-white flex flex-col gap-8'>
                        <h1 className='font-bold text-[25px]'>
                            <span className='text-[#F0C600] '>Iniverse: </span>
                            A Blockchain Ecosystem where true talents and clients meet and collaborate altogether
                        </h1>
                        <div className='font-thin text-[15px]'>
                            <p>
                                <span>Iniverse</span>
                                is a freelanching platform based on Blockchain technology.
                            </p>
                            <p>
                                It revolutionizes the way clients and freelancers work together for success
                            </p>
                        </div>
                        <div className=''>
                            <button className='border py-1 px-4 text-white flex items-center gap-2'>
                                <span>
                                    <Image src={share} alt='img' className='w-[20px]' />
                                </span> <span>View White Paper</span></button>
                            <div className='mt-8 flex items-center gap-4'>
                                <Image src={twitter} alt='img' />
                                <Image src={linkedin} alt='img' />
                                <Image src={telegram} alt='img' />
                                <Image src={game} alt='img' />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center lg:justify-end'>
                        <div className=' w-[450px] shadow-xl p-5 rounded-xl text-white' style={{ backgroundColor: "rgba(0, 0, 0, 0.1) " }}>
                            <div className='text-[25px] text-center '>
                                <h1 className='font-bold'>STAGE1: BUY NOW BEFORE PRICE INCREASE!</h1>
                            </div>
                            <div className='grid grid-cols-4  md:px-10 lg:px-10 mt-3 gap-5'>
                                <div>
                                    <button className='bg-[#F0C600] text-[#8113bd] p-2 rounded-lg text-[25px] font-bold w-full'>{countdown.days}</button>
                                    <p className='font-thin text-center text-[15px]'>Days</p>
                                </div>
                                <div>
                                    <button className='bg-[#F0C600] text-[#8113bd] p-2 rounded-lg text-[25px] font-bold w-full'>{countdown.hours}</button>
                                    <p className='font-thin text-center text-[15px]'>Hours</p>
                                </div>
                                <div>
                                    <button className='bg-[#F0C600] text-[#8113bd] p-2 rounded-lg text-[25px] font-bold w-full'>{countdown.minutes}</button>
                                    <p className='font-thin text-center text-[15px]'>Minutes</p>
                                </div>
                                <div>
                                    <button className='bg-[#F0C600] text-[#8113bd] p-2 rounded-lg text-[25px] font-bold w-full'>{countdown.seconds}</button>
                                    <p className='font-thin text-center text-[15px]'>Seconds</p>
                                </div>
                            </div>
                            {/* progress bar  */}
                            <div className="progress inline-block w-full my-5  h-[25px]  rounded-full bg-gray-200 relative">
                                <div className="absolute left-0 top-0 bottom-0 background-image" style={{ width: `${progress}%` }}></div>
                                <div className="absolute left-1/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center" style={circlePosition}>
                                    <div className="w-10 h-10 bg-yellow-400 rounded-full border-2 border-white"></div>
                                </div>
                                <div className='mt-1 flex items-center justify-center'>
                                    <p className="text-[12px] text-purple-600">Until Next Price $0.118</p>
                                </div>
                            </div>


                            {/* <div className='text-center py-5'>
                                <Image src={progressBar} alt='img' />
                            </div> */}
                            <div className='flex flex-col gap-4 text-center'>
                                <p>USDT Raised: $124.855 / $5,000,000</p>
                                <p>Your Purchased INI = 0</p>
                                <button className=' rounded-xl py-[2px] text-[15px] font-normal text-white border'>! INI = $0.1</button>
                                <button className='bg-[#F0C600] rounded-xl py-[2px] text-[15px] font-normal text-red-800'>Connect Wallet</button>
                                <button className='bg-white rounded-xl py-[2px] text-[15px] font-medium text-purple-700'>Need Our Help?</button>
                                <p className='textShadow text-[#F0C600] font-light text-[15px]'>   Listing Price = $0.3</p>
                            </div>
                        </div>
                    </div>

                </div>
                <hr className='w-full h-[1px] bg-white' />
                <div className='banner px-12 lg:px-0'>
                    <Slider {...settings}>
                        <Image src={bit} alt='img' className='w-[120px]' />
                        <Image src={change} alt='img' className='w-[120px]' />
                        <Image src={digfinix} alt='img' className='w-[120px]' />
                        <Image src={Lbank} alt='img' className='w-[120px]' />
                        <Image src={uni} alt='img' className='w-[120px]' />
                        <Image src={trank} alt='img' className='w-[120px]' />
                        <Image src={cont} alt='img' className='w-[120px]' />
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Banner;