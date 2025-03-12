import React from 'react';
import Image from 'next/image';
import PageLayout from '@/components/PageLayout';

export default function About() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/u3538638467_extreme_close_up_of_the_members_DC_comics_the_SUI_7b25d127-c97a-413e-b818-b973d6986be0_2.png"
            alt="About DeepTech AI"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            About Us
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Pioneering the future of AI-generated content
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6">
              DeepTech AI was founded with a vision to revolutionize the way media content is created and consumed. We believe in the transformative power of artificial intelligence to enhance human creativity and push the boundaries of what's possible in digital media.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our team consists of AI researchers, creative directors, and technology enthusiasts who share a passion for exploring the intersection of technology and art. We're committed to developing innovative AI solutions that empower creators and captivate audiences.
            </p>
            <p className="text-lg text-gray-700 mb-12">
              Since our inception, we've been at the forefront of AI-generated content creation, constantly refining our techniques and expanding our capabilities to deliver cutting-edge results for our clients and partners.
            </p>

            <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              At DeepTech AI, our mission is to democratize access to advanced AI tools for content creation while maintaining the highest standards of quality and innovation. We strive to:
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-700 mb-12 space-y-3">
              <li>Push the boundaries of what's possible with AI-generated media</li>
              <li>Create immersive, emotionally resonant experiences that blur the line between human and machine creativity</li>
              <li>Foster collaboration between AI systems and human creators</li>
              <li>Develop ethical frameworks for the responsible use of AI in media production</li>
              <li>Share our knowledge and insights with the broader creative community</li>
            </ul>

            <h2 className="text-3xl font-bold mb-8">Our Approach</h2>
            <p className="text-lg text-gray-700 mb-6">
              We combine cutting-edge AI technologies with creative direction to produce unique, immersive experiences. Our approach is characterized by:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-gray-700">
                  We continuously explore new AI models, techniques, and workflows to stay at the forefront of technological advancement.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Creativity</h3>
                <p className="text-gray-700">
                  We view AI as a creative partner, not just a tool, allowing for unexpected discoveries and novel artistic expressions.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Quality</h3>
                <p className="text-gray-700">
                  We maintain rigorous standards for all our outputs, ensuring that our AI-generated content meets or exceeds industry expectations.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Collaboration</h3>
                <p className="text-gray-700">
                  We believe in the power of human-AI collaboration and work closely with clients to bring their visions to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
} 