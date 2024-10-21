import React, { useContext } from 'react';
import * as Constants from "../../Constants";
import * as Context from "../../Context/AppContext";

const BillJurisdictionInput = () => {
    const { billJurisdiction, setBillJurisdiction } = useContext(Context.AppContext);

    return (
        <div className='w-full'>
            <label htmlFor="jurisdictions" className="block mb-1 text-md font-bold text-gray-900">Jurisdiction</label>
            <select
                id="jurisdictions"
                value={billJurisdiction}
                onChange={(e) => setBillJurisdiction(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 pr-6"
            >
                <option value="">Select Jurisdiction</option>
                {
                    Constants.US_BILL_JURISDICTIONS.map((jurisdiction) => {
                        return <option key={jurisdiction.code} value={jurisdiction.name}>{jurisdiction.name}</option>
                    })
                }
            </select>
        </div>
    )
}

export default BillJurisdictionInput;