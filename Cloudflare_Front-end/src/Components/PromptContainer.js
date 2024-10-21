import React from 'react';
import * as Inputs from './Inputs';
import * as Prompt from './Prompts';

const PromptContainer = () => {
    return (
        <div className='text-sm space-y-6'>
            <div className='space-y-4'>
                <div className='flex align-bottom items-end gap-4'>
                    <Inputs.BillNumberInput />
                    <Inputs.BillJurisdictionInput />
                    <Prompt.ListBillsPrompt />
                </div>
                <Inputs.BillTextInput />
            </div>
            <div className='space-y-2'>
                <Prompt.BillDetailsPrompt />
                <Prompt.UnderstandBillPrompt />
                <Prompt.BillImplicationsPrompt />
                <Prompt.FindSimilarBillsPrompt />
                <Prompt.TrackBillUpdatesPrompt />
            </div>
        </div>
    )
}

export default PromptContainer;