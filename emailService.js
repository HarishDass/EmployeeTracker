
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.listen(5000, () => {
    console.log("The server started on port 5000 !!!!!!");
});
app.get("/", (req, res) => {
    res.send(
        "<h1 style='text-align: center'>Welcome to My World<br><br>😃👻😃👻😃👻😃👻😃</h1>"
    );
});


app.post("/sendmail", (req, res) => {
    console.log("request came");
    let user = req.body;
    sendMail(user, info => {
        console.log(`The mail has been send 😃 and the id is ${info.messageId}`);
        res.send(info);
    });
});

async function sendMail(user, callback) {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'zeuswannacry@gmail.com',
            pass: 'ikbk qdyv dccg tzrs'
        }

    });
    let mailOptions = {
        from: `Hi Guru's Greeting  <zeuswannacry@gmail.com>`,
        to: user.email,
        subject: "Email Service 👻",
        html: `

        <h1> Hi ${user.name} from ${user.department}</h1>
        <h2> Why are you not inform to take a Leave on ${user.date}</h2>
        <p></p>`
    };

    let info = await transporter.sendMail(mailOptions);

    callback(info);
} 