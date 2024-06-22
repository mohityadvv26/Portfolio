import React from 'react'

function Skills() {
    return (
        <>
            <div name="Skills" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
                <h1 className="text-3xl font-bold mt-5">Skills</h1>
                <div>
                    <h1 className="text-green-600 font-semibold text-xl">Technical Skills</h1>
                    <div className="flex flex-row  flex-wrap">
                        <div className="text-center m-10">
                            <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{ "--value": 80 }} role="progressbar">80%</div>
                            <div>HTML,CSS</div>
                        </div>
                        <div className="text-center m-10">
                            <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{ "--value": 60 }} role="progressbar">60%</div>
                            <div>Javascript</div>
                        </div>
                        <div className="text-center m-10">
                            <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{ "--value": 50 }} role="progressbar">50%</div>
                            <div>ReactJs</div>
                        </div>
                        <div className="text-center m-10">
                            <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{ "--value": 40 }} role="progressbar">40%</div>
                            <div>ExpressJs</div>
                        </div>
                        <div className="text-center m-10">
                            <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{ "--value": 70 }} role="progressbar">70%</div>
                            <div>DSA</div>
                        </div>
                        <div className="text-center m-10">
                            <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{ "--value": 70 }} role="progressbar">70%</div>
                            <div>SQL</div>
                        </div>

                    </div>
                </div>
                <div>
                    <h1 className="text-green-600 font-semibold text-xl">Professional Skills</h1>
                    <div className="flex flex-row  flex-wrap">
                        <div className="text-center m-10">
                            <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{ "--value": 80 }} role="progressbar">80%</div>
                            <div>Leadership</div>
                        </div>
                        <div className="text-center m-10">
                            <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{ "--value": 90 }} role="progressbar">90%</div>
                            <div>Teamwork</div>
                        </div>
                        <div className="text-center m-10">
                            <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{ "--value": 80 }} role="progressbar">80%</div>
                            <div>Creativity</div>
                        </div>
                        <div className="text-center m-10">
                            <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{ "--value": 70 }} role="progressbar">70%</div>
                            <div>Problem Solving</div>
                        </div>
                        <div className="text-center m-10">
                            <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{ "--value": 90 }} role="progressbar">90%</div>
                            <div>Adaptablity</div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Skills
