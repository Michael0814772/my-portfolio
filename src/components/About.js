import React from 'react';

function About() {
    return (
        <>
            <div className="about" id="about">
                <div className="header">
                    <h1>About Me</h1>
                    <span className="header-span"></span>
                </div>
                <div className="about-body">
                    <div className="first-row">
                        <p>Hello! My name is Michael and I enjoy creating things that live on the internet.
                            My interest in web development started back in 2012 when I decided to try editing
                            custom Tumblr themes — turns out hacking together a custom reblog button taught me
                            a lot about HTML & CSS! <br />
                            Fast-forward to today, and I’ve had the privilege of working at an advertising agency,
                            a start-up, a huge corporation, and a student-led design studio. My main focus these
                            days is building accessible, inclusive products and digital experiences at
                            Upstatement for a variety of clients.
                        </p>
                        <div className="first-row-2">
                            <div className="row-1">
                                <p>
                                    Here are a few technologies I’ve been working with recently:
                                </p>
                                <ul>
                                    <li>JavaScript (ES6+)</li>
                                    <li>React</li>
                                    <li>Boostrap</li>
                                    <li>Redux</li>
                                </ul>
                            </div>
                            <div className="row-2">
                                <p>
                                    Here are a few highlights:
                                </p>
                                <ul>
                                    <li>Frontend Web Developement</li>
                                    <li>Interactive Front End Web Development</li>
                                    <li>Redux for State management</li>
                                    <li>Impemetation of Rest API</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="second-row">
                        <div className="about-image"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
