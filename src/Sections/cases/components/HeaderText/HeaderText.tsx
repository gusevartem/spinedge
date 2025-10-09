import React from 'react'
import './headerText.css'
import {type FC} from 'react'


interface HeaderText {
    num: number;
    title: string;
    text: string;
}

export const HeaderText:FC<HeaderText> = ({num, title, text}) => {


    return (
        <div className='HeaderText' >
            <span className='HeaderTextNum mono' >USE CASE #{num}</span>
            <span className='HeaderTextTitle' >{title}</span>
            <span className='HeaderTextText mono' >{text}</span>
        </div>
    )
}