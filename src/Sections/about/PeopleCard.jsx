import React from 'react'

const PeopleCard = ({ firstName, lastName, subTitle, text, img }) => {
    return (
        <div className='FoundersListItem' >
            <div className='FoundersTopGroup'>
                <img loading='lazy' src={img} className='FounderImg' />
                <div className='FounderInfo' >
                    <span className='FounderInfoTitle' >{firstName} <br /> {lastName}</span>
                    <span className='FounderInfoSubtitle mono' >{subTitle}</span>
                </div>
            </div>
            <p className='FoundersText mono' >{text}</p>
        </div>
    )
}

export default PeopleCard
