import React from 'react'

import Slider from 'react-slick'
import img1 from '../../assets/icons/1.png'
import img2 from '../../assets/icons/2.png'
import img3 from '../../assets/icons/3.png'
import img4 from '../../assets/icons/4.png'

const Slidar = () => {
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

      const cardData = [
        { id: 1, img: [img1, img4], heading: 'Card 1', para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ea assumenda itaque voluptas quia neque unde! Nostrum harum iusto perspiciatis eius, fugiat iste." },
        { id: 2, img: [img2], heading: 'Card 2', para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ea assumenda itaque voluptas quia neque unde! Nostrum harum iusto perspiciatis eius, fugiat iste." },
        { id: 3, img: [img3], heading: 'Card 3', para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ea assumenda itaque voluptas quia neque unde! Nostrum harum iusto perspiciatis eius, fugiat iste." },
      ];
  return (
    <div>
         <Slider {...settings}>
         {cardData.map((ele)=>{
                            return <div style={{ backgroundColor: 'rgba(204, 80, 232, 0.819)' }} className='p-5 lg:p-12 rounded-xl lg:w-[350px]' >
                            <div className='flex justify-center lg:gap-6 lg:ms-12 gap-2'>
                            {ele.img.map((img)=>{
                             return <img src={img} alt="slide_image" className='lg:w-16 w-6' />
                            })}
                            </div>  
                                <p className='text-white text-center my-[5px] text-semibold text-[15px] lg:text-[22px]'>Buy With ETH or BNB</p>
                                <p className='text-center text-white text-[10px] lg:text-[15px] '>If you have Ether or BNB in your wallet, select the relevant network and enter how much Ether or BNB you wish to swap for $ini tokens. Note the gas cost, and confirm the transaction in your wallet.</p>
                            </div>
                        })}
                    </Slider>
    </div>
  )
}

export default Slidar
