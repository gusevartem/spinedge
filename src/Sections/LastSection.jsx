import React from 'react'

import LastFone from '../Components/LastFone'
import LastCard from '../Components/LastCard'

const LastSection = () => {
    return (
        <LastFone id={`last`}>
            <div className='flex-[1_1_50%] w-full h-full justify-items-center'>
                <img src='/Last/zagl.png' />
            </div>
            <div className='flex-[1_1_50%] flex flex-col gap-6 pt-12'>
                <p className='mono text-sm  gradient-text-green'>The Quantum Leap in AI Hardware</p>
                <p className='font-bold text-4xl  gradient-text-green'>Spintronics: Where<br /> physics meets profit.</p>
                <p className='mono text-[14px]  gradient-text-green pb-12'>Spintronics leverages the intrinsic spin of<br /> electrons, providing faster, more energy-efficient<br /> computation compared to tradition electronics
                </p>
                <p className='mono text-sm  gradient-text-green'>Spintronic commercial products:</p>
                <div className='flex gap-14'>
                    <LastCard img={`/Four/cardleft.png`} Title={`Non-Volatile Memory`} sub={`Spintronics non-volatile memory retains data without power, crucial for automotive and low-power AI applications`} />
                    <LastCard img={`/Four/cardRight.png`} Title={`Advanced Magnetic Sensors`} sub={`Spintronic sensors are the best fit for edge and IoT devices`} />

                </div>
            </div>
        </LastFone>
    )
}

export default LastSection
