import React from 'react'

const LeftSider = () => {
    return (
        <div className='fixed left-14 bottom-3 sm:static '>
            <div className="flex flex-col sm:flex-row sm:justify-center gap-3 items-center text-gray-600">
                <a href="https://www.facebook.com/profile.php?id=100011013391464" target='_blank'><i className="ri-facebook-circle-line text-2xl"></i></a>
                <a href="https://www.instagram.com/prajzwolslimsulek/" target='_blank'><i className="ri-instagram-line text-2xl"></i></a>
                <a href="https://github.com/prajjwolcodes" target='_blank'><i className="ri-github-line text-2xl"></i></a>
                <a href="https://www.linkedin.com/in/prajjwol-shrestha-8177b8274/" target='_blank'><i className="ri-linkedin-fill text-2xl"></i></a>
                <div className='w-[2px] h-52 bg-orange-400 sm:hidden'></div>
            </div>
        </div>
    )
}

export default LeftSider