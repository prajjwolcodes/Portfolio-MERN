import React from 'react'
import { useSelector } from 'react-redux';
import axios from "axios"
import { toast } from "react-hot-toast"

const AdminAbout = () => {
    const { portfolioData } = useSelector(state => state.data)
    const { abouts } = portfolioData
    const { description1, description2, skill: skills, _id } = abouts[0]
    const tech = (skills.map(skill => skill.tech));

    async function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const aboutData = Object.fromEntries(formData)
        console.log(aboutData);
        const skill = aboutData.skill.split(",")
        const data = { ...aboutData, skill }
        try {
            const res = await axios.patch("http://localhost:3000/updateabout", { data, _id })
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
                                htmlFor="description1"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Description 1
                            </label>
                            <input
                                type="text"
                                name="description1"
                                id="description1"
                                placeholder="Description1"
                                defaultValue={description1}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="description2"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Description 2
                            </label>
                            <input
                                type="text"
                                name="description2"
                                id="description2"
                                placeholder="Description2"
                                defaultValue={description2}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="skills"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Skills
                            </label>
                            <textarea
                                rows="4"
                                name="skill"
                                id="skills"
                                placeholder="Type your description"
                                defaultValue={tech.join(" , ")}
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

export default AdminAbout