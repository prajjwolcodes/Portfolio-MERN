import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import About from './About'
import Hero from './Hero'
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul className='flex items-center gap-7 sm:gap-3 text-xl sm:text-lg pb-3 border-b border-gray-300'>
                    <li className='text-primary text-3xl sm:text-xl flex-1 font-bold cursor-pointer'>PRZL</li>
                    <li className=' cursor-pointer'><ScrollLink to="about" smooth={true} duration={500} offset={-70}>About</ScrollLink></li>
                    <li className=' cursor-pointer'><ScrollLink to="education" smooth={true} duration={500} offset={-70}>Education</ScrollLink></li>
                    <li className=' cursor-pointer'><ScrollLink to="projects" smooth={true} duration={500} offset={-70}>Projects</ScrollLink></li>
                    <li className=' cursor-pointer'><ScrollLink to="contact" smooth={true} duration={500} offset={-70}>Contact</ScrollLink></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" exact component={<Hero />} />
                <Route path="/about" component={<About />} />
                <Route path="/education" component={<Education />} />
                <Route path="/projects" component={<Projects />} />
                <Route path="/contact" component={<Contact />} />
            </Routes>
        </div>


    )
}

export default Navbar