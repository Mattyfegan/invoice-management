import "../styles/dashboard.css"
import NavBar from "./nav"

function Dashboard(){
    return (
      <>    
        <body className="dashBody">
            <NavBar />
            <div className="dashContainer">
                <div className="leftContainer">
                    <div className="topSection">
                        <h2>Top section</h2>
                    </div>
                    <div className="insightsContainer">
                        <h2>Insights</h2>
                    </div>
                </div>
                <div className="rightContainer">
                    <div className="invoiceContainer">
                        <h2> Invoices </h2>
                    </div>
                </div>
            </div>
        </body>
      </>    
    )
  }
  
  export default Dashboard