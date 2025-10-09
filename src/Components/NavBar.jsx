import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import LogoComponent from '../Components/LogoComponent';
import MobileMenu from '../Sections/MobileMenu';
import { useLocation, useNavigate } from "react-router-dom";
const NavItem = ({ name, link }) => {
    const underlineRef = useRef(null);
    const textRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();
    const handleMouseEnter = () => {
        gsap.to(textRef.current, { opacity: 0.8, duration: 0.3, ease: 'power1.out' });
        gsap.to(underlineRef.current, { width: '100%', duration: 0.3, ease: 'power1.out' });
    };

    const handleMouseLeave = () => {
        gsap.to(textRef.current, { opacity: 1, duration: 0.3, ease: 'power1.out' });
        gsap.to(underlineRef.current, { width: '0%', duration: 0.3, ease: 'power1.out' });
    };

    const handleClick = () => {
        if (location.pathname !== "/") {
            // если не на главной — переходим туда с хешем
            navigate(`/${link}`);
        } else {
            // если уже на главной — прокручиваем
            gsap.to(window, {
                duration: 1,
                scrollTo: link,
                ease: "power2.inOut",
            });
        }
    }

    return (
        <div
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={textRef}
            className="cursor-pointer text-[12px] px-2.5  leading-4 text-center text-transparent 
                bg-[radial-gradient(circle_at_center,rgba(225,255,222,1)_0%,rgba(225,255,222,0.7)_100%)] 
                bg-clip-text font-medium relative  py-3 "
            style={{ opacity: 1 }}
        >
            <span className='min-w-[95px] block' >{name}</span>
            <span
                ref={underlineRef}
                className="absolute bottom-1 left-0 h-[2px] bg-[radial-gradient(circle_at_center,rgba(225,255,222,0.5)_0%,rgba(225,255,222,0)_100%)]"
                style={{ width: '0%', transition: 'width 0.1s ease' }}
            />
        </div>
    );
};

const NavBar = ({ ref }) => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const fullItems = [
        { name: "TECHNOLOGY", link: "#four" },
        { name: "WHY SPINEDGE?", link: "#why" },
        { name: "USE CASES", link: "#cases" },
        { name: "ABOUT", link: "#about" },
    ];

    return (
        <div
            ref={ref}
            className="fixed top-0 left-0 w-full flex items-center justify-center bg-gradient-to-b from-black to-transparent py-6 z-[200]"
        >
            <div className="flex w-full flex-wrap items-center justify-center 2xl:gap-4 gap-8">
                {/* Menu rendering based on screen size */}
                {fullItems.map((item, index) => (
                    <React.Fragment key={index}>
                        <div className="hidden lg:block">
                            <NavItem name={item.name} link={item.link} />
                        </div>

                        {/* Logo and dividers for lg */}
                        {index === 1 && (
                            <>
                                <div className="hidden lg:flex items-center gap-1 px-2">
                                    <div className="h-0.5 lg:w-10 xl:w-16 2xl:w-34 bg-[radial-gradient(circle_at_center,rgba(225,255,222,0.5)_0%,rgba(225,255,222,0)_100%)]" />
                                </div>
                                <div className="hidden lg:block">
                                    <LogoComponent />
                                </div>
                                <div className="hidden lg:flex items-center gap-1 px-2">
                                    <div className="h-0.5 lg:w-10 xl:w-16 2xl:w-34 bg-[radial-gradient(circle_at_center,rgba(225,255,222,0.5)_0%,rgba(225,255,222,0)_100%)]" />
                                </div>
                            </>
                        )}


                        {index !== fullItems.length - 1 && index !== 1 && (
                            <div className="hidden lg:flex items-center gap-1 px-2">
                                <div className="h-0.5 lg:w-10 xl:w-16 2xl:w-34 bg-[radial-gradient(circle_at_center,rgba(225,255,222,0.5)_0%,rgba(225,255,222,0)_100%)]" />
                            </div>
                        )}
                    </React.Fragment>
                ))}

                {/* Compact md menu */}
                <div className="flex lg:hidden items-center justify-between">
                    <a href="#about" className="cursor-pointer w-[50px] sm:px-6 text-[12px] leading-4 text-center text-transparent 
                bg-[radial-gradient(circle_at_center,rgba(225,255,222,1)_0%,rgba(225,255,222,0.7)_100%)] 
                bg-clip-text font-medium relative">
                        ABOUT
                    </a>
                    <div className=" items-center gap-1">
                        <div className="h-0.5 w-10 sm:w-24   bg-[radial-gradient(circle_at_center,rgba(225,255,222,0.5)_0%,rgba(225,255,222,0)_100%)]" />
                    </div>

                    <LogoComponent />

                    <div className=" items-center gap-1">
                        <div className="h-0.5 w-10 sm:w-24   bg-[radial-gradient(circle_at_center,rgba(225,255,222,0.5)_0%,rgba(225,255,222,0)_100%)]" />
                    </div>
                    <p
                        onClick={() => setMenuOpen(true)}
                        className="cursor-pointer w-[50px] sm:px-6 text-[12px] leading-4 text-center text-transparent 
    bg-[radial-gradient(circle_at_center,rgba(225,255,222,1)_0%,rgba(225,255,222,0.7)_100%)] 
    bg-clip-text font-medium relative">
                        MENU
                    </p>
                </div>
            </div>

            {/* Картинки по краям */}
            <img
                src="/Hero/left.webp"
                width={150}
                className="absolute hidden md:block -left-10 sm:top-26 top-24 transform -translate-y-1/2"
                alt="Start Image"
            />
            <img
                src="/Hero/right.webp"
                width={150}
                className="absolute hidden md:block -right-10 sm:top-26 top-24 transform -translate-y-1/2"
                alt="End Image"
            />

            <img
                src="/Hero/miniLeft.webp"
                width={21}
                className="absolute block md:hidden top-14.5 -left-1 transform -translate-y-1/2"
                alt="Start Image"
            />
            <img
                src="/Hero/miniRight.webp"
                width={21}
                className="absolute block md:hidden top-14.5 -right-1  transform -translate-y-1/2"
                alt="End Image"
            />
            <MobileMenu isOpen={isMenuOpen} onClose={() => setMenuOpen(false)} />
        </div>
    );
};

export default NavBar;
