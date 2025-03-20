import './Hero.css'

function Hero() {

    return (
      <>
      <div className="hero-container flex flex-col gap-y-10">
        <div className='text-[#f5f6f0] text-7xl header mt-52'>Hello! My name is Stephen Viray</div>
        <div className="text-[#f5f6f0] text-2xl text">I am a CS Major from New York currently attending <span className='text-[#B3a369]'>Georgia Tech</span>.  I am specializing in Artificial Intelligence and System Architecture.   Through projects in software development, fintech, and data analysis,
        I look to solve real-world problems through clean, efficient, and scalable code.</div>
         <div className="button-container flex flex-row justify-center">
            <button className="resume-button" role="button" target='blank()'>My Resume</button>
            <button className="resume-button" role="button">Contact Me</button>
         </div> 
      </div>
      </>
    )
  }
  
  export default Hero


