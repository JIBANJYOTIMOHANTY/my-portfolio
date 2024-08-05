import React, { forwardRef, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = forwardRef((props, ref) => {
    const form = useRef();

    const popUp = () => {
        toast.success(' Message Sent!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            // transition: Bounce
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
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    }
    return (
        <div ref={ref} className='w-full h-screen '>
            <h1 className='text-center font-serif text-4xl md:text-5xl mt-10 font-semibold'>Contact Me</h1>
            <div className='flex justify-center mt-5 '>
                <div className='p-5 w-full md:w-3/4 h-full bg-gray-0 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-2 border-gray-100'>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='flex flex-col items-center '>

                            {/* <label>Name</label> */}
                            <input type="text" name="user_name" placeholder='Enter your name' className='w-10/12 md:w-3/4 mb-5 p-5 rounded-s-xl bg-[#2F2F2F] border-b-4  border-white outline-none hover:bg-white transition ease-linear duration-500 font-poppins text-sm md:text-2xl text-white hover:text-black  hover:rounded-xl' />
                            {/* <label>Email</label> */}
                            <input type="email" name="user_email" placeholder='Enter your email' className='w-10/12 md:w-3/4 mb-5 p-5 rounded-s-xl bg-[#2F2F2F] border-b-4  border-white outline-none hover:bg-white transition ease-linear duration-500 font-poppins text-sm md:text-2xl text-white hover:text-black  hover:rounded-xl' />
                            {/* <label>Message</label> */}

                            <textarea name="message" placeholder='Enter your message' className='w-10/12 md:w-3/4 mb-5 p-8 bg-[#2F2F2F] border-4 rounded-xl  border-cyan-600 outline-none hover:bg-white transition ease-linear duration-500 font-poppins text-sm md:text-2xl text-white hover:border-black hover:text-black  hover:rounded-xl' />
                            
                            <input className='px-20 py-2 md:px-36 md:py-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg  me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 cursor-pointer' type="submit" value="Send" />
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
                transition: Bounce />
        </div>
    )
});

export default Contact
