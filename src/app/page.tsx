import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';

export default function Home() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/u3538638467_Close-up_of_synthetic_skin_application_micro-deta_02ba45bb-e638-4c70-a73f-09df0c24257e_0.png"
            alt="DeepTech AI Hero"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to DeepTech AI
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mb-8">
            Pioneering the future of AI-generated content and media solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/about" 
              className="bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-gray-200 transition-colors inline-block text-center"
            >
              Learn More
            </Link>
            <Link 
              href="/gallery" 
              className="border border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-black transition-colors inline-block text-center"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Content</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Featured Item 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/media/Z5kfD1LH1T6gOsgIxMzGq_dbe6a4c92aeb4d62a1b823a5d4e76f71.jpg"
                  alt="AI Generated Art"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">AI Generated Art</h3>
                <p className="text-gray-600 mb-4">
                  Explore our collection of AI-generated artwork that pushes the boundaries of creativity.
                </p>
                <Link 
                  href="/gallery" 
                  className="text-black font-medium hover:underline"
                >
                  View Collection →
                </Link>
              </div>
            </div>
            
            {/* Featured Item 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/media/qycMi7fP4ZNojb7KVHI3E_b1fc47334fa643638dbecb9ee73fdc63.jpg"
                  alt="AI Film Studio"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">AI Film Studio</h3>
                <p className="text-gray-600 mb-4">
                  Discover our innovative approach to filmmaking using cutting-edge AI technology.
                </p>
                <Link 
                  href="/about" 
                  className="text-black font-medium hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </div>
            
            {/* Featured Item 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/media/adarkorchestra_28188_Woman_with_severe_black_bob_haircut_walk_20ed3f18-0855-4f12-a894-b5cb123719af_3.png"
                  alt="Future of AI"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Future of AI</h3>
                <p className="text-gray-600 mb-4">
                  Join us as we explore the future possibilities of artificial intelligence in media.
                </p>
                <Link 
                  href="/about" 
                  className="text-black font-medium hover:underline"
                >
                  Discover More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
} 