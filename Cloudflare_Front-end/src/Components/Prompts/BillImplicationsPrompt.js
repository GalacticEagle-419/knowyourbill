import React, { useContext } from 'react';
import { PROMPTS_TITLES } from "../../Constants/prompts";
import PromptButton from "./PromptButton";
import * as Context from "../../Context/AppContext";

const BillImplicationsPrompt = () => {
    const { billNo, billText } = useContext(Context.AppContext);
    const disabled = !billNo && !billText;

    const generatePrompt = () => {
        if (billNo && billText) {
            return `Show me the implications i.e pros and cons of the bill number **${billNo}** which contains **${billText}**`;
        } else if (billNo) {
            return `Show me the implications i.e pros and cons of the bill number **${billNo}**`;
        } else if (billText) {
            return `Show me the implications i.e pros and cons of the bill which contains: **${billText}**`;
        }
        return null;
    }

    return (
        <div>
            <PromptButton title={PROMPTS_TITLES.BILL_IMPLICATIONS} disabled={disabled} promptBuilder={generatePrompt} />
        </div>
    )
}

export default BillImplicationsPrompt;