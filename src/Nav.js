import React,{useEffect,useState} from 'react'
import './Nav.css'
function Nav() {
    const [show, handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true)
            }else handleShow(false)
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])


    return (
        <div className={`nav ${show && "nav__black"}`}>
            {/* <img
                className="nav__logo"
                src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"
                alt="netflix Logo"
            /> */}
             <div className="Nav__sub"> 
                <a class="et-hero-tab" href="#tab-es6">About</a>
                <a class="et-hero-tab" href="#tab-flexbox">Project</a>
                <a class="et-hero-tab" href="#tab-react">Interest</a>
                <a class="et-hero-tab" href="#tab-angular">Other</a>
                <a class="et-hero-tab" href="#tab-other">Contract</a>
            </div>
               
              
          
        </div>
    )
}

export default Nav
