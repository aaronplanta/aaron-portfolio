import { useState } from 'react';
import '../css/projects.css';
import nexus from '../images/led_zeplin.jpg'
import fintech from '../images/blond.jpg'
import transact from '../images/sunshine.jpg'

export default function Projects() {
    const [currentDivIndex, setCurrentDivIndex] = useState(0);
    const [animationClass, setAnimationClass] = useState('slide-in-right');

    const handleButtonClick = (direction) => {
        setAnimationClass(direction === 'next' ? 'slide-out-left' : 'slide-out-right');
        setTimeout(() => {
            setCurrentDivIndex((prevIndex) => {
                if (direction === 'next') {
                    return (prevIndex + 1) % 3;
                } else {
                    return (prevIndex - 1 + 3) % 3;
                }
            });
            setAnimationClass(direction === 'next' ? 'slide-in-right' : 'slide-in-left');
        }, 0);
    };

    // List of Projects
    const listItems = [
        <li className="projects-content" key="1">
            <div className="media">
                <img src={nexus} />
            </div>
            <div className="description">
                <div className="txtName">
                    <h1>UMAK NEXUS</h1>
                </div>
                <p>A comprehensive effort to modernize and streamline the method through which students efficiently order products at the University of Makati Employees Multi-Purpose Cooperative office. At its core, the project aims to develop user-friendly software that greatly simplifies sales for cooperative staff, thereby reducing manual processes, minimizing errors, and expediting transaction processing for both cooperative staff and students.</p>
                <div className="icons">
                    <button className="android"></button>
                    <button className="java"></button>
                    <button className="java-script"></button>
                    <button className="css"></button>
                </div>
            </div>
        </li>,
        <li className="projects-content" key="2">
            <div className="media">
                <img src={fintech} />
            </div>
            <div className="description">
                <div className="txtName">
                    <h1>NEXUS FINTECH SALES</h1>
                </div>
                <p>The University of Makati Cooperative sees an opportunity to overcome their challenges by partnering with NEXUS FINTECH SALES. Our Point of Sale (POS) System offers a comprehensive solution that addresses their specific requirements. With our POS System, the cooperative will have the capability to efficiently process payments, manage inventory in real-time, and gain valuable insights into customer preferences and sales trends.</p>
                <div className="icons">
                    <button className="java-script"></button>
                    <button className="css"></button>
                </div>
            </div>
        </li>,
        <li className="projects-content" key="3">
            <div className="media">
                <img src={transact} />
            </div>
            <div className="description">
                <div className="txtName">
                    <h1>UMEMPC TRANSACT (Ongoing)</h1>
                </div>
                <p>A streamlined Loan Management Web and Mobile Application tailored to reduce and facilitate the work process within UMEMPC while ensuring the result is dependable and accurate with the use of a Logistic Regression algorithm. UMEMPC Transact will facilitate a thorough assessment of loan applicants, thereby reducing biases and misunderstandings–like giving favors to their acquaintances–inherent in manual evaluation process.</p>
                <div className="icons">
                    <button className="typescript"></button>
                    <button className="java-script"></button>
                    <button className="css"></button>
                    <button className="python"></button>
                </div>
            </div>
        </li>
    ];

    return (
        <div className="panel-projects" id="projects">
            <p id="projects-header">PROJECTS</p>
            <div className="fix">
                {/* <div className="left">
                    <button className="arrow-left" onClick={() => handleButtonClick('prev')}></button>
                </div> */}
                <div className="fix-animation">
                    <div className={`animated-div ${animationClass}`}>
                        <ul>
                            {listItems[currentDivIndex]}
                        </ul>
                    </div>
                </div>
                {/* <div className="right">
                    <button className="arrow-right" onClick={() => handleButtonClick('next')}></button>
                </div> */}
                <div className="left-right">
                    <div className="left1" onClick={() => handleButtonClick('prev')}>
                        <button className="arrow-left"></button>
                        <p>Previous Project</p>
                    </div>
                    <div className="github">
                        <p>Visit my GitHub: 
                            <a href="https://github.com/aaronplanta" target="_blank"> github.com/aaronplanta</a>
                        </p>
                    </div>
                    <div className="right1" onClick={() => handleButtonClick('next')}>
                        <p>Next Project</p>
                        <button className="arrow-right"></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
