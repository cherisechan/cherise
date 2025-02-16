import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import "../styles/Contact.css";

const Contact = () => {
    return (
        <div id="contact">
            <h1 id="contact-title">Contact me</h1>
            <div id="contact-list">
                <a href="https://www.linkedin.com/in/cherise-chan-1ab8b82b1/">
                    <LinkedInIcon sx={{ fontSize: 60, color: "#766f9a"}} className="icon"/>
                </a>
                <a href="mailto:cherisechan@outlook.com.au">
                    <EmailIcon sx={{ fontSize: 60, color: "#766f9a"}}className="icon"/>
                </a>
                <a href="tel:0472556064">
                    <CallIcon sx={{ fontSize: 60, color: "#766f9a"}}className="icon"/>
                </a>
            </div>
        </div>
    )
}

export default Contact;