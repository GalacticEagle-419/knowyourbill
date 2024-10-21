import React, { useContext } from 'react';
import { PROMPTS_TITLES } from "../../Constants/prompts";
import PromptButton from "./PromptButton";
import * as Context from "../../Context/AppContext";

const FindSimilarBillsPrompt = () => {
    const { billNo, billText } = useContext(Context.AppContext);
    const disabled = !billNo && !billText;

    const generatePrompt = () => {
        if (billNo && billText) {
            return `Show me similar bills to the bill number **${billNo}** which contains **${billText}**`;
        } else if (billNo) {
            return `Show me similar bills to the bill number **${billNo}**`;
        } else if (billText) {
            return `Show me similar bills to the bill which contains **${billText}**`;
        }
        return null;
    }

    return (
        <div>
            <PromptButton title={PROMPTS_TITLES.FIND_SIMILAR_BILLS} disabled={disabled} promptBuilder={generatePrompt} />
        </div>
    )
}

export default FindSimilarBillsPrompt;