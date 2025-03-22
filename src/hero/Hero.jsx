import './Hero.css'

// import pdf from '/Users/sjviray814/portfolio-website/src/assets/resume.pdf';

function Hero() {

    return (
      <>
      <div className="hero-container flex flex-col gap-y-10">
        <div className='text-[#f5f6f0] text-7xl header mt-52'>Hello! I'm Stephen Viray</div>
        <div className="text-[#f5f6f0] text-2xl text">I am a CS Major from New York currently attending <span className='text-[#B3a369]'>Georgia Tech</span>.  I am specializing in Artificial Intelligence and System Architecture.   Through projects in software development, fintech, and data analysis,
        I look to solve real-world problems through clean, efficient, and scalable code.</div>
         <div className="button-container flex flex-row justify-center">
            <button className="resume-button" role="button" onClick={() => window.open('https://olive-maiga-5.tiiny.site/?mode=view', '_blank')} target='blank()'>My Resume</button>
            <button className="resume-button" role="button" onClick={() => document.getElementById('contact-description').scrollIntoView({ behavior: 'smooth' })}>Contact Me</button>
         </div> 
      </div>
      </>
    )
  }
  
  export default Hero


