import React from 'react';
import Image from 'next/image';
import { Film, Camera, Music, Sparkles } from 'lucide-react';
import PageLayout from '@/components/PageLayout';

export default function About() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative h-[50vh] gradient-bg text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/u3538638467_extreme_close_up_of_the_members_DC_comics_the_SUI_7b25d127-c97a-413e-b818-b973d6986be0_2.png"
            alt="About A Dark Orchestra Films"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
            About <span className="gradient-text">A Dark Orchestra Films</span>
          </h1>
          <p className="font-body text-xl md:text-2xl max-w-2xl text-white/80">
            Revolutionary multimedia AI film company creating cutting-edge content
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl font-bold mb-8 text-center">
              Our <span className="gradient-text">Story</span>
            </h2>
            <p className="font-body text-lg text-white/80 mb-8 leading-relaxed">
              A Dark Orchestra Films was founded by visionary filmmaker Chad Neo with a bold vision to revolutionize the way multimedia content is created and experienced. We believe in the transformative power of artificial intelligence to enhance human creativity and push the boundaries of what's possible in digital filmmaking.
            </p>
            <p className="font-body text-lg text-white/80 mb-8 leading-relaxed">
              As a multimedia AI film company, we specialize in creating cutting-edge content that seamlessly blends human artistic vision with advanced artificial intelligence technologies. Our work spans across various mediums including AI-generated films, music videos, and immersive multimedia experiences.
            </p>
            <p className="font-body text-lg text-white/80 mb-12 leading-relaxed">
              Since our inception, we've been at the forefront of AI-generated content creation, constantly refining our techniques and expanding our capabilities to deliver groundbreaking results that challenge conventional storytelling and visual expression.
            </p>

            <h2 className="font-heading text-4xl font-bold mb-8 text-center">
              Our <span className="gradient-text">Mission</span>
            </h2>
            <p className="font-body text-lg text-white/80 mb-8 leading-relaxed">
              At A Dark Orchestra Films, our mission is to democratize access to advanced AI tools for content creation while maintaining the highest standards of artistic quality and innovation. We strive to:
            </p>
            <ul className="list-disc pl-6 text-lg text-white/80 mb-12 space-y-3">
              <li>Push the boundaries of what's possible with AI-generated multimedia content</li>
              <li>Create immersive, emotionally resonant experiences that blur the line between human and machine creativity</li>
              <li>Foster collaboration between AI systems and human creators</li>
              <li>Develop ethical frameworks for the responsible use of AI in media production</li>
              <li>Share our knowledge and insights with the broader creative community</li>
            </ul>

            <h2 className="font-heading text-4xl font-bold mb-8 text-center">
              Meet <span className="gradient-text">Chad Neo</span>
            </h2>
            <div className="bg-gray-800/50 rounded-2xl p-8 mb-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
                  <Film className="w-8 h-8 text-red-400" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold">Chad Neo</h3>
                  <p className="font-body text-white/70">Founder & Creative Director</p>
                </div>
              </div>
              <p className="font-body text-lg text-white/80 mb-6 leading-relaxed">
                Chad Neo is the visionary filmmaker and creative force behind A Dark Orchestra Films. As a multifaceted creator, Chad brings together expertise in app development, AI content creation, videography, and direction to create groundbreaking multimedia experiences.
              </p>
              <p className="font-body text-lg text-white/80 mb-6 leading-relaxed">
                Known for pushing boundaries and dismissing conventional notions, Chad has cultivated a reputation for delivering innovative content that resonates with audiences. His work spans from AI-generated videos and music to complex multimedia projects that challenge traditional storytelling paradigms.
              </p>
              <p className="font-body text-lg text-white/80 leading-relaxed">
                With a bold creative philosophy rooted in originality and relentless innovation, Chad Neo continues to shape the future of AI-driven content creation, inspiring and elevating the creative community through his groundbreaking work.
              </p>
            </div>

            <h2 className="font-heading text-4xl font-bold mb-8 text-center">
              Our <span className="gradient-text">Approach</span>
            </h2>
            <p className="font-body text-lg text-white/80 mb-8 leading-relaxed">
              We combine cutting-edge AI technologies with creative direction to produce unique, immersive experiences. Our approach is characterized by:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="glass-effect p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <Sparkles className="w-6 h-6 text-red-400" />
                  <h3 className="font-heading text-xl font-bold">Innovation</h3>
                </div>
                <p className="font-body text-white/80">
                  We continuously explore new AI models, techniques, and workflows to stay at the forefront of technological advancement in multimedia creation.
                </p>
              </div>
              <div className="glass-effect p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <Camera className="w-6 h-6 text-red-400" />
                  <h3 className="font-heading text-xl font-bold">Creativity</h3>
                </div>
                <p className="font-body text-white/80">
                  We view AI as a creative partner, not just a tool, allowing for unexpected discoveries and novel artistic expressions in film and multimedia.
                </p>
              </div>
              <div className="glass-effect p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <Film className="w-6 h-6 text-red-400" />
                  <h3 className="font-heading text-xl font-bold">Quality</h3>
                </div>
                <p className="font-body text-white/80">
                  We maintain rigorous standards for all our outputs, ensuring that our AI-generated content meets or exceeds industry expectations for multimedia production.
                </p>
              </div>
              <div className="glass-effect p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <Music className="w-6 h-6 text-red-400" />
                  <h3 className="font-heading text-xl font-bold">Collaboration</h3>
                </div>
                <p className="font-body text-white/80">
                  We believe in the power of human-AI collaboration and work closely with clients to bring their visions to life through innovative multimedia experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
} 