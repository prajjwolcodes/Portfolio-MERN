import React, { useEffect } from 'react'
import Navbar from '../components/Home/Navbar'
import Hero from '../components/Home/Hero'
import About from '../components/Home/About'
import Education from '../components/Home/Education'
import Projects from '../components/Home/Projects'
import Contact from '../components/Home/Contact'
import Footer from '../components/Home/Footer'
import LeftSider from '../components/Home/LeftSider'
import { useSelector } from 'react-redux'
import Loader from '../components/Home/Loader'

const Home = () => {
    const { portfolioData } = useSelector(state => state.data)
    return (
        <div className='h-screen text-black py-3 px-8 sm:p-3'>
            {/* HEADER  */}
            <Navbar />

            {/* BODY  */}
            {portfolioData ?
                <div className='px-32 sm:px-1'>
                    <Hero />
                    <About />
                    <Education />
                    <Projects />
                    <Contact />
                    <Footer />
                    <LeftSider />
                </div>
                : <Loader />
            }

        </div>
    )
}

export default Home