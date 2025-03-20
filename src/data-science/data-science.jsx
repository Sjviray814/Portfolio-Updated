import './data-science.css'
import Accordion from '/Users/sjviray814/portfolio-website/src/Accordion/Accordion.jsx'
import Project from '/Users/sjviray814/portfolio-website/src/Project/Project.jsx';

import kidneyImage from '/Users/sjviray814/portfolio-website/src/assets/kidney.png';
import enzymeImage from '/Users/sjviray814/portfolio-website/src/assets/enzyme.png';
import collegeImage from '/Users/sjviray814/portfolio-website/src/assets/college.png';

function DataScience() {

  const accordionData = [
    {
      title: 'Experience',
      content: `I have experience developing full-stack web applications using React.js, Tailwind CSS, and Python, focusing on performance optimization and user experience. At Viral Marketer LLC, I led a software development team, building custom web pages and upgrading outdated company software, integrating data-driven features to enhance functionality and streamline client operations.`
    },
    {
      title: 'Future Goals',
      content: `I aim to expand my expertise in full-stack development by building scalable web applications and mastering cloud technologies. I also plan to contribute to open-source projects and enhance my skills in AI-powered software solutions.`
    }
  ];

    return (
      <>
      <div className="design-container flex flex-col gap-x-10 ml-0 mt-20">

        <div className="design-title flex items-start flex-col">
          <div className='text font-semibold text-lg mb-2'>Skill 03:</div>
          <div className='text font-bold text-4xl'>Data Science</div>
          <hr className='border-[#636461] w-[100%] h-1 mt-5'></hr>
          
        </div>

      <div className="design-content flex flex-row mt-3 gap-10">
        <div className="design-content flex flex-row mt-3 gap-10">
          <div className="left-design text-left flex flex-col gap-3">
            <div className='font-semibold text-xl'>
            I am working to develop scalable and efficient data-driven solutions by leveraging data analysis, machine learning, predictive modeling, and visualization to uncover insights, enhance decision-making, and drive meaningful results.
            </div>
            
            <div className='font-semibold text-xl flex items-center gap-2'>
              See my 
              <a href="https://www.kaggle.com/sjviray" target='blank()' className="flex items-center gap-1 underline cursor-pointer">
                <span>Data Science Projects on Kaggle</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            </div>
            <span className='font-semibold text-xl flex items-center gap-2'>
              Also see my
              <a href="https://www.github.com/sjviray814" target='blank()' className="flex items-center gap-1 underline cursor-pointer">
                <span>Github</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            </span>


          </div>
        </div>

        
        <div className="right-design">
          <div className="accordion flex flex-col gap-3 font-semibold text-xl">
            {accordionData.map(({ title, content }) => (
              <Accordion title={title} content={content}/>
            ))}
          </div>
        </div>
      </div>
      <div className="design-project-title text-left mt-15 text text-2xl font-semibold">My most recent works</div>
      
      <div className="design-projects mt-5 grid grid-cols-3">
            
            <Project title={'Kidney Stone Analysis'} content={`This project is a cutting-edge feature selection and engineering initiative aimed at developing a predictive model to identify the likelihood of kidney stone formation prior to their occurrence. By meticulously analyzing and refining key biomarkers and risk factors, this advanced framework harnesses data-driven insights to enable proactive healthcare interventions, revolutionizing early detection and preventive care strategies.`} year={'2024'} technologies={['Python', 'Pandas', 'Plotly', 'SKLearn']} 
                link='https://www.kaggle.com/code/sjviray/kidney-stone-prediction-competition' image={kidneyImage}/>

            <Project title={'Enzyme Classification'} content={`I designed and implemented a K-Nearest Neighbors (KNN) classifier to investigate the complexities of multi-label classification for enzyme substrates. By leveraging advanced machine learning techniques, this project delved into the intricate relationships between enzymes and their substrates, enabling precise categorization and uncovering insights with potential applications in bioinformatics and biochemical research.`} year={'2024'} technologies={['Python', 'Pandas', 'Plotly', 'SKLearn']} 
                link='https://www.kaggle.com/code/sjviray/sjviray-enzyme-classification-competition' image={enzymeImage}/>

            <Project title={'College Predictor'} content={`I developed a comprehensive analytical framework and predictive model to assist students in evaluating their likelihood of university admission. By analyzing historical admissions data and key influencing factors, this data-driven solution provides personalized insights, empowering students to make informed decisions and strategically enhance their academic and extracurricular profiles for optimal outcomes.`} year={'2024'} technologies={['Python', 'Pandas', 'Plotly', 'SKLearn']} 
                link='https://www.kaggle.com/code/sjviray/sjviray-college-admission-prediction-data-science' image={collegeImage}/>
      </div>

    </div>
        
      </>
    )
  }
  
  export default DataScience


