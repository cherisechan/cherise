import { ReactPlayer } from 'react-player'
import { Waypoint } from 'react-waypoint'
import { useEffect, useRef, useState } from 'react'
import "../styles/ProjectComp.css"
import freeroomsVid from "../assets/freerooms.mp4"
const ProjectComp = ({direction, name, text}) => {
    const freeroomsVideo = useRef();
    const handleVideoStartF = () => {
        freeroomsVideo.current.currentTime = 0;
        freeroomsVideo.current.play();
    }
    const [textArr, setTextArr] = useState(null);
    useEffect(() => {
        if (text) {
            setTextArr(text.split('\n'))
        }
    }, [text])
    return (
        <div className={direction === "left" ? "project-comp project-comp-left" : "project-comp project-comp-right"} style={direction === "left" ? {flexDirection: "row-reverse"} : {flexDirection: "row"}}>
            <div className="project-comp-content">
                <h1 className="pro-heading">{name}</h1>
                {
                    <div className="pro-text">
                        {
                            textArr && textArr.map(item => 
                                <>
                                    <p key={item}>{item}</p>
                                </>
                            )
                        }
                    </div>
                }
            </div>
            <div className="project-comp-img" style={direction === "left" ? {borderRadius: "10px 0 0 10px"} : {borderRadius: "0 10px 10px 0"}}>
                {
                    name === "Freerooms" && 
                    <Waypoint onEnter={() => handleVideoStartF()} >
                        <video ref={freeroomsVideo} className="pro-vid" src={freeroomsVid} autoPlay muted loop></video>
                    </Waypoint>
                }
                
            </div>
        </div>
    )

}
export default ProjectComp;