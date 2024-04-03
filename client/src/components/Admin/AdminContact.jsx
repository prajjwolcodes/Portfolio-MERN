import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

const AdminContact = () => {
    const { portfolioData } = useSelector(state => state.data)
    const { contacts } = portfolioData

    async function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData)
        console.log(data);
        // return
        try {
            const res = await axios.patch("http://localhost:3000/updatecontact", data)
            toast.success(res.data.message)
        } catch (error) {
            toast.error(error.message);
        }
    }
    return (
        <div className="flex items-start justify-center mt-5">
            <div className="w-full">
                <form onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label
                            htmlFor="name"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter your name"
                            defaultValue={contacts[0].name}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="email"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Email
                        </label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="email"
                            defaultValue={contacts[0].email}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="phone"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Phone
                        </label>
                        <input
                            type="number"
                            name="phone"
                            id="phone"
                            placeholder="phone"
                            defaultValue={contacts[0].phone}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="age"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Age
                        </label>
                        <input
                            type="number"
                            name="age"
                            id="age"
                            placeholder="age"
                            defaultValue={contacts[0].age}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="address"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Address
                        </label>
                        <input
                            type="text"
                            name="address"
                            id="address"
                            placeholder="address"
                            defaultValue={contacts[0].address}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div>
                        <button
                            className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AdminContact