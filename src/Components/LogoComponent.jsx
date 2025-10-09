
import { useLocation, useNavigate } from 'react-router-dom'
import { Logo } from './Logo'
import gsap from 'gsap';
function LogoComponent() {
    const location = useLocation();
    const navigation = useNavigate();
    const onClick = () => {
        if (location.pathname == '/') {
            gsap.to(window, {
                duration: 1,
                scrollTo: "#main",
                ease: "power2.inOut",
            });
        } else {
            navigation("/")
        }
    }
    return (
        <div className='flex items-center gap-2' onClick={() => {
            window.location.reload();
        }} >
            <p className='gradient-text-green font-bold sm:text-2xl text-[17px]'>Spin</p>
            <a onClick={onClick}>
                {innerWidth > 640 ? <Logo /> : <img className='w-[54px] h-[54px]' src='/MobileLogo.svg' />}

            </a>


            <p className='gradient-text-green font-bold sm:text-2xl text-[17px]'>Edge</p>
        </div>
    )
}

export default LogoComponent 