import React, { forwardRef, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PersonIcon from '@mui/icons-material/Person';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import MessageIcon from '@mui/icons-material/Message';
import SendIcon from '@mui/icons-material/Send';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const Contact = forwardRef((props, ref) => {
    const form = useRef();
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });
    const [errors, setErrors] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validate = () => {
        let tempErrors = { user_name: '', user_email: '', message: '' };
        let isValid = true;

        if (!formData.user_name.trim()) {
            tempErrors.user_name = 'Name is required.';
            isValid = false;
        } else if (formData.user_name.trim().length < 2) {
            tempErrors.user_name = 'Name must be at least 2 characters.';
            isValid = false;
        }

        if (!formData.user_email.trim()) {
            tempErrors.user_email = 'Email address is required.';
            isValid = false;
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.user_email.trim())) {
                tempErrors.user_email = 'Please enter a valid email address.';
                isValid = false;
            }
        }

        if (!formData.message.trim()) {
            tempErrors.message = 'Message is required.';
            isValid = false;
        } else if (formData.message.trim().length < 10) {
            tempErrors.message = 'Message must be at least 10 characters.';
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!validate()) {
            toast.error('Please correct the validation errors below.', { theme: "dark" });
            return;
        }

        emailjs
            .sendForm('service_kt7xhjc', 'template_nmwmg7l', form.current, {
                publicKey: 'pVucYU6xu6fkrK6E-',
            })
            .then(
                () => {
                    popUp();
                    console.log('SUCCESS!');
                    setFormData({ user_name: '', user_email: '', message: '' });
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
                            <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none ${errors.user_name ? 'text-rose-500' : 'text-gray-500 group-focus-within:text-fuchsia-400'} transition-colors`}>
                                <PersonIcon fontSize="small" />
                            </div>
                            <input 
                                type="text" 
                                name="user_name" 
                                placeholder="Your Name" 
                                value={formData.user_name}
                                onChange={handleChange}
                                className={`w-full pl-11 pr-4 py-4 bg-black/50 border rounded-xl outline-none transition-all duration-300 text-white font-mono text-base placeholder-gray-600 ${
                                    errors.user_name 
                                    ? 'border-rose-500/50 hover:border-rose-500/80 focus:border-rose-500 focus:shadow-[0_0_15px_rgba(244,63,94,0.15)]' 
                                    : 'border-cyan-500/25 hover:border-cyan-500/40 focus:border-fuchsia-500 focus:shadow-[0_0_15px_rgba(217,70,239,0.15)]'
                                }`} 
                            />
                            {errors.user_name && (
                                <p className="text-rose-450 text-xs font-mono mt-1.5 pl-1 flex items-center gap-1 animate-pulse">
                                    <ErrorOutlineIcon sx={{ fontSize: 14 }} />
                                    {errors.user_name}
                                </p>
                            )}
                        </div>

                        {/* Email Input */}
                        <div className="relative group">
                            <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none ${errors.user_email ? 'text-rose-500' : 'text-gray-500 group-focus-within:text-fuchsia-400'} transition-colors`}>
                                <AlternateEmailIcon fontSize="small" />
                            </div>
                            <input 
                                type="email" 
                                name="user_email" 
                                placeholder="Your Email Address" 
                                value={formData.user_email}
                                onChange={handleChange}
                                className={`w-full pl-11 pr-4 py-4 bg-black/50 border rounded-xl outline-none transition-all duration-300 text-white font-mono text-base placeholder-gray-600 ${
                                    errors.user_email 
                                    ? 'border-rose-500/50 hover:border-rose-500/80 focus:border-rose-500 focus:shadow-[0_0_15px_rgba(244,63,94,0.15)]' 
                                    : 'border-cyan-500/25 hover:border-cyan-500/40 focus:border-fuchsia-500 focus:shadow-[0_0_15px_rgba(217,70,239,0.15)]'
                                }`} 
                            />
                            {errors.user_email && (
                                <p className="text-rose-450 text-xs font-mono mt-1.5 pl-1 flex items-center gap-1 animate-pulse">
                                    <ErrorOutlineIcon sx={{ fontSize: 14 }} />
                                    {errors.user_email}
                                </p>
                            )}
                        </div>

                        {/* Message Input */}
                        <div className="relative group">
                            <div className={`absolute top-4 left-0 pl-4 flex items-start pointer-events-none ${errors.message ? 'text-rose-500' : 'text-gray-500 group-focus-within:text-fuchsia-400'} transition-colors`}>
                                <MessageIcon fontSize="small" />
                            </div>
                            <textarea 
                                name="message" 
                                rows="5"
                                placeholder="Your Message" 
                                value={formData.message}
                                onChange={handleChange}
                                className={`w-full pl-11 pr-4 py-4 bg-black/50 border rounded-xl outline-none transition-all duration-300 resize-none text-white font-mono text-base placeholder-gray-600 ${
                                    errors.message 
                                    ? 'border-rose-500/50 hover:border-rose-500/80 focus:border-rose-500 focus:shadow-[0_0_15px_rgba(244,63,94,0.15)]' 
                                    : 'border-cyan-500/25 hover:border-cyan-500/40 focus:border-fuchsia-500 focus:shadow-[0_0_15px_rgba(217,70,239,0.15)]'
                                }`} 
                            />
                            {errors.message && (
                                <p className="text-rose-450 text-xs font-mono mt-1.5 pl-1 flex items-center gap-1 animate-pulse">
                                    <ErrorOutlineIcon sx={{ fontSize: 14 }} />
                                    {errors.message}
                                </p>
                            )}
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
