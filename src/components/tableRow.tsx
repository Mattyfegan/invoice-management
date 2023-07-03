import { useState } from "react";
import "../styles/tableRow.css"

function TableRow(){
    const [state, setState] = useState(0);
    function ToggleState() {
        setState((prevState) => (prevState + 1) % 3);
        
    }
        let paidOrNot;
        let colortoshow;
        if (state === 0) {
            colortoshow = "red";
            paidOrNot = "X";
        } else if (state === 1) {
            colortoshow = "green";
            paidOrNot = "✓";
        } else {
            colortoshow = "#cccc00";
            paidOrNot = "-";
        }
    return(<>
        <tr>
            <td>12/06/07</td> {/* date go here */}
            <td>bruh x2 $300</td> {/* details go here */}
            <td><button className="invoiceState" onClick={ToggleState} style={{backgroundColor: colortoshow}}>{paidOrNot}</button></td>
        </tr>
    </>)
}

export default TableRow