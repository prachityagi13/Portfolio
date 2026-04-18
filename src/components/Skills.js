import { motion } from "framer-motion";

const skillData = [
    {
        title: "Languages",
        items: ["C++", "JavaScript", "SQL"],
    },
    {
        title: "Frontend",
        items: ["React.js", "HTML", "CSS", "Bootstrap"],
    },
    {
        title: "Backend",
        items: ["Node.js", "Express.js"],
    },
    {
        title: "Database",
        items: ["PostgreSQL"],
    },
    {
        title: "Tools",
        items: ["Git", "GitHub", "VS Code", "Postman"],
    },
];

const Skills = () => {
    return (
        <section className="skills" id="skills">
            <h2>Skills</h2>

            <motion.div
                className="skills-container"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                    show: {
                        transition: { staggerChildren: 0.2 },
                    },
                }}
            >
                {skillData.map((category, index) => (
                    <motion.div
                        className="skill-card"
                        key={index}
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            show: { opacity: 1, y: 0 },
                        }}
                    >
                        <h3>{category.title}</h3>

                        <div className="skill-items">
                            {category.items.map((skill, i) => (
                                <motion.span
                                    key={i}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;