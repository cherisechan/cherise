import "../styles/Projects.css"
import ProjectComp from "../components/ProjectComp";
const Projects = () => {

    return (
        <div className="page" id="projects">
            <div id="project-content">
                <h1 className="project-heading">Projects I've done</h1>
                <div id="project-list">
                    <ProjectComp direction={"left"} name={"Freerooms"} text={"Freerooms is a website to view room availibility on UNSW campus, and is a project under UNSW Software Development Society.\nDuring my time in the development subcomittee, I used MongoDB and TypeScript to design and implement a database system for a room review feature. I also improved mobile responsiveness and fixed frontend bugs with ReactJS "}></ProjectComp>
                    <ProjectComp direction={"right"}></ProjectComp>
                    <ProjectComp direction={"left"}></ProjectComp>
                    <ProjectComp direction={"right"}></ProjectComp>
                </div>
            </div>
        </div>
    )
}

export default Projects;