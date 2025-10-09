import React from 'react'
import Card from './Card'
import Spirit from './Spirit'
import FlowLines from '../../../public/NewSecond/FlowLines'

const SecondImage = () => {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center relative mb-[20px]'>
            <img className='mb-[45px] select-none pointer-events-none  block md:hidden' src="/NewSecond/secondMobile.png" />
            <img className='hidden sm:block lg:hidden' src="/NewSecond/SeconImg/img.png" />
            <Spirit customStyle={`hidden lg:flex`} />
            <FlowLines id="second-image" />
            <div className='grid grid-cols-2 sm:flex max-w-full 2xl:max-w-[87%] xl:max-w-[100%] lg:max-w-[100%] justify-evenly sm:gap-[70px] gap-y-[25px] pt-[30px] flex-wrap lg:flex-nowrap text-center'>
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

export default SecondImage
