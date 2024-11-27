import '../css/about_me_v2.css'
import { useState, useEffect } from 'react';
import jslogo from '../images/js-logo.png'
import tslogo from '../images/typescript-logo.png'
import csslogo from '../images/css-logo.png'
import pythonlogo from '../images/python-logo.png'
import reactlogo from '../images/react-logo.png'
import androidlogo from '../images/android-logo.png'
import firebaselogo from '../images/firebase-logo.png'
import tailwindlogo from '../images/tailwind-logo.png'
import resume from '../images/Planta-Resume_Updated.png'
import cert1 from '../images/cert1.png'
import cert2 from '../images/cert2.jpg'
import cert3 from '../images/cert3.png'
import cert4 from '../images/cert4.png'
import cert5 from '../images/cert5.png'

export default function AboutMeV2() {

    const [selectedCategory, setSelectedCategory] = useState(null);

    // State to control the visibility of the new div
    const [isResumeVisible, setIsResumeVisible] = useState(false);
    const [isCVVisible, setIsCVVisible] = useState(false);

    // Function to toggle the new div visibility
    const handleZoomResume = () => {
        setIsResumeVisible(true); // Show the new div when clicked
    };
    const handleZoomCV = () => {
        setIsCVVisible(true); // Show the new div when clicked
    };
    const handleZoomClose = () => {
        setIsResumeVisible(false);
        setIsCVVisible(false);
      };

    const handleButtonClick = (category) => {
        setSelectedCategory(category);
    };

    useEffect(() => {
        handleButtonClick('EDUCATION1');
    }, []);

    useEffect(() => {
        if (isResumeVisible || isCVVisible) {
            document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
            document.body.style.overflow = ''; // Enable scrolling
        }
    }, [isResumeVisible || isCVVisible]);

    return (
        <>
            <div className="about-container" id="about">
                <h1>ABOUT ME</h1>
                <div className="about-content">
                    <div className="categories1">
                        <button 
                            onClick={() => handleButtonClick('EDUCATION1')} 
                            className={`education1 ${selectedCategory === 'EDUCATION1' ? 'selected' : 'not-selected'}`}
                        >
                            Education
                        </button>
                        <button 
                            onClick={() => handleButtonClick('SKILLS1')}
                            className={`skills1 ${selectedCategory === 'SKILLS1' ? 'selected' : 'not-selected'}`}
                        >
                            Skills
                        </button>
                        <button 
                            onClick={() => handleButtonClick('GOALS1')}
                            className={`goals1 ${selectedCategory === 'GOALS1' ? 'selected' : 'not-selected'}`}
                        >
                            Goals
                        </button>
                        <button 
                            onClick={() => handleButtonClick('CERTIFICATES1')}
                            className={`certificates1 ${selectedCategory === 'CERTIFICATES1' ? 'selected' : 'not-selected'}`}
                        >
                            Certificates
                        </button>
                        <button 
                            onClick={() => handleButtonClick('RESUME1')}
                            className={`resume1 ${selectedCategory === 'RESUME1' ? 'selected' : 'not-selected'}`}
                        >
                            Resume
                        </button>
                    </div>
                    
                    {/* Render content based on selectedCategory */}
                    {selectedCategory && (
                        <div className={`category-content ${selectedCategory.toLowerCase()}`}>
                            {selectedCategory === 'EDUCATION1' && 
                            <div className="educ-content">
                                <h2>UNIVERSITY</h2>
                                <p>Currently a fourth-year Bachelor of Science in Computer Science student, majoring in Application Development at the University of Makati.</p>
                                <h2>AWARDS</h2>
                                <p> Dean’s Lister<br></br>
                                    (1st Year - 1st and 2nd Sem.)<br></br>
                                    (2nd Year - 2nd Sem.)<br></br>
                                    (3rd Year - 1st Sem.)<br></br><br></br>
                                    SoftEng and ProMan PBL Excellence Award<br></br>
                                    UMEMPC Digital Solutions Award
                                </p>
                                <h2>SEMINARS & CONVENTIONS</h2>
                                <p>
                                    Philippine GameDev Expo 2024<br></br>
                                    Anchored in Tech: Lifestyle, Leadership, and Legacy<br></br>
                                    Webinars on H.R. Compensation and Benefits
                                </p>
                            </div>}
                            {selectedCategory === 'SKILLS1' && 
                            <div className="skills-content">
                                <h2>SOFT</h2>
                                <div className="technical-content">
                                    <p>Problem Solving</p>
                                    <p id="technical-text">Analyze complex issues and develop effective solutions to resolve them.</p>
                                    <p>Collaboration and Communication</p>
                                    <p id="technical-text">Work well with others and communicate clearly.</p>
                                </div>
                                <h2>TECHNICAL</h2>
                                <div className="technical-content">
                                    <p>Schema Design</p>
                                    <p id="technical-text">Design efficient database schemas that organize data logically.</p>
                                    <p>Application Development</p>
                                    <p id="technical-text">Strong foundation in designing, coding, and deploying applications.</p>
                                    <p>Database Management Systems</p>
                                    <p id="technical-text">Experience in managing relational databases, knowledgable on how to store, retrieve, and organize structured data effectively.</p>
                                </div>
                                <h2>PROGRAMMING</h2>
                                <div className="prog-logo1">
                                    <img src={jslogo} />
                                    <img src={csslogo} />
                                    <img src={pythonlogo} />
                                {/* </div>
                                <div className="prog-logo2"> */}
                                    <img src={reactlogo} />
                                    <img src={androidlogo} />
                                    <img src={firebaselogo} />
                                </div>
                            </div>}
                                {selectedCategory === 'GOALS1' && 
                                <div className="goals-content">
                                    <h2>CAREER</h2>
                                    <p>Build a solid technical foundation and practical experience. By working on real-world projects, 
                                        I aim to deepen my knowledge of diverse programming languages, frameworks, and tools, continuously 
                                        strengthening my problem-solving skills. I would also like to connect with experienced engineers 
                                        and mentors that can provide invaluable guidance and open doors to future opportunities.</p>
                                    <h2>PERSONAL DEVELOPMENT</h2>
                                    <p>Improve resilience and adaptability to keep up with the fast-paced world of tech. I would also like to 
                                        improve my communication and teamwork skills to effectively collaborate with others. And set up 
                                        routines that include regular exercise, mental health practices, and hobbies outside of work, to 
                                        keep me motivated and avoid burnout in the long run.</p>
                                    <h2>LIFE</h2>
                                    <p>Live a happy life.</p>
                                
                                </div>}
                            {selectedCategory === 'CERTIFICATES1' && 
                            <div className="cert-content">
                                <img src={cert1} />
                                <img src={cert2} />
                                {/* <img src={cert3} />
                                <img src={cert4} />
                                <img src={cert5} /> */}
                            </div>}
                            {selectedCategory === 'RESUME1' && 
                            <div className="resume-container">
                                <div className="resume-content" onClick={handleZoomResume}>
                                    {/* VIEW<br></br>
                                    RESUME */}
                                </div>
                                <div className="resume-content" onClick={handleZoomCV}>
                                    {/* VIEW<br></br>
                                    CV */}
                                </div>
                            </div>
                            }
                        </div>
                    )}
                </div>
            </div>
            {/* Conditionally render the new div */}
            {isResumeVisible && (
                <div className="resume-zoom">
                    <img id="resume-zoom" src={resume} onClick={handleZoomClose} />
                </div>
            )}
            {isCVVisible && (
                <div className="resume-zoom">
                    <img id="resume-zoom" src={cert1} onClick={handleZoomClose} />
                </div>
            )}
        </>
    );
}
