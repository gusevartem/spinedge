import React from 'react'
import { Link } from 'react-router-dom'
const generateSlug = (text) => {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
};
const Card = ({ img, top, mid, bottom }) => {
    return (
        <Link to={`/blog/${generateSlug(mid)}`}>
            <div className='min-w-[300px] md:min-w-[400px] min-h-[433px] flex flex-col gap-6 px-4'>
                <img src={img} className="w-full h-auto" />
                <div className='flex flex-col gap-2'>
                    <p className='mono text-sm bg-[radial-gradient(circle,_#16F501,_#00DA90)] text-transparent bg-clip-text'>{top}</p>
                    <p className='font-bold text-[23px] gradient-text-green'>{mid}</p>
                    <p className='mono text-[13px] gradient-text-green' dangerouslySetInnerHTML={{ __html: bottom }} />
                </div>
            </div>
        </Link>

    )
}

export default Card