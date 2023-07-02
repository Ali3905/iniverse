// import React, { useEffect } from 'react';
// import { IoMdArrowDropright } from 'react-icons/io';
// import img1 from '../../assets/images/1.png'
// import img2 from '../../assets/images/2.png'
// import img3 from '../../assets/images/3.png'
// import img4 from '../../assets/images/4.png'
// import img5 from '../../assets/images/5.png'
// import Image from 'next/image';

// const Roadmap = () => {

//     useEffect(() => {
//         const scrollHandler = () => {
//             const circles = Array.from(document.getElementsByClassName("circle"));

//             for (let i = 0; i < circles.length - 1; i++) {
//                 const currentCircle = circles[i];
//                 const nextCircle = circles[i + 1];

//                 const rect1 = currentCircle.getBoundingClientRect();
//                 const rect2 = nextCircle.getBoundingClientRect();

//                 if (rect1.bottom >= rect2.top) {
//                     currentCircle.classList.add("stop");
//                     nextCircle.classList.add("scrolled");
//                 } else {
//                     currentCircle.classList.remove("stop");
//                     nextCircle.classList.remove("scrolled");
//                 }
//             }
//         };

//         const showCircles = () => {
//             const circles = Array.from(document.getElementsByClassName("circle"));

//             for (let i = 0; i < circles.length; i++) {
//                 const currentCircle = circles[i];
//                 const rect = currentCircle.getBoundingClientRect();

//                 if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
//                     currentCircle.classList.add("scrolled");
//                 } else {
//                     currentCircle.classList.remove("scrolled");
//                 }
//             }
//         };

//         window.addEventListener("scroll", scrollHandler);
//         window.addEventListener("scroll", showCircles);

//         // Call the handlers initially to set the initial state of the circles
//         scrollHandler();
//         showCircles();

//         return () => {
//             window.removeEventListener("scroll", scrollHandler);
//             window.removeEventListener("scroll", showCircles);
//         };
//     }, []);

//     return (
//         <div className=' max-w-screen-xl mx-auto'>
//             <div className="flex flex-col gap-[124px] overflow-hidden" id="roadmap" >
//                 <div className="flex justify-between xl:gap-24 gap-8">
//                     <div className="flex max-w-[50px] relative sm:hidden">
//                         <div className="absolute top-[56px] bottom-[-62px] left-[23px] border-2 border-white"></div>
//                         <div className="circle circle1 h-[50px] w-[50px] border-4 mt-16 relative border-white bg-purple-light rounded-full"></div>
//                     </div>
//                     <div className="flex flex-1 justify-between xl:gap-24 gap-8 flex-col sm:flex-row">
//                         <div className="flex items-center relative">
//                             <div className="bg-white shadow-[0px_6px_4px_rgba(0,0,0,0.301961)] rounded-full h-[6px] absolute w-full xl:left-[103px] sm:left-[36px] left-auto sm:right-auto right-[36px] sm:top-auto top-[88px]"></div>
//                             <div className="bg-voilet w-full sm:w-auto from_left relative rounded-2xl xl:px-14 px-7 py-7">

//                                 <ul className="">
//                                     <div className=' flex lg:justify-end '>
//                                         <div className='text-[#FECF02] w-[100%] h-auto lg:h-[270px] p-8 rounded-xl' style={{ backgroundColor: 'rgb(188, 75, 213)' }}>
//                                             <h1 className='text-white ms-5 text-[22px]'>23' Q1</h1>
//                                             <h3 className="text-[#FECF02] font-bold ms-5 text-[22px]">
//                                                 PROJECT PLANNING
//                                             </h3>
//                                             <div className='flex flex-col gap-1 mt-2 text-[17px]'>
//                                                 <div className='flex gap-1 items-center'>
//                                                     <IoMdArrowDropright />
//                                                     <p className='text-white font-medium'>Initial Project Plan</p>
//                                                 </div>
//                                                 <div className='flex gap-1 items-center'>
//                                                     <IoMdArrowDropright />
//                                                     <p className='text-white font-medium'>Contract Development</p>
//                                                 </div>
//                                                 <div className='flex gap-1 items-center'>
//                                                     <IoMdArrowDropright />
//                                                     <p className='text-white font-medium'>Presale ICO Development</p>
//                                                 </div>
//                                                 <div className='flex gap-1 items-center'>
//                                                     <IoMdArrowDropright />
//                                                     <p className='text-white font-medium'>Seed Funding</p>
//                                                 </div>

