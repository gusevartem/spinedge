import SmartImage from "../Utils/SmartImage"


const FourFone = ({ id, children, heightBlur }) => {
    return (
        <section
            id={id}
            className="bg-black w-screen h-full relative"
        >
            <SmartImage
                src="/public/shum.webp"
                className='fourShum1'
                alt=""
            />
            <SmartImage
                src="/public/shum.webp"
                className='fourShum2'
                alt=""
            />
            <SmartImage
                className={`absolute block lg:hidden left-0 min-h-[1662px] select-none pointer-events-none z-0 rounded-4xl`}
                src="/public/Four/heightBlut.webp"
                alt="White Blur"
            />
            <div className='FourShadowCenter' />
            <div className=" w-full h-full flex flex-col">
                {children}
            </div>
            {window.innerWidth > 1000 && <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black pointer-events-none" />}
        </section>
    )
}

export default FourFone
