import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import './Project.css';

const Project = ({ title, content, year, technologies, link, image}) => {

    const [isFlipped, setIsFlipped] = useState(false);

    function showFront() {
        setIsFlipped(false);
    }
    function showBack() {
        setIsFlipped(true);
    }

  return (
    <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
        <div style={{ backgroundImage:`url(${image})` }} className={`card bg-cover bg-no-repeat bg-center flex flex-col justify-between cursor-pointer`} onClick={showBack}>
            <div className='bg-black white min-w-[20%] px-1 text-sm self-baseline ml-1.5 mt-1.5 font-bold'>(Click Me)</div>
            <div className='text text-xl font-semibold white mb-1.5 ml-1.5 flex flex-row justify-between'>
                <div className='bg-black white min-w-[30%] px-2'>{title}</div>
                <div className='bg-black white min-w-[20%] mr-3'>{year}</div>
            </div>
        </div>


        <div className='card card-back p-3 flex gap-4 flex-col cursor-pointer' onClick={showFront}>
            <div className='text font-bold text-2xl'>{title}</div>
            
            <div className='text text-sm font-semibold text-left'>
                {content}
                <a href={link} className="inline-flex items-center gap-1 underline cursor-pointer text-blue-400 hover:text-blue-600 ml-1" target='blank()'>
                See Project
                </a>
            </div>

            <div className='tech-container text-md text cutive-mono-regular grid grid-cols-3 pr-5'>
                {technologies.map(tech => {
                    return <div key={tech}>{tech}</div>
                })}
            </div>
            </div>
    </ReactCardFlip>
  );
};

export default Project;