import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Projects = () => {
    const navigate = useNavigate();

    return (
        <section className="projects-section">

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
                            src={`https://picsum.photos/400/500?random=${item}`}
                            alt=""
                        />
                    </motion.div>
                ))}

            </div>
        </section>
    );
};

export default Projects;