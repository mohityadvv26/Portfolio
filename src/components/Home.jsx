import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { ReactTyped, Typed } from "react-typed";
import pic from "../../public/mohit.jpg";



function Home() {
    return (

        <>
            <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 mt-12 md:mt-24 space-y-3 order-2 md:order-1">
                        <span className="text-xl">Welcome to my feed</span>
                        <div className="flex space-x-1 text-2xl md:text-3xl">
                            <h1>Hello,I am a</h1>
                            {/* <span className="text-red-600 font-bold ">Developer</span> */}
                            <ReactTyped
                                className="text-red-600 font-bold "
                                strings={["Developer", "Programmer", "Coder"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            />
                        </div>
                        <p className="text-sm md:text-md text-justify">
                            I'm Mohit, a passionate Web developer with a keen eye for MERN Stack . With a background in CSE, I strive to create impactful and visually stunning Software solutions that leave a lasting impression.
                        </p>
                        <br />
                        {/* social media icons */}
                        <div>
                            <div className=" space-y-2">
                                <h1 className=" text-bold ">Available on</h1>
                                <ul className="flex space-x-5">
                                    <li>
                                        <a href="https://www.linkedin.com/in/mohit-yadav-64651722b/" target="_blank">
                                            <FaLinkedin className="text-2xl cursor-pointer" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/mohityadvv26" target="_blank">
                                            <FaGithub className="text-2xl cursor-pointer" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://leetcode.com/u/mohityadavhr36/" target="_blank">
                                            <SiLeetcode className="text-2xl cursor-pointer" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/mohit_yadvv26/" target="_blank">
                                            <FaInstagram className="text-2xl cursor-pointer" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="md:w-1/2 md:ml-48 md:mt-19 mt-8 order-1">
                        <img src={pic} className="rounded-full md:w-[450px] md:h-[450px]" alt="" />
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Home
