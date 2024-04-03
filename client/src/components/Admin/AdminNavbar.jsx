import React from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const AdminNavbar = () => {
    const adminData = JSON.parse(localStorage.getItem("user"))
    const navigate = useNavigate()
    return (
        <nav>
            <ul className='flex items-center gap-7 sm:gap-3 text-xl sm:text-lg pb-3 border-b border-gray-300'>
                <li className='text-primary text-3xl sm:text-xl flex-1 font-bold cursor-pointer'>PRZL <span className='text-lg text-gray-500'>Admin</span></li>
                <button onClick={() => {
                    localStorage.removeItem("user")
                    navigate("/login")
                    toast.success("Succesfully Logged Out")
                }}>
                    {adminData ? "Logout" : "Login"}</button>
            </ul>
        </nav >

    )
}

export default AdminNavbar