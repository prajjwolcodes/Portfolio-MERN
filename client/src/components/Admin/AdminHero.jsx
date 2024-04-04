import React from 'react'
import { useSelector } from 'react-redux';
import axios from "axios"
import { toast } from "react-hot-toast"

const AdminHero = () => {
    const { portfolioData } = useSelector(state => state.data)
    const { intros } = portfolioData
    const { name, caption, description, _id } = intros[0]

    async function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData)
        try {
            const res = await axios.patch("/updateintro/", { data, _id })
            toast.success(res.data.message)
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <>
            <div className="flex items-start justify-center mt-5">
                <div className="w-full">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <label
                                htmlFor="name"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Full Name"
                                defaultValue={name}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="caption"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Caption
                            </label>
                            <input
                                type="text"
                                name="caption"
                                id="caption"
                                placeholder="Enter your Caption"
                                defaultValue={caption}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="description"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Description
                            </label>
                            <textarea
                                rows="4"
                                name="description"
                                id="description"
                                placeholder="Type your description"
                                defaultValue={description}
                                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            ></textarea>
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
        </>
    )
}

export default AdminHero
