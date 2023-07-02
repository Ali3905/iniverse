import React from 'react';
import iniverse from '../../assets/logo/iniverse.png'
import Image from 'next/image';
import twitter from '../../assets/icons/twitter.png'
import linkedin from '../../assets/icons/linkedin.png'
import telegram from '../../assets/icons/telegram.png'
import game from '../../assets/icons/game.png'


const Footer = () => {
    return (
        <div className=' max-w-screen-xl mx-auto rounded-lg py-5'>
            <div className='flex flex-col lg:flex-row gap-2 justify-between items-center'>
                <Image src={iniverse} alt='img' />
                <div className='flex gap-5'>
                    <Image src={twitter} alt='img' />
                    <Image src={linkedin} alt='img' />
                    <Image src={telegram} alt='img' />
                    <Image src={game} alt='img' />
                </div>
            </div>
            <hr className='w-full h-[1px] bg-white my-5' />
            <div className='text-white grid grid-cols-1 gap-3 items-center lg:items-start text-center lg:text-start mx-2 lg:grid-cols-3 justify-center lg:justify-start font-medium'>
                <div>
                    <p> 1-chome 1-8 3F</p>
                    <p>    Shinshukuku Hyakunincho</p>
                    <p>  Tokyo</p>
                </div>
                <div>
                    <p>   Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may go down as well as up. Profits may be subject to capital gains or other taxes applicable in your jurisdiction.</p>
                </div>
                <div className='flex  justify-center lg:justify-end  text-[#FECF02]'>
                    <p>support@iniverse.com</p>
                </div>
            </div>
            <hr className='w-full h-[1px] bg-white my-5 ' />
            <div className='flex flex-col lg:flex-row justify-between mx-2 gap-2'>
                <div className='text-white font-medium text-center'>
                    <p>Privacy Policy    <span className='lg:mx-5 mx-2'>|</span>    Cookies   <span className='lg:mx-5 mx-2'>|</span>   Terms of Services</p>
                </div>
                <div >
                    <p className='border-2 text-center border-[#FECF02] text-[#FECF02] font-semibold rounded-lg px-5'>© 2023 Iniverse <span className='text-white'>
                        All rights reserved</span></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;