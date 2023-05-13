import "../styles/nav.css"
import logo from "../assets/logo.png"
import "../App.css"

export default function NavBar(){
    return(
        <header>
            <a href="#"><img src={logo} alt="logo"/></a>
            <nav>
                <ul className="navLinks">
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">Insights</a></li>
                    <li><a href="#">Invoices</a></li>
                    <li><a href="#">Help</a></li>
                </ul>
            </nav>
            <a href="#"><button>Login/Register</button></a>
        </header>
    )
}
