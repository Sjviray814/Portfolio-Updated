import './fintech.css'
import Accordion from '/Users/sjviray814/portfolio-website/src/Accordion/Accordion.jsx'
import Project from '/Users/sjviray814/portfolio-website/src/Project/Project.jsx';

import wsbImage from '/Users/sjviray814/portfolio-website/src/assets/wsb.png';
import tipsImage from '/Users/sjviray814/portfolio-website/src/assets/tips.png';
import spyImage from '/Users/sjviray814/portfolio-website/src/assets/spy.png';

function Fintech() {

  const accordionData = [
    {
      title: 'Experience',
      content: `I have experience developing fintech software using Python, SKLearn and Plotly, with a focus on data analysis and financial modeling. As an Investment Strategist at Georgia Tech, I built predictive algorithms and automated portfolio management tools, leveraging machine learning and data visualization to enhance risk assessment and investment strategies.`
    },
    {
      title: 'Future Goals',
      content: `In the future, I look to study quantitative finance and automated trading, as well as build tools to better manage investment porfolios and analyze risk.`
    }
  ];

    return (
      <>
      <div className="design-container flex flex-col gap-x-10 ml-0 mt-40">

        <div className="design-title flex items-start flex-col">
          <div className='text font-semibold text-lg mb-2'>Skill 02:</div>
          <div className='text font-bold text-4xl'>Financial Technology</div>
          <hr className='border-[#636461] w-[100%] h-1 mt-5'></hr>
          
        </div>

      <div className="design-content flex flex-row mt-3 gap-10">
        <div className="design-content flex flex-row mt-3 gap-10">
          <div className="left-design text-left flex flex-col gap-3">
            <div className='font-semibold text-xl'>
            I strive to build innovative and scalable fintech solutions by leveraging quantitative modeling, financial software development, automated analysis, and AI-powered predictions to enhance performance, drive data-driven insights, and optimize financial decision-making.
            </div>
            
            <div className='font-semibold text-xl flex items-center gap-2'>
              See all of my 
              <a href="https://github.com/Sjviray814" target='blank()' className="flex items-center gap-1 underline cursor-pointer">
                <span>Fintech Projects</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            </div>
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
            
            <Project title={'r/WallStreetBets'} content={`For this project, I used Python to analyze WallStreetBets subreddit activity and its impact on popular stock prices and trading volume. By training a machine learning model, I predicted stock movements based on WSB trends and provided actionable recommendations for investors.`} year={'2025'} technologies={['Python', 'Pandas', 'Plotly', 'SKLearn']} 
                link='https://www.kaggle.com/code/sjviray/how-does-wallstreetbets-affect-the-stock-market' image={wsbImage}/>

            <Project title={'Corporation Revenue'} content={`This analytical framework and sophisticated linear regression model are designed to optimize gratuity outcomes for hospitality professionals. By meticulously analyzing key variables and their impact on customer behavior, this project empowers servers to strategically enhance their earnings, transforming data-driven insights into actionable financial growth opportunities.`} year={'2024'} technologies={['Python', 'Pandas', 'Plotly', 'SKLearn']} 
                link='https://www.kaggle.com/code/sjviray/restaurant-revenue-data-science' image={tipsImage}/>

            <Project title={'S&P 500 Predictor'} content={`For this project, I developed and trained an LSTM model using the ML5 library to predict future trends of the S&P 500 index. By leveraging historical data, the model analyzed patterns to forecast price movements, applying advanced machine learning techniques in non-traditional programming environments for financial prediction and analysis.`} year={'2024'} technologies={['Javascript', 'ML5', 'HTML', 'CSS', 'Python']} 
                link='https://github.com/Sjviray814/spy-predictor' image={spyImage}/>
      </div>

    </div>
        
      </>
    )
  }
  
  export default Fintech


