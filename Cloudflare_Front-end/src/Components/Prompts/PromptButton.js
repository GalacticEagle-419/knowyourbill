import React, { useContext } from 'react';
import * as Context from "../../Context/AppContext";

const PromptButton = ({ title, promptBuilder, disabled }) => {
    const { isLoading, postMessage } = useContext(Context.AppContext);
    const cursor = isLoading ? "cursor-wait" : disabled ? "cursor-not-allowed" : "cursor-pointer";

    const onClickHandler = (e) => {
        const message = promptBuilder();
        if (!message) return;
        const promptTitle = e.target.value;
        postMessage(message, promptTitle);
    }

    return (
        <button
            type="button"
            className={`py-2.5 px-5 text-sm text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 rounded-lg disabled:bg-gray-100 hover:disabled:text-gray-400 disabled:text-gray-400 ${cursor} focus:z-10 focus:ring-2 focus:ring-gray-100`}
            disabled={disabled || isLoading}
            value={title}
            onClick={onClickHandler}
        >
            {title}
        </button>
    )
}

export default PromptButton;