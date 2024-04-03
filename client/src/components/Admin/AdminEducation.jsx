import { Modal } from "antd";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { reloadData } from "../../../redux/dataSlice";

const AdminEducation = () => {
    const { portfolioData } = useSelector((state) => state.data);
    const dispatch = useDispatch()
    const { educations } = portfolioData;
    const { board, uni, period, description } = educations;


    const [showModal, setShowModal] = useState(false);
    const [addEducation, setAddEducation] = useState(null);
    const [selectedEducation, setSelectedEducation] = useState(0)

    const [data, setData] = useState({
        board: "",
        uni: "",
        period: "",
        description: ""
    })
    function handleChange(e) {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            let res
            {
                addEducation ?
                    res = await axios.post("http://localhost:3000/addeducation", data)
                    :
                    res = await axios.patch("http://localhost:3000/updateeducation/" + educations[selectedEducation]._id, data)
            }
            dispatch(reloadData(true))
            toast.success(res.data.message)
        } catch (error) {
            toast.error(error.message);
        }
    }

    async function handleDelete(i) {
        const res = await axios.delete("http://localhost:3000/deleteeducation/" + educations[i]._id)
        dispatch(reloadData(true))
        toast.success(res.data.message)
    }

    return (
        <div>
            <div className="flex justify-end">
                <button
                    className="bg-black px-3 py-2 text-sm rounded text-white"
                    onClick={() => {
                        setShowModal(true)
                        setAddEducation(true)
                    }}>Add Education</button>
            </div>
            <Modal
                open={showModal}
                footer={null}
                title={addEducation ? "ADD" : "UPDATE"}
                onCancel={() => setShowModal(false)}
            >
                <div className="flex items-start justify-center mt-5">
                    <div className="w-full">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="board" className="mb-3 block text-base font-medium text-[#07074D]">Board </label>
                                <input
                                    onChange={handleChange}
                                    type="text"
                                    name="board"
                                    id="board"
                                    value={!addEducation ? data.board : null}
                                    placeholder="Enter your board name"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="uni"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Uni
                                </label>
                                <input
                                    onChange={handleChange}
                                    type="text"
                                    name="uni"
                                    id="uni"
                                    value={!addEducation ? data.uni : null}
                                    placeholder="Enter your uni name"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="period"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Period
                                </label>
                                <input
                                    onChange={handleChange}
                                    type="text"
                                    name="period"
                                    id="period"
                                    value={!addEducation ? data.period : null}
                                    placeholder="Enter time period"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="description"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Description
                                </label>
                                <textarea
                                    rows="3"
                                    name="description"
                                    id="description"
                                    value={!addEducation ? data.description : null}
                                    placeholder="Enter some description"
                                    className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <div className="flex gap-4 justify-end">
                                <button className="px-5 py-1 text-lg rounded text-blue-black shadow-sm" onClick={() => setShowModal(false)}>
                                    Cancel
                                </button>
                                <button className="bg-black px-5 py-1 text-lg rounded text-white" onClick={() => setShowModal(false)}>
                                    {addEducation ? "Add" : "Update"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>

            {/* THIS IS SEEN AT THE EDUCATION PAGE  */}
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-1">
                {educations.map((education, i) => (
                    <div className="border-none shadow-xl flex flex-col gap-2 p-5" key={i}>
                        <h1 className="text-3xl text-orange-600">
                            {education.board}{" "}
                            <span className="text-lg text-gray-500">
                                {" "}
                                ({education.period})
                            </span>
                        </h1>
                        <h1 className="text-lg text-gray-500">{education.uni}</h1>
                        <h1>{education.description}</h1>
                        <div className="flex gap-3 mt-5">
                            <button className="bg-[#6A64F1] px-5 py-1 text-lg rounded text-white" onClick={() => {
                                setShowModal(true)
                                setAddEducation(false)
                                setData(education)
                                setSelectedEducation(i)
                            }}>
                                Edit
                            </button>
                            <button className="bg-[#eb4f4f] px-5 py-1 text-lg rounded text-white" onClick={() => handleDelete(i)}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default AdminEducation;
