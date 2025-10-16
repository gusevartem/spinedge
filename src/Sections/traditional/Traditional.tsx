import React from 'react'
import { type FC } from 'react'
import './trad.css'
import FourCard from '../../Components/FourCard'

interface TraditionalProps { }

export const Traditional: FC<TraditionalProps> = () => {


    return (
        <div className='TraditionalSec' >
            <img loading='lazy' data-src='./shum.webp' className='tradShum1' />
            <div className='Shadow1' ></div>
            <div className='Shadow2' ></div>
            <div className='TraditionalBody' >
                <div className='TradSubInfo TradSubInfoClone' >
                    <img loading='lazy' className='TradPlataMob' data-src='./Trad/plataMob.webp' />
                    <img loading='lazy' className='TradCorner' data-src='./Trad/corner.webp' />
                    <img loading='lazy' className='TradCorner2' data-src='./Trad/corner.webp' />
                    <div className='TradSubBlock' >
                        <span className='TradSubTitle' >SpinEdge changes that:</span>
                        <p className='TradSubText mono' >By combining spintronic memory with analog compute, SpinEdge removes these bottlenecks — enabling ultra-efficient, real-time AI compute in applications where traditional hardware can’t be used.</p>
                    </div>
                </div>
                <div className='GifWrap' >
                    <img loading='lazy' className='TradGif' data-src='./2.gif' />
                </div>
                <div className='TradInfoBlock' >
                    <div className='Shadow3' ></div>
                    <span className='TradTitle mono' >Silicon scaling is slowing down. AI workloads are exploding.</span>
                    <p className='FirstInfoTitle'>
                        <span>Traditional compute platforms are falling behind the rapid growth of AI —</span> especially at the edge, in embedded systems, and in power-constrained data centers
                    </p>
                    <p className='TradText mono' >
                        While GPUs and CPUs dominate today’s AI workloads, <span>they weren’t designed for large-scale inference.</span> Constant data movement between memory and compute imposes significant costs - in power, latency, and heat.
                    </p>
                    <div className='TradSubInfo' >
                        <img loading='lazy' className='TradPlataMob' data-src='./Trad/plataMob.webp' />
                        <img loading='lazy' className='TradPlata' data-src='./Trad/plata.webp' />
                        <img loading='lazy' className='TradCorner' data-src='./Trad/corner.webp' />
                        <img loading='lazy' className='TradCorner2' data-src='./Trad/corner.webp' />
                        <div className='TradSubBlock' >
                            <span className='TradSubTitle' >SpinEdge changes that:</span>
                            <p className='TradSubText mono' >By combining spintronic memory with analog compute, SpinEdge removes these bottlenecks — enabling ultra-efficient, real-time AI compute in applications where traditional hardware can’t be used.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}