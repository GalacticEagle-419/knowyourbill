import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";
import * as Constants from "../Constants";
import * as dummy_chat from "../Constants/dummy_chat";
import * as flowService from "../Services/flowService";
import * as Utils from "../Utils";

export const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [billNo, setBillNo] = useState(null);
    const [billJurisdiction, setBillJurisdiction] = useState(null);
    const [billText, setBillText] = useState(null);
    const [messages, setMessages] = useState([]);

    // Get query params
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const isLiveMode = queryParams.get('live');

    const generateMockResponses = (userMessageText, promptTitle) => {
        /**
         * Generate mock responses for the user message
         * 
         * @param {*} userMessageText User message text
         * @param {*} promptTitle Prompt title
         * */

        setIsLoading(true);
        let userDummyChats = [];
        if (promptTitle) {
            userDummyChats = dummy_chat.dummy_chat_messages.filter(
                (message) => message.id === promptTitle && message.sender === 'User'
            );
            // Update user text to dummy text instead of user message
            userMessageText = userDummyChats[0].message;
        } else {
            userDummyChats = [{ sender: "User", message: userMessageText }];
        }
        setMessages((prevMessages) => [...prevMessages, ...userDummyChats]);

        // Get machine response
        let machineDummyChats = Utils.getMachineResponseForUserInput(userMessageText);
        setTimeout(() => {
            setMessages((prevMessages) => [...prevMessages, ...machineDummyChats]);
            setIsLoading(false);
        }, 2000);
    };

    const postMessage = (messageText, promptTitle = null) => {
        /**
         * Post the message to the langflow API and get the response messages 
         * 
         * @param {*} messageText Message text to be posted 
         */
        if (!messageText) return;
        if (isLiveMode === 'true') {
            setIsLoading(true);
            const userMessage = { sender: "User", message: messageText }
            setMessages([...messages, userMessage]);
            flowService.postMessage(messageText).then(response => {
                if (response.status === 200) {
                    const responseMessages = Utils.getPromptResponseMessages(response.data);
                    setMessages([...messages, ...[userMessage, ...responseMessages]]);
                } else {
                    toast.error("Something went wrong! Please contact administrator.", { duration: 3000 });
                }
            }).catch(error => {
                console.log(error);
                toast.error("Something went wrong! Please contact administrator.", { duration: 3000 });
            }).finally(() => { setIsLoading(false); });
        } else {
            generateMockResponses(messageText, promptTitle);
        }
    }

    const values = {
        billNo,
        setBillNo,
        billJurisdiction,
        setBillJurisdiction,
        billText,
        setBillText,
        isLoading,
        setIsLoading,
        messages,
        setMessages,
        postMessage,
    };

    useEffect(() => {
        setMessages([Constants.DEFAULT_INITIAL_SYSTEM_MESSAGE]);
    }, [isLiveMode])

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    );
};
export default AppContextProvider;