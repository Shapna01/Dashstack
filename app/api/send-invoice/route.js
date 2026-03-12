import nodemailer from "nodemailer";

export async function POST() {

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "yourmail@gmail.com",
      pass: "yourpassword"
    }
  });

  await transporter.sendMail({
    from: "yourmail@gmail.com",
    to: "client@gmail.com",
    subject: "Invoice",
    text: "Please find your invoice attached."
  });

  return Response.json({message:"Invoice Sent"});
}