import React from 'react'

const Card = ({ img, name, work, desc, customPosition, ref }) => {
    return (
        <div ref={ref} className={`md:w-[260px] w-[200px]  flex flex-col gap-5 ${customPosition || " "}`}>
            <img width={260} height={260} className='md:w-[260px] md:h-[260px] w-[200px] h-[200px]' src={img} />
            <div className='flex flex-col gap-2 gradient-text-green text-left'  >
                <p className='font-bold md:text-[23px]  text-[15px]  ' dangerouslySetInnerHTML={{ __html: name }} />
                <p className='font-medium md:text-[15px] text-[13px]   mono' dangerouslySetInnerHTML={{ __html: work }} />
                <p className='font-medium md:text-[13px] text-[10px]  mono' dangerouslySetInnerHTML={{ __html: desc }} />
            </div>
        </div>
    )
}

export default Card
