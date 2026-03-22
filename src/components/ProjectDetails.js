import { motion } from "framer-motion";

const projectData = [
    {
        title: "Weather App",
        desc: "Real-time weather app using API",
        link: "https://github.com/yourgithub/weather",
        image: "https://picsum.photos/400/300?1",
    },
    {
        title: "Portfolio",
        desc: "Personal portfolio using React",
        link: "https://github.com/yourgithub/portfolio",
        image: "https://picsum.photos/400/300?2",
    },
    {
        title: "LMS System",
        desc: "Learning management system",
        link: "https://github.com/yourgithub/lms",
        image: "https://picsum.photos/400/300?3",
    },
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