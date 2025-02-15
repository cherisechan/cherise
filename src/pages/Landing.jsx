import { useEffect, useState } from 'react';
import '../styles/Landing.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Landing = () => {
    const [showArrow, setShowArrow] = useState(false);

    useEffect(() => {
        window.onscroll = () => {

        }
    })
    return (
        <div className="page" id='landing'>
            <div id="main-landing">
                <div id="landing-left">
                    <h1 className="welcome">Hello!</h1>
                    <h1 className="welcome">I'm Cherise Chan</h1>
                    <p className="about">I'm a passionate software engineer studying at UNSW. Welcome to my website!</p>
                </div>
                <div id="landing-right">
                    <div className="circle"></div>
                </div>
            </div>
            <div className="view-pro">
                <p className="view-my-pro">View my projects</p>
                <KeyboardArrowDownIcon preserveAspectRatio="none" style={{width:"3vw", height:"2vw", minHeight:"20px", minWidth:"29px"}} className="arrow-down"/>
            </div>
        </div>
    )
}

export default Landing;