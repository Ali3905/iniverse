import Image from 'next/image';
import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import faq from '../../assets/images/faq.png'

const FAQ = () => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [isOpen6, setIsOpen6] = useState(false);
    const [isOpen7, setIsOpen7] = useState(false);
    const [isOpen8, setIsOpen8] = useState(false);
    const [isOpen9, setIsOpen9] = useState(false);


    const toggleAccordion1 = () => {
        setIsOpen1(!isOpen1);
    };

    const toggleAccordion2 = () => {
        setIsOpen2(!isOpen2);
    };
    const toggleAccordion3 = () => {
        setIsOpen3(!isOpen3);
    };
    const toggleAccordion4 = () => {
        setIsOpen4(!isOpen4);
    };
    const toggleAccordion5 = () => {
        setIsOpen5(!isOpen5);
    };
    const toggleAccordion6 = () => {
        setIsOpen6(!isOpen6);
    };
    const toggleAccordion7 = () => {
        setIsOpen7(!isOpen7);
    };
    const toggleAccordion8 = () => {
        setIsOpen8(!isOpen8);
    };
    const toggleAccordion9 = () => {
        setIsOpen9(!isOpen9);
    };

    return (
        <div className=' max-w-screen-xl mx-auto rounded-lg lg:py-24' id='faq'>
            <div className='flex flex-col-reverse lg:grid  lg:grid-cols-2 text-white gap-5'>
                <div className="w-full flex flex-col gap-[10px]"  >
                    {/* 1st  */}
                    <div className='rounded-lg ' style={{ backgroundColor: 'rgb(188, 75, 213)' }}>
                        <div
                            className="flex items-center justify-between px-4 py-2  cursor-pointer rounded-lg shadow-lg"
                            onClick={toggleAccordion1}
                        >
                            <h2 className="text-xl font-semibold">What is Iniverse?</h2>
                            <div
                                className={`w-6 h-6 transition-transform duration-300 transform flex items-center ${isOpen1 ? 'rotate-180' : 'rotate-0'
                                    }`}
                                viewBox="0 0 24 24"
                            >
                                <IoIosArrowForward />
                            </div>
                        </div>
                        {isOpen1 && (
                            <div className="px-4 py-2 ">
                                <p>The main purpose of Iniverse is not to provide centralized governance for privileged administrators. Everything is decided by a decentralized consensus architecture, and it also only asks for the lowest fee in the freelancing world.</p>
                            </div>
                        )}
                    </div>
                    {/* 2nd  */}
                    <div className='rounded-lg mt-2' style={{ backgroundColor: 'rgb(188, 75, 213)' }}>
                        <div
                            className="flex items-center justify-between px-4 py-2  cursor-pointer rounded-lg shadow-lg"
                            onClick={toggleAccordion2}
                        >
                            <h2 className="text-xl font-semibold">Why Iniverse?</h2>
                            <div
                                className={`w-6 h-6 transition-transform duration-300 transform flex items-center ${isOpen2 ? 'rotate-180' : 'rotate-0'
                                    }`}
                                viewBox="0 0 24 24"
                            >
                                <IoIosArrowForward />
                            </div>
                        </div>
                        {isOpen2 && (
                            <div className="px-4 py-2 ">
                                <p>The main purpose of Iniverse is not to provide centralized governance for privileged administrators. Everything is decided by a decentralized consensus architecture, and it also only asks for the lowest fee in the freelancing world.</p>
                            </div>
                        )}
                    </div>
                    {/* 3rd  */}
                    <div className='rounded-lg mt-2' style={{ backgroundColor: 'rgb(188, 75, 213)' }}>
                        <div
                            className="flex items-center justify-between px-4 py-2  cursor-pointer rounded-lg shadow-lg"
                            onClick={toggleAccordion3}
                        >
                            <h2 className="text-xl font-semibold">Where does the profit of Iniverse come from?</h2>
                            <div
                                className={`w-6 h-6 transition-transform duration-300 transform flex items-center ${isOpen3 ? 'rotate-180' : 'rotate-0'
                                    }`}
                                viewBox="0 0 24 24"
                            >
                                <IoIosArrowForward />
                            </div>
                        </div>
                        {isOpen3 && (
                            <div className="px-4 py-2 ">
                                <p>The main purpose of Iniverse is not to provide centralized governance for privileged administrators. Everything is decided by a decentralized consensus architecture, and it also only asks for the lowest fee in the freelancing world.</p>
                            </div>
                        )}
                    </div>
                    {/* 4th  */}
                    <div className='rounded-lg mt-2' style={{ backgroundColor: 'rgb(188, 75, 213)' }}>
                        <div
                            className="flex items-center justify-between px-4 py-2  cursor-pointer rounded-lg shadow-lg"
                            onClick={toggleAccordion4}
                        >
                            <h2 className="text-xl font-semibold">How does $ini token owners get income?</h2>
                            <div
                                className={`w-6 h-6 transition-transform duration-300 transform flex items-center ${isOpen4 ? 'rotate-180' : 'rotate-0'
                                    }`}
                                viewBox="0 0 24 24"
                            >
                                <IoIosArrowForward />
                            </div>
                        </div>
                        {isOpen4 && (
                            <div className="px-4 py-2 ">
                                <p>The main purpose of Iniverse is not to provide centralized governance for privileged administrators. Everything is decided by a decentralized consensus architecture, and it also only asks for the lowest fee in the freelancing world.</p>
                            </div>
                        )}
                    </div>
                    {/* 5th  */}
                    <div className='rounded-lg mt-2' style={{ backgroundColor: 'rgb(188, 75, 213)' }}>
                        <div
                            className="flex items-center justify-between px-4 py-2  cursor-pointer rounded-lg shadow-lg"
                            onClick={toggleAccordion5}
                        >
                            <h2 className="text-xl font-semibold">Where can I exchange my $ini token?</h2>
                            <div
                                className={`w-6 h-6 transition-transform duration-300 transform flex items-center ${isOpen5 ? 'rotate-180' : 'rotate-0'
                                    }`}
                                viewBox="0 0 24 24"
                            >
                                <IoIosArrowForward />
                            </div>
                        </div>
                        {isOpen5 && (
                            <div className="px-4 py-2 ">
                                <p>The main purpose of Iniverse is not to provide centralized governance for privileged administrators. Everything is decided by a decentralized consensus architecture, and it also only asks for the lowest fee in the freelancing world.</p>
                            </div>
                        )}
                    </div>
                    {/* 6th  */}
                    <div className='rounded-lg mt-2' style={{ backgroundColor: 'rgb(188, 75, 213)' }}>
                        <div
                            className="flex items-center justify-between px-4 py-2  cursor-pointer rounded-lg shadow-lg"
                            onClick={toggleAccordion6}
                        >
                            <h2 className="text-xl font-semibold">When will Iniverse go live?</h2>
                            <div
                                className={`w-6 h-6 transition-transform duration-300 transform flex items-center ${isOpen6 ? 'rotate-180' : 'rotate-0'
                                    }`}
                                viewBox="0 0 24 24"
                            >
                                <IoIosArrowForward />
                            </div>
                        </div>
                        {isOpen6 && (
                            <div className="px-4 py-2 ">
                                <p>The main purpose of Iniverse is not to provide centralized governance for privileged administrators. Everything is decided by a decentralized consensus architecture, and it also only asks for the lowest fee in the freelancing world.</p>
                            </div>
                        )}
                    </div>
                    {/* 7th  */}
                    <div className='rounded-lg mt-2' style={{ backgroundColor: 'rgb(188, 75, 213)' }}>
                        <div
                            className="flex items-center justify-between px-4 py-2  cursor-pointer rounded-lg shadow-lg"
                            onClick={toggleAccordion7}
                        >
                            <h2 className="text-xl font-semibold">How does Iniverse guarantee refund for bad work?</h2>
                            <div
                                className={`w-6 h-6 transition-transform duration-300 transform flex items-center ${isOpen7 ? 'rotate-180' : 'rotate-0'
                                    }`}
                                viewBox="0 0 24 24"
                            >
                                <IoIosArrowForward />
                            </div>
                        </div>
                        {isOpen7 && (
                            <div className="px-4 py-2 ">
                                <p>The main purpose of Iniverse is not to provide centralized governance for privileged administrators. Everything is decided by a decentralized consensus architecture, and it also only asks for the lowest fee in the freelancing world.</p>
                            </div>
                        )}
                    </div>
                    {/* 8th  */}
                    <div className='rounded-lg mt-2' style={{ backgroundColor: 'rgb(188, 75, 213)' }}>
                        <div
                            className="flex items-center justify-between px-4 py-2  cursor-pointer rounded-lg shadow-lg"
                            onClick={toggleAccordion8}
                        >
                            <h2 className="text-xl font-semibold">How doese Iniverse prevent bad activities?</h2>
                            <div
                                className={`w-6 h-6 transition-transform duration-300 transform flex items-center ${isOpen8 ? 'rotate-180' : 'rotate-0'
                                    }`}
                                viewBox="0 0 24 24"
                            >
                                <IoIosArrowForward />
                            </div>
                        </div>
                        {isOpen8 && (
                            <div className="px-4 py-2 ">
                                <p>The main purpose of Iniverse is not to provide centralized governance for privileged administrators. Everything is decided by a decentralized consensus architecture, and it also only asks for the lowest fee in the freelancing world.</p>
                            </div>
                        )}
                    </div>
                    {/* 9th  */}

                    <div className='rounded-lg mt-2' style={{ backgroundColor: 'rgb(188, 75, 213)' }}>
                        <div
                            className="flex items-center justify-between px-4 py-2  cursor-pointer rounded-lg shadow-lg"
                            onClick={toggleAccordion9}
                        >
                            <h2 className="text-xl font-semibold">How doese Iniverse prevent bad activities?</h2>
                            <div
                                className={`w-6 h-6 transition-transform duration-300 transform flex items-center ${isOpen9 ? 'rotate-180' : 'rotate-0'
                                    }`}
                                viewBox="0 0 24 24"
                            >
                                <IoIosArrowForward />
                            </div>
                        </div>
                        {isOpen9 && (
                            <div className="px-4 py-2 ">
                                <p>The main purpose of Iniverse is not to provide centralized governance for privileged administrators. Everything is decided by a decentralized consensus architecture, and it also only asks for the lowest fee in the freelancing world.</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className=' lg:h-[540px] p-5 rounded-lg' style={{ backgroundColor: 'rgb(188, 75, 213)' }}>
                    <Image src={faq} alt='img' className='w-full h-[100%]]' />
                </div>
            </div>
        </div>
    );
};

export default FAQ;
