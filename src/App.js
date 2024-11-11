import './css/App.css';

import { useEffect, useState, useRef } from 'react';
import emailjs from "emailjs-com";

import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects'
import AboutMeV2 from './components/AboutMeV2';
import Contact from './components/Contact';
import Cursor from './components/Cursor';

function App() {
  useEffect(() => {
    document.title = "Aaron Planta";
  }, []);

  const [message, setMessage] = useState(false);
  const showMessage = () => {
    setMessage(true);
  }

  useEffect(() => {
    if (message) {
        document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
        document.body.style.overflow = ''; // Enable scrolling
    }
  }, [message]);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .sendForm(
        "service_smddrl4", // Your EmailJS service ID
        "template_dianne", // Your EmailJS template ID
        e.target,            // The form element
        "zbMHvKU489X1Gwx5e"       // Your EmailJS user ID
      )
      .then(
        (response) => {
          setMessage(false);
          console.log("Message sent successfully:", response);
          alert("Your message has been sent!");
        },
        (error) => {
          console.error("Error sending message:", error);
          alert("Something went wrong. Please try again later.");
        }
      );

    // Clear the form after submission (optional)
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const introRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const introElement = introRef.current;
      const introPosition = introElement.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (introPosition < screenPosition) {
        introElement.classList.add('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Cursor />
      <div className="page-container">
        <Header />
        <div className="intro" ref={introRef}>
          <h1>ASPIRING SOFTWARE ENGINEER AND DB ADMINISTRATOR</h1>
          <p>Aaron Patrick N. Planta<br></br>Makati, Philippines</p>
          <div>
            <button onClick={showMessage}>Leave A Message</button>
          </div>
        </div>
        <div className="about_me">
          <AboutMeV2 />
        </div>
        <div className="projects">
          <Projects />
        </div>
        <div className="contact">
          <Contact />
        </div>
      </div>

      {message && (
        <div className="message">
        <div className="form-container">
          <h1>LEAVE A MESSAGE</h1>
          <form className="form" onSubmit={handleSubmit}>
            <div className="name-form">
              <input
                type="text"
                name="name"
                placeholder="Enter name/company"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="email-form">
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="message-form">
              <textarea
                name="message"
                placeholder="Enter message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                
                required
              ></textarea>
            </div>
            <div className="buttons-form">
              <button type="submit">Send</button>
              <button type="button" onClick={() => {
                setMessage(false); // Close the form
                setFormData({
                  name: "",
                  email: "",
                  message: "",
                }); // Clear the form fields
              }}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      )}
    </>
  );
}

export default App;
