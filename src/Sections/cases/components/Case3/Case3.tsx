import React from 'react'
import {type FC} from 'react'
import './case3.css'

import { HeaderText } from '../HeaderText/HeaderText'

interface Case3Props {}

export const Case3:FC<Case3Props> = () => {


    return (
        <div className='Case3Block' >
            <HeaderText num={3} title='From AI offload to on-site LLM deployment' text='SpinEdge cuts energy and cost across the AI pipeline — from large-scale inference & training in the datacentre to localized deployment of LLMs at the edge' />
            <div className='Case3CaseBody' >
                <div className='Case3CenterShadow' ></div>
                <div className='Case3BottomShadow' ></div>
                <img src='./Cases/corner.png' className='Case3Corner1' />
                <img src='./Cases/corner.png' className='Case3Corner2' />
                <div className='Case3TextGroup' >
                    <p className={`Case3Text Case3Text1 mono`} >Our spintronic AI coprocessor handles MAC-heavy workloads with exceptional efficiency, significantly reducing server power consumption and cooling demands</p>
                    <ul className='Case3Text2' >
                        <li className='Case3Text mono' >By performing analog compute directly in memory, SpinEdge enables LLM inference in places previously out of reach — from enterprise edge nodes to on-premise appliances</li>  
                    </ul>
                </div>
                <div className='Case3ImagesGroup' >
                    <img src='./Case3/img1.webp' className='Case3Img1' />
                    <img src='./Case3/img2.webp' className='Case3Img2' />
                    <img src='./Case3/imgMob.webp' className='Case3Img2Mob' />
                </div>
                <ul className='Case3Text2 Case3Text2Clone' >
                    <li className='Case3Text mono' >By performing analog compute directly in memory, SpinEdge enables LLM inference in places previously out of reach — from enterprise edge nodes to on-premise appliances</li>  
                </ul>
            </div>
        </div>
    )
}