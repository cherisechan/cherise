import "../styles/Projects.css"
import ProjectComp from "../components/ProjectComp";
const Projects = () => {

    return (
        <div className="page" id="projects">
            <div id="project-content">
                <h1 className="project-heading">Projects I've done</h1>
                <div id="project-list">
                    <ProjectComp direction={"left"}></ProjectComp>
                    <ProjectComp direction={"right"}></ProjectComp>
                    <ProjectComp direction={"left"}></ProjectComp>
                    <ProjectComp direction={"right"}></ProjectComp>
                </div>
            </div>
        </div>
    )
}

export default Projects;