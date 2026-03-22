import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="hero">
            <motion.h1
                initial={{ opacity: 0, y: -60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Hi, I'm Prachi 👋
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                Full Stack Developer | React | Node.js
            </motion.p>
        </section>
    );
};

export default Hero;