//                                             </div>
//                                         </div>
//                                     </div>
//                                 </ul>


//                             </div>
//                         </div>
//                         <div className="hidden sm:flex flex-1 xl:max-w-[74px] max-w-[50px] items-center relative justify-center">
//                             <div className="absolute top-[25%] bottom-[-62px] xl:left-[35px] left-[23px] border-2 border-white"></div>
//                             <div className="circle circle2 xl:h-[74px] h-[40px] xl:w-[74px] w-[50px] border-4 relative border-white bg-purple-light rounded-full"></div>
//                         </div>
//                         <div className='flex items-center justify-start'>
//                             <Image src={img1} alt="Work" className='w-[70%]' />
//                         </div>

//                     </div>

//                 </div>
//                 <div className="flex justify-between xl:gap-24 gap-8">
//                     <div className="flex flex-1 max-w-[50px] relative sm:hidden">
//                         <div className="absolute top-[-62px] bottom-[-62px] left-[23px] border-2 border-white"></div>
//                         <div className="h-[50px] w-[50px] border-4 mt-16 relative border-white bg-purple-light rounded-full"></div>
//                     </div>
//                     <div className="flex flex-1 justify-between xl:gap-24 gap-8 flex-col-reverse sm:flex-row">
//                         <div className="flex flex-1 items-center">
//                             <img src="img/presale.svg" className="relative" alt="" />
//                         </div>
//                         <div className=" hidden sm:flex flex-1 xl:max-w-[74px] max-w-[50px] items-center relative">
//                             <div className="absolute top-[-62px] bottom-[-62px] xl:left-[35px] left-[23px] border-2 border-white"></div>
//                             <div className="xl:h-[74px] h-[50px] xl:w-[74px] w-[50px] border-4 relative border-white bg-purple-light rounded-full"></div>
//                         </div>
//                         <div className="flex flex-1 justify-end items-center relative">
//                             <div className="bg-white shadow-[0px_6px_4px_rgba(0,0,0,0.301961)] rounded-full h-[6px] absolute w-full xl:right-[97px] right-[36px] sm:top-auto top-[88px]"></div>
//                             <div className="bg-voilet w-full sm:w-auto from_right z-10 flex flex-col rounded-2xl shadow-[0px_7px_10px_rgba(0,0,0,0.25098)] xl:px-14 px-7 py-7">
//                                 <p className="2xl:text-[40px] xl:text-[36px] lg:text-[32px] md:text-[28px] sm:text-[24px] text-xl font-normal text-white mb-2">
//                                     23' Q2
//                                 </p>
//                                 <p className="2xl:text-[40px] xl:text-[36px] lg:text-[32px] md:text-[28px] sm:text-[24px] text-xl font-semibold text-warning mb-2">
//                                     PRESALE
//                                 </p>
//                                 <ul className="flex flex-col gap-4">
//                                     <li className="flex items-center text-white xl:text-xl lg:text-base text-sm font-medium gap-2">
//                                         <img src="/img/icons/list-arrow.svg" alt="" />
//                                         Contract Audit & Deployment
//                                     </li>
//                                     <li className="flex items-center text-white xl:text-xl lg:text-base text-sm font-medium gap-2">
//                                         <img src="/img/icons/list-arrow.svg" alt="" />
//                                         Presale ICO Launch
//                                     </li>
//                                     <li className="flex items-center text-white xl:text-xl lg:text-base text-sm font-medium gap-2">
//                                         <img src="/img/icons/list-arrow.svg" alt="" />
//                                         EcoSystem Construction
//                                     </li>
//                                     <li className="flex items-center text-white xl:text-xl lg:text-base text-sm font-medium gap-2">
//                                         <img src="/img/icons/list-arrow.svg" alt="" />
//                                         Freelancing Platform Development
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="flex justify-between xl:gap-24 gap-8">
//                     <div className="flex flex-1 max-w-[50px] relative sm:hidden">
//                         <div className="absolute top-[-62px] bottom-[-62px] left-[23px] border-2 border-white"></div>
//                         <div className="h-[50px] w-[50px] border-4 mt-16 relative border-white bg-purple-light rounded-full"></div>
//                     </div>
//                     <div className="flex flex-1 justify-between xl:gap-24 gap-8 flex-col sm:flex-row">
//                         <div className="flex flex-1 items-center relative">
//                             <div className="bg-white shadow-[0px_6px_4px_rgba(0,0,0,0.301961)] rounded-full h-[6px] absolute w-full xl:left-[97px] sm:left-[36px] left-auto sm:right-auto right-[36px] sm:top-auto top-[88px]"></div>
//                             <div className="bg-voilet w-full sm:w-auto from_left relative flex flex-col rounded-2xl shadow-[0px_7px_10px_rgba(0,0,0,0.25098)] xl:px-14 px-7 py-7">
//                                 <p className="2xl:text-[40px] xl:text-[36px] lg:text-[32px] md:text-[28px] sm:text-[24px] text-xl font-normal text-white mb-2">
//                                     23' Q3
//                                 </p>
//                                 <p className="2xl:text-[40px] xl:text-[36px] lg:text-[32px] md:text-[28px] sm:text-[24px] text-xl font-semibold text-warning mb-2">
//                                     DEVELOPMENT
//                                 </p>
//                                 <ul className="flex flex-col gap-4">
//                                     <li className="flex items-center text-white xl:text-xl lg:text-base text-sm font-medium gap-2">
//                                         <img src="/img/icons/list-arrow.svg" alt="" />
//                                         Freelancing Platform Development
//                                     </li>
//                                     <li className="flex items-center text-white xl:text-xl lg:text-base text-sm font-medium gap-2">
//                                         <img src="/img/icons/list-arrow.svg" alt="" />
//                                         Staking platform Development
//                                     </li>
//                                     <li className="flex items-center text-white xl:text-xl lg:text-base text-sm font-medium gap-2">
//                                         <img src="/img/icons/list-arrow.svg" alt="" />
//                                         EcoSystem extending
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className=" hidden sm:flex  flex-1 xl:max-w-[74px] max-w-[50px] items-center relative">
//                             <div className="absolute top-[-62px] bottom-[-62px] xl:left-[35px] left-[23px] border-2 border-white"></div>
//                             <div className="xl:h-[74px] h-[50px] xl:w-[74px] w-[50px] border-4 relative border-white bg-purple-light rounded-full"></div>
//                         </div>
//                         <div className="flex justify-end items-center flex-1">
//                             <img src="img/development.svg" alt="" />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="flex justify-between xl:gap-24 gap-8">
//                     <div className="flex flex-1 max-w-[50px] relative sm:hidden">
//                         <div className="absolute top-[-62px] bottom-[-62px] left-[23px] border-2 border-white"></div>
//                         <div className="h-[50px] w-[50px] border-4 mt-16 relative border-white bg-purple-light rounded-full"></div>
//                     </div>
//                     <div className="flex flex-1 justify-between xl:gap-24 gap-8 flex-col-reverse sm:flex-row">
//                         <div className="flex items-center flex-1">
//                             <img src="img/listing.svg" className="relative" alt="" />
//                         </div>
//                         <div className=" hidden sm:flex flex-1 xl:max-w-[74px] max-w-[50px] items-center relative">
//                             <div className="absolute top-[-62px] bottom-[-62px] xl:left-[35px] left-[23px] border-2 border-white"></div>
//                             <div className="xl:h-[74px] h-[50px] xl:w-[74px] w-[50px] border-4 relative border-white bg-purple-light rounded-full"></div>
//                         </div>
//                         <div className="flex flex-1 justify-end items-center relative">
//                             <div className="bg-white shadow-[0px_6px_4px_rgba(0,0,0,0.301961)] rounded-full h-[6px] absolute w-full xl:right-[97px] right-[36px] sm:top-auto top-[88px]"></div>
//                             <div className="bg-voilet w-full sm:w-auto from_right z-10 flex flex-col rounded-2xl shadow-[0px_7px_10px_rgba(0,0,0,0.25098)] xl:px-14 px-7 py-7">
//                                 <p className="2xl:text-[40px] xl:text-[36px] lg:text-[32px] md:text-[28px] sm:text-[24px] text-xl font-normal text-white mb-2">
//                                     23' Q4
//                                 </p>
//                                 <p className="2xl:text-[40px] xl:text-[36px] lg:text-[32px] md:text-[28px] sm:text-[24px] text-xl font-semibold text-warning mb-2">
//                                     LISTING
//                                 </p>
//                                 <ul className="flex flex-col gap-4">
//                                     <li className="flex items-center text-white xl:text-xl lg:text-base text-sm font-medium gap-2">
//                                         <img src="/img/icons/list-arrow.svg" alt="" />
//                                         Freelancing Platform Development
//                                     </li>
//                                     <li className="flex items-center text-white xl:text-xl lg:text-base text-sm font-medium gap-2">
//                                         <img src="/img/icons/list-arrow.svg" alt="" />
//                                         Staking platform Launch
//                                     </li>
//                                     <li className="flex items-center text-white xl:text-xl lg:text-base text-sm font-medium gap-2">
//                                         <img src="/img/icons/list-arrow.svg" alt="" />
//                                         CEX & DEX Listing
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="flex justify-between xl:gap-24 gap-8">
//                     <div className="flex flex-1 max-w-[50px] relative sm:hidden">
//                         <div className="absolute top-[-62px] bottom-[56px] left-[23px] border-2 border-white"></div>
//                         <div className="h-[50px] w-[50px] border-4 mt-16 relative border-white bg-purple-light rounded-full"></div>
//                     </div>
//                     <div className="flex flex-1 justify-between xl:gap-24 gap-8 flex-col sm:flex-row">
//                         <div className="flex flex-1 items-center relative">
//                             <div className="bg-white shadow-[0px_6px_4px_rgba(0,0,0,0.301961)] rounded-full h-[6px] absolute w-full xl:left-[97px] sm:left-[36px] left-auto sm:right-auto right-[36px] sm:top-auto top-[88px]"></div>
//                             <div className="bg-voilet w-full sm:w-auto from_left relative flex flex-col rounded-2xl shadow-[0px_7px_10px_rgba(0,0,0,0.25098)] xl:px-14 px-7 py-7">
//                                 <p className="2xl:text-[40px] xl:text-[36px] lg:text-[32px] md:text-[28px] sm:text-[24px] text-xl font-normal text-white mb-2">
//                                     24' Q1
//                                 </p>
//                                 <p className="2xl:text-[40px] xl:text-[36px] lg:text-[32px] md:text-[28px] sm:text-[24px] text-xl font-semibold text-warning mb-2">
//                                     APP LAUNCH
//                                 </p>
//                                 <ul className="flex flex-col gap-4">
//                                     <li className="flex items-center text-white xl:text-xl lg:text-base text-sm font-medium gap-2">
//                                         <img src="/img/icons/list-arrow.svg" alt="" />
//                                         Freelancing platform Launch
//                                     </li>
//                                     <li className="flex items-center text-white xl:text-xl lg:text-base text-sm font-medium gap-2">
//                                         <img src="/img/icons/list-arrow.svg" alt="" />
//                                         Partnership construction
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className=" hidden sm:flex  flex-1 xl:max-w-[74px] max-w-[50px] items-center relative">
//                             <div className="absolute top-[-62px] bottom-[25%] xl:left-[35px] left-[23px] border-2 border-white"></div>
//                             <div className="xl:h-[74px] h-[50px] xl:w-[74px] w-[50px] border-4 relative border-white bg-purple-light rounded-full"></div>
//                         </div>
//                         <div className="flex justify-end items-center flex-1">
//                             <img src="img/app_launch.svg" alt="" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Roadmap;