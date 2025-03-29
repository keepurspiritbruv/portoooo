import React from 'react';
import profileImage from '../assets/beh-04457-removebg-preview.png';

const Hero = () => {
  return (
    <div className="hero-container flex flex-col md:flex-row justify-between items-center px-8 py-16 bg-white">
      <div className="hero-content mb-8 md:mb-0">
        <h3 className="text-blue-600 text-xl font-medium mb-2">Dhimas Nurhanindya Putra's Portfolio</h3>
        <h1 className="text-5xl font-bold mb-2">Murguy's here</h1>
        <h2 className="text-2xl mb-4">Videografer | Designer | Photographer</h2>
        <p className="text-gray-600 mb-6">More likely UI/UX designer or Frontend Engineer. I also interested in a DDD Section to upgrade my DDD skills and find a new experience.</p>
        <a 
          href="mailto:dhimasnurhanindya@gmail.com?subject=Job%20Opportunity" 
          className="inline-block bg-blue-700 text-white px-8 py-3 rounded-full hover:bg-blue-800 transition duration-300"
        >
          Hire Me
        </a>
      </div>
      <div className="hero-image">
        <img 
          src={profileImage}
          alt="Dhimas Nurhanindya Putra" 
          className="w-64 md:w-80"
        />
      </div>
    </div>
  );
};

export default Hero;