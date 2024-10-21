import React, { useContext } from 'react';
import { PROMPTS_TITLES } from "../../Constants/prompts";
import PromptButton from "./PromptButton";
import * as Context from "../../Context/AppContext";

const UnderstandBillPrompt = () => {
    const { billNo, billText } = useContext(Context.AppContext);
    const disabled = !billNo && !billText;

    const generatePrompt = () => {
        if (billNo && billText) {
            return `Help me the details of the bill number **${billNo}** which contains **${billText}**`;
        } else if (billNo) {
            return `Help me the details of the bill number **${billNo}**`;
        } else if (billText) {
            return `Help me the details of the bill which contains **${billText}**`;
        }
        return null;
    }

    return (
        <div>
            <PromptButton title={PROMPTS_TITLES.UNDERSTAND_BILL} disabled={disabled} promptBuilder={generatePrompt} />
        </div>
    )
}

export default UnderstandBillPrompt;