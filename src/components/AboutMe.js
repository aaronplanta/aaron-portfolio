import '../css/about_me.css'
import { useState, useEffect } from 'react';
import TypeScriptLogo from '../images/typescript-logo.png';
import cssLogo from '../images/css-logo.png';
import jsLogo from '../images/js-logo.png';
import androidStudioLogo from '../images/android-logo.png';
import firebaseLogo from '../images/firebase-logo.png';
import reactLogo from '../images/react-logo.png';
import pythonLogo from '../images/python-logo.png';
import tailwindLogo from '../images/tailwind-logo.png';


export default function AboutMe() {
    const [specifics, setSpecifics] = useState();
    const [education, setEducation] = useState();
    const [skill, setSkill] = useState();
    const [isSpecificsVisible, setIsSpecificsVisible] = useState(true);
    const [isEducationVisible, setIsEducationVisible] = useState(true);
    const [isSkillVisible, setIsSkillVisible] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState(null); // State for selected category
    

    useEffect(() => {
        handleButtonClick('EDUCATION');
    }, []);

    //EDUCATION
    const handleEducationClick = (educcategory) => {
        setIsSpecificsVisible(false);
        setIsEducationVisible(false);
        setIsSkillVisible(false);
        switch (educcategory) {
            case 'UNIVERSITY':
                setEducation(
                    <div className="university" onClick={() => { setIsSpecificsVisible(true); setIsEducationVisible(false); }}>
                        <div className="university1">
                            <h1>UNIVERSITY</h1>
                            <p>Currently a fourth-year Bachelor of Science in Computer Science student, majoring in Application Development at the University of Makati.</p>
                        </div>
                    </div>
                );
                setIsEducationVisible(true);
                break;
            case 'AWARD':
                setEducation(
                    <div className="awards" onClick={() => { setIsSpecificsVisible(true); setIsEducationVisible(false); }}>
                        <div className="awards1">
                            <h1>AWARDS</h1>
                            <p> Dean’s Lister<br></br>
                                (1st Year - 1st and 2nd Sem.)<br></br>
                                (2nd Year - 2nd Sem.)<br></br>
                                (3rd Year - 1st Sem.)<br></br><br></br>
                                SoftEng and ProMan PBL Excellence Award<br></br><br></br>
                                UMEMPC Digital Solutions Award
                            </p>
                        </div>
                    </div>
                );
                setIsEducationVisible(true);
                break;
            case 'EXTRACURRICULAR':
                setEducation(
                    <div className="extracurricular" onClick={() => { setIsSpecificsVisible(true); setIsEducationVisible(false); }}>
                        <div className="extracurricular1">
                            <h1>EXTRACURRICULAR</h1>
                            <p>
                                2021 InfoTech: WebDev<br></br>
                                1st runner-up (Eco-Shop)<br></br><br></br>
                                2022 InfoTech:<br></br>
                                Android 2nd runner-up (RemindMe)<br></br><br></br>
                                2023 InfoTech:<br></br>
                                Android Champions (UMAK NEXUS)
                            </p>
                        </div>
                    </div>
                );
                setIsEducationVisible(true);
                break;
            default:
                setSpecifics('ohhh');
        }
    };

    //SKILLS
    const handleSkillClick = (skillcategory) => {
        setIsSpecificsVisible(false);
        setIsEducationVisible(false);
        setIsSkillVisible(false);
        switch (skillcategory) {
            case 'TECHNICAL':
                setSkill(
                    <div className="technical" onClick={() => { setIsSpecificsVisible(true); setIsSkillVisible(false); }}>
                        <div className="technical1">
                            <h1>TECHNICAL</h1>
                            <p>
                                Database Management Systems<br></br><br></br>
                                SQL Querying<br></br><br></br>
                                Data Modeling<br></br><br></br>
                                UI/UX Design<br></br><br></br>
                                Data Structures and Algorithms
                            </p>
                        </div>
                    </div>
                );
                setIsSkillVisible(true);
                break;
            case 'PROGRAMMING':
                setSkill(
                    <div className="programming" onClick={() => { setIsSpecificsVisible(true); setIsSkillVisible(false); }}>
                        <div className="programming1">
                            <h1>PROGRAMMING</h1>
                            <div className="row1">
                                <img src={TypeScriptLogo} alt="TypeScript" />
                                <img src={cssLogo} alt="CSS" />
                                <img src={jsLogo} alt="JavaScript" />
                            </div>
                            <div className="row2">
                                <img src={androidStudioLogo} alt="Android Studio" />
                                <img src={firebaseLogo} alt="FireBase" />
                                <img src={reactLogo} alt="ReactJS" />
                            </div>
                            <div className="row3">
                                <img src={pythonLogo} alt="Python" />
                                <img src={tailwindLogo} alt="Tailwind" />
                            </div>
                        </div>
                    </div>
                );
                setIsSkillVisible(true);
                break;
            default:
                setSpecifics('ohhh');
        }
    };

    //RIGHT PANEL
    const handleButtonClick = (category) => {
        setIsSpecificsVisible(true);
        setSelectedCategory(category);
        switch (category) {
            case 'EDUCATION':
                setIsEducationVisible(false);
                setIsSkillVisible(false);
                setSpecifics(
                    <div className="education">
                        <button onClick={() => handleEducationClick('UNIVERSITY')}>UNIVERSITY</button>
                        <button onClick={() => handleEducationClick('AWARD')}>AWARD</button>
                        <button onClick={() => handleEducationClick('EXTRACURRICULAR')}>EXTRACURRICULAR</button>
                    </div>
                );
                break;
            case 'SKILLS':
                setIsEducationVisible(false);
                setIsSkillVisible(false);
                setSpecifics(
                    <div className="skill">
                        <button onClick={() => handleSkillClick('TECHNICAL')}>TECHNICAL</button>
                        <button onClick={() => handleSkillClick('PROGRAMMING')}>PROGRAMMING</button>
                    </div>
                );
                break;
            case 'HOBBIES':
                setIsEducationVisible(false);
                setIsSkillVisible(false);
                setSpecifics(
                    <div className="hobbies">
                        <button className="iSlide">PLAYING INSTRUMENTS</button>
                        <button className="sSlide">SPORTS</button>
                        <button className="gSlide">VIDEO GAMES</button>
                        <button className="mSlide">LISTENING TO MUSIC</button>
                    </div>
                );
                break;
            case 'CERTIFICATES':
                setIsEducationVisible(false);
                setIsSkillVisible(false);
                setSpecifics(
                    <div className="certificates">
                        CLICK TO<br></br>
                        VIEW<br></br>
                        CERTIFICATES
                    </div>
                );
                break;
            case 'RESUME':
                setIsEducationVisible(false);
                setIsSkillVisible(false);
                setSpecifics(
                    <div className="resume">
                        CLICK TO<br></br>
                        EXPAND<br></br>
                        RESUME
                    </div>
                );
                break;
        }
    };

    return(
        <div className="panel-about_me" id="about">
            <p>ABOUT ME</p>
            <div className="about_me-content">
                <div className="image" id="image"></div>
                <div className="categories">
                    <button 
                        onClick={() => handleButtonClick('EDUCATION')} 
                        className={selectedCategory === 'EDUCATION' ? 'selected' : ''}
                    >
                        EDUCATION
                    </button>
                    <button 
                        onClick={() => handleButtonClick('SKILLS')} 
                        className={selectedCategory === 'SKILLS' ? 'selected' : ''}
                    >
                        SKILLS
                    </button>
                    <button 
                        onClick={() => handleButtonClick('HOBBIES')} 
                        className={selectedCategory === 'HOBBIES' ? 'selected' : ''}
                    >
                        HOBBIES
                    </button>
                    <button 
                        onClick={() => handleButtonClick('CERTIFICATES')} 
                        className={selectedCategory === 'CERTIFICATES' ? 'selected' : ''}
                    >
                        CERTIFICATES
                    </button>
                    <button 
                        onClick={() => handleButtonClick('RESUME')} 
                        className={selectedCategory === 'RESUME' ? 'selected' : ''}
                    >
                        RESUME
                    </button>
                </div>
                <div className="specifics">
                    {isSpecificsVisible && specifics}
                    {isEducationVisible && education}
                    {isSkillVisible && skill}
                </div>
            </div>
        </div>
    )
}