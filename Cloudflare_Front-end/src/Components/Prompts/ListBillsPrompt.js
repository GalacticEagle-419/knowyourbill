import React, { useContext } from 'react';
import { PROMPTS_TITLES } from "../../Constants/prompts";
import PromptButton from "./PromptButton";
import * as Context from "../../Context/AppContext";


const ListBillsPrompt = () => {
    const { billJurisdiction } = useContext(Context.AppContext);
    const disabled = !billJurisdiction;

    const generatePrompt = () => {
        return `List all the bills from jurisdiction **${billJurisdiction}**`;
    }

    return (
        <div className='w-full'>
            <PromptButton title={PROMPTS_TITLES.LIST_BILLS} disabled={disabled} promptBuilder={generatePrompt} />
        </div>
    )
}

export default ListBillsPrompt;