import React from 'react';
import { ReactTypical } from '@deadcoder0904/react-typical'

function Home() {
    return (
        <>
            <div className="home">
                <div className="first-section">
                    <div className="social">
                        <ul>
                            <li><a href="https://www.linkedin.com/in/oluwasegun-michael-akinrinmade-075922148/"><i className="fab fa-linkedin"></i></a></li>
                            <li><a href="https://github.com/Michael0814772"><i className="fab fa-github"></i></a></li>
                            <li><a href="https://twitter.com/Michael80824373"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="michael232@gmail.com"><i className="fab fa-google-plus-g"></i></a></li>
                        </ul>
                    </div>
                    <div className="write-up">
                        <h2>Hello, I'M <font className='michael'>Michael</font></h2>
                        <h1>
                            <ReactTypical
                            loop={Infinity}
                            steps={[
                                "Frontend React Developer",
                                1000,
                                "Ethusiastiv Dev",
                                1000,
                                "Frontend Developer",
                                1000,
                                "Web App Developer",
                                1000,
                                "Frontend React Engineer",
                                1000,
                            ]}
                            />
                        </h1>
                        <h2 className="knack">Knack of building applications with front and back end operations.</h2>
                    </div>
                </div>
                <div className="image">
                    <div className="image-body"></div>
                </div>
            </div>
           
        </>
    )
}

export default Home
