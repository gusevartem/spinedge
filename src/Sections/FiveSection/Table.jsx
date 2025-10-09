import React from 'react'

const Table = () => {
    return (
        <div className="grid grid-cols-3 grid-rows-3 w-[950px] h-[180px]">
            {/* Ячейка 1-1 */}
            <div className="border-[0.5px] font-bold sm:text-[19px] text-[13px] gradient-text-green px-[15px] py-[15px] border-gray-700 flex items-center justify-start bg-transparent backdrop-blur-md">
                Benchmark
            </div>

            {/* Ячейка 1-2 */}
            <div className="border-[0.5px] px-[15px] font-bold sm:text-[19px] text-[13px] gradient-text-green py-[15px] border-gray-700 flex items-center justify-start bg-transparent backdrop-blur-md">
                GB200 Superchip
            </div>

            {/* Ячейка 1-3 */}
            <div className="border-[0.5px] px-[15px] font-bold sm:text-[19px] text-[13px] gradient-text-green py-[15px] border-gray-700 flex items-center justify-start bg-transparent backdrop-blur-md">
                Jetson Orin Nano 4GB
            </div>

            {/* Ячейка 2-1 */}
            <div className="border-[0.5px] mono gradient-text-green sm:text-[15px] text-[13px] font-bold  px-[15px] py-[15px] border-gray-700 flex items-center justify-start bg-transparent backdrop-blur-md">
                Llama 3.1 8B
            </div>

            {/* Ячейка 2-2 */}
            <div className="border-[0.5px] mono sm:text-[23px] text-[13px] font-bold px-[15px] bg-[radial-gradient(circle,_#00DA90_0%,_#4d5645_100%)] bg-clip-text text-transparent mono py-[15px] border-gray-700 flex items-center justify-start bg-transparent backdrop-blur-md">
                x236
            </div>

            {/* Ячейка 2-3 */}
            <div className="border-[0.5px] sm:text-[23px] text-[13px] font-bold px-[15px] bg-[radial-gradient(circle,_#00DA90_0%,_#4d5645_100%)] bg-clip-text text-transparent mono py-[15px] border-gray-700 flex items-center justify-start bg-transparent backdrop-blur-md">
                x205
            </div>

            {/* Ячейка 3-1 */}
            <div className="border-[0.5px] mono sm:text-[15px] text-[13px] gradient-text-green font-bold px-[15px] py-[15px] border-gray-700 flex items-center justify-start bg-transparent backdrop-blur-md">
                ViT-B/16 384x384
            </div>

            {/* Ячейка 3-2 */}
            <div className=" relative border-[0.5px] sm:text-[23px] text-[13px] font-bold px-[15px] bg-[radial-gradient(circle,_#00DA90_0%,_#4d5645_100%)] bg-clip-text text-transparent mono py-[15px] border-gray-700 flex items-center justify-start bg-transparent backdrop-blur-md">
                x145
                <img src='/Five/first.png' className='absolute z-50 sm:right-0 w-[52px] h-[100px] -right-2 -bottom-3 ' />
            </div>

            {/* Ячейка 3-3 */}
            <div className="border-[0.5px] relative sm:text-[23px] text-[13px] font-bold bg-[radial-gradient(circle,_#00DA90_0%,_#4d5645_100%)] bg-clip-text text-transparent mono px-[15px] py-[15px] border-gray-700 flex items-center justify-start bg-transparent backdrop-blur-md">
                x115
                <img src='/Five/sec.png' className='absolute z-50 sm:right-0 w-[72px] h-[120px]  -right-2 -bottom-3' />
            </div>
        </div>
    )
}

export default Table
