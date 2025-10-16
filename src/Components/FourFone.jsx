import shumSrcSet from '/public/shum.webp?w=400;800;1200&as=srcset'
import heightBlurSrcSet from '/public/Four/heightBlut.webp?w=400;800;1200&as=srcset'

const FourFone = ({ id, children, heightBlur }) => {
    return (
        <section
            id={id}
            className="bg-black w-screen h-full relative"
        >
            <img
                srcSet={shumSrcSet}
                src="/public/shum.webp"
                loading="lazy"
                className='fourShum1'
                alt=""
            />
            <img
                srcSet={shumSrcSet}
                src="/public/shum.webp"
                loading="lazy"
                className='fourShum2'
                alt=""
            />
            <img
                className={`absolute block lg:hidden left-0 min-h-[1662px] select-none pointer-events-none z-0 rounded-4xl`}
                srcSet={heightBlurSrcSet}
                src="/public/Four/heightBlut.webp"
                loading="lazy"
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
