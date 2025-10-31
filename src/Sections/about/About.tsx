
import React, { type FC } from 'react'
import './about.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import SmartImage from '../../Utils/SmartImage'
import PeopleCard from './PeopleCard'

const compaies = ['./About/comp1.webp', './About/comp2.webp', './About/comp3.webp', './About/comp4.webp', './About/comp5.webp', './About/comp6.webp', './About/comp7.webp', './About/comp8.webp', './About/comp9.webp', './About/comp10.webp', './About/comp11.webp', './About/comp12.webp']

const list = [
    {
        ico: './About/ico1.svg',
        text: 'Eliminate the memory bottleneck'
    },
    {
        ico: './About/ico2.svg',
        text: 'Deliver analog MAC performance with digital-grade precision'
    },
    {
        ico: './About/ico3.svg',
        text: 'Integrate seamlessly as an IP core or chiplet in heterogeneous systems'
    },
    {
        ico: './About/ico4.svg',
        text: 'Support pre-silicon integration of the SpinEdge AI accelerator core into customer workflows via Siemens EDA’s digital twin platform'
    },
]

const founders = [
    {
        img: "./About/pers1.1.webp",
        firstName: "Dr. Dmitry",
        lastName: "Leshchiner",
        subTitle: "CTO",
        text: "AI algorithms & neuromorphic technologies; SW development: 20+ years @ Google, Yahoo, Yandex",
    },
    {
        img: "./About/pers1.2.webp",
        firstName: "Dr. Konstantin",
        lastName: "Zvezdin",
        subTitle: "CEO",
        text: "R&D MRAM and microwave spintronics: 20+ years @ Fiat, European Projects",
    },
    {
        img: "./About/pers1.3.webp",
        firstName: "Dr. Nir",
        lastName: "Karasikov",
        subTitle: "Chairman",
        text: "Senior leadership in the High-Tech industry and business: 25+ year executive @ Nanomotion",
    }
]
const founders2 = [
    {
        img: "./About/image2.1.png",
        firstName: "Vladimir",
        lastName: "Krupnik",
        subTitle: "CBO",
        text: "MRAM fabrication, NVM, MCU, Fab construction",
    },
    {
        img: "./About/image2.2.png",
        firstName: "Uri",
        lastName: "Darvish",
        subTitle: "Financial Controller",
        text: "Senior Finance leadership in High-tech industry",
    },
    {
        img: "./About/image2.3.png",
        firstName: "Menachem",
        lastName: "Shoval",
        subTitle: "COO",
        text: "Strategic Sourcing / EMEA Microelectronic fabrication",
    },
    {
        img: "./About/mendel.png",
        firstName: "Dr. Mariia",
        lastName: "Lobkova",
        subTitle: "Lead design engineer",
        text: "Design and Engineering of Hybrid Spintronic Devices",
    }
]
const founders3 = [
    {
        img: "./About/image3.1.png",
        firstName: "Doron",
        lastName: "Nevo",
        subTitle: "Investors Relation",
        text: "Management and business in tech",
    },
    {
        img: "./About/image3.2.png",
        firstName: "Prof. Ching",
        lastName: "Ray Chang",
        subTitle: "Fabs Advisor",
        text: "NTU-IBM. Quantum Computer Hub",
    },
    {
        img: "./About/image3.3.png",
        firstName: "Avi",
        lastName: "Mendelson",
        subTitle: "Technology Advisor",
        text: "Tel Aviv University",
    },
    {
        img: "./About/image3.4.png",
        firstName: "Prof. Yosi",
        lastName: "Shacham-Diamand",
        subTitle: "Technology Advisor",
        text: "Tel Aviv University",
    }
]


interface AboutProps { }

