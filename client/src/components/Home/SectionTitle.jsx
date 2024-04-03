import React from 'react'

const SectionTitle = ({ title }) => {
    return (
        <div className='flex items-center gap-5 mb-10 mt-20' >
            <h1 className='text-3xl'>{title}</h1>
            <div className='w-60 bg-primary h-[2px]'></div>
        </div >
    )
}

export default SectionTitle