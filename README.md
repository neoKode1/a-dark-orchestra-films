# A Dark Orchestra Films

![A Dark Orchestra Films Banner](./public/media/adarkorchestra_28188_Extreme_wide_shot_-_Corporate_towers_pie_62eb6736-33d3-464a-8e15-8ad85947a3a8_1%20-%20Copy.png)

## Overview

**A Dark Orchestra Films** is a revolutionary multimedia AI film company creating cutting-edge content through artificial intelligence. Founded by visionary filmmaker **Chad Neo**, we push the boundaries of storytelling by combining advanced AI technology with cinematic artistry.

## Our Vision

We believe in the power of AI to transform storytelling and create experiences that were once impossible. Through our innovative approach to filmmaking, we're redefining what's possible in the world of multimedia entertainment.

## Core Services

### 🎬 AI-Generated Films
- Revolutionary AI-powered film production
- Cutting-edge visual effects and animations
- Innovative storytelling techniques
- Real-time content generation

### 🎨 Visual Artwork
- AI-generated artwork and concept designs
- Character design and development
- Sci-fi and cinematic visual effects
- Portfolio of stunning multimedia content

### 🎭 Creative Direction
- Visionary filmmaking approach
- AI integration in traditional filmmaking
- Experimental storytelling methods
- Cross-platform content creation

## Featured Productions

Our latest productions showcase the cutting-edge capabilities of AI in filmmaking:

- **Quantum Processing Visualizations** - Sci-fi inspired content
- **Character Design Series** - AI-generated character concepts
- **Cinematic Still Photography** - Professional-grade imagery
- **Afrofuturism Profiles** - Innovative cultural representation

## Connect With Us

- [@JusChadneo](https://x.com/JusChadneo) - Founder & Visionary Filmmaker
- [@a_dark_orchestra](https://www.instagram.com/a_dark_orchestra/) - Instagram
- [A Dark Orchestra Films](https://youtube.com/@adarkorchestra) - YouTube
- [neoKode1](https://github.com/neoKode1) - GitHub

## Contact

- **Email**: info@adarkorchestrafilms.com
- **Location**: San Francisco, CA
- **Website**: [adarkorchestrafilms.com](https://adarkorchestrafilms.com)

## License

© 2024 A Dark Orchestra Films. All rights reserved.

---

# A Dark Orchestra Films Website

A modern, cinematic website for A Dark Orchestra Films built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- **Dark Cinematic Theme** - Red and black color scheme with glassmorphism effects
- **Video Background** - Dynamic video backgrounds for immersive experience
- **Gallery Showcase** - 4x7 grid layout showcasing AI-generated artwork
- **YouTube Integration** - Embedded video content from our latest productions
- **Responsive Design** - Optimized for all devices and screen sizes
- **Contact Form** - Integrated with Google Cloud Functions for secure email handling

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

## Technology Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Custom CSS animations
- **UI Components**: Radix UI, Lucide React icons
- **Deployment**: Vercel (recommended)
- **Email Service**: Google Cloud Functions with Gmail API

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Google Cloud Functions Documentation](https://cloud.google.com/functions/docs)
- [Gmail API Documentation](https://developers.google.com/gmail/api/guides)

## About the Founder

**Chad Neo** is the visionary filmmaker and founder of A Dark Orchestra Films. As an AI content creation developer, videographer, and director, Chad brings a unique blend of technical expertise and artistic vision to every project. His work spans from AI-generated videos and music to innovative app development, making him a trailblazer in the intersection of AI and creative arts.

---

*"We're more alike than you may think."* - Chad Neo
