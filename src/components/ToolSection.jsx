import React from 'react';

const ToolsSection = () => {
  const tools = [
    { 
      name: 'Lightroom', 
      icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg' 
    },
    { 
      name: 'Photoshop', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg' 
    },
    { 
      name: 'Figma', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' 
    },
    { 
      name: 'VS Code', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' 
    },
    { 
      name: 'Canva', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg' 
    },
    { 
      name: 'Premiere Pro', 
      icon: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg' 
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Tools I Use</h2>
        
        <div className="flex flex-wrap justify-center gap-8">
          {tools.map((tool) => (
            <div key={tool.name} className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-100 rounded-full flex items-center justify-center shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-md hover:-translate-y-1">
                <img 
                  src={tool.icon} 
                  alt={tool.name} 
                  className="w-8 h-8 md:w-10 md:h-10" 
                />
              </div>
              <p className="mt-2 text-sm text-gray-700">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolsSection;