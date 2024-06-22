import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Footer() {
    return (
        <>
            <hr />
            <footer className="py-12">
                <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex space-x-4">
                            {/* <FaLinkedin size={25} />
                        <FaGithub size={25} />   
                        <FaInstagram size={25} />
                        <SiLeetcode size={25} /> */}
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
                        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
                            <p>
                                &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
                                <br />
                                Designed and developed by{' '}
                                <a href="https://www.linkedin.com/in/your-name/">Mohit Yadav</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
