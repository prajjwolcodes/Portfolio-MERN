import React from 'react'
import SectionTitle from './SectionTitle'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const Projects = () => {
    const { portfolioData } = useSelector(state => state.data)
    const { projects } = portfolioData
    const navigate = useNavigate()

    return (
        <div id='projects'>
            <SectionTitle title="Projects" />
            <section className="text-gray-600 body-font">
                <div className="container py-4 mx-auto">
                    <div className="grid grid-cols-3 -m-4 sm:grid-cols-1">
                        {projects.map((project, i) => (
                            <div key={i} className="p-4 md:w-1/3">
                                <div className="h-full border-2 border-gray-300 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={project.imgURL} alt="blog" />
                                    <div className="p-6">
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{project.title}</h1>
                                        <p className="leading-relaxed mb-1">{project.description}</p>
                                        <div className='flex justify-between items-end'>
                                            <button className="px-3 py-1 border border-gray-500 shadow-gray-500 text-lg rounded text-black"><a target='_blank' onClick={() =>
                                                project.link === "" && toast.error("No Demo Link available Right now")} href={project.link !== "" && project.link}>Demo</a></button>
                                            <button className="px-3 py-1 border border-gray-500 shadow-gray-500 text-lg rounded text-black"><a target='_blank' href={project.code}>Code</a></button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div >
    )
}

export default Projects
