import React from 'react';
import Image from 'next/image';
import PageLayout from '@/components/PageLayout';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/u3538638467_httpss.mj.runSoO7WIhXebc_Massive_quantum_processi_3ccafacd-38f5-44cd-aa8b-be6c548bb071_0.png"
            alt="Contact A Dark Orchestra Films"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Connect With Us
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Reach out through our social media channels
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            <p className="text-lg text-gray-700 mb-12">
              We'd love to hear from you! Whether you're interested in our AI-generated content services, 
              have questions about our technology, or want to explore collaboration opportunities, 
              please connect with us through our social media channels.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Twitter */}
              <a 
                href="https://x.com/JusChadneo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-black text-white rounded-full mb-4">
                  <FaTwitter className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Twitter</h3>
                <p className="text-gray-600 text-center">Follow us for updates and reach out via DM</p>
              </a>
              
              {/* Facebook */}
              <a 
                href="https://www.facebook.com/profile.php?id=100093569451356" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-black text-white rounded-full mb-4">
                  <FaFacebook className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Facebook</h3>
                <p className="text-gray-600 text-center">Connect with us on Facebook for the latest news</p>
              </a>
              
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/a_dark_orchestra/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-black text-white rounded-full mb-4">
                  <FaInstagram className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Instagram</h3>
                <p className="text-gray-600 text-center">Follow our visual journey and message us directly</p>
              </a>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Why Connect on Social Media?</h3>
              <p className="text-gray-700 mb-4">
                We're most active on our social media channels, where we share our latest projects, 
                respond quickly to inquiries, and engage with our community. 
                For the fastest response, please reach out to us there!
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
} 