const About: FC<AboutProps> = () => {
    return (
        <div className='AboutSec' id="about" >
            <SmartImage
                src='./shum.webp' className='aboutShum1'
            />
            <SmartImage
                src='./shum.webp' className='aboutShum2'
            />
            <SmartImage
                src='./shum.webp' className='aboutShum3'
            />
            <div className='AboutGpt1' ></div>
            <div className='AboutGpt2' ></div>
            <SmartImage
                src='./shum.webp' className='aboutShum4'
            />
            {window.innerWidth < 1000 && <div className="absolute z-[2] top-0 right-[-20px] w-[40%] h-[100%] opacity-[50%] bg-gradient-to-r from-transparent to-black pointer-events-none" />}
            {window.innerWidth < 1000 && <div className="absolute z-[2] top-[-100px] left-[-20px] w-[40%] h-[100%] opacity-[50%] bg-gradient-to-l from-transparent to-black pointer-events-none" />}
            <SmartImage
                src='./shum.webp' className='aboutShum5'
            />
            <SmartImage
                src='./shum.webp' className='aboutShum6'
            />
            <div className='AboutCenterShadow' ></div>
            <SmartImage
                src='./About/linesBg.webp' className='LinesBg'
            />
            <SmartImage
                src='./About/linesBg.webp' className='LinesBg2'
            />
            <SmartImage
                src='./About/figuraBg.png' className='FiguraBg'
            />
            <div className='AboutBody z-[4]' >
                <div className='FirstBlock' >
                    <div className='ImgWrap' >
                        <SmartImage
                            src='./About/place.png' className='PlaceImg'
                        />
                    </div>
                    <div className='FirstInfoBlock' >
                        <p className='FirstInfoTitle'>
                            <span>SpinEdge is a deep-tech company</span> pioneering a new class of AI accelerators based on spintronic memory
                        </p>
                        <p className='FirstInfoText mono'>
                            Our founding team brings <span>over 120 years of combined R&D and business experience,</span> spanning deep-tech innovation, semiconductor development, and Hi Tech commercialization
                        </p>
                        <div className='ImgWrap ImgWrapClone' >
                            <SmartImage
                                src='./About/place.png' className='PlaceImg'
                            />
                        </div>
                        <span className='AboutSubtitle mono' >[ mission ]</span>
                        <p className='FirstInfoText mono'>
                            Our mission is to unlock <span>ultra-efficient</span>, low<span>-power AI compute</span> — from edge devices and embedded systems to data center’s infrastructure — by building on a fundamentally different hardware paradigm
                        </p>
                        <p className='FirstInfoText mono'>
                            Unlike traditional digital processors that constantly shuttle data between logic and memory, SpinEdge performs <span>compute directly in memory</span>.
                        </p>
                        <p className='FirstInfoText mono'>
                            By leveraging a proprietary <span>crossbar array of SOT-MRAM</span> (spin-orbit torque magnetic RAM) and algorithms, we execute analog matrix-vector multiplications with dramatically lower energy consumption — while maintaining digital-level accuracy.
                        </p>
                    </div>
                </div>
                <div className='SecondBlock' >
                    <SmartImage
                        src='./About/bgMob.png' className='FiguraBgMob'
                    />
                    <span className='SecondTitle'>
                        SpinEdge’s architecture <br /> is designed to:
                    </span>
                    <div className='SecondList' >
                        {
                            list.map((item, ind) => (
                                <div key={ind} className='SecondListItem' >
                                    <div className='IcoWrap' >
                                        <img loading='lazy' src={item.ico} />

                                    </div>
                                    <span className='SecondListItemText mono' >{item.text}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='relative' >
                    {window.innerWidth < 1000 && <div className="absolute top-0 right-[-20px] w-[40%] h-[100%] opacity-[40%] bg-gradient-to-r from-transparent to-black pointer-events-none" />}
                    {window.innerWidth < 1000 && <div className="absolute top-0 left-[-20px] w-[40%] h-[100%] opacity-[40%] bg-gradient-to-l from-transparent to-black pointer-events-none" />}
                    <div className='ThirdBlock' >
                        {window.innerWidth < 1000 && <div className="absolute top-0 left-[-20px] w-[calc(100%+40px)] h-32 opacity-[25%] bg-gradient-to-t from-transparent to-black pointer-events-none" />}
                        <div className='ThirdLeftBlock z-[10]' >
                            <span className='AboutSubtitle mono' >behind the breakthrough</span>
                            <span className='ThirdBlockTitle' >The Minds Rewriting <br /> AI`s Future</span>
                            <span className='ThirdBlockText mono' >Over 120 years of combined experience at Intel, Google, and top {window.innerWidth > 1000 && <br />} research labs — now united to solve AI’s hardest problem</span>
                        </div>
                        <div className='ThirdRightBlock' >
                            <div className={`CompanyList CompanyList1`} >
                                {window.innerWidth < 1000
                                    ? compaies.slice(0, 5).map((item, ind) => <img loading='lazy' key={ind} className='CompanyImg' src={item} />)
                                    : compaies.slice(0, 4).map((item, ind) => <img loading='lazy' key={ind} className='CompanyImg' src={item} />)
                                }
                            </div>
                            <div className='CompanyList CompanyList2' >
                                {window.innerWidth < 1000
                                    ? compaies.slice(5, 10).map((item, ind) => <img loading='lazy' key={ind} className='CompanyImg' src={item} />)
                                    : compaies.slice(4, 8).map((item, ind) => <img loading='lazy' key={ind} className='CompanyImg' src={item} />)
                                }
                            </div>
                            <div className='CompanyList CompanyList3' >
                                {window.innerWidth < 1000
                                    ? compaies.slice(10, 12).map((item, ind) => <img loading='lazy' key={ind} className='CompanyImg' src={item} />)
                                    : compaies.slice(8, 12).map((item, ind) => <img loading='lazy' key={ind} className='CompanyImg' src={item} />)
                                }
                            </div>
                        </div>
                    </div>
                    <div className='Founders' id="team" >
                        <span className='FoundersTitle' >founders: <img loading='lazy' className='SlideImg' src='./slide.webp' /></span>
                        <div className='flex' >
                            <Swiper
                                slidesPerView={window.innerWidth < 910 ? 2.5 : 3}
                                spaceBetween={window.innerWidth < 910 ? 20 : 60}
                            >
                                {founders.map(({ firstName, lastName, subTitle, text, img }) => (
                                    <SwiperSlide key={firstName}>
                                        <PeopleCard lastName={lastName} firstName={firstName} subTitle={subTitle} text={text} img={img} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                    <div className='Founders' >
                        <span className='FoundersTitle gradient-text-green' >
                            team members:
                            <img loading='lazy' className='SlideImg' src='./slide.webp' />
                        </span>
                        {innerWidth > 768 && <div className='AdvisorsAboutList' >
                            {founders2.map(({ firstName, lastName, subTitle, text, img }) => (
                                <SwiperSlide key={firstName}>
                                    <PeopleCard lastName={lastName} firstName={firstName} subTitle={subTitle} text={text} img={img} />
                                </SwiperSlide>
                            ))}
                        </div>}
                        {innerWidth < 768 && <div className='flex' >
                            <Swiper
                                slidesPerView={window.innerWidth < 910 ? 2.5 : 3}
                                spaceBetween={window.innerWidth < 910 ? 20 : 60}
                            >

                                {founders2.map(({ firstName, lastName, subTitle, text, img }) => (
                                    <SwiperSlide key={firstName}>
                                        <PeopleCard lastName={lastName} firstName={firstName} subTitle={subTitle} text={text} img={img} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>}
                    </div>
                    <div className='Founders' >
                        <span className='FoundersTitle' >advisors: <img loading='lazy' className='SlideImg' src='./slide.webp' /></span>
                        <div className='AdvisorsAboutList' >
                            {founders3.map(({ firstName, lastName, subTitle, text, img }) => (
                                <SwiperSlide key={firstName}>
                                    <PeopleCard lastName={lastName} firstName={firstName} subTitle={subTitle} text={text} img={img} />
                                </SwiperSlide>
                            ))}
                        </div>
                        <div className='flex AdvisorsAboutSwiper' >
                            <Swiper
                                slidesPerView={window.innerWidth < 910 ? 2.5 : 3}
                                spaceBetween={window.innerWidth < 910 ? 20 : 60}
                            >
                                {founders3.map(({ firstName, lastName, subTitle, text, img }) => (
                                    <SwiperSlide key={firstName}>
                                        <PeopleCard lastName={lastName} firstName={firstName} subTitle={subTitle} text={text} img={img} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default React.memo(About);
