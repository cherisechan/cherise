import "../styles/Projects.css"
import ProjectComp from "../components/ProjectComp";
const Projects = () => {

    return (
        <div className="page" id="projects">
            <div id="project-content">
                <h1 className="project-heading">Projects I've done</h1>
                <div id="project-list">
                    <ProjectComp 
                        direction={"left"} 
                        name={"Freerooms"} 
                        text={"Freerooms is a UNSW campus room availability website developed by the UNSW Software Development Society.\nDuring my time in the development subcommittee, I used MongoDB and TypeScript to create a database system for a room review feature, and improved mobile responsiveness and fixed frontend bugs using ReactJS."}
                    />
                    <ProjectComp 
                        direction={"right"}
                        name={"Presto"}
                        text={"Presto is an innovative slideshow creation application built with ReactJS and Tailwind CSS. With a focus on performance and responsiveness, Presto allows users to seamlessly integrate text, images, code blocks and videos into their presentations."}
                    />
                    <ProjectComp
                        direction={"left"}
                        name={ "UniHack 2024"}
                        text={"I participatd in Atlassian's hackathon with 4 other members. We developed the idea for a social media app that promts users with daily dares to complete and showcased the concept using ReactJS."}
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects;