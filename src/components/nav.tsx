import "../styles/nav.css"
import logo from "../assets/imsLogo.svg"
import Modal from "./login";
import useModal from "../hooks/useModal";
import "../App.css"

export default function NavBar(){
    const { isOpen, toggle } = useModal();
    return(
        <div className="navContainer">
            <header >
                <a href="/"><img src={logo} alt="logo"/></a>
                <nav>
                    <ul className="navLinks">
                        <li><a href="/dashboard">Dashboard</a></li>
                        <li><a href="#">Insights</a></li>
                        <li><a href="/invoice">Invoices</a></li>
                        <li><a href="#">Help</a></li>
                    </ul>
                </nav>
                <button className="loginButton" onClick={toggle}>Sign-In</button>
                <Modal isOpen={isOpen} toggle={toggle}></Modal>
            </header>
        </div>
    )
}
