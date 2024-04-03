import React, { useEffect } from 'react'

import { Tabs } from 'antd';

import AdminNavbar from '../components/Admin/AdminNavbar'
import AdminProject from '../components/Admin/AdminProject'
import AdminHero from '../components/Admin/AdminHero'
import AdminEducation from '../components/Admin/AdminEducation'
import AdminAbout from '../components/Admin/AdminAbout'
import AdminContact from '../components/Admin/AdminContact';
import { useSelector } from 'react-redux';
import Loader from '../components/Home/Loader';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const { portfolioData } = useSelector(state => state.data)
    const adminData = JSON.parse(localStorage.getItem("user"))
    const navigate = useNavigate()

    const items = [
        {
            key: '1',
            label: 'Intro',
            children: <AdminHero />,
        },
        {
            key: '2',
            label: 'About',
            children: <AdminAbout />
        },
        {
            key: '3',
            label: 'Education',
            children: <AdminEducation />
        },
        {
            key: '4',
            label: 'Project',
            children: <AdminProject />
        },
        {
            key: '5',
            label: 'Contact',
            children: <AdminContact />
        }
    ]

    useEffect(() => {
        if (!adminData)
            navigate("/login")
    })

    return (
        <div className='h-screen text-black py-3 px-8 sm:p-3'>
            <AdminNavbar />
            {portfolioData ?
                <div className='px-32 sm:px-1'>
                    <div>
                        <Tabs defaultActiveKey="1" items={items} tabBarStyle={{ color: "red" }} />
                    </div>
                </div>
                : <Loader />
            }

        </div>
    )
}

export default Admin

