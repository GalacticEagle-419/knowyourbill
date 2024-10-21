import React, { useContext } from 'react';
import { PROMPTS_TITLES } from "../../Constants/prompts";
import PromptButton from "./PromptButton";
import * as Context from "../../Context/AppContext";


const BillDetailsPrompt = () => {
    const { billNo, billText, billJurisdiction } = useContext(Context.AppContext);
    const disabled = !billNo && !billText;

    const generatePrompt = () => {
        if (billNo && billText && billJurisdiction) {
            return `Show me the details of the bill number **${billNo}** from jurisdiction **${billJurisdiction}** which contains **${billText}**`;
        } else if (billNo && billText) {
            return `Show me the details of the bill number **${billNo}** which contains **${billText}**`;
        } else if (billNo && billJurisdiction) {
            return `Show me the details of the bill number **${billNo}** from jurisdiction **${billJurisdiction}**`;
        } else if (billNo) {
            return `Show me the details of the bill number **${billNo}**`;
        } else if (billText) {
            return `Show me the details of the bill which contains **${billText}**`;
        }
        return null;
    }

    return (
        <div>
            <PromptButton title={PROMPTS_TITLES.BILL_DETAILS} disabled={disabled} promptBuilder={generatePrompt} />
        </div>
    )
}

export default BillDetailsPrompt;