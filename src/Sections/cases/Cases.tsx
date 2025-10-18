
import React, { type FC } from 'react'
import './cases.css'
import { Case1 } from './components/Case1/Case1'
import { Case2 } from './components/Case2/Case2'
import { Case3 } from './components/Case3/Case3'
import SmartImage from '../../Utils/SmartImage'


interface CasesProps { }

const Cases: FC<CasesProps> = () => {


    return (
        <div className='CasesSec' id="cases" >
            <SmartImage
                src='./shum.webp' className='caseShum1'
            />
            <SmartImage
                src='./shum.webp' className='caseShum2'
            />
            <SmartImage
                src='./shum.webp' className='caseShum3'
            />
            <SmartImage
                src='./shum.webp' className='caseShum4'
            />
            <SmartImage
                src='./shum.webp' className='caseShum5'
            />
            <div className='casesTopShadow' ></div>
            <div className='casesCenterShadow' ></div>
            <div className='CasesBody' >
                <Case1 />
                <Case2 />
                <Case3 />
            </div>
        </div>
    )
}

export default React.memo(Cases);