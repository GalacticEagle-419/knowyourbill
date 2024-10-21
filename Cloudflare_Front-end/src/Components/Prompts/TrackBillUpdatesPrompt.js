import React, { useContext } from 'react';
import { PROMPTS_TITLES } from "../../Constants/prompts";
import PromptButton from "./PromptButton";
import * as Context from "../../Context/AppContext";

const TrackBillUpdatesPrompt = () => {
    const { billNo } = useContext(Context.AppContext);
    const disabled = !billNo;

    const generatePrompt = () => {
        return `Send me the updates of the bill number **${billNo}** when it's status is updated`;
    }

    return (
        <div>
            <PromptButton title={PROMPTS_TITLES.TRACK_BILL_UPDATES} disabled={disabled} promptBuilder={generatePrompt} />
        </div>
    )
}

export default TrackBillUpdatesPrompt;