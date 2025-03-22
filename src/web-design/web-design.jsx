import './web-design.css'
import Accordion from '/Users/sjviray814/portfolio-website/src/Accordion/Accordion.jsx'
import Project from '/Users/sjviray814/portfolio-website/src/Project/Project.jsx';

import districtImage from '/Users/sjviray814/portfolio-website/src/assets/district-insights.png';
import lastnamleImage from '/Users/sjviray814/portfolio-website/src/assets/lastnamle.png';
import scraperImage from '/Users/sjviray814/portfolio-website/src/assets/scraper.png';

function WebDesign() {

  const accordionData = [
    {
      title: 'Experience',
      content: `I have experience developing full-stack web applications using React.js, Tailwind CSS, and Python, focusing on performance optimization and user experience. At Viral Marketer LLC, I led a software development team, building custom web pages and upgrading outdated company software, integrating data-driven features to enhance functionality and streamline client operations.`
    },
    {
      title: 'Skills & Technologies',
      content: `I am proficient in HTML, CSS, JavaScript, Python, and Java for software development. I have also used frameworks/libraries such as React.js, Bootstrap, and Tailwind CSS, as well as web building tools like Wordpress and Wix to create front-end and fullstack applications.`
    },
    {
      title: 'Awards',
      content: `In 2024, I won the Congressional App Challenge for my Congressional District for my work on DistrictInsights, I have also received a Hispanic Heritage scholarship from the Hispanic Heritage Foundation for my work in web development.`
    },
    {
      title: 'Future Goals',
      content: `I aim to expand my expertise in full-stack development by building scalable web applications and mastering cloud technologies. I also plan to contribute to open-source projects and enhance my skills in AI-powered software solutions.`
    }
  ];

    return (
      <>
      <div className="design-container flex flex-col gap-x-10 ml-0 mt-30">

        <div className="design-title flex items-start flex-col">
          <div className='text font-semibold text-lg mb-2'>Skill 01:</div>
          <div className='text font-bold text-4xl'>Software Development</div>
          <hr className='border-[#636461] w-[100%] h-1 mt-5'></hr>
          
        </div>

      <div className="design-content grid grid-cols-1 md:grid-cols-2 mt-3 gap-10">
          <div className="left-design md:text-left text-center flex flex-col gap-3 w-full max-md:place-self-center">
            <div className='font-semibold text-xl'>
              Whether it's Web Design, Fullstack Development, UI/UX, or Mobile App Creation, I strive to create seamless, efficient, and scalable digital technologies with practical applications.
            </div>
            
            <div className='font-semibold text-xl items-center gap-2'>
              See all of my&nbsp;
              <a href="https://github.com/Sjviray814" target='blank()' className="flex gap-1 underline cursor-pointer">
                <span>Software Development Projects</span>
              </a>
          </div>
        </div>

        
        <div className="right-design hidden md:block">
          <div className="accordion flex flex-col gap-3 font-semibold text-xl">
            {accordionData.map(({ title, content }) => (
              <Accordion title={title} content={content}/>
            ))}
          </div>
        </div>
      </div>
      <div className="design-project-title text-center md:text-left mt-15 text text-2xl font-semibold">My most recent works</div>
      
      <div className="design-projects mt-5 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 overflow-auto">
            
            <Project title={'DistrictInsights'} content={`DistrictInsights is a web app built with the Mapbox and Plotly libraries that delivers essential voting data for congressional districts. 
                Designed to educate and empower citizens nationwide, it offers clear, interactive insights to help voters make informed decisions.`} year={'2024'} technologies={['HTML', 'CSS', 'JavaScript', 'Python', 'Pandas', 'Mapbox', 'Plotly']} 
                link='https://congressional-app-challenge.vercel.app/' image={districtImage}/>

            <Project title={'Lastnamle'} content={`Lastnamle is an engaging web application built using JavaScript.  It is a wordle variation meant to help  anyone interested in genealogy or world cultures learn and understand the region of origin of over 10,000 surnames, promoting 
            cultural awareness and curiosity. `} year={'2024'} technologies={['HTML', 'CSS', 'JavaScript', 'Python', 'Pandas']} 
                link='https://lastnamle.vercel.app/' image={lastnamleImage}/>

            <Project title={'College Web Scraper'} content={`This College Web Scraper is a React application powered by a Python web scraper that aggregates data from multiple websites listing the top 100 computer science universities. By consolidating this information into a single, user-friendly platform, the app helps students easily compare and explore leading CS programs, streamlining their college research and decision-making process.`} year={'2024'} technologies={['Python', 'React', 'CSS']} 
                link='https://college-scraper-website.vercel.app/' image={scraperImage}/>
      </div>

    </div>
        
      </>
    )
  }
  
  export default WebDesign


