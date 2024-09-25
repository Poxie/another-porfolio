import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_SENDER,
        pass: process.env.EMAIL_PASSWORD
    }
});

const mailOptions = {
    from: `${process.env.EMAIL_FROM}:`,
    to: process.env.EMAIL_RECEIVER,
    subject: process.env.EMAIL_SUBJECT,
    text: ''
}

const sendErrorResponse = (message: string, status = 400) => {
    return Response.json({ message }, {
        status,
    })
}
export async function POST(request: Request) {
    const { name, email, message } = await request.json();
    
    if(!name) return sendErrorResponse('Name is required.');
    if(!email) return sendErrorResponse('Email is required.');
    if(!message) return sendErrorResponse('Message is required.');

    mailOptions.text = `${name} (${email}) said: ${message}`;

    const data = await transporter.sendMail(mailOptions);

    if(data.accepted) {
        return Response.json({ message: 'Success' });
    }
    return sendErrorResponse('Failed to send email.');
}