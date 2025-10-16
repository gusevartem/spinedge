import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import toast, { Toaster } from 'react-hot-toast'

const Blog = ({ post }) => {

    const hundleClick = () => {

        navigator.clipboard.writeText(window.location.href);
        toast.success('Ссылка скопирована!', {
            style: {
                background: '#000',
                color: '#00e599',

            },
            iconTheme: {
                primary: '#00e599',
                secondary: '#000',
            },
        });
    }
    const handleBlogClick = (e) => {
        e.preventDefault()
        const target = document.getElementById('eight')
        if (target) {
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: target,
                    offsetY: 100 // Отступ сверху после скролла
                },
                ease: "power2.inOut"
            })
        }
    }
    return (
        <div className='min-h-screen w-full bg-black pt-[110px] lg:p-[100px] p-0'>
            <Toaster />
            <div className='flex flex-col gap-[20px] lg:pl-0 p-[20px]'>
                <div className="text-white mono text-sm lg:text-base flex items-center gap-2">
                    <Link to="/" className="hover:text-[#00e599] transition-colors text-[15px] mono">Main</Link>
                    <span>{">"}</span>
                    <a
                        href='#eight'
                        className="hover:text-[#00e599] transition-colors text-[15px] mono cursor-pointer"
                        onClick={handleBlogClick}
                    >
                        The Blog
                    </a>
                    {post && (
                        <>
                            <span className='opacity-50'>{">"}</span>
                            <span className=" text-[15px] mono opacity-50 md:max-w-full max-w-[200px]">{post}</span>
                        </>
                    )}
                </div>
                <h1 className='text-[35px] mono text-white '>{post ? post : "Heading"}</h1>
            </div>

            <div
                className={
                    "bg-[rgba(255,255,255,0.05)] lg:p-[50px] p-[20px] flex flex-col gap-20 items-start justify-start relative "
                }
                style={{ backdropFilter: "blur(7.5px)", WebkitBackdropFilter: "blur(7.5px)" }}
            >
                <div
                    className="text-[#ffffff] text-left mono lg:text-lg text-[14px] leading-[30px] font-normal relative self-stretch"
                    style={{ opacity: "0.6" }}
                >
                    <span>
                        <span className="nayzak-everyone-in-span">
                            Nayzak, everyone in my team works towards the samegoal. This enabled
                            our teams to ship new ideas and feel more capable. Podcasting
                            operational — change management inside of workflows. Completely
                            synergize.
                            <br />
                        </span>
                        <span className="nayzak-everyone-in-span2">
                            <br />
                            But I must explain to you how all this mistaken idea of denouncing
                            pleasure and praising pain was born and I will give you a complete
                            account of the system, and expound the actual teachings of the great
                            explorer of the truth, the master-builder of human happiness. No one
                            rejects, dislikes, or avoids pleasure itself
                            <br />
                            <br />
                            On the other hand, we denounce with righteous indignation and
                            dislike men who are so beguiled and demoralized by the charms of
                            pleasure of the moment, so blinded by desire, that they cannot
                            foresee the pain and trouble that are bound to ensue; and equal
                            blame belongs to those who fail in their duty through weakness of
                            will, which is the same as saying through.
                        </span>
                    </span>{" "}
                </div>
                <img
                    className="self-stretch shrink-0 h-[350px] relative"
                    style={{ objectFit: "cover" }}
                    src="/img.webp"
                />
                <div className='w-full h-full bg-white/5 py-[55px] flex justify-center items-center flex-col gap-4 lg:text-[20px] text-[14px]'>
                    <img src='/Quote.svg' />
                    <p className='text-white text-center mono w-[295px] lg:w-[410px]'>
                        Nayzak, everyone in my team works towards the samegoal. This
                        enabled our teams to ship new ideas and feel more capable.
                        Podcasting operational
                    </p>
                    <p className='text-white text-center mono'>
                        — Carl Sagan
                    </p>
                </div>
                <div className='flex flex-col gap-6'>
                    <p className='lg:text-[28px] text-[22px]  text-white mono'> Keep your everyday on trend</p>
                    <div className='text-[#ffffff] text-left mono  lg:text-lg text-[14px] leading-[30px] font-normal relative self-stretch opacity-60'>
                        <p>
                            Nayzak, everyone in my team works towards the samegoal. This enabled our teams to ship new ideas and feel more capable. Podcasting operational — change management inside of workflows. Completely synergize.
                        </p>
                        <br />
                        <p>
                            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-4 items-center justify-start self-stretch shrink-0 relative">
                    <img
                        className="shrink-0 w-[1100px] h-[350px] relative"
                        style={{ objectFit: "cover" }}
                        src="/img.webp"
                    />
                    <div className="text-[#ffffff] text-center mono text-sm leading-[22px] font-normal relative self-stretch">
                        Nayza’s Figma builder — Design your next ecommerce project instantly{" "}
                    </div>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start self-stretch shrink-0 relative">
                    <div className="border-solid border-[#00e599] border-l-2 pl-5 flex flex-row gap-2.5 items-center justify-center self-stretch shrink-0 relative">
                        <div
                            className="text-[#ffffff] text-left font-['JetBrainsMono-Regular',_sans-serif]  lg:text-lg text-[14px] leading-[30px] font-normal relative flex-1"
                            style={{ opacity: "0.6" }}
                        >
                            Nayzak, everyone in my team works towards the samegoal. This enabled
                            our teams to ship new ideas and feel more capable. Podcasting
                            operational — change management inside of workflows. Completely
                            synergize.
                            <br />
                            <br />
                            But I must explain to you how all this mistaken idea of denouncing
                            pleasure and praising pain was born and I will give you a complete
                            account of the system, and expound the actual teachings of the great
                            explorer of the truth, the master-builder of human happiness. No one
                            rejects, dislikes, or avoids pleasure itself{" "}
                        </div>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between self-stretch shrink-0 relative gap-[15px] lg:gap-0">
                    <div className="flex flex-row gap-2 items-start justify-start flex-wrap content-start shrink-0 relative text-[10px] lg:text-[15px]">
                        <div className="bg-[rgba(225,255,222,0.10)] rounded-[5px] pt-2 pr-2.5 pb-2 pl-2.5 flex flex-row gap-2.5 items-center justify-center shrink-0 relative">
                            <div className="text-[#ffffff] text-left mono  leading-none font-medium relative">
                                Category{" "}
                            </div>
                        </div>
                        <div className="bg-[rgba(225,255,222,0.10)] rounded-[5px] pt-2 pr-2.5 pb-2 pl-2.5 flex flex-row gap-2.5 items-center justify-center shrink-0 relative">
                            <div className="text-[#ffffff] text-left mono  leading-none font-medium relative">
                                Category{" "}
                            </div>
                        </div>
                        <div className="bg-[rgba(225,255,222,0.10)] rounded-[5px] pt-2 pr-2.5 pb-2 pl-2.5 flex flex-row gap-2.5 items-center justify-center shrink-0 relative">
                            <div className="text-[#ffffff] text-left mono  leading-none font-medium relative">
                                Category{" "}
                            </div>
                        </div>
                        <div className="bg-[rgba(225,255,222,0.10)] rounded-[5px] pt-2 pr-2.5 pb-2 pl-2.5 flex flex-row gap-2.5 items-center justify-center shrink-0 relative">
                            <div className="text-[#ffffff] text-left mono  leading-none font-medium relative">
                                Category{" "}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-[15px] items-center justify-start shrink-0 relative lg:w-auto w-full">
                        <div className="text-[#00e599] text-left mono lg:flex-0 lg:w-auto flex-1 w-full text-[15px] leading-none font-medium relative">
                            Поделиться:
                        </div>
                        <div className='flex gap-3  justify-self-end'>
                            <img onClick={hundleClick} className='cursor-pointer w-[26px] h-[26px] lg:w-[36px] lg:h-[36px]' src='/x.svg' />
                            <img onClick={hundleClick} className='cursor-pointer w-[26px] h-[26px] lg:w-[36px] lg:h-[36px]' src='/tg.svg' />
                            <img onClick={hundleClick} className='cursor-pointer w-[26px] h-[26px] lg:w-[36px] lg:h-[36px]' src='/LinkedIn.svg' />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Blog
