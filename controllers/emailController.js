const nodemailer = require('nodemailer');

module.exports = {

    sendEMail: (req, res, next) => {
        let email = req.body.email

        const output = 
        `<p>Here is the information you submitted:</p>
        <ul>
        <li>Name: ${req.body.name}</li>
        <li>Anrede: ${req.body.anrede}</li>
        <li>Email: ${email}</li>
        <li>Select: ${req.body.select}</li>
        <li>Beschreibung:${req.body.beschreibung}</li>             
        <li>Agreed: ${req.body.agreed}</li>
        </ul>
        `;

        // create transporter, set host
        var transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'valid.nodemailer@gmail.com',
                pass: 'passwordvalid666'
            },
            tls: {
                rejectUnauthorized: false
            }

        });

        // the email content
        var mailOptions = {
            from: '"Valid Nodemailer" <valid.nodemailer@gmail.com>',
            to: email,
            subject: 'Node contact',
            subject: 'The information you submitted',
            text: 'hey',
            html: output
        };

        // send the email
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
                next();
            }
        });

    }
}