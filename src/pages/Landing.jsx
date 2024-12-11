import '../styles/Landing.css'
const Landing = () => {
    return (
        <div className="page" id='landing'>
            <div id="landing-left">
                <h1 className="welcome">Hello!</h1>
                <h1 className="welcome">I'm Cherise Chan</h1>
                <p className="about">I'm a passionate software engineer studying at UNSW. Welcome to my website!</p>
            </div>
            <div id="landing-right">
                <div className="circle"></div>
            </div>
        </div>
    )
}

export default Landing;