import FourFone from '../../Components/FourFone'
import FourLeft from '../../Components/FourLeft'
import React, { useEffect, useRef, useState } from 'react'
import Head from './Head'

import './styles.css'

const FourSection = () => {
    const topSectionRef = useRef(null);
    const [blurHeight, setBlurHeight] = useState();
    useEffect(() => {
        if (topSectionRef.current) {
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

export default React.memo(FourSection);