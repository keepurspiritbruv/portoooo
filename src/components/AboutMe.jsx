import React from 'react';
// Import icons from a library like react-icons or use SVG files
import { FaYoutube, FaInstagram, FaTwitter, FaLinkedin, FaDiscord, FaTiktok, FaGithub } from 'react-icons/fa';

const AboutMe = () => {
  // Social media links and their respective icons
  const socialLinks = [
    { name: 'YouTube', icon: <FaYoutube size={24} />, url: 'https://youtube.com/@dhimasnurhanindya' },
    { name: 'Instagram', icon: <FaInstagram size={24} />, url: 'https://www.instagram.com/dhms._?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
    { name: 'Twitter', icon: <FaTwitter size={24} />, url: 'https://x.com/dhimurguy' },
    { name: 'LinkedIn', icon: <FaLinkedin size={24} />, url: 'https://www.linkedin.com/in/dhimasnp/' },
    { name: 'Discord', icon: <FaDiscord size={24} />, url: 'https://discord.com' },
    { name: 'TikTok', icon: <FaTiktok size={24} />, url: 'https://tiktok.com/@dhimsnep' },
    { name: 'GitHub', icon: <FaGithub size={24} />, url: 'https://github.com/keepurspiritbruv' },
  ];

  return (
    <div className="about-container py-16 px-8 flex flex-col md:flex-row justify-between">
      {/* Left section with about me text */}
      <div className="about-content md:w-1/2 mb-8 md:mb-0">
        <h3 className="text-blue-700 text-xl font-bold mb-4">ABOUT ME</h3>
        <h2 className="text-4xl text-gray-600 font-bold mb-6">Hello from Me!</h2>
        <p className="text-gray-700 leading-relaxed">
          As an Information Technology student at Gadjah Mada University, I
          possess strong skills in programming, UI/UX development, software
          development, and data analysis. With a passion for innovation and a
          commitment to excellence, I am eager to apply my expertise to drive
          progress and contribute to the success of any team or organization.
        </p>
      </div>

      {/* Right section with social links */}
      <div className="social-content md:w-1/3">
        <h2 className="text-3xl font-bold mb-4">Let's be Moots</h2>
        <p className="text-gray-600 mb-6">You Can Approach Me Through My Social Media!</p>
        
        {/* Social media icons with hover effect and opening in new tab */}
        <div className="social-icons flex flex-wrap gap-4">
          {socialLinks.map((social, index) => (
            <a 
              key={index} 
              href={social.url} 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;