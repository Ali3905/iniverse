import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import img1 from '../../assets/images/1.png'
import img2 from '../../assets/images/2.png'
import img3 from '../../assets/images/3.png'
import img4 from '../../assets/images/4.png'
import img5 from '../../assets/images/5.png'
import { IoMdArrowDropright } from 'react-icons/io';
import { motion } from "framer-motion";


const ReactTree = () => {
    const [activeCircle, setActiveCircle] = useState(1);

    useEffect(() => {
        // const scrollHandler = () => {
            // const circles = Array.from(document.getElementsByClassName('circle'));

            // for (let i = 0; i < circles.length - 1; i++) {
            //     const currentCircle = circles[i];
            //     const nextCircle = circles[i + 1];

            //     const rect1 = currentCircle.getBoundingClientRect();
            //     const rect2 = nextCircle.getBoundingClientRect();

            //     if (rect1.bottom <= rect2.top) {
            //         currentCircle.classList.add('stop');
            //         nextCircle.classList.add('scrolled');
            //     } else {
            //         currentCircle.classList.remove('stop');
            //         nextCircle.classList.remove('scrolled');
            //     }
            // }
        // };

        const showCircles = () => {
            const width = window.innerWidth
            console.log(width)
            const circles = Array.from(document.getElementsByClassName('circle'));

            for (let i = 0; i < circles.length; i++) {
                const currentCircle = circles[i];
                const rect = currentCircle.getBoundingClientRect();
                if(width < 768){
                    if (rect.bottom >= 0 && rect.top <= window.innerHeight *1.2 ) {
                        currentCircle.classList.add('scrolled');
                        setActiveCircle(i + 1);
                        console.log(i)
                    } else {
                        currentCircle.classList.remove('scrolled');
                    }
                }else{
                    if (rect.bottom >= 0 && rect.top <= window.innerHeight * .9 ) {
                        currentCircle.classList.add('scrolled');
                        setActiveCircle(i + 1);
                        console.log(i)
                    } else {
                        currentCircle.classList.remove('scrolled');
                    }
                }

                
            }
        };

        // window.addEventListener('scroll', scrollHandler);
        window.addEventListener('scroll', showCircles);

        // Call the handlers initially to set the initial state of the circles
        // scrollHandler();
        showCircles();

        return () => {
            // window.removeEventListener('scroll', scrollHandler);
            window.removeEventListener('scroll', showCircles);
        };
    }, []);

    // const getCircleClassName = (circleId) => {
    //     if (circleId === activeCircle) {
    //         return 'circle bg-[#A214ED]';
    //     } else if (circleId === activeCircle - 1) {
    //         return 'circle bg-green-700';
    //     } else {
    //         return 'circle  bg-[#A214ED]';
    //     }
    // };

    const getCircleClassName = (circleId) => {
        if (circleId === activeCircle) {
            return 'circle bg-[#A214ED]';
        } else if (circleId === activeCircle - 1 || (circleId === 1 && activeCircle === 2)) {
            return 'circle bg-green-700 stop';
        } else {
            return 'circle  bg-[#A214ED]';
        }
    };


    return (
        <div className='max-w-screen-lg mx-auto pt-24 flex flex-col gap-0 pb-28 relative ' id='reacttree'>
            <div className='timeline__progressbar'></div>
            <div className='flex flex-row lg:grid lg:grid-cols-3 mx-[6%] lg:mx-0 justify-center lg:mt-[-10px]'>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div className='lg:block hidden'>
                        <div className='w-full flex lg:justify-end '>
                            <div className='text-[#FECF02] w-[100%] h-auto lg:h-[270px] p-8 rounded-xl' style={{ backgroundColor: 'rgb(188, 75, 213)' }}>
                                <div className='flex items-center flex-col justify-start'>
                                    <h1 className='text-white ms-24 text-[22px] w-full '>23' Q1</h1>
                                    <h3 className="text-[#FECF02] font-bold ms-5 text-[22px]">
                                        PROJECT PLANNING
                                    </h3>
                                    <div className='flex flex-col gap-1 mt-2 text-[17px]'>
                                        <div className='flex gap-1 items-center'>
                                            <IoMdArrowDropright />
                                            <p className='text-white font-medium'>Initial Project Plan</p>
                                        </div>
                                        <div className='flex gap-1 items-center'>
                                            <IoMdArrowDropright />
                                            <p className='text-white font-medium'>Contract Development</p>
                                        </div>
                                        <div className='flex gap-1 items-center'>
                                            <IoMdArrowDropright />
                                            <p className='text-white font-medium'>Presale ICO Development</p>
                                        </div>
                                        <div className='flex gap-1 items-center'>
                                            <IoMdArrowDropright />
                                            <p className='text-white font-medium'>Seed Funding</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></motion.div>

                <div className="h-[608px] lg:h-[297px]">
                    <hr className="w-[171px] mt-[20px] h-[2px] bg-white hidden lg:block" />
                    <div className={getCircleClassName(1)} id="circle1"></div>
                </div>
                <div className='flex flex-col ms-[10%] lg:ms-0 gap-2 w-full'>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        className="flex justify-end w-full"
                    >
                        <div className='lg:hidden block'>
                            <div className='w-full '>
                                <div className='text-[#FECF02] w-[100%] h-auto lg:h-[270px] p-8 rounded-xl' style={{ backgroundColor: 'rgb(188, 75, 213)' }}>
                                    <h1 className='text-white ms-5 text-[22px]'>23' Q1</h1>
                                    <h3 className="text-[#FECF02] font-bold ms-5 text-[22px]">
                                        PROJECT PLANNING
                                    </h3>
                                    <div className='flex flex-col gap-1 mt-2 text-[17px]'>
                                        <div className='flex gap-1 items-center'>
                                            <IoMdArrowDropright />
                                            <p className='text-white font-medium'>Initial Project Plan</p>
                                        </div>
                                        <div className='flex gap-1 items-center'>
                                            <IoMdArrowDropright />
                                            <p className='text-white font-medium'>Contract Development</p>
                                        </div>
                                        <div className='flex gap-1 items-center'>
                                            <IoMdArrowDropright />
                                            <p className='text-white font-medium'>Presale ICO Development</p>
                                        </div>
                                        <div className='flex gap-1 items-center'>
                                            <IoMdArrowDropright />
                                            <p className='text-white font-medium'>Seed Funding</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div></motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        className="flex justify-end w-full"
                    >
                        <div className='flex items-center justify-start'>
                            <Image src={img1} alt="Work" className='w-full ' />
                        </div></motion.div>
                </div>
            </div>
            {/* 2nd  */}
            <div className='flex flex-row lg:grid lg:grid-cols-3 mx-[6%]  lg:mx-0  lg:justify-center lg:mt-[-10px]'>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div className='lg:block hidden'>
                        <div className='flex items-center lg:justify-end'>
                            <Image src={img2} alt="Work" className='w-full' />
                        </div></div></motion.div>
                <div className="lg:h-[297px] h-[608px]">
                    <hr className="w-[170px] mt-[10px] ml-[50%] h-[1.5px] bg-white hidden lg:block" />
                    <div className={getCircleClassName(2)} id="circle2"></div>
                </div>
                <div className='flex flex-col ms-[10%] lg:ms-0 gap-2'>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        className="flex justify-end w-full"
                    >
                        <div className='w-full flex justify-start'>
                            <div className='text-[#FECF02] w-[100%] h-auto lg:h-[270px] p-8 rounded-xl' style={{ backgroundColor: 'rgb(188, 75, 213)' }}>
                                <h1 className='text-white ms-5 text-[22px]'>23' Q2</h1>
                                <h3 className="text-[#FECF02] font-bold ms-5 text-[22px]">
                                    PRESALE
                                </h3>
                                <div className='flex flex-col gap-1 mt-2 text-[17px]'>
                                    <div className='flex gap-1 items-center'>
                                        <IoMdArrowDropright />
                                        <p className='text-white font-medium'>Contract Audit & Deployment</p>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <IoMdArrowDropright />
                                        <p className='text-white font-medium'>Presale ICO Launch</p>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <IoMdArrowDropright />
                                        <p className='text-white font-medium'>EcoSystem Construction</p>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <IoMdArrowDropright />
                                        <p className='text-white font-medium'>Freelancing Platform Development</p>
                                    </div>
                                </div>
                            </div>
                        </div></motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        className="flex justify-end w-full"
                    >
                        <div className='lg:hidden block'>
                            <div className='flex items-center lg:justify-end'>
                                <Image src={img2} alt="Work" className='w-full' />
                            </div></div></motion.div>
                </div>
            </div>
            {/* 3rd  */}
            <div className='flex flex-row lg:grid lg:grid-cols-3 mx-[6%] lg:mx-0 lg:justify-center lg:mt-[-10px]'>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div className='lg:block hidden'>
                        <div className='w-full flex lg:justify-end'>
                            <div className='text-[#FECF02] w-[100%] h-auto lg:h-[270px] p-8 rounded-xl' style={{ backgroundColor: 'rgb(188, 75, 213)' }}>
                                <h1 className='text-white ms-5 text-[22px]'>23' Q2</h1>
                                <h3 className="text-[#FECF02] font-bold ms-5 text-[22px]">
                                    DEVELOPMENT
                                </h3>
                                <div className='flex flex-col gap-1 mt-2 text-[17px]'>
                                    <div className='flex gap-1 items-center'>
                                        <IoMdArrowDropright />
                                        <p className='text-white font-medium'>Freelancing Platform Development</p>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <IoMdArrowDropright />
                                        <p className='text-white font-medium'>Staking platform Development</p>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <IoMdArrowDropright />
                                        <p className='text-white font-medium'>EcoSystem extending</p>
                                    </div>
                                </div>
                            </div>
                        </div></div></motion.div>
                <div className="lg:h-[297px] h-[608px]">
                    <hr className="w-[171px] mt-[10px] h-[2px] bg-white hidden lg:block" />
                    <div className={getCircleClassName(3)} id="circle3"></div>
                </div>
                <div className='flex flex-col ms-[10%] lg:ms-0 gap-2'>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        className="flex justify-end w-full"
                    >
                        <div className=' lg:hidden block'>
                            <div className='w-full flex lg:justify-end'>
                                <div className='text-[#FECF02] w-[100%] h-auto lg:h-[270px] p-8 rounded-xl' style={{ backgroundColor: 'rgb(188, 75, 213)' }}>
                                    <h1 className='text-white ms-5 text-[22px]'>23' Q2</h1>
                                    <h3 className="text-[#FECF02] font-bold ms-5 text-[22px]">
                                        DEVELOPMENT
                                    </h3>
                                    <div className='flex flex-col gap-1 mt-2 text-[17px]'>
                                        <div className='flex gap-1 items-center'>
                                            <IoMdArrowDropright />
                                            <p className='text-white font-medium'>Freelancing Platform Development</p>
                                        </div>
                                        <div className='flex gap-1 items-center'>
                                            <IoMdArrowDropright />
                                            <p className='text-white font-medium'>Staking platform Development</p>
                                        </div>
                                        <div className='flex gap-1 items-center'>
                                            <IoMdArrowDropright />
                                            <p className='text-white font-medium'>EcoSystem extending</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div></motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        className="flex justify-end w-full"
                    >
                        <div className='flex items-center justify-start'>
                            <Image src={img3} alt="Work" className='w-full' />
                        </div></motion.div>
                </div>
            </div>
            {/* 4th */}
            <div className='flex flex-row lg:grid lg:grid-cols-3 mx-[6%]  lg:mx-0  lg:justify-center lg:mt-[-10px]'>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div className='lg:block hidden'>
                        <div className='flex items-center lg:justify-end'>
                            <Image src={img4} alt="Work" className='w-full' /></div>
                    </div></motion.div>
                <div className="lg:h-[297px] h-[608px]">
                    <hr className="w-[170px] mt-[10px] ml-[50%] h-[1.5px] bg-white hidden lg:block" />
                    <div className={getCircleClassName(4)} id="circle4"></div>
                </div>
                <div className='flex flex-col ms-[10%] lg:ms-0 gap-2'>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        className="flex justify-end w-full"
                    >
                        <div className='w-full flex justify-start'>
                            <div className='text-[#FECF02] w-[100%] h-auto lg:h-[270px] p-8 rounded-xl' style={{ backgroundColor: 'rgb(188, 75, 213)' }}>
                                <h1 className='text-white ms-5 text-[22px]'>23' Q4</h1>
                                <h3 className="text-[#FECF02] font-bold ms-5 text-[22px]">
                                    LISTING
                                </h3>
                                <div className='flex flex-col gap-1 mt-2 text-[17px]'>
                                    <div className='flex gap-1 items-center'>
                                        <IoMdArrowDropright />
                                        <p className='text-white font-medium'>Freelancing Platform Development</p>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <IoMdArrowDropright />
                                        <p className='text-white font-medium'>Staking platform Launch</p>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <IoMdArrowDropright />
                                        <p className='text-white font-medium'>CEX & DEX Listing</p>
                                    </div>
                                </div>
                            </div>
                        </div></motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        className="flex justify-end w-full"
                    >
                        <div className='lg:hidden block'>
                            <div className='flex items-center lg:justify-end'>
                                <Image src={img4} alt="Work" className='w-full' /></div>
                        </div></motion.div>
                </div>

            </div>
            {/* 5th  */}
            <div className='flex flex-row lg:grid lg:grid-cols-3 mx-[6%] lg:mx-0 lg:justify-center lg:mt-[-10px]'>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div className='lg:block hidden'>
                        <div className='w-full flex lg:justify-end'>
                            <div className='text-[#FECF02] w-[100%] h-[270px] p-8 rounded-xl' style={{ backgroundColor: 'rgb(188, 75, 213)' }}>
                                <h1 className='text-white ms-5 text-[22px]'>23' Q5</h1>
                                <h3 className="text-[#FECF02] font-bold ms-5 text-[22px]">
                                    APP LAUNCH
                                </h3>
                                <div className='flex flex-col gap-1 mt-2 text-[17px]'>
                                    <div className='flex gap-1 items-center'>
                                        <IoMdArrowDropright />
                                        <p className='text-white font-medium'>Freelancing platform Launch</p>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <IoMdArrowDropright />
                                        <p className='text-white font-medium'>Partnership construction</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div></motion.div>

                <div className="lg:h-[297px] h-[608px]">
                    <hr className="w-[171px] mt-[10px] h-[2px] bg-white hidden lg:block" />
                    <div className={getCircleClassName(5)} id="circle5"></div>
                </div>
                <div className='flex flex-col ms-[10%] lg:ms-0 gap-2'>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        className="flex justify-end w-full"
                    >
                        <div className='lg:hidden block'>
                            <div className='w-full flex lg:justify-end'>
                                <div className='text-[#FECF02] w-[100%] h-[270px] p-8 rounded-xl' style={{ backgroundColor: 'rgb(188, 75, 213)' }}>
                                    <h1 className='text-white ms-5 text-[22px]'>23' Q5</h1>
                                    <h3 className="text-[#FECF02] font-bold ms-5 text-[22px]">
                                        APP LAUNCH
                                    </h3>
                                    <div className='flex flex-col gap-1 mt-2 text-[17px]'>
                                        <div className='flex gap-1 items-center'>
                                            <IoMdArrowDropright />
                                            <p className='text-white font-medium'>Freelancing platform Launch</p>
                                        </div>
                                        <div className='flex gap-1 items-center'>
                                            <IoMdArrowDropright />
                                            <p className='text-white font-medium'>Partnership construction</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div></motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        className="flex justify-end w-full"
                    >
                        <div className='flex items-center justify-start'>
                            <Image src={img5} alt="Work" className='w-full' />
                        </div></motion.div>
                </div>
            </div>
            <div className="">

                <div className={getCircleClassName(6)} id="circle6"></div>
            </div>
        </div >
    );
};

export default ReactTree;