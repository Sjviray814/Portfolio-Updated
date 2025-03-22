import './Contact.css'

import linkedinImage from '/Users/sjviray814/portfolio-website/src/assets/linkedin.svg';
import githubImage from '/Users/sjviray814/portfolio-website/src/assets/github.svg';
import emailImage from '/Users/sjviray814/portfolio-website/src/assets/email.svg';

function Contact() {

    return (
      <>
      <section className="bg-4 max-sm:mt-15">
    <div className="hide white text-7xl xl:text-left text-center xl:ml-64 leading-snug tracking-wide pt-10 header"
      id="contact-description">Contact Me</div>


    <div className="contact-grid grid mt-20 lg:mx-64 md:mx-12 gap-24 content-center pb-20" id="contact">

      <div
        className="hide flex flex-col lg:flex-row items-center gap-4 border-2 border-white rounded-xl md:p-5 p-2 hover:animate-pulse"
        id="github">
        <a className="logo" href="https://github.com/Sjviray814" target="_blank"><img src={githubImage}
            className="w-40 h-40 filter invert min-w-[100px]"></img></a>
        <a className="handle white text-6xl p-0 hover:underline text font-bold" href="https://github.com/Sjviray814"
          target="_blank">@Sjviray814</a>
      </div>



      <div
        className="hide flex flex-col lg:flex-row items-center gap-4 border-2 border-white rounded-xl md:p-5 p-2 hover:animate-pulse"
        id="linkedin">
        <a className="logo" href="https://www.linkedin.com/in/stephen-viray/" target="_blank"><img
            src={linkedinImage} className="filter invert w-40 h-40 min-w-[100px]"></img></a>
        <a className="handle white text-6xl p-0 hover:underline text font-bold" href="https://www.linkedin.com/in/stephen-viray/"
          target="_blank">Stephen Viray</a>
      </div>



      <div
        className="hide flex flex-col lg:flex-row items-center gap-4 border-2 border-white rounded-xl md:p-5 p-2 hover:animate-pulse"
        id="email">
        <a className="logo" href="https://mail.google.com/mail/u/0/#inbox" target="_blank"><img src={emailImage} className="filter invert w-40 h-40 min-w-[100px]"></img></a>
        <a className="handle white text-3xl p-0 hover:underline text font-bold" href="mailto:sviray814@gmail.com"
          target="_blank">sviray814@gmail.com</a>
      </div>

    </div>

  </section>
        
      </>
    )
  }
  
  export default Contact




