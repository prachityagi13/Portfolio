import { motion } from "framer-motion";

const About = () => {
    return (
        <section className="about">
            <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
            >
                About Me
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                I am a passionate full-stack developer...
            </motion.p>
        </section>
    );
};

export default About;