import React from 'react'

const LastFone = ({ children, id }) => {
    return (
        <section
            id={id}
            className="bg-black w-screen min-h-screen h-fit  overflow-x-hidden px-20"
        >

            <div className='flex flex-col md:flex-row'>
                {children}
            </div>

            <div className="absolute opacity-50 top-0 left-0 w-full h-32 bg-gradient-to-t from-transparent to-black z-10 pointer-events-none" />
            <div className="absolute opacity-70 bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black z-10 pointer-events-none" />
        </section>
    )
}

export default LastFone
