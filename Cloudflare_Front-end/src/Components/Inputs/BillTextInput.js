import React, { useContext } from 'react';
import * as Context from "../../Context/AppContext";

const BillTextInput = () => {
    const { billText, setBillText } = useContext(Context.AppContext);
    return (
        <div className='w-full'>
            <label htmlFor="full_bill_text" className="block mb-1 text-md font-bold text-gray-900">Bill Text</label>
            <span className="block mb-2 text-xs text-gray-900">Enter full text of above bill number in below text box</span>
            <textarea
                id="full_bill_text"
                rows="4"
                maxLength={10000}
                value={billText}
                onChange={(e) => setBillText(e.target.value)}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Insert text from bill/proposal here..."
            ></textarea>
        </div>
    )
}

export default BillTextInput;