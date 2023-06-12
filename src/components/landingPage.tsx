import Particlez from "./particles"
import LandingCards from "./landingCards"

import '../styles/landingPage.css'

function LandingPage(){
  return (
    <>
      <Particlez/>
      <div className="body"> 
      <h1 id="heading">INVOICE MANAGEMENT, <span className="colouredText">MADE EASY</span></h1>
      </div>
      <LandingCards/>
    </>    
  )
}

export default LandingPage