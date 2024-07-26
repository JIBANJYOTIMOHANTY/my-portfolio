import React from 'react'

const About = () => {
    return (
        <div className='w-full '>
            <div className='flex'>
                <section className='w-3/4 h-full mt-32 ml-24'>
                    <p className='text-white text-7xl font-poppins font-semibold'>
                        Hi, I am
                    </p>
                    <p className='text-white text-6xl font-poppins font-semibold'>
                        Jiban Jyoti Mohanty
                    </p>
                    <p className='text-white text-4xl mt-8 font-poppins '>
                        Fullstack Developer
                    </p>

                    <p className='text-white text-xl mt-8 font-poppins '>
                        If you'd like to collaborate or have any questions,feel free to reach out to me. <br /> I'm excited to connect with you!
                    </p>

                    

                </section>

                <section className='w-96 h-40 bg-blue-700'>
                    jIBAN
                </section>
            </div>
        </div>
    )
}

export default About;
