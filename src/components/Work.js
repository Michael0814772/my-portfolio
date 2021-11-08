import React from 'react'
import { useState } from 'react';

function Work() {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index)
    }


    return (
        <>
            <div className="work" id="work">
                <div className="work-header">
                    <h1>Where I’ve Worked</h1>
                    <span></span>
                </div>

                <div className="work-body">
                    <div className="body-tabs">
                        <div 
                        className={toggleState === 0 ? "tab active" : "tab"}
                        onClick={() => toggleTab(0)}
                        >Machito's</div>
                        <div 
                        className={toggleState === 1 ? "tab active" : "tab"}
                        onClick={() => toggleTab(1)}
                        >KAWAI</div>
                        <div 
                        className={toggleState === 2 ? "tab active" : "tab"}
                        onClick={() => toggleTab(2)}
                        >CMAPIT</div>
                        <div 
                        className={toggleState === 3 ? "tab active" : "tab"}
                        onClick={() => toggleTab(3)}
                        >INEC</div>
                    </div>
                    <div className="work-experience">
                        <div className={toggleState === 0 ? "experience active-experience" : "experience"}>
                            <h1>Digital Marketer</h1>
                            <p>July 2021 - Present</p>
                            <ul>
                                <li>
                                    Identified and executed improvements for processess, contents and 
                                    lead generation in thier website.
                                </li>
                                <li>
                                    Collaborated with Content Team to promote Product Description post, 
                                    Blog post and guest post.
                                </li>
                                <li>
                                    Suggested new SEO tools which increased copywriters output by 20%.
                                </li>
                                <li>
                                    Provided market research campaign results and consumer trends.
                                </li>
                                <li>
                                    Implemented new competitive analysis and consumer trend reports to 
                                    increase quarterly sales by 15%
                                </li>
                            </ul>
                        </div>
                        <div className={toggleState === 1 ? "experience active-experience" : "experience"}>
                            <h1>Enumeration Team Lead</h1>
                            <p>September 2020 - June 2021</p>
                            <ul>
                                <li>
                                    Supervised and managed a team responsible for data enumeration.
                                </li>
                                <li>
                                    Actively mapped out locations for Data collection required by the team.
                                </li>
                                <li>
                                    Actively made use of a web application for data entry.
                                </li>
                                <li>
                                    Application of Microsoft excel for data collection and preparation of report.
                                </li>
                            </ul>
                        </div>
                        <div className={toggleState === 2 ? "experience active-experience" : "experience"}>
                            <h1>IT Specialist</h1>
                            <p>April 2019 - December 2019</p>
                            <ul>
                                <li>
                                    Supervised, Led and Managed the software used by my team member to help 
                                    map out data set of water dams accross the State.
                                </li>
                                <li>
                                    Calculation of water bodies in water dams accross the Country.
                                </li>
                                <li>
                                    Taught users the function of CMAPIT and how to use it.
                                </li>
                            </ul>
                        </div>
                        <div className={toggleState === 3 ? "experience active-experience" : "experience"}>
                            <h1>Team Lead Presiding Officer</h1>
                            <p>February 2018</p>
                            <ul>
                                <li>
                                    Takes delivery of and inspects all materials and equipment used.
                                </li>
                                <li>
                                    Coordinate activities in the voting point.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Work
