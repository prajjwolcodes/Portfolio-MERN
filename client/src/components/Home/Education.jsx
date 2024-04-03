import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import { useSelector } from 'react-redux'

const Education = () => {
    const [selectedEducation, setSelectedEducation] = useState(0)
    const { portfolioData } = useSelector(state => state.data)
    const { educations: education } = portfolioData
    return (
        <div id='education' >
            <SectionTitle title="Education" />
            <div className="flex gap-32 sm:gap-10 ">
                <div className='flex flex-col gap-10'>
                    {education.map((e, i) =>
                        <div key={i}>
                            <h3 onClick={() => setSelectedEducation(i)} className={`cursor-pointer text-xl ${selectedEducation === i ? "text-orange-800 border-l-4 py-2 px-4 border-orange-800" : ""}`}>{e.period}</h3>
                        </div>
                    )}
                </div>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-3xl text-orange-600 font-bold'>{education[selectedEducation].board}</h1>
                    <h1 className='text-2xl font-medium text-gray-900 title-font'>{education[selectedEducation].uni}</h1>
                    <h1 className='leading-relaxed'>{education[selectedEducation].description}</h1>
                </div>
            </div>
        </div >
    )
}

export default Education