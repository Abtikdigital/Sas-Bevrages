import Joi from "joi";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
const { MAIL, MAIL_PASS, MONGODB_CONNECTION_STRING } = process.env;

let dbCon;
let EmailModel;

const transporter = nodemailer.createTransport({
    auth: {
        user: MAIL,
        pass: MAIL_PASS,
    },
    service: "gmail",
});

const sendMail = async (from, to, subject, html) => {
    try {
        let info = await transporter.sendMail({ from, to, subject, html });
        if (info) {
            console.log("Mail Sent Successfully");
        } else {
            console.log("Error While Sending Mail");
        }
    } catch (error) {
        console.log("Error While Sending Mail", error);
    }
};

// Firm Template
const firmTemaplte = (data) => {

    try {
        let { email } = data
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
       
      </table>
    </div>
    <div class="footer">
      <p>© 2025 SAS Beverages. All rights reserved.</p>
      <p><a href="https://www.sasbeverages.com">Visit our website</a></p>
    </div>
  </div>
</body>
</html>`;
    } catch (error
    ) {
        console.log(error)
    }
}
// User Template
const userTemplate = (data) => {
    try {
        let { name } = data
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
        console.log(error)
    }
}

// Mongodb Connection
const dbConnection = async () => {
    try {
        if (dbCon) {
            return dbCon
        }
        dbCon = await mongoose.connect(MONGODB_CONNECTION_STRING)
        return dbCon
    } catch (error) {
        console.log("Error While Connecting Database", error)
    }
}

// Mongodb Model 
const EmailSchema = mongoose.Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        required: [true, 'Email is required'],
    }
}, { timestamps: true })

EmailModel = mongoose.models.EmailModel || mongoose.model("EmailModel", EmailSchema)

// Validation
const emailValidationSchema = Joi.object({
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required().messages({
            'string.empty': 'Email is required',
            'any.required': 'Email is required',
            'string.email': 'Please enter a valid email address (must be .com or .net)',

        })
})


const handler = async (req, res) => {
    try {
        await dbConnection()
        let { email } = req.body
        let { error } = emailValidationSchema.validate({ email })
        if (error) {
            return res.status(400).json({ isSuccess: false, message: "Validation error", error })
        }
        let isEmailAlreadyExist = await EmailModel.findOne({ email })
        if (isEmailAlreadyExist) {
            return res.status(409).json({ isSuccess: false, message: "Email is already exist" })
        }
        let newEmail = new EmailModel({ email })
        let isSaved = await newEmail.save()
        if (isSaved) {
            let firmSubject = ""
            let userSubject = ""
            await Promise.all([
                await sendMail(MAIL, MAIL, firmSubject, firmTemaplte(req.body)),
                await sendMail(MAIL, email, userSubject, userTemplate(req.body))
            ])
            return res.status(201).json({ isSuccess: true, message: "Email is added successfully" })
        } else {
            return res.status(400).json({ isSuccess: false, message: "Error While Inserting Email" })
        }
    } catch (error) {
        return res.status(500).json({ isSuccess: false, message: "Internal Server Error", error })
    }
}
export default handler