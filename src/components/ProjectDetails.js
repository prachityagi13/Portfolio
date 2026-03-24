import { motion } from "framer-motion";
import taskManager from "../assets/to-do.png";
import portfolio from "../assets/portfolio.png";
import weather from "../assets/weather.png";

const projectData = [
    {
        title: "Portfolio",
        desc: "Personal portfolio using React",
        link: "https://prachityagi13.github.io/Portfolio/",
        image: portfolio,
    },
    {
        title: "Smart Task Manager",
        desc: "Task management application",
        link: "https://prachityagi13.github.io/to-do-list/",
        image: taskManager,
    },
    {
        title: "Weather App",
        desc: "Real-time weather app using API",
        link: "https://github.com/yourgithub/weather",
        image: weather,
    }
];

const ProjectDetails = () => {
    return (
        <section className="project-details">
            <h2>My Projects</h2>

            <div className="project-list">
                {projectData.map((proj, index) => (
                    <motion.div
                        className="project-card"
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <img src={proj.image} alt="" />
                        <h3>{proj.title}</h3>
                        <p>{proj.desc}</p>

                        <a href={proj.link} target="_blank">
                            View Project
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ProjectDetails;