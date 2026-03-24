import { motion } from "framer-motion";

const About = () => {
    return (
        <section className="about" id="about">

            <motion.div
                className="about-content"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    show: {
                        transition: { staggerChildren: 0.2 },
                    },
                }}
            >
                <motion.h2
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        show: { opacity: 1, y: 0 },
                    }}
                >
                    About Me
                </motion.h2>

                <motion.p
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        show: { opacity: 1, y: 0 },
                    }}
                >
                    Full-stack developer with hands-on experience in React.js and Node.js,
                    currently pursuing MCA. Skilled in building scalable web applications
                    and multi-user SaaS platforms with role-based systems.
                </motion.p>

                <motion.p
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        show: { opacity: 1, y: 0 },
                    }}
                >
                    Experienced in frontend development, backend APIs, and database
                    management using PostgreSQL. Passionate about clean code, performance
                    optimization, and learning emerging technologies like AI and AR.
                </motion.p>
            </motion.div>

        </section>
    );
};

export default About;