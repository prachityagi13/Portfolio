import { motion } from "framer-motion";
import profile from "../assets/profile.jpeg";

const Hero = () => {
    return (
        <section className="hero">

            {/* LEFT SIDE TEXT */}
            <div className="hero-text">
                <motion.h1
                    initial={{ opacity: 0, y: -60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Hi, I'm Prachi Tyagi
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    Full Stack Developer | React | Node.js
                </motion.p>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <motion.div
                className="hero-image"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <motion.img
                    src={profile}
                    alt="profile"
                    whileHover={{ scale: 1.1 }}
                />
            </motion.div>

        </section>
    );
};

export default Hero;