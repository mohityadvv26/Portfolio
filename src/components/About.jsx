import React from 'react'

function About() {
    return (
        <>
            <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20">
                <h1 className="text-3xl font-bold mt-5">About</h1>
                <p>
                    Hello, I'm Mohit, a passionate Web developer with a keen eye for MERN Stack . With a background in CSE, I strive to create impactful and visually stunning Software solutions that leave a lasting impression.
                </p>
                <br />
                <h1 className="text-green-600 font-semibold text-xl">
                    Education & Training
                </h1>
                <div >
                    <li ><span className="font-semibold">Bachelor of Technology in Computer Science,</span> Jaypee Institute of Information Technology, Noida, UP — June 2025</li>
                    <li ><span className="font-semibold">Senior Secondary,</span> RPS Public School, Rewari, HR — April 2021, Percentage: 97%</li>
                    <li ><span className="font-semibold">Secondary,</span> RPS Public School, Rewari, HR — April 2019, Percentage: 95.2%</li>
                </div>
                
                <br />
                <br />
                <h1 className="text-green-600 font-semibold text-xl">
                    Work Experience
                </h1>
                <div>
                <li ><span className="font-semibold">C++ Programming Intern,</span> CodSoft (Remote) — August 2023</li>
                <p className="text-sm">Contributed to the development of a real-time simulation application using C++, HTML, and CSS.Fulfilled the tasks assigned by a supervisor and learned technical skills related to the industry.</p>
                <br />
                <li ><span className="font-semibold">Web Development Intern,</span> CODTECH IT SOLUTIONS (Remote) — July 2024</li>
                <p className="text-sm">Contributed to the development of a real-time simulation application using C++, HTML, and CSS.Fulfilled the tasks assigned by a supervisor and learned technical skills related to the industry.</p>
                </div>
                <br />
                <br />
                <h1 className="text-green-600 font-semibold text-xl">
                    Achievements & Awards
                </h1>
                <div>
                <li ><span className="font-semibold">Volunteer,</span> Light De Literacy — September 2022</li>
                <li ><span className="font-semibold">Vice-Captain, </span>Basketball Team</li>
                </div>
                
            </div>
        </>
    )
}

export default About
