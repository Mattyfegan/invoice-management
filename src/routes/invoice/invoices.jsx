import './invoices.css';
import {useOutletContext} from 'react-router-dom';
import NavBar from '../navbar';
import ViewInvoices from './viewInvoices';

export default function Invoices() {

    const [user] = useOutletContext();

    if (user.loading) { 
        return <div></div>; 
    };

    return(
        <>
            <NavBar />
            <div id='invoiceWrapper'>
                <ViewInvoices />
            </div>
        </>
    )
}