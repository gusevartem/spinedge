import React, { useEffect, useRef, useState } from 'react'
import Card from './Card'
import PricingGraph from '../../Components/PricingGraph'
import FlowLines from '../../../public/NewSecond/FlowLines';
const MainImage = () => {
    const firstLines = useRef(null);

    const [fText, setFText] = useState("TODAY, THE AVERAGE COST OF A SINGLE<br /> CHATGPT REQUEST IS $0.05");
    const [sText, setSText] = useState("WITH SPINTRONIC TECHNOLOGY, IT<br /> COULD DROP TO LESS THAN $0.0005");
    useEffect(() => {
        if (innerWidth < 640) {
            setFText(`TODAY, THE AVERAGE COST<br /> OF A SINGLE CHATGPT<br /> REQUEST IS $0.05`);
            setSText(`WITH SPINTRONIC<br /> TECHNOLOGY, IT COULD DROP<br /> TO LESS THAN $0.0005`)
        }
    }, [])
    return (
        <div className='w-full h-full flex flex-col justify-center items-center relative sm:mb-[80px] mb-[30px]'>
            <div className="relative ">  {/* Этот div теперь "отслеживает" размеры картинки */}

                <PricingGraph customStyle={`hidden lg:block`} fText={fText} sText={sText} />
                <img className='hidden sm:block lg:hidden' src='/NewSecond/Ilutsr1/img.png' />
                <img width={335} height={205} className='block md:hidden select-none pointer-events-none  sm:w-[950px] sm:h-[435px]' src="/NewSecond/secOne.png" />
                <p className='block lg:hidden absolute top-[10%] left-[4.5%]  mono sm:text-sm text-[11px] leading-[150%] bg-[radial-gradient(circle,_#00E599,_#00E599)] text-transparent bg-clip-text' dangerouslySetInnerHTML={{ __html: fText }} />
                <p className='block lg:hidden absolute bottom-[18%] left-[4.5%] mono sm:text-sm text-[11px] leading-[150%] bg-[radial-gradient(circle,_#00E599,_#00E599)] text-transparent bg-clip-text' dangerouslySetInnerHTML={{ __html: sText }} />
            </div>

            <FlowLines id="main-image" />
            <div className=' grid grid-cols-2 sm:flex max-w-full 2xl:max-w-[87%] xl:max-w-[100%] lg:max-w-[100%] justify-evenly sm:gap-[70px] gap-y-3 px-4 pt-8 flex-wrap lg:flex-nowrap text-center'>
                <Card
                    num={`01`}
                    customStyle={`text-left sm:text-center items-start sm:items-center`}
                    text={`${innerWidth > 640 ?
                        `<span class="bg-[radial-gradient(circle,_#00E599,_#00E599)] text-transparent bg-clip-text">100× cheaper</span> → AI becomes <br/> truly global`
                        : `<span class="bg-[radial-gradient(circle,_#00E599,_#00E599)] text-transparent bg-clip-text">100× cheaper</span><br/> → AI becomes<br/>  truly global`}`}
                />
                <Card
                    num={`02`}
                    customStyle={`text-left sm:text-center items-start sm:items-center`}
                    text={`${innerWidth > 640 ?
                        `<span class="bg-[radial-gradient(circle,_#00E599,_#00E599)] text-transparent bg-clip-text">No longer just for Big Tech —<br/> </span> democratizing intelligence`
                        : `<span class="bg-[radial-gradient(circle,_#00E599,_#00E599)] text-transparent bg-clip-text">No longer just for<br/> Big Tech —<br/> </span> democratizing intelligence`}`}
                />
                <Card
                    num={`03`}
                    customStyle={`text-left sm:text-center items-start sm:items-center`}
                    text={`${innerWidth > 640 ?
                        `<span class="bg-[radial-gradient(circle,_#00E599,_#00E599)] text-transparent bg-clip-text">More models</span> = more<br/> breakthroughs`
                        : `<span class="bg-[radial-gradient(circle,_#00E599,_#00E599)] text-transparent bg-clip-text">More models =<br/></span>more<br/> breakthroughs`}`}
                />
                <Card

                    num={`04`}
                    customStyle={`text-left sm:text-center items-start sm:items-center`}
                    text={`${innerWidth > 640 ?
                        `<span class="bg-[radial-gradient(circle,_#00E599,_#00E599)] text-transparent bg-clip-text">Acceleration at every level<br/></span>— from research to edge`
                        : `<span class="bg-[radial-gradient(circle,_#00E599,_#00E599)] text-transparent bg-clip-text">Acceleration at every level</span>— from research to edge`}`}
                />
            </div>
        </div>
    )
}

export default MainImage
