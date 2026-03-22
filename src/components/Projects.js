import { motion } from "framer-motion";

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Work</h2>

            <motion.div
                className="masonry"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                    show: { transition: { staggerChildren: 0.15 } },
                }}
            >
                {[1, 2, 3].map((item) => (
                    <motion.div
                        className="card"
                        key={item}
                        variants={{
                            hidden: { opacity: 0, y: 60 },
                            show: { opacity: 1, y: 0 },
                        }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <img src={`https://picsum.photos/400/50${item}`} alt="" />
                        <div className="overlay">Project {item}</div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;