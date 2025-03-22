import './Navbar.css'

function Navbar() {

    return (
      <>
        <div className="nav-container fixed w-[100vw] h-20 border-2 border-[#636461] bg-[#141616] top-0 flex flex-row justify-center align-middle gap-15 text-xl ">
            <a className='header cursor-pointer' onClick={() => document.getElementById('contact-description').scrollIntoView({ behavior: 'smooth' })}>Contact Me</a>
            <a className='header cursor-pointer' onClick={() => document.getElementById('contact-description').scrollIntoView({ behavior: 'smooth' })}>Software Development</a>
            <a className='header cursor-pointer' onClick={() => document.getElementById('contact-description').scrollIntoView({ behavior: 'smooth' })}>Fintech</a>
            <a className='header cursor-pointer' onClick={() => document.getElementById('contact-description').scrollIntoView({ behavior: 'smooth' })}>Data Science</a>

        </div>
      </>
    )
  }
  
  export default Navbar


