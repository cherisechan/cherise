import { Waypoint } from 'react-waypoint'
import { useEffect, useRef, useState } from 'react'
import "../styles/ProjectComp.css"
import freeroomsVid from "../assets/freerooms.mp4"
import prestoVid from "../assets/presto.mov"
import uniHack from "../assets/uniHack.mov"
const ProjectComp = ({direction, name, text}) => {
    const freeroomsVideo = useRef();
    const handleVideoStartF = () => {
        freeroomsVideo.current.currentTime = 0;
        freeroomsVideo.current.play();
    }

    const prestoVideo = useRef();
    const handleVideoStartP = () => {
        prestoVideo.current.currentTime = 0;
        prestoVideo.current.play();
    }

    const uniHackVideo = useRef();
    const handleVideoStartU = () => {
        uniHackVideo.current.currentTime = 0;
        uniHackVideo.current.play();
    }



    const [textArr, setTextArr] = useState(null);
    useEffect(() => {
        if (text) {
            setTextArr(text.split('\n'))
        }
    }, [text])
    return (
        <div className={direction === "left" ? "project-comp project-comp-left" : "project-comp project-comp-right"}>
            <div className="project-comp-content">
                <h1 className="pro-heading">{name}</h1>
                {
                    <div className="pro-desc">
                        {textArr && textArr.map((item, i) => 
                            <div className="pro-text" key={i}>
                                <p>{item}</p>
                            </div>
                        )}
                        {
                            name === "Freerooms" &&
                            <a href="https://freerooms.devsoc.app/" target="_blank" className="btn" >View project</a>
                        }
                        {
                            name === "UniHack 2024" &&
                            <a href="https://www.youtube.com/watch?app=desktop&v=mPynAIHSeng&embeds_referring_euri=https%3A%2F%2Fdevpost.com%2F&source_ve_path=MjM4NTE" target="_blank" className="btn" >View demo</a>
                        }
                    </div>
                }
            </div>
            <div className="project-comp-img" style={direction === "left" ? {borderRadius: "10px 0 0 10px"} : {borderRadius: "0 10px 10px 0"}}>
                {
                    name === "Freerooms" && 
                    <Waypoint onEnter={handleVideoStartF}>
                        <video ref={freeroomsVideo} className="pro-vid" src={freeroomsVid} onClick={handleVideoStartF} autoPlay muted loop></video>
                    </Waypoint>
                }

                {
                    name === "Presto" &&
                    <Waypoint onEnter={handleVideoStartP}>
                        <video ref={prestoVideo} className="pro-vid" src={prestoVid} onClick={handleVideoStartP} autoPlay muted loop></video>
                    </Waypoint>
                }

                {
                    name === "UniHack 2024" &&
                    <Waypoint onEnter={handleVideoStartU}>
                        <video ref={uniHackVideo} className="pro-vid" src={uniHack} onClick={handleVideoStartU} autoPlay muted loop></video>
                    </Waypoint>
                }
                
            </div>
        </div>
    )

}
export default ProjectComp;