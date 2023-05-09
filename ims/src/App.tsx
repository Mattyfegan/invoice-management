import NavBar from "./components/nav"
import Particles from "./components/particles"
import LandingCards from "./components/landingCards"
import './App.css'


function App() {
  return (
    <>
      <div className="navigation">
        <NavBar/>
      </div>
      <Particles/> {/* Particles background */}
      <div className="body"> {/* for landing page - "invoice management made easy" */} 
        <h1 id="heading">INVOICE MANAGEMENT, MADE EASY</h1>
      </div>
      {/* put cards here for dashboard, insights, invoices */}
      <LandingCards/>
    </>
  )
}

export default App
