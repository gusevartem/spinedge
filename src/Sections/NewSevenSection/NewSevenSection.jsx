import React, { useState } from 'react'
import Header from '../NewSecond/Header'
import ImageModal from '../../Components/ImageModal';
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import { Crad } from './Crad';
import MiniCard from '../NineSection/MiniCard';

const NewSevenSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    const openModal = (imageUrl) => {
        setSelectedImage(imageUrl);
        setIsModalOpen(true);
    };
    return (

        <div id='house' className='w-screen h-screen bg-black flex justify-center items-center md:-mt-[2%]  -mt-[35%]  relative pb-[10%]'>
            {isModalOpen && (
                <ImageModal
                    imageUrl={selectedImage}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
            <img src='/NewSeven/miniLight.png' className='absolute block lg:hidden  top-[15%] right-0 z-0' />
            <img src='/right.png' className='absolute w-[960px]  top-0 -right-[20%] z-0' />
            <img src='/left.png' className='absolute  w-[960px] lg:left-[40%]  top-[10%] left-[0] z-0 ' />
            <img src='/Nine/Fone.png' className='absolute hidden lg:block -translate-y-1/2 top-1/2 -left-[70%] z-0 ' />
            <img src='/Nine/Fone.png' className='absolute hidden lg:block -translate-y-1/2 top-1/2 -right-[45%] z-0 ' />
            <img src='/Nine/Fone.png' className='absolute min-w-[762px]  -translate-y-1/2 top-1/2  z-0 ' />
            <div className='w-full h-full flex justify-center items-center ms:px-[17.5%] px-[5%] gap-[50px] z-10'>
                <img src='/rec.png' className='absolute hidden lg:block -translate-y-1/2 top-1/2 h-screen -translate-x-1/2 left-[30%] z-0 ' />

                <div className='relative  md:block hidden'>
                    <img width={400} height={610} className='w-[400px] h-[610px]  z-50' src='/ofice.png' />


                    <div className='absolute bottom-2 left-2 z-50'>
                        <Crad />
                    </div>

                </div>


                <div className='flex flex-col w-full md:w-[400px] h-[610px]'>
                    <Header customStyles={`justify-start !text-left md:!w-[490px]`} top={`ISRAELI-FOUNDED. GLOBALLY ORIENTED.`} mid={`SpinEdge: A Company<br/> Built for Impact`} bottom={`SpinEdge is an Israeli deep tech company founded in 2022, uniting industry leaders and scientific minds to drive innovation in AI hardware.
                    With expertise spanning spintronics, microelectronics, and systems engineering, the team blends technical depth with real-world execution.
                    The company is a graduate of the INNOFENSE Innovation Center (iHLS & Israeli MoD) and is supported by the European Innovation Council and the JU Chips Act.`} />
                    <div className=' gap-2.5 pt-[30px] flex md:hidden'>
                        <div className='relative w-full h-full'>
                            <img width={168} height={270} className='' src='/ofice.png' />
                            <div className='absolute bottom-2 left-2 z-50'>
                                <MiniCard first={true} customStyle={`!text-[10px] !px-[10px] !py-[8px]`} />
                            </div>
                        </div>



                        <div className='flex flex-col w-full h-full'>
                            <p className='text-[11px] font-bold gradient-text-green mt-auto pb-3.5 w-full' >
                                2 PCT patents granted, 5+ in pipeline:
                            </p>
                            <div className=" flex gap-4    ">
                                {["/NewSeven/left.png", "/NewSeven/right.png"].map((src, index) => (
                                    <div
                                        key={index}
                                        className="group flex-1 relative  w-[76px] h-[97px]"
                                        onClick={() => openModal(src)}
                                    >
                                        <img
                                            src={src}
                                            width={76}
                                            height={97}
                                            className="object-cover w-full h-full object-center opacity-60"
                                            alt={`Preview ${index}`}
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/20  opacity-0 transition-opacity group-hover:opacity-100">
                                            <span className="text-white text-xl">
                                                <HiMagnifyingGlassPlus size={28} />
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='md:flex hidden flex-col w-full h-full'>
                        <p className='text-[15px] font-bold gradient-text-green mt-auto pb-3.5'>
                            2 PCT patents granted,<br /> 5+ in pipeline:
                        </p>
                        <div className="flex gap-4">
                            {["/NewSeven/left.png", "/NewSeven/right.png"].map((src, index) => (
                                <div
                                    key={index}
                                    className="group  relative  w-[103px] h-[130px]"
                                    onClick={() => openModal(src)}
                                >

                                    <img
                                        src={src}
                                        width={103}
                                        height={130}
                                        className="object-cover w-full h-full object-center opacity-60"
                                        alt={`Preview ${index}`}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20  opacity-0 transition-opacity group-hover:opacity-100">
                                        <span className="text-white text-xl">
                                            <HiMagnifyingGlassPlus size={28} />
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewSevenSection
