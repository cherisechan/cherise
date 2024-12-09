import "../styles/ProjectComp.css"
const ProjectComp = ({direction}) => {
    return (
        <div className={direction === "left" ? "project-comp project-comp-left" : "project-comp project-comp-right"} style={direction === "left" ? {flexDirection: "row-reverse"} : {flexDirection: "row"}}>
            <div className="project-comp-content"></div>
            <div className="project-comp-img" style={direction === "left" ? {borderRadius: "10px 0 0 10px"} : {borderRadius: "0 10px 10px 0"}}></div>
        </div>
    )

}
export default ProjectComp;