import '../../css/investment.css'
import Header from './Header';

export default function Investment() {
    return <>
        <Header/>
        <div className='input-group'>
            <div id="user-input">
                <label>Initial Investment</label>
                <input type="text" name="" />

                <label>Annual Investment</label>
                <input type="text" name="" />
                
                <label>Expected return</label>
                <input type="text" name="" />

                <label>Duration</label>
                <input type="text" name="" />
            </div>
        </div>
    </>
}