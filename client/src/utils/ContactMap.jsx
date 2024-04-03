import React from 'react'

const ContactMap = () => {
    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-15 sm:px-0 mx-auto flex gap-8 sm:flex-col flex-wrap">
                <div className="w-[600px] bg-gray-300 rounded-lg flex-1 overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe width="100%" height="100%" className="absolute inset-0" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.6904435576153!2d85.36490402538037!3d27.665047577356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a08deaac20d%3A0x2c994399b80e4bda!2sBalkot%20Chowk%2C%20Anantalingeshwar%2044600!5e0!3m2!1sen!2snp!4v1711943408541!5m2!1sen!2snp"></iframe>

                    <div className="bg-white relative flex flex-col py-6 pr-24 rounded shadow-md">
                        <div className="px-6">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                            <p className="mt-1">Near Balkot Chowk, Kausaltar</p>
                        </div>
                        <div className="px-6 mt-4">
                            <h2 className="title-font font-semibold text-gray-900 text-xs">EMAIL</h2>
                            <a className="text-indigo-500 leading-relaxed">shresthaprajjwol4@email.com</a>
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                            <p className="leading-relaxed">9803600040</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/3 sm:w-full bg-white flex flex-col md:ml-auto md:py-8 mt-8 md:mt-0">
                    <h2 className="text-gray-900 text-xl mb-3 font-medium title-font">Contact Me</h2>
                    <p className="leading-relaxed mb-5 text-gray-600">
                        Feel free to drop me a line anytime. I'm here.</p>
                    <form action="https://getform.io/f/lbkmyxmb" method="POST">
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
                            <input type="phone" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-20 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <div className='flex flex-col'>
                            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                            <p className="text-xs text-gray-500 mt-3 m-auto">Ready to team up and go along?</p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactMap