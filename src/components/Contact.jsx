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
        <div ref={ref} className="px-4 sm:px-6 lg:px-8 py-16 bg-transparent text-white" id="contact">
            <div className="max-w-4xl mx-auto">
                {/* Section Heading */}
                <div className="flex flex-col items-center justify-center mb-12">
                    <div className="p-3 bg-cyan-950/40 text-cyan-400 border border-cyan-500/30 rounded-2xl shadow-[0_0_15px_rgba(6,182,212,0.15)] mb-4 animate-bounce duration-1000">
                        <ContactMailIcon sx={{ fontSize: 48 }} />
                    </div>
                    <h1 className="font-semibold text-center text-white text-3xl md:text-4xl lg:text-5xl font-mono tracking-widest relative">
                        &lt;CONTACT //&gt;
                        <span className="absolute left-1/2 -bottom-2 w-24 h-0.5 bg-cyan-500 rounded-full transform -translate-x-1/2 shadow-[0_0_8px_#06b6d4]"></span>
                    </h1>
                </div>

                {/* Form Card */}
                <div className="bg-black/40 border border-cyan-500/20 rounded-2xl p-6 md:p-10 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:border-cyan-500/40 transition-all duration-300 relative">
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500/40"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-500/40"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-500/40"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500/40"></div>
                    
                    <form ref={form} onSubmit={sendEmail} className="space-y-6">
                        {/* Name Input */}
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-fuchsia-400 transition-colors">
                                <PersonIcon fontSize="small" />
                            </div>
                            <input 
                                type="text" 
                                name="user_name" 
                                required
                                placeholder="Your Name" 
                                className="w-full pl-11 pr-4 py-4 bg-black/50 border border-cyan-500/25 rounded-xl outline-none hover:border-cyan-500/40 focus:border-fuchsia-500 focus:shadow-[0_0_15px_rgba(217,70,239,0.15)] text-white font-mono text-base placeholder-gray-600 transition-all duration-300" 
                            />
                        </div>

                        {/* Email Input */}
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-fuchsia-400 transition-colors">
                                <AlternateEmailIcon fontSize="small" />
                            </div>
                            <input 
                                type="email" 
                                name="user_email" 
                                required
                                placeholder="Your Email Address" 
                                className="w-full pl-11 pr-4 py-4 bg-black/50 border border-cyan-500/25 rounded-xl outline-none hover:border-cyan-500/40 focus:border-fuchsia-500 focus:shadow-[0_0_15px_rgba(217,70,239,0.15)] text-white font-mono text-base placeholder-gray-600 transition-all duration-300" 
                            />
                        </div>

                        {/* Message Input */}
                        <div className="relative group">
                            <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none text-gray-500 group-focus-within:text-fuchsia-400 transition-colors">
                                <MessageIcon fontSize="small" />
                            </div>
                            <textarea 
                                name="message" 
                                required
                                rows="5"
                                placeholder="Your Message" 
                                className="w-full pl-11 pr-4 py-4 bg-black/50 border border-cyan-500/25 rounded-xl outline-none hover:border-cyan-500/40 focus:border-fuchsia-500 focus:shadow-[0_0_15px_rgba(217,70,239,0.15)] text-white font-mono text-base placeholder-gray-600 transition-all duration-300 resize-none" 
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center pt-4">
                            <button 
                                type="submit" 
                                className="inline-flex items-center gap-2 px-8 py-3.5 bg-black hover:bg-fuchsia-500 border border-fuchsia-500/50 hover:border-fuchsia-400 text-fuchsia-450 hover:text-black font-mono font-bold rounded-xl shadow-[0_0_15px_rgba(217,70,239,0.15)] hover:shadow-[0_0_20px_#d946ef] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
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
