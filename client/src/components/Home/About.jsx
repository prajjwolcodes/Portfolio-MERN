import React from 'react'
import SectionTitle from './SectionTitle'
import { useSelector } from 'react-redux'

const About = () => {
    const { portfolioData } = useSelector(state => state.data)
    const { abouts } = portfolioData
    const { description1, description2, skill: skills } = abouts[0]

    return (
        <div id='about'>
            <SectionTitle title="About" />
            <div className='h-[500px] sm:h-screen flex sm:flex-col gap-10 items-center justify-start'>
                <div className='flex-1 h-[400px] sm:h-[300px]'>
                    <dotlottie-player src="https://lottie.host/1e9d999c-9637-4f4e-9bce-6b2715a1c5a2/T4MekmLGcI.json" background="transparent" speed="1" autoplay></dotlottie-player>
                </div>
                <div className="flex flex-col flex-1 gap-16 sm:gap-6">
                    <p className="description1 text-xl ">{description1}</p>
                    <p className="description2 text-xl">{description2}</p>
                </div>
            </div>
            <div>

                {/* skill section */}
                <SectionTitle title="Skills" />
                <div
                    name="experience"
                    className="w-full">
                    <div className="max-w-screen-kg mx-auto w-full h-full p-4 flex flex-col  justify-center text-black ">
                        <div className={`w-full grid grid-cols-4 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 `}>
                            {skills.map((skill, i) => (
                                <div key={i} className={`shadow-md hover:scale-105 duration-600 py-2 rounded-lg`}>
                                    <img alt="" src={skill.src} className="w-20 mx-auto" />
                                    <p className="mt-4 text-xl ">{skill.tech}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About