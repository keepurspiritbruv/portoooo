import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FaYoutube, FaInstagram } from 'react-icons/fa';

import mealifyImg from '../assets/mealify.png';
import junprokImg from '../assets/junprok.png'; 
import banjarasriImg from '../assets/banjarasu.png'; 
import banjarasriIG from '../assets/ssig.png';
import ptPupuk from '../assets/ptpupuk.png';

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const projects = [
    {
      id: 1,
      title: "Mealify",
      image: mealifyImg,
      description: "A web application developed for my college course \"Pengembangan Aplikasi Web\", focusing on UI/UX and Front End Engineering.",
      type: "Project Mata Kuliah Pengembangan Aplikasi Web",
    },
    {
      id: 2,
      title: "Junior Project",
      image: junprokImg,
      description: "A project from my programming laboratory session, demonstrating practical coding skills and problem-solving abilities.",
      type: "Junior Project",
    },
    {
      id: 3,
      title: "Banjarasri",
      image: banjarasriImg,
      description: "Video-themed to create a profile video for PPK GAMAPI, showcasing the organization's vision, mission, and activities.",
      type: "Video Profil Banjarasri",
      youtubeLink: "https://youtu.be/_BK65XmE5OA?si=sLIemmTmlbxFNQKA"
    },
    {
      id: 4,
      title: "Instagram Banjarasri",
      image: banjarasriIG,
      description: "All the Weekly Recap in Reels, i made it.",
      type: "Instagram Reels PPK GAMAPI",
      instagramLink: "https://instagram.com/ppkbanjarasri.ugm"
    },
    {
      id: 5,
      title: "Portal Announcement Website for PT Pupuk Sriwidjaja Palembang",
      image: ptPupuk,
      description: "A portal website to announce the latest news and events from PT Pupuk Sriwidjaja Palembang. I'm sorry i can't provide the link because it's a regulation from the company.",
      type: "Portal Website Announcement",
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="py-16 px-8">
      <div className="text-center mb-8">
        <h3 className="text-blue-700 text-lg font-medium">Portfolio</h3>
        <h2 className="text-3xl font-bold">Latest Project</h2>
        <p className="text-gray-600">Innovative projects that showcase my skills and creativity.</p>
      </div>

      <div className="relative mx-auto max-w-4xl">
        {/* Carousel container */}
        <div className="overflow-hidden rounded-lg shadow-lg">
          <div className="transition-transform duration-500 ease-in-out" 
               style={{ transform: `translateX(-${currentIndex * 100}%)`, display: 'flex' }}>
            {projects.map((project) => (
              <div key={project.id} className="min-w-full">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-96 object-cover"
                />
                <div className="p-6 bg-white">
                  <div className="mb-3 flex justify-between items-center">
                    <div>
                      <span className="font-bold">{project.type}</span>
                      <h3 className="text-xl font-bold mt-2">"{project.title}"</h3>
                    </div>
                    <div className="flex gap-3">
                      {project.youtubeLink && (
                        <a 
                          href={project.youtubeLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-red-600 hover:text-red-700 transition-colors"
                          aria-label="Watch on YouTube"
                        >
                          <FaYoutube size={32} />
                        </a>
                      )}
                      {project.instagramLink && (
                        <a 
                          href={project.instagramLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-pink-600 hover:text-pink-700 transition-colors"
                          aria-label="View on Instagram"
                        >
                          <FaInstagram size={30} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <button 
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
          aria-label="Previous project"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
          aria-label="Next project"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots indicator */}
        <div className="flex justify-center mt-4">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`mx-1 h-3 w-3 rounded-full ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;