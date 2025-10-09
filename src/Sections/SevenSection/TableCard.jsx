import React from 'react'
const sanitize = (html) => html?.replace(/<br\s*\/?>/gi, '') || '';
const TableCard = ({ img, name, work, desc, ref }) => {
    const cleanName = sanitize(name);
    const cleanWork = sanitize(work);
    const cleanDesc = sanitize(desc);
    return (
        <div ref={ref} className='md:w-[344px] md:h-[118px] w-[145px] h-[160px] flex-col flex gap-2  gradient-text-green'>
            <div className='flex text-left gap-[15px] items-center'>
                <img width={70} height={70} src={img} className='rounded-full w-[45px] h-[45px] md:w-[70px] md:h-[70px]' />
                <div className=' flex-col hidden md:flex'>
                    <p className='font-bold md:text-[23px] text-[13px] ' dangerouslySetInnerHTML={{ __html: name }} />
                    <p className='font-medium md:text-[13px] text-[8px] mono' dangerouslySetInnerHTML={{ __html: work }} />
                </div>

            </div>
            <div className='  md:hidden flex-col'>
                <p className='font-bold md:text-[23px] text-[13px] ' dangerouslySetInnerHTML={{ __html: cleanName }} />
                <p className='font-medium md:text-[13px] text-[8px] mono' dangerouslySetInnerHTML={{ __html: cleanWork }} />
            </div>
            <p className='font-medium md:text-[13px] text-[10px] mono' dangerouslySetInnerHTML={{ __html: cleanDesc }} />
        </div>
    )
}

export default TableCard





