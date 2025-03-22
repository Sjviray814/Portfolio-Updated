import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item border-b border-[#636461] max-w-[90%]">
      <div 
        style={{ color:`${isActive ? '#f5f6f0' : '#636461'}` }}
        className="accordion-title text-left cursor-pointer p-4 flex justify-between items-center transition-colors duration-300 hover:text-[#333]" 
        onClick={() => setIsActive(!isActive)}
      >
        <div>{title}</div>
        <span className="text-3xl">{isActive ? '-' : '+'}</span>
      </div>
      
      <div 
        className={`transition-all duration-500 ease-in-out overflow-hidden ${isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-2 text-left text font-semibold text-lg text-[#f5f6f0]">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Accordion;