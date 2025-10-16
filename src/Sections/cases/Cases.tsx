import React from 'react'
import { type FC } from 'react'
import './cases.css'
import { Case1 } from './components/Case1/Case1'
import { Case2 } from './components/Case2/Case2'
import { Case3 } from './components/Case3/Case3'
import { Benefits } from '../benefits/Benefits'

interface CasesProps { }

export const Cases: FC<CasesProps> = () => {


    return (
        <div className='CasesSec' id="cases" >
            <img loading='lazy' src='./shum.webp' className='caseShum1' />
            <img loading='lazy' src='./shum.webp' className='caseShum2' />
            <img loading='lazy' src='./shum.webp' className='caseShum3' />
            <img loading='lazy' src='./shum.webp' className='caseShum4' />
            <img loading='lazy' src='./shum.webp' className='caseShum5' />
            <div className='casesTopShadow' ></div>
            <div className='casesCenterShadow' ></div>
            <div className='CasesBody' >
                <Case1 />
                <Case2 />
                <Case3 />
            </div>
            <Benefits />
        </div>
    )
}