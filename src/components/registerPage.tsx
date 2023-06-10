import "../styles/registerPage.css"
import CountryDropdown from "../hooks/selectCountry"
import setSelectedCountry from "../hooks/selectCountry"
import selectedCountry from "../hooks/selectCountry"
import { CountryOption } from "../hooks/selectCountry"
import Select from "react-select"

function RegisterPage(){
  return (
    <>
      <div className="regBody">
        <div className="regContent">
            <h3>Create An Account</h3>
                <form className="register">
                    <label htmlFor="fName" className="registerLabel">First Name</label><br />
                    <input type="text" id="fName" name="fName"/><br />
                    <label htmlFor="lName" className="registerLabel">Last Name</label><br />
                    <input type="text" id="lName" name="lName"/><br />
                    <label htmlFor="eMail" className="registerLabel">Email</label><br />
                    <input type="email" id="eMail" name="eMail"/><br />
                    <label htmlFor="lName" className="registerLabel">Password</label><br />
                    <input type="password" id="pass" name="pass"/><br />
                    <label htmlFor="cName" className="registerLabel">Company Name</label><br />
                    <input type="companyName" id="cName" name="cName"/><br />      
                    <label htmlFor="country">Country:</label><br />
                        <CountryDropdown value = {selectedCountry} onChange={(value: CountryOption | null) => setSelectedCountry(value)}/><br/>
                    <input type="submit" value="Sign-Up" className="signUpButton"/>
                </form>
        </div>
      </div>
    </>    
  )
  }
  
  export default RegisterPage