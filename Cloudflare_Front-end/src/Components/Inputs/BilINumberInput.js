import React, { useContext } from 'react';
import * as Context from "../../Context/AppContext";

const BilINoInput = () => {
    const { billNo, setBillNo } = useContext(Context.AppContext);
    return (
        <div className='w-full'>
            <label htmlFor="bill_no" className="block mb-1 text-md font-bold text-gray-900">Bill Number</label>
            <input
                type="text"
                id="bill_no"
                value={billNo}
                onChange={(e) => setBillNo(e.target.value)}
                placeholder="Enter bill number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
        </div>
    )
}

export default BilINoInput;