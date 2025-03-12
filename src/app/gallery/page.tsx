import React from 'react';
import Image from 'next/image';
import PageLayout from '@/components/PageLayout';

export default function Gallery() {
  // YouTube video gallery data
  const videos = [
    {
      youtubeId: "2U1AHiAJUEc",
      title: "Night of the Comet",
    },
    {
      youtubeId: "sFGfrXkjJXM",
      title: "Anarchy EP4",
    },
    {
      youtubeId: "mlozoGOiFqA",
      title: "SYNTHETIC",
    },
    {
      youtubeId: "qkDyOzcmFj8",
      title: "The Sprawl Trailer",
    },
    {
      youtubeId: "5c0TBYQLM7s",
      title: "Terreur",
    },
    {
      youtubeId: "RwE2tY8jBWg",
      title: "DeepTech AI Demo 1",
    },
    {
      youtubeId: "sBnOzh5KfEk",
      title: "DeepTech AI Demo 2",
    },
    {
      youtubeId: "7vMxQ6NBkvw",
      title: "DeepTech AI Demo 3",
    },
    {
      youtubeId: "14pk6h9Crhs",
      title: "AI Generated Video 1",
    },
    {
      youtubeId: "zIWaubPvhDM",
      title: "AI Generated Video 2",
    },
    {
      youtubeId: "kw07bHIn9Ug",
      title: "AI Generated Video 3",
    },
    {
      youtubeId: "MqJkJaC0ad8",
      title: "AI Generated Video 4",
    },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/u3538638467_macro_shot_Womans_face_submerged_in_water_water_s_06064e9a-3e6d-4d72-a737-c3c41fa6d643_0.png"
            alt="Woman's face submerged in water"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Video Gallery
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Explore our collection of AI-generated videos
          </p>
        </div>
      </section>

      {/* YouTube Video Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">AI-Generated Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md bg-white">
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
} 