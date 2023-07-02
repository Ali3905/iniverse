import React, { useEffect, useRef } from 'react';
import red from '../../assets/chart/red.png'
import yellow from '../../assets/chart/yellow.png'
import pink from '../../assets/chart/pink.png'
import blue from '../../assets/chart/pink.png'
import lemon from '../../assets/chart/lemon.png'
import skyBlue from '../../assets/chart/skyblue.png'
import orange from '../../assets/chart/orange.png'
import Image from 'next/image';
import Chart from 'chart.js/auto';


const Charts = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const chart = new Chart(canvas, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [6, 12, 5, 4, 12, 4, 5],
                    borderColor: [
                        "#00B074",
                        "rgba(0, 176, 116, 0.15)"
                    ],
                    backgroundColor: ["#FF0000", "#FECF02", "#0D36FF", "#06D800", "#3A82FC", "#FF7F00", "#FF00FF"],
                    borderWidth: [10, 2, 4, 10, 2, 3, 5],
                    borderColor: 'white'
                }]
            },
            legend: { position: "none" },


        });
        return () => {
            chart.destroy();
        };
    }, []);
    return (
        <>
            <div className=' max-w-screen-xl mx-auto rounded-lg p-5 ' style={{ backgroundColor: 'rgb(188, 75, 213)' }}>
                <div className='flex flex-col lg:flex-row justify-between items-center lg:mx-12 w-full'>
                    <div className='flex flex-wrap justify-center lg:justify-start  lg:flex-col gap-5 lg:ms-24 text-white text-[12px] lg:text-[22px] font-medium'>
                        <div className='flex gap-1 lg:gap-3 items-center'>
                            <Image src={red} alt='img' className='w-[40px] h-[15px] ' />
                            <p>Seed Funding</p>
                        </div>
                        <div className='flex gap-1 lg:gap-3 items-center'>
                            <Image src={yellow} alt='img' className='w-[40px] h-[15px] ' />
                            <p>Presale</p>
                        </div>
                        <div className='flex gap-1 lg:gap-3 items-center'>
                            <Image src={blue} alt='img' className='w-[40px] h-[15px] ' />
                            <p>Advisors</p></div>
                        <div className='flex gap-1 lg:gap-3 items-center'>
                            <Image src={lemon} alt='img' className='w-[40px] h-[15px] ' />
                            <p>Partner</p>
                        </div>
                        <div className='flex gap-1 lg:gap-3 items-center'>
                            <Image src={skyBlue} alt='img' className='w-[40px] h-[15px] ' />
                            <p>Team</p></div>
                        <div className='flex gap-1 lg:gap-3 items-center'>
                            <Image src={orange} alt='img' className='w-[40px] h-[15px] ' />
                            <p className=' truncate'>Reserved/EcoSystem</p>
                        </div>
                        <div className='flex gap-1 lg:gap-3 items-center'>
                            <Image src={pink} alt='img' className='w-[40px] h-[15px] ' />
                            <p>Liquidity</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        {/* <Image src={chart} alt='img' className='' /> */}
                        <div>

                            <div className=' w-[200px] lg:w-[400px] lg:me-[64px]'>
                                <canvas ref={canvasRef} id="myChart" ></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Charts;