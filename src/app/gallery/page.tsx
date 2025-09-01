'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Film, Video, Camera, Sparkles, X, ChevronLeft, ChevronRight } from 'lucide-react';
import PageLayout from '@/components/PageLayout';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // All available images from the media folder - 4x7 grid (28 images)
  const images = [
    {
      src: "/media/adarkorchestra_28188_Extreme_wide_shot_-_Corporate_towers_pie_62eb6736-33d3-464a-8e15-8ad85947a3a8_1 - Copy.png",
      alt: "Corporate towers extreme wide shot",
      category: "Sci-Fi"
    },
    {
      src: "/media/adarkorchestra_28188_Woman_with_severe_black_bob_haircut_walk_20ed3f18-0855-4f12-a894-b5cb123719af_3.png",
      alt: "Woman with severe black bob haircut",
      category: "Character Design"
    },
    {
      src: "/media/qycMi7fP4ZNojb7KVHI3E_b1fc47334fa643638dbecb9ee73fdc63.jpg",
      alt: "AI Generated Artwork",
      category: "AI Art"
    },
    {
      src: "/media/u3538638467_Close-up_of_synthetic_skin_application_micro-deta_02ba45bb-e638-4c70-a73f-09df0c24257e_0.png",
      alt: "Close-up of synthetic skin application",
      category: "Visual Effects"
    },
    {
      src: "/media/u3538638467_extreme_close_up_of_the_members_DC_comics_the_SUI_7b25d127-c97a-413e-b818-b973d6986be0_2.png",
      alt: "Extreme close-up of DC comics characters",
      category: "Character Design"
    },
    {
      src: "/media/u3538638467_httpss.mj.runSoO7WIhXebc_Massive_quantum_processi_3ccafacd-38f5-44cd-aa8b-be6c548bb071_0.png",
      alt: "Massive quantum processing visualization",
      category: "Sci-Fi"
    },
    {
      src: "/media/u3538638467_macro_shot_Womans_face_submerged_in_water_water_s_06064e9a-3e6d-4d72-a737-c3c41fa6d643_0.png",
      alt: "Woman's face submerged in water",
      category: "Cinematic"
    },
    {
      src: "/media/Z5kfD1LH1T6gOsgIxMzGq_dbe6a4c92aeb4d62a1b823a5d4e76f71.jpg",
      alt: "AI Generated Artwork",
      category: "AI Art"
    },
    {
      src: "/media/adarkorchestra_28188_The_interior_of_a_retro-futuristic_space_638ede4d-ca7f-45f3-9dc8-2fd97f905591_0.png",
      alt: "Retro-futuristic space interior",
      category: "Sci-Fi"
    },
    {
      src: "/media/adarkorchestra_28188_httpss.mj.runlTOVOrSvPVY_a_cinematic_sti_8f3e8e58-4eab-44f5-8f41-ea87e9eb12c2_2.png",
      alt: "Cinematic still",
      category: "Cinematic"
    },
    {
      src: "/media/Legend_34.jpg",
      alt: "Legend Artwork",
      category: "AI Art"
    },
    {
      src: "/media/adarkorchestra_28188_NO_RAIN_NO_WET_NO_WATER__Hyperrealistic__75057304-596a-4a17-b688-4082edc4f786_0.png",
      alt: "Hyperrealistic no rain scene",
      category: "Cinematic"
    },
    {
      src: "/media/adarkorchestra_28188_NO_RAIN_NO_WET_NO_WATER__Hyperrealistic__d0ce04c0-aeb4-4c6f-a8c1-db85da0897e8_3.png",
      alt: "Hyperrealistic water scene",
      category: "Cinematic"
    },
    {
      src: "/media/adarkorchestra_28188_a_model_staring_at_camera_on_white_backg_0df7bcc9-4bae-49b5-8f18-74f132d85695_0.png",
      alt: "Model staring at camera",
      category: "Portrait"
    },
    {
      src: "/media/adarkorchestra_28188_A_cinematic_still_of_an_ultra-futuristic_32a0d723-9704-4444-bc0b-a246a17fd886_3.png",
      alt: "Ultra-futuristic cinematic still",
      category: "Sci-Fi"
    },
    {
      src: "/media/adarkorchestra_28188_extreme_close_up_of_a_woman_The_styles_i_f05fe104-b28d-4c26-938e-2d315b0e42ee_0.png",
      alt: "Extreme close-up of a woman",
      category: "Portrait"
    },
    {
      src: "/media/adarkorchestra_28188_afrofuturism_--ar_21_--raw_--profile_a2u_97f8980f-a9d5-44f1-8647-391e4d42ce18_1.png",
      alt: "Afrofuturism profile",
      category: "Sci-Fi"
    },
    {
      src: "/media/adarkorchestra_28188_afrofuturism_--ar_21_--raw_--profile_a2u_57116427-bd11-47cd-839e-304e9e082148_3.png",
      alt: "Afrofuturism profile 2",
      category: "Sci-Fi"
    },
    {
      src: "/media/adarkorchestra_28188_Elena_in_a_battered_RIG_suit_steps_into__e4aca655-159d-407b-86e4-c2ee7e3951c7_1.png",
      alt: "Elena in battered RIG suit",
      category: "Sci-Fi"
    },
    {
      src: "/media/adarkorchestra_28188_httpss.mj.runEvZgJlnRik0_Elena_in_a_batt_6d6240db-9337-4cf8-83ce-c9c492588a86_1.png",
      alt: "Elena in battle suit",
      category: "Sci-Fi"
    },
    {
      src: "/media/Gen4vamp.png",
      alt: "Gen4 Vampire",
      category: "Character Design"
    },
    {
      src: "/media/Gen4 a extreme close up profile shot the group a-2, 4222190213.png",
      alt: "Gen4 extreme close-up profile",
      category: "Character Design"
    },
    {
      src: "/media/Gen4 a close up profile shot the group a-2, 4222190213.png",
      alt: "Gen4 close-up profile",
      category: "Character Design"
    },
    {
      src: "/media/adarkorchestra_28188_A_fanatical_cultist_with_wild_eyes_glowi_670cf795-62a5-45e4-97d2-e84a00d73a03_3 (1).png",
      alt: "Fanatical cultist with wild eyes",
      category: "Character Design"
    },
    {
      src: "/media/adarkorchestra_28188_A_fanatical_cultist_with_wild_eyes_glowi_16ca7b57-9099-4b51-8475-2680ecabe280_3.png",
      alt: "Fanatical cultist with glowing eyes",
      category: "Character Design"
    },
    {
      src: "/media/adarkorchestra_28188_the_evil_man_in_the_cowboy_hat_sees_ryan_f4e19930-38e6-48e3-9f29-338d3f5722df_1.png",
      alt: "Evil man in cowboy hat",
      category: "Character Design"
    },
    {
      src: "/media/adarkorchestra_28188_httpss.mj.runIYcEYo3uKuw_the_evil_man_pu_d4849402-3786-49a6-83c0-fe4022aab94c_1.png",
      alt: "Evil man pushing",
      category: "Character Design"
    },
    {
      src: "/media/adarkorchestra_28188_httpss.mj.runm6oG5OKiR7I_the_evil_man_pu_ddada7a8-9858-4b0d-b36e-501be18d702e_3.png",
      alt: "Evil man pushing 2",
      category: "Character Design"
    },
    {
      src: "/media/adarkorchestra_28188_the_sherrif_wih_a_totaly_surprised_expre_f4473883-9d81-45a9-b44c-5544d1c39f93_0.png",
      alt: "Sheriff with surprised expression",
      category: "Character Design"
    }
  ];

  // YouTube video gallery data
  const videos = [
    {
      youtubeId: "PAfe79u8T3U",
      title: "A Dark Orchestra Production 1",
      category: "AI Film"
    },
    {
      youtubeId: "vA9E202p2Bc",
      title: "A Dark Orchestra Production 2",
      category: "AI Film"
    },
    {
      youtubeId: "GI_oVVu_Nhk",
      title: "A Dark Orchestra Production 3",
      category: "AI Film"
    },
    {
      youtubeId: "q-MAtVddHDs",
      title: "A Dark Orchestra Production 4",
      category: "AI Film"
    },
    {
      youtubeId: "db8-XM4IfI0",
      title: "A Dark Orchestra Production 5",
      category: "AI Film"
    },
    {
      youtubeId: "V5EUTsyIPFw",
      title: "A Dark Orchestra Production 6",
      category: "AI Film"
    },
    {
      youtubeId: "yLur3j2spNE",
      title: "A Dark Orchestra Production 7",
      category: "AI Film"
    },
    {
      youtubeId: "2U1AHiAJUEc",
      title: "A Dark Orchestra Production 8",
      category: "AI Film"
    }
  ];

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isFullscreen) return;
      
      switch (e.key) {
        case 'Escape':
          closeFullscreen();
          break;
        case 'ArrowLeft':
          navigateImage(-1);
          break;
        case 'ArrowRight':
          navigateImage(1);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, selectedImage]);

  const openFullscreen = (index: number) => {
    setSelectedImage(index);
    setIsFullscreen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: number) => {
    if (selectedImage === null) return;
    
    const newIndex = selectedImage + direction;
    if (newIndex >= 0 && newIndex < images.length) {
      setSelectedImage(newIndex);
    } else if (newIndex < 0) {
      setSelectedImage(images.length - 1);
    } else {
      setSelectedImage(0);
    }
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative h-[50vh] gradient-bg text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/u3538638467_macro_shot_Womans_face_submerged_in_water_water_s_06064e9a-3e6d-4d72-a737-c3c41fa6d643_0.png"
            alt="Gallery Hero - Woman's face submerged in water"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Gallery</span>
          </h1>
          <p className="font-body text-xl md:text-2xl max-w-2xl text-white/80">
            Explore our collection of AI-generated films and multimedia content
          </p>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Visual</span> Artwork
            </h2>
            <p className="font-body text-xl text-gray-400 max-w-2xl mx-auto">
              Discover our stunning AI-generated artwork and visual effects that push the boundaries of creativity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl card-hover cursor-pointer"
                onClick={() => openFullscreen(index)}
              >
                <div className="relative h-64 md:h-80">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">AI-Generated</span> Films
            </h2>
            <p className="font-body text-xl text-gray-400 max-w-2xl mx-auto">
              Experience our revolutionary AI-powered films and multimedia content that redefines storytelling.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl card-hover">
                <div className="relative h-80">
                  <iframe
                    className="w-full h-full rounded-2xl"
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="flex items-center space-x-2 mb-2">
                    <Video className="w-4 h-4 text-red-400" />
                    <span className="font-body text-sm text-red-300">{video.category}</span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2">{video.title}</h3>
                  <a 
                    href={`https://youtu.be/${video.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-red-300 hover:text-white transition-colors duration-300"
                  >
                    <span>Watch on YouTube</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-bg">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Create Something Amazing?
            </h2>
            <p className="font-body text-xl text-white/80 mb-8">
              Let's collaborate on your next AI-powered multimedia project. 
              Bring your vision to life with cutting-edge technology.
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

      {/* Fullscreen Image Modal */}
      {isFullscreen && selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 z-10 p-2 text-white hover:text-red-400 transition-colors duration-300"
              aria-label="Close fullscreen"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={() => navigateImage(-1)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 text-white hover:text-red-400 transition-colors duration-300 glass-effect rounded-full"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={() => navigateImage(1)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 text-white hover:text-red-400 transition-colors duration-300 glass-effect rounded-full"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image */}
            <div className="relative max-w-7xl max-h-full">
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                width={1200}
                height={800}
                className="max-w-full max-h-[90vh] object-contain"
                priority
              />
              
                             {/* Image Info */}
               <div className="absolute bottom-4 left-4 right-4 text-white">
                 <div className="glass-effect rounded-lg p-4">
                   <p className="font-body text-sm text-white/70">
                     {selectedImage + 1} of {images.length}
                   </p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
} 