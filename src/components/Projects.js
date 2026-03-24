import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/portfolio-2.png";
import img2 from "../assets/weather.png";
import img3 from "../assets/to-do.png";

const Projects = () => {
    const navigate = useNavigate();
    const images = [img1, img2, img3];

    return (
        <section className="projects-section" id="projects">

            {/* LEFT TEXT */}
            <div className="projects-text">
                <h2>My Projects</h2>
                <p>
                    I create modern and scalable web applications with clean UI,
                    smooth user experience, and powerful backend systems.
                    Explore my work below.
                </p>

                <button onClick={() => navigate("/projects")}>
                    View All Projects
                </button>
            </div>

            {/* RIGHT STACKED CARDS */}
            <div className="stack-container">

                {[1, 2, 3].map((item, index) => (
                    <motion.div
                        key={item}
                        className={`stack-card card-${index}`}
                        whileHover={{
                            scale: 1.08,
                            rotate: 0,
                            zIndex: 10,
                        }}
                        onClick={() => navigate("/projects")}
                    >
                        <img
                            src={images[item % images.length]}
                            alt="task"
                        />
                    </motion.div>
                ))}

            </div>
        </section>
    );
};

export default Projects;