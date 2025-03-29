import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FaGoogleDrive } from 'react-icons/fa';

import kurbanImage from '../assets/kurban-207.jpg';
import hariIbuImage from '../assets/DSC01975.png';
import lembahManahImage from '../assets/DSC04752-72.jpg';
import nglolangBeachImage from '../assets/DSC04629-170.jpg';

const SelfProject = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const projects = [
    {
      id: 1,
      title: "Nyangkringan Berqurban 2024",
      image: kurbanImage,
      description: "I am in charge of photographing the qurban at my neighborhood mosque to capture the special Qurban 2024 moment",
      type: "Photograph Qurban 2024",
      driveLink: "https://drive.google.com/drive/folders/1uIEW78GoppRLSiaONw7RwqKSc7-a9P_p?usp=drive_link"
    },
    {
      id: 2,
      title: "Mother's Day 2023",
      image: hariIbuImage,
      description: "I am in charge of capturing the very happy Mother's Day moment.",
      type: "Photograph Mother's Day 2023",
      driveLink: "https://drive.google.com/drive/folders/1jIGizeVsSGa-wUz42CwQbFG8r-S1RWLA?usp=sharing"
    },
    {
      id: 3,
      title: "Trip to Nglolang Beach 2024",
      image: nglolangBeachImage,
      description: "A small trip to a beach called 'Nglolang' in Gunungkidul, Yogyakarta. I'm capturing the moment while my friends are enjoying the beach.",
      type: "Photograph Nglolang Beach 2024",
      driveLink: "https://drive.google.com/drive/folders/1e8jr4IHsGupnhmPI2v9b0cE5CY8501-2?usp=drive_link"
    },
    {
      id: 4,
      title: "Trip to Lembah Manah 2024",
      image: lembahManahImage,
      description: "This is a small trip with my friends to Lembah Manah and Girpasang Klaten to capture the beautiful scenery and feel the sensation of riding a motorbike.",
      type: "Photograph Lembah Manah 2025",
      driveLink: "https://drive.google.com/drive/folders/1MY8K_GspjQj8Wne9k6LkIWzUUnoldw-q?usp=drive_link"
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
        <h2 className="text-3xl font-bold">Self Project</h2>
        <p className="text-gray-600">Innovative projects that showcase my skills and creativity in my neighbourhood.</p>
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
                    <div>
                      {project.driveLink && (
                        <a 
                          href={project.driveLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-2"
                          aria-label="View more photos on Google Drive"
                        >
                          <FaGoogleDrive size={28} />
                          <span className="text-sm font-medium">More Photos</span>
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

export default SelfProject;