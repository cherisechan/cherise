import "../styles/Navbar.css"
const Navbar = () => {


    return (
        <div className="nav-bar">
            <p className="nav-btn" onClick={() => {
                document.getElementById('landing').scrollIntoView({
                    behavior: 'smooth'
                })
            }}>Home</p>
            <p className="nav-btn" onClick={() => {
                document.getElementById('projects').scrollIntoView({
                    behavior: 'smooth'
                })
            }}>Projects</p>
            <p className="nav-btn">About</p>
            <p className="nav-btn">Contact</p>
        </div>
    )
}

export default Navbar;