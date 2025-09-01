import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Film, Video, Music, Camera } from 'lucide-react';
import PageLayout from '@/components/PageLayout';

export default function Home() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source 
              src="/media/adarkorchestra_28188__--ar_21_--bs_2_--video_1_--end_loop_5f2e42e9-a7fb-492c-9ec8-cb1b4596066d_0.mp4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-1">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 glass-effect rounded-full px-6 py-3 mb-8 animate-glow">
              <Film className="w-5 h-5 text-red-400" />
              <span className="font-body text-white/90 text-sm font-medium">
                Multimedia AI Film Company
              </span>
            </div>

            {/* MASSIVE TITLE - Left Aligned with reduced opacity */}
            <div className="mb-8 px-4">
              <h1 className="mega-title font-heading font-black text-red-500/70 text-shadow-red leading-none text-left">
                A DARK<br />
                ORCHESTRA
              </h1>
            </div>

            {/* Subtitle */}
            <p className="font-body text-lg md:text-xl text-white/70 mb-12 max-w-3xl leading-relaxed px-4 text-left">
              Revolutionary multimedia AI film company creating cutting-edge content through artificial intelligence. 
              Created by The AI Visionary Filmmaker Chad Neo.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 items-start mb-16 px-4">
              <Link 
                href="/about" 
                className="button-primary group flex items-center space-x-2"
              >
                <span>Discover Our Vision</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link 
                href="/gallery" 
                className="button-secondary group flex items-center space-x-2"
              >
                <Video className="w-5 h-5" />
                <span>View Gallery</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl px-4">
              <div className="glass-effect rounded-lg p-6 text-center">
                <Film className="w-8 h-8 text-red-400 mx-auto mb-3" />
                <div className="font-heading text-2xl font-bold text-white mb-1">100+</div>
                <div className="font-body text-white/70 text-sm">AI Films</div>
              </div>
              <div className="glass-effect rounded-lg p-6 text-center">
                <Music className="w-8 h-8 text-red-400 mx-auto mb-3" />
                <div className="font-heading text-2xl font-bold text-white mb-1">50+</div>
                <div className="font-body text-white/70 text-sm">Soundtracks</div>
              </div>
              <div className="glass-effect rounded-lg p-6 text-center">
                <Camera className="w-8 h-8 text-red-400 mx-auto mb-3" />
                <div className="font-heading text-2xl font-bold text-white mb-1">24/7</div>
                <div className="font-body text-white/70 text-sm">Production</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="w-6 h-10 border-2 border-red-500/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-red-500/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Latest</span> Productions
            </h2>
            <p className="font-body text-xl text-gray-400 max-w-2xl mx-auto">
              Experience our latest AI-generated films and multimedia content that pushes the boundaries of creativity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Video 1 */}
            <div className="group relative overflow-hidden rounded-2xl card-hover">
              <div className="relative h-80">
                <iframe
                  src="https://www.youtube.com/embed/PAfe79u8T3U?si=QnvrXfM-T7_0OvR-"
                  title="A Dark Orchestra - Featured Production 1"
                  className="w-full h-full rounded-2xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <a 
                  href="https://youtu.be/PAfe79u8T3U?si=QnvrXfM-T7_0OvR-" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-red-300 hover:text-white transition-colors duration-300"
                >
                  <span>Watch on YouTube</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            {/* Featured Video 2 */}
            <div className="group relative overflow-hidden rounded-2xl card-hover">
              <div className="relative h-80">
                <iframe
                  src="https://www.youtube.com/embed/vA9E202p2Bc?si=E_FNXAlHf9YI3PaH"
                  title="A Dark Orchestra - Featured Production 2"
                  className="w-full h-full rounded-2xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <a 
                  href="https://youtu.be/vA9E202p2Bc?si=E_FNXAlHf9YI3PaH" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-red-300 hover:text-white transition-colors duration-300"
                >
                  <span>Watch on YouTube</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            {/* Featured Video 3 */}
            <div className="group relative overflow-hidden rounded-2xl card-hover">
              <div className="relative h-80">
                <iframe
                  src="https://www.youtube.com/embed/GI_oVVu_Nhk?si=bjLhxnf0LPeLKB7J"
                  title="A Dark Orchestra - Featured Production 3"
                  className="w-full h-full rounded-2xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <a 
                  href="https://youtu.be/GI_oVVu_Nhk?si=bjLhxnf0LPeLKB7J" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-red-300 hover:text-white transition-colors duration-300"
                >
                  <span>Watch on YouTube</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Featured Video 4 */}
            <div className="group relative overflow-hidden rounded-2xl card-hover">
              <div className="relative h-80">
                <iframe
                  src="https://www.youtube.com/embed/q-MAtVddHDs?si=tHFMGM-z1Es3-AmB"
                  title="A Dark Orchestra - Featured Production 4"
                  className="w-full h-full rounded-2xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <a 
                  href="https://youtu.be/q-MAtVddHDs?si=tHFMGM-z1Es3-AmB" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-red-300 hover:text-white transition-colors duration-300"
                >
                  <span>Watch on YouTube</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Featured Video 5 */}
            <div className="group relative overflow-hidden rounded-2xl card-hover">
              <div className="relative h-80">
                <iframe
                  src="https://www.youtube.com/embed/db8-XM4IfI0?si=NRDMGk69gCDJZOMR"
                  title="A Dark Orchestra - Featured Production 5"
                  className="w-full h-full rounded-2xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <a 
                  href="https://youtu.be/db8-XM4IfI0?si=NRDMGk69gCDJZOMR" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-red-300 hover:text-white transition-colors duration-300"
                >
                  <span>Watch on YouTube</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Featured Video 6 */}
            <div className="group relative overflow-hidden rounded-2xl card-hover">
              <div className="relative h-80">
                <iframe
                  src="https://www.youtube.com/embed/V5EUTsyIPFw?si=egh-ZL1rczI9OoZ6"
                  title="A Dark Orchestra - Featured Production 6"
                  className="w-full h-full rounded-2xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <a 
                  href="https://youtu.be/V5EUTsyIPFw?si=egh-ZL1rczI9OoZ6" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-red-300 hover:text-white transition-colors duration-300"
                >
                  <span>Watch on YouTube</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-bg">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Experience the Future of Film?
            </h2>
            <p className="font-body text-xl text-white/80 mb-8">
              Join us in creating the next generation of AI-powered multimedia content. 
              Let's bring your vision to life.
            </p>
            <Link 
              href="/contact" 
              className="button-primary inline-flex items-center space-x-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
} 