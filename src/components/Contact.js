import '../css/contact.css'
import iphone from '../images/iphone.png'
import viber from '../images/viber.png'
import email from '../images/mail.png'
import facebook from '../images/social-media.png'
import linkedin from '../images/linkedin.png'

export default function Contact() {
    return (
        <div className="contact-container" id="contact">
            <div className="heading">
                <h1>CONTACT DETAILS</h1>
                <p>Should you wish to get in touch, I am readily available via:</p>
            </div>
            <div className="details">
                <div className="phone">
                    <div className="details-icons">
                        <img src={iphone} />
                        <img src={viber} />
                    </div>
                    <p>+63 962-368-5311</p>
                </div>
                <div className="email">
                    <div className="details-icons">
                        <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfnbRXvpmdqczBJTdTHnXmKmFWHNTnPthQHmKvMKkjnMhsMvZPQrFQjdTlxLSdfknslkVV" target="_blank">
                            <img src={email} />
                        </a>
                    </div>
                    <p>aaronnplanta@gmail.com</p>
                </div>
                <div className="social">
                    <div className="details-icons">
                        <a 
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=aaronnplanta@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={facebook} />
                        </a>    
                        <a href="https://www.linkedin.com/in/aaron-patrick-planta-72b853336" target="_blank">                    
                            <img src={linkedin} />
                        </a>
                    </div>
                    <p>Aaron Patrick Planta</p>
                </div>
            </div>
        </div>
    )
}