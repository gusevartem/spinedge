import React from 'react';

const Loader = () => {
    return (
        <div className="h-screen w-screen flex items-center justify-center bg-black">
            <div className="relative">
                {/* Внешний круг */}
                <div className="w-24 h-24 border-4 border-[#E1FFDE] border-opacity-25 rounded-full animate-spin">
                    {/* Внутренний круг */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-4 border-[#E1FFDE] border-opacity-50 rounded-full animate-spin-slow">
                        {/* Центральный круг */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-4 border-[#E1FFDE] rounded-full animate-pulse">
                            {/* Точка в центре */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#E1FFDE] rounded-full animate-ping"></div>
                        </div>
                    </div>
                </div>
                {/* Текст загрузки */}
                <div className="mt-8 text-center">
                    <p className="text-[#E1FFDE] text-opacity-75 font-['Orbitron'] text-sm animate-pulse">Loading...</p>
                </div>
            </div>
        </div>
    );
};

export default Loader; 