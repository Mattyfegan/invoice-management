import './invoices.css';

// const invState = () => {
//     setImageSrc((prevSrc) => (prevSrc === originalImage ? changedImage : originalImage));
//   };

export default function ViewInvoices() {
    return(
        <>
            <div className='panel invPanel'>
                <div className='invItem'>
                    <div className='lines'>
                        <p>#INV3656</p>
                        <p>Issue Date: 13/12/23</p>
                    </div>
                    <div className="lines">
                        <p>Tim Giles</p>
                        <p className='moveBack'>Due Date: 12/2/24</p>
                    </div>
                </div>
                <div className='invItem'>
                    <div className='lines'>
                        <p>#INV2362</p> 
                        <p>Issue Date: 28/12/23</p>
                    </div>
                    <div className="lines">
                        <p>Matthew & ...</p>
                        <p>Due Date: 2/1/24</p>
                    </div>
                </div>
                <div className='invItem'>
                    <div className='lines'>
                        <p>#INV9989</p> 
                        <p>Issue Date: 21/5/24</p>
                    </div>
                    <div className="lines">
                        <p>John Lester</p>
                        <p>Due Date: 16/6/24</p>
                    </div>
                </div>
            </div>
        </>
    )
}