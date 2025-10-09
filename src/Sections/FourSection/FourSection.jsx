import FourFone from '../../Components/FourFone'
import FourLeft from '../../Components/FourLeft'
import { useEffect, useRef, useState } from 'react'
import Head from './Head'

import './styles.css'

const FourSection = () => {
    const topSectionRef = useRef(null);  // Ссылка на контейнер до FiveSection
    const [blurHeight, setBlurHeight] = useState();
    useEffect(() => {
        if (topSectionRef.current) {
            const height = topSectionRef.current.offsetHeight;
            const rect = topSectionRef.current.getBoundingClientRect();
            const absoluteTop = rect.top + window.scrollY;
            setBlurHeight(topSectionRef.current.offsetHeight)
        }
    }, []);
    return (
        <FourFone heightBlur={blurHeight} >
            <div id={"four"} ref={topSectionRef} className=''>
                <div id="stop" className='flex FourSec flex-col 2xl:pl-[16%] pt-[130px] xl:pl-[17%] px-5 items-start relative h-fit'>
                    <Head />
                    <FourLeft />

                </div>

            </div>
        </FourFone>
    )
}

export default FourSection