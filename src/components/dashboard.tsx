import "../styles/dashboard.css"
import NavBar from "./nav.js"
import Graph from "./gwaf.jsx";

function Dashboard(){
    return (
      <>
        <div  className="dashBody">
            <NavBar />
            <div className="dashContainer">
                <div className="leftContainer">
                    {/* <div className="topSection">
                        <h2>Your Monthly Income: </h2><br />
                        <h1 className="monthlyIncome">$00.00</h1>
                    </div> */}
                    <div className="insightsContainer">
                        <div className="insightGraph">      
                            <Graph/>
                        </div>    
                        <div className="insightSection">
                            <h2>Insights</h2>
                            <hr />
                        </div>               
                    </div>
                </div>
                <div className="rightContainer">
                    <div className="invoiceContainer">
                        <h2> Invoices </h2>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
      </>    
    )
  }
  
  export default Dashboard