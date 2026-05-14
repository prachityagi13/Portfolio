import { motion } from "framer-motion";
import cuteCoder from "../assets/cuteCoder.png";

const About = () => {
    return (
        <section className="about" id="about">

            <div className="about-container">

                {/* LEFT IMAGE */}
                <motion.div
                    className="about-image"
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <img src={cuteCoder} alt="cute coder" />
                </motion.div>

                {/* RIGHT TEXT */}
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
                        Frontend Developer specializing in React.js and modern web technologies, with practical experience in building scalable web applications and role-based SaaS platforms.
                    </motion.p>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            show: { opacity: 1, y: 0 },
                        }}
                    >
                        Passionate about clean code, performance optimization, and learning emerging technologies like AI and AR.
                    </motion.p>
                </motion.div>

            </div>
        </section>
    );
};

export default About;