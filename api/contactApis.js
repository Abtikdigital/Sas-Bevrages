import Joi from "joi";
import mongoose from "mongoose";
import nodemailer from "nodemailer";

const { MAIL, MAIL_PASS, MONGODB_CONNECTION_STRING } = process.env;

let dbConnection;
let contactModel;

// Database Connection
const handleDbConnection = async () => {
  if (dbConnection) {
    return dbConnection;
  }
  dbConnection = await mongoose.connect(MONGODB_CONNECTION_STRING);
  return dbConnection;
};

// Send Mail
const sendMail = async (from, to, subject, html) => {
  try {
    let transporter = nodemailer.createTransport({
      auth: {
        user: MAIL,
        pass: MAIL_PASS,
      },
      service: "gmail",
    });
    let info = await transporter.sendMail({
      from,
      to,
      subject,
      html,
    });
    if (info) {
      console.log("Mail Has Been Sent Successfully");
    } else {
      console.log("Error while Sending Mail");
    }
  } catch (error) {
    console.log(`Error While Connecting Database`, error);
  }
};

// Contact Model
const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "* Name Is Required"],
      trim: true,
      lowerCase: true,
    },
    email: {
      type: String,
      required: [true, "* Email Is Required"],
      lowerCase: true,
      trim: true,
    },
    message: {
      type: String,
      lowerCase: true,
      trim: true,
    },
  },
  { timestamps: true }
);
contactModel =
  mongoose.models.contactModel || mongoose.model("contactModel", contactSchema);

// Email Templates
// (1) Firm Template
const firmTemaplte = (data) => {
  try {
    let { name, email, message } = data;

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SAS Beverages Contact Email</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }
    .container {
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .header {
      background-color: #82B3D1;
      color: #ffffff;
      text-align: center;
      padding: 20px;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      padding: 20px;
    }
    .content h2 {
      color: #82B3D1;
      font-size: 20px;
      margin-top: 0;
    }
    .content table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 20px;
    }
    .content th, .content td {
      padding: 10px;
      text-align: left;
      border: 1px solid #82B3D1;
    }
    .content th {
      background-color: #82B3D1;
      color: #ffffff;
      font-weight: bold;
      border-left: 2px solid #ffffff; /* White border for left side of header cells */
    }
    .content td {
      color: #333333;
    }
    .footer {
      background-color: #82B3D1;
      color: #ffffff;
      text-align: center;
      padding: 10px;
      font-size: 12px;
    }
    .footer a {
      color: #ffffff;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>SAS Beverages</h1>
    </div>
    <div class="content">
      <h2>New Contact Message</h2>
      <table>
        <tr>
          <th>Name</th>
          <td>${name}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>${email}</td>
        </tr>
       ${message &&
      `<tr>
                <th>Message</th>
                <td>${message}</td>
            </tr>`
      }
      </table>
    </div>
    <div class="footer">
      <p>© 2025 SAS Beverages. All rights reserved.</p>
      <p><a href="https://www.sasbeverages.com">Visit our website</a></p>
    </div>
  </div>
</body>
</html>`;
  } catch (error) {
    console.log("Error While Creating Firm Template");
  }
};

// (2) User Template
const userTemplate = (data) => {
  try {
    let { name } = data;
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SAS Beverages Contact Confirmation</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }
    .container {
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .header {
      background-color: #82B3D1;
      color: #ffffff;
      text-align: center;
      padding: 20px;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      padding: 20px;
    }
    .content h2 {
 
    color: #82B3D1;
      font-size: 20px;
      margin-top: 0;
    }
    .content p {
      color: #333333;
      line-height: 1.6;
    }
    .footer {
      background-color: #82B3D1;
      color: #ffffff;
      text-align: center;
      padding: 10px;
      font-size: 12px;
    }
    .footer a {
      color: #ffffff;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>SAS Beverages</h1>
    </div>
    <div class="content">
      <p>Dear ${name},</p>
      <h2>Thank You for Your Message</h2>
      <p>Thank you for reaching out to SAS Beverages! We have received your message and appreciate your interest. Our team will review your inquiry and get back to you soon.</p>
    </div>
    <div class="footer">
      <p>© 2025 SAS Beverages. All rights reserved.</p>
      <p><a href="https://www.sasbeverages.com">Visit our website</a></p>
    </div>
  </div>
</body>
</html>
`;
  } catch (error) {
    console.log("Error While Generating User Template");
  }
};

// Validation Model
const contactValidationSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
});
                                                                                                                                                                                                                                                                                 
// Api Handler Function

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ isSuccess: false, message: "Only Post Method Is Allowed" })
  }
  try {
    await handleDbConnection();
    let { name, email, message } = req.body;
    let { error } = contactValidationSchema.validate({ name, email });
    if (error) {
      return res
        .status(400)
        .json({ isSuccess: false, message: "Validation Error", error });
    }
    let isEmailAlreadyExist = await contactModel.findOne({ email });
    if (isEmailAlreadyExist) {
      return res
        .status(400)
        .json({ isSuccess: false, message: "Email Is Already Exist" });
    }
    let newContactDetails = new contactModel({
      name,
      email,
      message,
    });
    let isSaved = await newContactDetails.save();
    if (isSaved) {

      await Promise.all([
        await sendMail(MAIL, MAIL, firSubject, firmTemaplte(req.body)),
        await sendMail(MAIL, email, userSubject, userTemplate(req.body)),
      ]);
      return res.status(201).json({
        isSuccess: true,
        message: "Contact Details Added Successfully",
      });
    } else {
      return res.status(400).json({
        isSuccess: false,
        message: "Error While Inserting Contact Details",
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ isSuccess: false, message: "Internal Server Error", error });
  }
};

export default handler;
