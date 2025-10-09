import React from 'react'

const MainCards = ({ text, customStyles, ref }) => {
    return (
        <div ref={ref} className={`lg:w-[310px] w-[200px] lg:h-[100px] h-[60px] lg:py-0  lg:px-0 py-[50px] px-[18px] bg-[#0ACF83]/5 rounded-lg flex justify-center items-center ${customStyles}`}>
            <p className='mono text-[10px] lg:text-[15px] gradient-text-green text-center '>
                {text}
            </p>

        </div>
    )
}

export default MainCards
