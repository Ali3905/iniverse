import Image from 'next/image';
import React, { useState } from 'react';
import logo from '../../assets/logo/iniverse.png'
import connect from '../../assets/images/connect-removebg-preview.png'
import flag from '../../assets/images/united-kingdom.png'
import Indiaflag from '../../assets/images/india.png'
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-scroll';


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className='w-full sm:w-screen  bg-[#A214ED] z-10 shadow-lg p-5 text-white '>
            <div className='max-w-screen-lg mx-auto'>
                <div className='flex justify-between items-center  '>
                    <div className='w-[150px]'>
                        <Image src={logo} alt='logo' className='w-full' />
                    </div>
                    <div className='text-[16px]  font-bold hidden lg:block'>
                        <ul className='flex gap-4'>
                            <Link
                                activeClass="active"
                                to="whyinverse"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className='hover:text-purple-900'
                            >Why Inverse</Link>
                            <Link
                                activeClass="active"
                                to="buy"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className='hover:text-purple-900'
                            >How To Buy</Link>
                            <Link
                                activeClass="active"
                                to="tokeninfo"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className='hover:text-purple-900'
                            >Token info</Link>
                            <Link
                                activeClass="active"
                                to="reacttree"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className='hover:text-purple-900'
                            >Roadmap</Link>
                            <Link
                                activeClass="active"
                                to="team"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className='hover:text-purple-900'
                            >Team</Link>
                            <Link
                                activeClass="active"
                                to="faq"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className='hover:text-purple-900'
                            >FAQ</Link>
                        </ul>
                    </div>
                    <div className='hidden lg:block'>
                        <div className='flex gap-4 '>
                            <div className='border-2 border-[#F0C600] rounded-xl'>
                                <button className='border-[1px] border-red-500 rounded-xl px-4 py-1 flex items-center'>
                                    <Image src={connect} alt='img' className='w-[25px]' />
                                    <span>Connect</span></button>
                            </div>
                            <div className=' border-2 border-[#F0C600] rounded-xl'>

                                <button
                                    type="button"
                                    className="border-[1px] px-4 py-1  border-red-500 rounded-xl flex items-center gap-2"
                                    onClick={toggleDropdown}
                                >
                                    <Image src={flag} alt='flag' className='w-[17px]' />  <span>English</span><span className='text-[#F0C600]'>
                                        <IoMdArrowDropdown size={25} />  </span>
                                </button>
                                {isOpen && (
                                    <div className="absolute w-40 mt-2 origin-top-right md:right-[27%] lg:right-[16%] bg-[#A214ED] shadow-xl divide-y  rounded-md text-white font-bold text-center border-2 border-[#7513aa]">
                                        <ul className="py-1 ">
                                            <li >
                                                <div
                                                    href="#"
                                                    className="mx-4 px-4 py-2 text-sm hover:text-pink-900 flex items-center gap-2 "
                                                ><Image src={flag} alt='flag' className='w-[17px]' />
                                                    <p>English</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div
                                                    href="#"
                                                    className="mx-4 px-4 py-2 text-sm hover:text-pink-900 flex items-center gap-2 "
                                                ><Image src={Indiaflag} alt='flag' className='w-[17px]' />
                                                    <p>Hindi</p>
                                                </div>
                                            </li>

                                        </ul></div>)}
                            </div>
                        </div>
                    </div>
                    <div className='me-5 lg:hidden'>
                        <button onClick={toggleMenu}>
                            <AiOutlineMenu size={30} />
                        </button>
                        {isMenuOpen && (
                            <div className="absolute w-60 mt-5 pt-3 origin-top-right right-0 h-full bg-[#A214ED] shadow-xl divide-y   text-white font-semibold px-5 z-10">
                                <ul className="flex flex-col gap-5 text-[18px] ">
                                    <Link
                                        activeClass="active"
                                        to="whyinverse"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}

                                    >
                                        <li className='hover:text-purple-900 hover:font-bold'>Why Inverse</li></Link>
                                    <Link
                                        activeClass="active"
                                        to="buy"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}

                                    >
                                        <li className='hover:text-purple-900 hover:font-bold'>How To Buy</li></Link>
                                    <Link
                                        activeClass="active"
                                        to="tokeninfo"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}

                                    >
                                        <li className='hover:text-purple-900 hover:font-bold'>Token info</li></Link>
                                    <Link
                                        activeClass="active"
                                        to="reacttree"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}

                                    > <li className='hover:text-purple-900 hover:font-bold'>Roadmap</li></Link>
                                    <Link
                                        activeClass="active"
                                        to="team"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}

                                    >    <li className='hover:text-purple-900 hover:font-bold'>Team</li></Link>
                                    <Link
                                        activeClass="active"
                                        to="faq"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}

                                    ><li className='hover:text-purple-900 hover:font-bold'>FAQ</li></Link>


                                    <li className='border-2 border-[#F0C600] rounded-xl'>
                                        <button className='border-[1px] border-red-500  w-full rounded-xl px-4 py-1 flex items-center'>
                                            <Image src={connect} alt='img' className='w-[25px]' />
                                            <span>Connect</span></button>
                                    </li>
                                    <li className=' border-2 border-[#F0C600] rounded-xl'>

                                        <button
                                            type="button"
                                            className="border-[1px] px-4 py-1  border-red-500 w-full rounded-xl flex items-center gap-2"
                                            onClick={toggleDropdown}
                                        >
                                            <Image src={flag} alt='flag' className='w-[17px]' />  <span>English</span><span className='text-[#F0C600]'>
                                                <IoMdArrowDropdown size={25} />  </span>
                                        </button>
                                        {isOpen && (
                                            <div className="absolute w-40 mt-2 origin-top-right md:right-[27%] lg:right-[16%] bg-[#A214ED] shadow-xl divide-y  rounded-md text-white font-bold text-center border-2 border-[#7513aa]">
                                                <ul className="py-1 ">
                                                    <li >
                                                        <div
                                                            href="#"
                                                            className="mx-4 px-4 py-2 text-sm hover:text-pink-900 flex items-center gap-2 "
                                                        ><Image src={flag} alt='flag' className='w-[17px]' />
                                                            <p>English</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div
                                                            href="#"
                                                            className="mx-4 px-4 py-2 text-sm hover:text-pink-900 flex items-center gap-2 "
                                                        ><Image src={Indiaflag} alt='flag' className='w-[17px]' />
                                                            <p>Hindi</p>
                                                        </div>
                                                    </li>

                                                </ul></div>)}
                                    </li>


                                </ul></div>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;