const express = require('express');
const cors = require('cors');
const { google } = require('googleapis');

// Create Express app
const app = express();

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Create email content
const createEmailContent = (formData) => {
  const { name, email, serviceType, message } = formData;
  
  return `
  <h2>New Contact Form Submission</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Service Type:</strong> ${serviceType || 'Not specified'}</p>
  <p><strong>Message:</strong> ${message}</p>
  `;
};

// Main handler function for email sending
async function sendContactEmail(req, res) {
  console.log('Received request:', req.method, req.path);
  console.log('Request body:', req.body);
  
  try {
    const formData = req.body;
    const { name, email, message } = formData;

    // Validate required fields
    if (!name || !email || !message) {
      console.log('Missing required fields');
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('Invalid email format');
      return res.status(400).json({ error: 'Please enter a valid email address' });
    }

    // Set up Gmail API with default credentials
    const auth = new google.auth.GoogleAuth({
      scopes: ['https://www.googleapis.com/auth/gmail.send']
    });

    // Create Gmail API client
    const gmail = google.gmail({
      version: 'v1',
      auth: auth
    });

    // Encode the email
    const emailContent = createEmailContent(formData);
    
    // Create email in base64 format
    const encodedEmail = Buffer.from(
      `From: "DeepTech AI Contact Form" <deeptechnologies@gmail.com>
To: deeptechnologies@gmail.com
Subject: New Contact Form Submission: ${formData.serviceType || 'General Inquiry'}
Content-Type: text/html; charset=utf-8

${emailContent}`
    ).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

    // Send email
    await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: encodedEmail
      }
    });

    console.log('Email sent successfully');
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
}

// Define routes
app.post('/', sendContactEmail);
app.post('/sendContactEmail', sendContactEmail);

// Health check endpoint
app.get('/', (req, res) => {
  res.status(200).send('Email service is running');
});

// Start the server
const PORT = parseInt(process.env.PORT) || 8080;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on port ${PORT}`);
});

// For Cloud Functions compatibility
exports.sendContactEmail = (req, res) => {
  if (req.method === 'POST') {
    return sendContactEmail(req, res);
  } else if (req.method === 'GET') {
    return res.status(200).send('Email service is running');
  } else {
    return res.status(405).send('Method not allowed');
  }
}; 