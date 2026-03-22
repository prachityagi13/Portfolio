const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/contact", async (req, res) => {
    const { name, email, message } = req.body;

    try {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "your_email@gmail.com",
                pass: "your_app_password",
            },
        });

        await transporter.sendMail({
            from: email,
            to: "your_email@gmail.com",
            subject: `Message from ${name}`,
            text: message,
        });

        res.send("Message sent");
    } catch (err) {
        res.status(500).send("Error sending message");
    }
});

app.listen(5000, () => console.log("Server running"));