import React, { forwardRef, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PersonIcon from '@mui/icons-material/Person';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import MessageIcon from '@mui/icons-material/Message';
import SendIcon from '@mui/icons-material/Send';

const Contact = forwardRef((props, ref) => {
    const form = useRef();

    const popUp = () => {
        toast.success(' Message Sent Successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_kt7xhjc', 'template_nmwmg7l', form.current, {
                publicKey: 'pVucYU6xu6fkrK6E-',
            })
            .then(
                () => {
                    popUp();
                    console.log('SUCCESS!');
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error('Message failed to send. Please try again.', {
                        theme: "dark"
                    });
                },
            );
    }
    return (
        <div ref={ref} className="px-4 sm:px-6 lg:px-8 py-16 bg-[#2F2F2F] text-white" id="contact">
            <div className="max-w-4xl mx-auto">
                {/* Section Heading */}
                <div className="flex flex-col items-center justify-center mb-12">
                    <div className="p-3 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-2xl shadow-lg shadow-indigo-500/20 mb-4 animate-bounce duration-1000">
                        <ContactMailIcon sx={{ fontSize: 48 }} className="text-white" />
                    </div>
                    <h1 className="font-semibold text-center text-white text-3xl md:text-4xl lg:text-5xl font-poppins relative">
                        Contact Me
                        <span className="absolute left-1/2 -bottom-2 w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transform -translate-x-1/2"></span>
                    </h1>
                </div>

                {/* Form Card */}
                <div className="bg-gradient-to-b from-gray-800/80 to-gray-900/80 border border-gray-700/50 backdrop-blur-md rounded-2xl p-6 md:p-10 hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-300">
                    <form ref={form} onSubmit={sendEmail} className="space-y-6">
                        {/* Name Input */}
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-indigo-400 transition-colors">
                                <PersonIcon fontSize="small" />
                            </div>
                            <input 
                                type="text" 
                                name="user_name" 
                                required
                                placeholder="Your Name" 
                                className="w-full pl-11 pr-4 py-4 bg-gray-800/60 border border-gray-700 rounded-xl outline-none hover:border-gray-600 focus:border-indigo-500 text-white font-poppins text-base placeholder-gray-500 transition-all duration-300" 
                            />
                        </div>

                        {/* Email Input */}
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-indigo-400 transition-colors">
                                <AlternateEmailIcon fontSize="small" />
                            </div>
                            <input 
                                type="email" 
                                name="user_email" 
                                required
                                placeholder="Your Email Address" 
                                className="w-full pl-11 pr-4 py-4 bg-gray-800/60 border border-gray-700 rounded-xl outline-none hover:border-gray-600 focus:border-indigo-500 text-white font-poppins text-base placeholder-gray-500 transition-all duration-300" 
                            />
                        </div>

                        {/* Message Input */}
                        <div className="relative group">
                            <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none text-gray-400 group-focus-within:text-indigo-400 transition-colors">
                                <MessageIcon fontSize="small" />
                            </div>
                            <textarea 
                                name="message" 
                                required
                                rows="5"
                                placeholder="Your Message" 
                                className="w-full pl-11 pr-4 py-4 bg-gray-800/60 border border-gray-700 rounded-xl outline-none hover:border-gray-600 focus:border-indigo-500 text-white font-poppins text-base placeholder-gray-500 transition-all duration-300 resize-none" 
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center pt-4">
                            <button 
                                type="submit" 
                                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-650 hover:to-purple-650 text-white font-poppins font-bold rounded-xl shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                            >
                                <SendIcon fontSize="small" />
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    )
});

export default Contact
