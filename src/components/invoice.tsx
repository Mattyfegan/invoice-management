import "../styles/invoice.css"
import NavBar from "./nav.tsx"
import InvoiceTable from "./invoiceTable.tsx"
import "../styles/invoiceTable.css"
import "../styles/tableRow.css"

function Invoice(){
    return(<>
        <NavBar/>
        <div className="invoiceBody">
            <div className="iLeft">
                <InvoiceTable />
            </div>
            <div className="iMiddle">
                <form className="invoiceCreate">
                    <label htmlFor="name" className="invoiceLabel">Recipient Name</label><br />
                    <input type="text" id="name" name="name"/><br />
                    
                </form>
            </div>
            <div className="iRight">
                <p>right</p>
            </div>
        </div>
    </>)
}

export default Invoice