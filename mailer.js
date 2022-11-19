const nodemailer = require("nodemailer");

const sendmail = () => {
    try{
  const transporter = nodemailer.createTransport({
    port: 465, 
    host: "smtp.gmail.com",
    auth: {
      user: "vinayak.itoneclick@gmail.com",
      pass: "vticnqwhowwovdau",
    },
    secure: true,
    requireTLS: true,
  });

  const mailOptions = {
    from: 'vinayak.itoneclick@gmail.com',
    to: "chavan.vinayak017@gmail.com",
    subject: "test",
    html: "html",
  };
  
  transporter.sendMail(mailOptions);
  console.log('mail sent');
} catch(e) {
    console.log(e.message);
}
};

sendmail();

