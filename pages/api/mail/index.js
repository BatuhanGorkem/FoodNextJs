const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const handler = async (req, res) => {
  const { fullName, phoneNumber, email, topic } = req.body;
  const msg = {
    to: "ekincan.akin@izmirteknoloji.com.tr",
    from: "batuhangorkem_8@hotmail.com",
    subject: "Contact Form",
    html: `<strong>Full Name: ${fullName}</strong><br><strong>Phone Number: ${phoneNumber}</strong><br><strong>Email: ${email}</strong><br><strong>Topic: ${topic}</strong>`,
  };
  await sgMail.send(msg);
  res.status(200).json({ message: "Success" });
};

export default handler;
