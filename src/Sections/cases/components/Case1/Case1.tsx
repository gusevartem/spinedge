import React from 'react'
import { type FC } from 'react'
import './case1.scss'

import { HeaderText } from '../HeaderText/HeaderText'
import SmartImage from '../../../../Utils/SmartImage'

interface Case1Props { }

export const Case1: FC<Case1Props> = () => {


    return (
        <div className='Case1Block' >
            <HeaderText num={1} title='Enables always-on AI in ultra-small, ultra-efficient devices' text='SpinEdge brings real-time AI to the tiniest form factors — including wearables, earbuds, smart home devices, and IoT nodes.' />
            <div className='CaseBody' >
                <div className='Case3CenterShadow' ></div>
                <SmartImage
                    src='./Cases/corner.png' className='Case1Corner1'
                />
                <SmartImage
                    src='./Cases/corner.png' className='Case1Corner2'
                />
                <div className='TextGroup' >
                    <p className={`Case1Text CaseText1 mono`} >Our non-volatile, analog-native architecture delivers inference directly in memory, eliminating the need for fans, cloud access, or off-chip compute.</p>
                    <ul className='CaseText2' >
                        <li className='Case1Text mono' >Ideal for «wake-word» detection, motion sensing, anomaly detection, and more</li>
                        <li className='Case1Text mono' >Always-on performance with microwatt-level power budgets</li>
                    </ul>
                </div>
                <div className='Case1ImagesGroup' >
                    <div className='DiagramaWrap' >
                        <SmartImage
                            src='./Case1/img1.webp' className='Case1Img1'
                        />
                        <SmartImage
                            src='./Case1/imgMob.webp' className='Case1ImgMob'
                        />
                        <SmartImage
                            src='./Case1/img2.webp' className='Case1Img2'
                        />
                        <div className='Case1Upto mono' >
                            up to 1000 tops/w <br /> efficiency
                            <div className='Case1Tri' />
                        </div>
                        <SmartImage
                            src='./Case1/diagrama.webp' className='Diagrama'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}