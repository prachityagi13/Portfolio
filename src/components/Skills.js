import { motion } from "framer-motion";

const skills = ["React", "Node", "JavaScript", "SQL", "HTML", "CSS"];

const Skills = () => {
    return (
        <section className="skills">
            <h2>Skills</h2>

            <motion.div
                className="skill-list"
                initial="hidden"
                whileInView="show"
                variants={{
                    show: {
                        transition: { staggerChildren: 0.1 },
                    },
                }}
            >
                {skills.map((skill, i) => (
                    <motion.span
                        key={i}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            show: { opacity: 1, y: 0 },
                        }}
                        whileHover={{ scale: 1.1 }}
                    >
                        {skill}
                    </motion.span>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;