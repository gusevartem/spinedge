import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import LogoComponent from '../Components/LogoComponent';
import AnimatedCircle from '../Components/AnimatedCircle';
import { useLocation, useNavigate } from 'react-router-dom';

const sections = ['#sec', '#four', '#house', '#diagramm'];

const MobileMenu = ({ isOpen, onClose }) => {
    const menuRef = useRef(null);
    const [activeSection, setActiveSection] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if (isOpen) {
            gsap.set(menuRef.current, { display: 'block' });
            gsap.fromTo(menuRef.current, { x: '100%' }, { x: '0%', duration: 0.5, ease: 'power3.out' });
        } else {
            gsap.to(menuRef.current, {
                x: '100%',
                duration: 0.5,
                ease: 'power3.in',
                onComplete: () => {
                    gsap.set(menuRef.current, { display: 'none' });
                },
            });
        }
    }, [isOpen]);

    useEffect(() => {
        const handleScroll = () => {
            for (let i = 0; i < sections.length; i++) {
                const section = document.querySelector(sections[i]);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (
                        rect.top <= window.innerHeight / 2 &&
                        rect.bottom >= window.innerHeight / 2
                    ) {
                        setActiveSection(sections[i]);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const handleClick = (link) => {
        if (location.pathname !== "/") {
            onClose();
            navigate(`/${link}`);
        } else {
            onClose();
            gsap.to(window, {
                duration: 1,
                scrollTo: link,
                ease: "power2.inOut",
            });
        }
    }

    useEffect(() => {
        console.log('activeSection', activeSection)
    }, [activeSection])

    return (
        <div
            ref={menuRef}
            className="fixed top-0 right-0 h-[100dvh] w-[80%] bg-black z-[999] flex flex-col overflow-hidden"
            style={{ display: 'none' }}
        >
            {/* Background */}
            <img
                src="/Nine/Fone.webp"
                alt="Background"
                width={1260}
                height={1100}
                className="absolute top-1/2 -left-[60%] object-none h-full min-h-[1100px] min-w-[1260px] w-full -translate-y-1/2 z-0"
            />
            <AnimatedCircle width={120} customStyle={`-right-[60px] -translate-y-1/2 top-1/2 pb-10`} />
            <div className="flex flex-col justify-between flex-1 z-10 h-full">
                <div className="flex justify-between items-center p-4 z-10">
                    <img className='w-[54px] h-[54px]' src='/MobileLogo.svg' />
                    <button onClick={onClose} className="text-white text-2xl z-20">✕</button>
                </div>



                {/* Меню: центрировано по вертикали */}
                <div className="flex flex-col items-start justify-center gap-6 text-white text-lg px-5 flex-1">
                    <MenuItem name="ABOUT" link="#about" active={activeSection === '#about'} onClick={() => handleClick('#about')} />
                    <MenuItem name="TECHNOLOGY" link="#four" active={activeSection === '#four'} onClick={() => handleClick('#four')} />
                    <MenuItem name="OUR TEAM" link="#team" active={activeSection === '#team'} onClick={() => handleClick('#team')} />
                    <MenuItem name="USE CASES" link="#cases" active={activeSection === '#cases'} onClick={() => handleClick('#cases')} />
                </div>

                {/* Кнопка снизу */}
                <div className="p-5 w-full">
                    <button onClick={() => handleClick('#form')} className="relative overflow-hidden w-full min-h-[50px] rounded-lg text-sm md:text-[18px] font-bold text-white group flex items-center justify-center">
                        <span className="absolute inset-0 bg-[radial-gradient(circle,_#16F501_0%,_#00DA90_100%)] bg-[length:200%_100%] bg-left rounded-lg transition-[background-position] duration-500 ease-in-out group-hover:bg-right"></span>
                        <span className="relative z-10 text-black">Meet the Future →</span>
                    </button>

                </div>
            </div>


        </div>


    );
};

const MenuItem = ({ name, link, onClick, active }) => {
    return (
        <span
            onClick={() => onClick(link)}
            className={`cursor-pointer transition-all duration-300 opacity-80 hover:opacity-100`}
        >
            {name}
        </span>
    );
};

export default MobileMenu;
