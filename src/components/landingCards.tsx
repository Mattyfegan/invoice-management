import "../styles/landingCards.css"
import fillerImage from "../assets/fillerImage.png"

export default function NavBar(){
    return(
        <div className="cardContainer">
            <div className="card">
                <div className="cardImg">
                    <img src={fillerImage} alt="soop"/>
                </div>
                <div className="cardContent">
                    <h2>Dashboard</h2>
                    <p>Get all your basic information for your business such as your outgoing invoices as well as a sneak peak at your insights, all in one place...</p>
                    
                </div>
                <div className="buttonBox">
                <a href="#"><button className="cardButton">Go to Dashboard</button></a>
                </div>
                
            </div>
            <div className="card">
                <div className="cardImg">
                    <img src={fillerImage} alt="soop"/>
                </div>
                <div className="cardContent">
                    <h2>Insights</h2>
                    <p>Track your business insights, giving you information on your monthly profits as well as suggestions on how to improve these values...</p>
                </div>
                <div className="buttonBox">
                    <a href="#"><button className="cardButton">Go to Insights</button></a>
                </div>
                
            </div>
            <div className="card">
                <div className="cardImg">
                    <img src={fillerImage} alt="soop"/>
                </div>
                <div className="cardContent">
                    <h2>Invoices</h2>
                    <p>View and edit all active outgoing invoices and creating and sending new invoices in a convenient manner...</p>
                </div>
                <div className="buttonBox">
                <a href="#"><button className="cardButton">Go to Invoices</button></a>
                </div>
               
            </div>
        </div>
    )
}

