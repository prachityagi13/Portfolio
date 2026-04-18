import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section className="contact" id="contact">

            {/* LEFT SIDE */}
            <div className="contact-left">
                <h1>
                    Want to build <br />
                    something <br />
                    amazing?
                </h1>

                <p className="sub-text">Or just say hello 👋</p>
            </div>

            {/* RIGHT SIDE */}
            <div className="contact-right">

                {/* SOCIAL ICONS */}
                <div className="socials">
                    <a href="https://www.linkedin.com/in/prachi-tyagi-9a1b4b1a3/" target="_blank" rel="noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/prachi-tyagi" target="_blank" rel="noreferrer">
                        <FaGithub />
                    </a>
                    <a href="mailto:prachit764@gmail.com">
                        <FaEnvelope />
                    </a>
                </div>

                {/* FORM */}
                <form className="contact-form">
                    <h3>Let's Connect</h3>

                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" rows="4"></textarea>

                    <button type="submit">Send Message →</button>
                </form>

            </div>

        </section>
    );
};

export default Contact;