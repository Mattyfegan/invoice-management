import NavBar from "./nav"
import Particlez from "./particles"
import LandingCards from "./landingCards"

import '../styles/landingPage.css'

function LandingPage(){
  return (
    <>
        <div className="navigation">
            <NavBar/>
        </div>
        <Particlez/>
        <div className="body"> {/* for landing page - "invoice management made easy" */} 
        <h1 id="heading">INVOICE MANAGEMENT, <span className="colouredText">MADE EASY</span></h1>
        </div>
        {/* put cards here for dashboard, insights, invoices */}
        <LandingCards/>
    </>    
  )
}

export default LandingPage