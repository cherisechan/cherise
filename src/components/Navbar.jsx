import "../styles/Navbar.css"
import { scrollIntoView } from "seamless-scroll-polyfill";
const Navbar = () => {


    return (
        <div className="nav-bar">
            <p className="nav-btn" onClick={() => {
                scrollIntoView(document.getElementById('landing'), {behavior: 'smooth'})

            }}>Home</p>
            <p className="nav-btn" onClick={() => {
                scrollIntoView(document.getElementById('projects'), {behavior: 'smooth'})
            }}>Projects</p>
            <p className="nav-btn" onClick={() => {
                scrollIntoView(document.getElementById('contact'), {behavior: 'smooth'})
            }}>Contact</p>
        </div>
    )
}

export default Navbar;