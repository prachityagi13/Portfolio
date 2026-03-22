import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section className="contact">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            >
                Contact Me
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
            >
                <input placeholder="Name" />
                <input placeholder="Email" />
                <textarea placeholder="Message" />
                <button>Send</button>
            </motion.div>
        </section>
    );
};

export default Contact;