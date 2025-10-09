import React, { useRef, useEffect } from 'react'
import TableCard from './TableCard'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const data = [
    { img: `/Workers/vladimir.png`, name: `Vladimir Krupnik`, work: `CBO`, desc: `MRAM fabrication, NVM,<br/> MCU, Fab construction` },
    { img: `/Workers/uri.png`, name: `Uri Darvish`, work: `Financial Controller`, desc: `Senior Finance leadership<br/> in High-tech industry` },
    { img: `/Workers/menachem.png`, name: `Menachem Shoval`, work: `COO`, desc: `Strategic Sourcing / EMEA<br/> Microelectronic fabrication` },
    { img: `/Workers/nevo.png`, name: `Doron<br/> Nevo`, work: `Investments`, desc: `Management and business in tech` },
    { img: `/Workers/ray.png`, name: `Prof. Ching<br/> Ray Chang`, work: `Fabs Advisor`, desc: `NTU-IBM. Quantum Computer Hub` },
    { img: `/Workers/yosi.png`, name: `Prof. Yosi Shacham-<br/>Diamand`, work: `Technology Advisor`, desc: `Tel Aviv University` },
    { img: `/Workers/avi.png`, name: `Avi Mendelson`, work: `Technology Advisor`, desc: `Tel Aviv University` },
]

const Table = () => {
    const tableRef = useRef(null)

    useEffect(() => {
        if (window.innerWidth < 640) return // отключить анимацию на мобилках

        const cards = tableRef.current.querySelectorAll('.table-card')

        gsap.fromTo(cards, {
            x: -100,
            opacity: 0,

        }, {
            opacity: 1,
            duration: 1,
            x: 0,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: tableRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
        })
    }, [])

    return (
        <div className="pt-[2.5%] w-full" ref={tableRef}>
            {/* Мобильная прокрутка */}
            <div className="flex sm:hidden overflow-x-auto gap-4 pb-4">
                <div className="flex gap-4 min-w-max px-2">
                    {data.map((item, i) => (
                        <TableCard {...item} key={i} />
                    ))}
                </div>
            </div>

            {/* Сетка для больших экранов */}
            <div className="hidden sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-26 gap-y-10">
                {data.map((item, i) => (
                    <div className="table-card" key={i}>
                        <TableCard {...item} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Table
