import axios from 'axios'
import React from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import AdminNavbar from '../AdminNavbar'

const Verifyotp = () => {
    const navigate = useNavigate()
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const formData = new FormData(e.currentTarget)
            const data = Object.fromEntries(formData)
            const res = await axios.post("http://localhost:3000/verifyotp", data)
            toast.success(res.data.message)
            navigate("/resetpassword")
        }
        catch (error) {
            toast.error(error.response.data.message)
        }
    }
    return (
        <div className='py-3 px-5'>
            <AdminNavbar />
            <main className="w-[500px] mx-auto p-6 mt-20">
                <div className="mt-7 bg-white rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
                    <div className="p-10 sm:p-7">
                        <div className="text-center">
                            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Enter OTP</h1>

                        </div>

                        <div className="mt-10">
                            <form onSubmit={handleSubmit}>
                                <div className="grid gap-y-4">
                                    <div>
                                        <label for="email" className="block text-sm font-bold ml-1 mb-2 dark:text-white">Otp:</label>
                                        <div className="relative">
                                            <input type="number" id="otp" name="otp" className="py-2 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" required aria-describedby="email-error" />
                                        </div>

                                    </div>
                                    <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#6A64F1] text-white hover:bg-[#6A74F1] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Verify Otp</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Verifyotp
