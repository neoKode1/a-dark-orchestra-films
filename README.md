# DeepTech AI

![DeepTech AI Banner](./media/deepteckimg.png)

## Overview

DeepTech AI is a pioneering technology company focused on developing cutting-edge AI solutions. Our platform combines advanced artificial intelligence with practical applications in streaming, content creation, and digital interaction.

## Core Products

###  Streamy
- AI-powered live streaming platform
- Advanced avatar technology
- Real-time interactions
- Ultra-low latency streaming
- AI-powered chat moderation

###  Medusa.io
- Creative AI suite
- Text-to-Image Generation
- Image-to-Video Transformation
- Smart Prompt Generation

###  Narrative AI
- Web-based AI application
- Image generation and animation
- Voice integration
- Interactive storytelling

## Connect With Us

- [@io2Medusa](https://x.com/io2Medusa) - Twitter
- [@JusChadneo](https://x.com/JusChadneo) - Twitter
- [neoKode1](https://github.com/neoKode1) - GitHub

## License

© 2024 DeepTechnologies llc. All rights reserved.

# DeepTech AI Website

A modern website for DeepTech AI built with Next.js, React, TypeScript, and Tailwind CSS.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Email Configuration with Google Cloud

The contact form is set up to send emails using a Google Cloud Function with default service account credentials. This approach provides better security and reliability compared to sending emails directly from the browser or server.

### Setting Up the Google Cloud Function

1. Enable the Gmail API in your Google Cloud project
   - Go to the [Google Cloud Console](https://console.cloud.google.com/)
   - Navigate to "APIs & Services" > "Library"
   - Search for "Gmail API" and enable it

2. Deploy the Cloud Function
   - Go to the [Cloud Functions page](https://console.cloud.google.com/functions) or [Cloud Run Functions page](https://console.cloud.google.com/run)
   - Click "CREATE FUNCTION" or "WRITE A FUNCTION"
   - Configure the function:
     - Name: `sendContactEmail`
     - Region: Select a region close to your users (e.g., us-central1)
     - Trigger type: HTTP
     - Authentication: Allow unauthenticated invocations
     - Runtime: Node.js 18 or 22
     - Source code: Upload the `cloud-function-updated.zip` file
     - Entry point: `sendContactEmail`
   - Click "Deploy"

3. Set up IAM permissions
   - Go to "IAM & Admin" > "Service Accounts"
   - Find the service account used by your function (usually has "cloudfunctions" in the name)
   - Add the "Gmail API User" role to this service account

4. Update your website configuration
   - After deployment, copy the function URL
   - Create or update the `.env.local` file in the root directory of the project
   - Add the following environment variable:
     ```
     GOOGLE_CLOUD_FUNCTION_URL=your-cloud-function-url
     ```

### Troubleshooting

If you encounter issues with the contact form:

1. **HTML Response Instead of JSON**: If your function returns HTML instead of JSON, check:
   - The function is properly deployed with the correct code
   - The function URL is correct in your `.env.local` file
   - The function has proper CORS headers set

2. **Authentication Issues**: If you see authentication errors:
   - Ensure the service account has the correct permissions
   - Verify the Gmail API is enabled
   - Check that the function is using default credentials correctly

3. **Testing the Function**: You can test the function directly:
   - Use the "TEST" button in the Cloud Function console
   - Send a test request with a tool like Postman
   - Check the function logs for any errors

### Security Benefits

This approach is more secure because:
1. It uses the default service account credentials managed by Google Cloud
2. You don't need to include the service account key file in your code
3. Permissions are managed through IAM rather than through a key file

## Building for Production

To build the application for production, run:

```bash
npm run build
```

Then, you can start the production server:

```bash
npm start
```

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Google Cloud Functions Documentation](https://cloud.google.com/functions/docs)
- [Gmail API Documentation](https://developers.google.com/gmail/api/guides)
