import { Modal } from "antd";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { reloadData } from "../../../redux/dataSlice";

const AdminProject = () => {
    const { portfolioData } = useSelector((state) => state.data);
    const dispatch = useDispatch()
    const { projects } = portfolioData;

    const [showModal, setShowModal] = useState(false);
    const [addProject, setAddProject] = useState(null);
    const [selectedProject, setSelectedProject] = useState(0)

    const [data, setData] = useState({
        title: "",
        link: "",
        code: "",
        description: "",
        imgURL: ""
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
                addProject ?
                    res = await axios.post("http://localhost:3000/addproject", data)
                    :
                    res = await axios.patch("http://localhost:3000/updateproject/" + projects[selectedProject]._id, data)
            }
            dispatch(reloadData(true))
            toast.success(res.data.message)
        } catch (error) {
            toast.error(error.message);
        }
    }

    async function handleDelete(i) {
        const res = await axios.delete("http://localhost:3000/deleteproject/" + projects[i]._id)
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
                        setAddProject(true)
                    }}>Add Project</button>
            </div>
            <Modal
                open={showModal}
                footer={null}
                title={addProject ? "ADD" : "UPDATE"}
                onCancel={() => setShowModal(false)}
            >
                <div className="flex items-start justify-center mt-5">
                    <div className="w-full">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="title" className="mb-3 block text-base font-medium text-[#07074D]">Title </label>
                                <input
                                    onChange={handleChange}
                                    type="text"
                                    name="title"
                                    id="title"
                                    value={!addProject ? data.title : null}
                                    placeholder="Enter your title name"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="code" className="mb-3 block text-base font-medium text-[#07074D]">Code </label>
                                <input
                                    onChange={handleChange}
                                    type="text"
                                    name="code"
                                    id="code"
                                    value={!addProject ? data.code : null}
                                    placeholder="Enter your code link"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>

                            <div className="mb-3">
                                <label
                                    htmlFor="link"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Link
                                </label>
                                <input
                                    onChange={handleChange}
                                    type="text"
                                    name="link"
                                    id="link"
                                    value={!addProject ? data.link : null}
                                    placeholder="Enter project link"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="img" className="mb-3 block text-base font-medium text-[#07074D]">Image </label>
                                <input
                                    onChange={handleChange}
                                    type="text"
                                    name="imgURL"
                                    id="img"
                                    value={!addProject ? data.imgURL : null}
                                    placeholder="Enter your img link"
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
                                    value={!addProject ? data.description : null}
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
                                    {addProject ? "Add" : "Update"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>

            {/* THIS IS SEEN AT THE EDUCATION PAGE  */}
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-1">
                {projects.map((project, i) => (
                    <div className="border-none shadow-xl flex flex-col gap-2 p-5" key={i}>
                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={project.imgURL} alt="blog" />

                        <h1 className="text-3xl text-orange-600">
                            {project.title}
                        </h1>
                        <h1>{project.description}</h1>
                        <h1>Demo: {project.link}</h1>
                        <h1>Code: {project.code}</h1>
                        <div className="flex gap-3 mt-5">
                            <button className="bg-[#6A64F1] px-5 py-1 text-lg rounded text-white" onClick={() => {
                                setShowModal(true)
                                setAddProject(false)
                                setData(project)
                                setSelectedProject(i)
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

export default AdminProject;
