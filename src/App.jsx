import './App.css'
import Hero from './hero/Hero.jsx'
import WebDesign from './web-design/web-design.jsx'
import Fintech from './fintech/fintech.jsx'
import DataScience from './data-science/data-science.jsx'
import Contact from './Contact/Contact.jsx';
import Navbar from './Navbar/Navbar.jsx'

function App() {

  return (
    <>
      <Hero />
      <WebDesign />
      <Fintech />
      <DataScience />
      <Contact />
      {/* <Navbar /> */}
    </>
  )
}

export default App
