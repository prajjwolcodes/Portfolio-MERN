import { Modal } from 'antd'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Hero = () => {
    const { portfolioData } = useSelector(state => state.data)
    const { intros, contacts } = portfolioData
    const { name, caption, description } = intros[0]
    const [showModal, setShowModal] = useState(false);

    return (
        <div className='flex justify-center'>
            <div className='flex flex-col gap-8 justify-center items-start h-[90vh]'>
                <h1 className='text-2xl font-semibold sm:text-1xl'>Hi, I am</h1>
                <h1 className='titles text-6xl font-bold sm:text-4xl'>{name}</h1>
                <h1 className='text-5xl sm:text-3xl'>{caption}</h1>
                <p className='w-2/3 sm:w-full'>{description}</p>
                <button onClick={() => setShowModal(true)} className='border-1 rounded-lg text-2xl p-3 px-4 border-gray-600 bg-primary'>Know me</button>
            </div>
            <div className='sm:hidden'>
                <img src="https://i.pinimg.com/564x/d0/ab/58/d0ab5861ddf51bc7c2427bd3a19a566a.jpg" alt="" style={{ height: "600px", width: "1000px" }} />
            </div>

            <Modal
                open={showModal}
                footer={null}
                onCancel={() => setShowModal(false)}
            >
                <div>
                    <div className='flex items-start sm:flex-col justify-between'>
                        <div className='flex flex-col gap-2'>
                            <h1> {`{`} </h1>
                            {Object.keys(contacts[0]).map((key, i) => (
                                <h1 className='text-lg' key={i}>
                                    <span className='text-[#df3535]'>"{key}"" : </span>
                                    <span className="title-font">"{contacts[0][key]}"</span>
                                </h1>
                            ))}
                            <h1> {`}`} </h1>
                        </div>
                        <div className='h-[40vh] sm:h-[30vh]'>
                            <dotlottie-player src="https://lottie.host/6491d932-253f-419f-875e-b1784ffaedcf/OjsavnbcpX.json" background="transparent" speed="1" autoplay></dotlottie-player>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>


    )
}

export default Hero