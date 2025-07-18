import './data-science.css'
import Accordion from '../Accordion/Accordion.jsx'
import Project from '../Project/Project.jsx';

import kidneyImage from '../assets/kidney.png';
import enzymeImage from '../assets/enzyme.png';
// import collegeImage from '../assets/college.png';
import pkImage from '../assets/prophet.png';

function DataScience() {

  const accordionData = [
    {
      title: 'Experience',
      content: `I have experience developing data science solutions using Python, Pandas, and TensorFlow, with a focus on data analysis and predictive modeling. My recent projects involved building machine learning models to forecast trends and analyze large datasets for use by medical and scientific communities.`
    },
    {
      title: 'Future Goals',
      content: `I aim to deepen my expertise in data science by building scalable machine learning models and enhancing my skills in data engineering and big data analytics. I also plan to explore AI-driven financial forecasting and contribute to open-source data science projects.`
    }
  ];

    return (
      <>
      <div className="design-container flex flex-col gap-x-10 ml-0 mt-50 sm:mt-0 mb-30 sm:mb-0">

        <div className="design-title flex items-start flex-col">
          <div className='text font-semibold text-lg mb-2'>Skill 03:</div>
          <div className='text font-bold text-4xl'>Data Science/Machine Learning</div>
          <hr className='border-[#636461] w-[100%] h-1 mt-5'></hr>
          
        </div>

      <div className="design-content grid grid-cols-1 md:grid-cols-2 mt-3 gap-10">
        <div className="left-design md:text-left text-center flex flex-col gap-3 w-full max-md:place-self-center">
            <div className='font-semibold text-xl'>
            I am working to develop scalable and efficient data-driven solutions by leveraging data analysis, machine learning, predictive modeling, and visualization to uncover insights, enhance decision-making, and drive meaningful results.
            </div>
            
            <div className='font-semibold text-xl gap-2 whitespace-nowrap'>
              See my&nbsp;
              <a href="https://www.kaggle.com/sjviray" target='blank()' className="gap-1 underline cursor-pointer whitespace-nowrap">
                Kaggle
              </a>
              <br></br>
              Also see my&nbsp;
              <a href="https://www.github.com/sjviray814" target='blank()' className="gap-1 underline cursor-pointer whitespace-nowrap">
                Github
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
      
      <div className="design-projects mt-5 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 overflow-auto min-h-[350px]">

            <Project title={'PK Prophet'} content={`PK Prophet is an AI-powered web application used to predict the location of penalty shots based on the kicker’s body language and run up. All the user has to do is upload a video of a penalty kick, and the pre-processor and LSTM model will extract the striker’s pose, and the coordinates of the goal. Using this data, the machine-learning model will estimate the location of the penalty kick without having to see its actual trajectory.`} year={'2025'} technologies={['Python', 'Flask', 'NEXT.JS', 'OpenCV', 'TensorFlow', 'Tailwind']} 
                link='https://github.com/SaucyBoi21/Ramblin-Hacks' image={pkImage}/>
            
            <Project title={'Kidney Stone Analysis'} content={`This project is a cutting-edge feature selection and engineering initiative aimed at developing a predictive model to identify the likelihood of kidney stone formation prior to their occurrence. By meticulously analyzing and refining key biomarkers and risk factors, this advanced framework harnesses data-driven insights to enable proactive healthcare interventions, revolutionizing early detection and preventive care strategies.`} year={'2024'} technologies={['Python', 'Pandas', 'Plotly', 'SKLearn']} 
                link='https://www.kaggle.com/code/sjviray/kidney-stone-prediction-competition' image={kidneyImage}/>

            <Project title={'Enzyme Classification'} content={`I designed and implemented a K-Nearest Neighbors (KNN) classifier to investigate the complexities of multi-label classification for enzyme substrates. By leveraging advanced machine learning techniques, this project delved into the intricate relationships between enzymes and their substrates, enabling precise categorization and uncovering insights with potential applications in bioinformatics and biochemical research.`} year={'2024'} technologies={['Python', 'Pandas', 'Plotly', 'SKLearn']} 
                link='https://www.kaggle.com/code/sjviray/sjviray-enzyme-classification-competition' image={enzymeImage}/>

            
      </div>

    </div>
        
      </>
    )
  }
  
  export default DataScience


