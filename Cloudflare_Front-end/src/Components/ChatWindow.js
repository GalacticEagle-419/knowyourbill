
import React, { useContext, useEffect, useRef, useState } from 'react';
import * as Chat from "../Components/Chat";
import * as Context from "../Context/AppContext";

const ChatWindow = () => {
    const { messages, isLoading, postMessage } = useContext(Context.AppContext);
    const [chatMessage, setChatMessage] = useState('');

    const chatContainerRef = useRef(null);
    const chatEndRef = useRef(null);

    const onMessageSubmit = (e) => {
        e.preventDefault();
        if (!chatMessage) return;
        postMessage(chatMessage);
        setChatMessage('');
    }

    const scrollToBottom = () => {
        if (chatContainerRef.current) {
            const { scrollHeight, clientHeight } = chatContainerRef.current;
            // Scroll only if the chat content exceeds the container's height
            if (scrollHeight > clientHeight) {
                chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
            }
        }
    }
    useEffect(() => {
        scrollToBottom();
    }, [messages])

    return (
        <div className='space-y-4'>
            <div ref={chatContainerRef} className="flex flex-col gap-4 h-[75vh] overflow-y-auto">
                {
                    messages.map((message, i) => (
                        <Chat.Message key={i} user={message.sender}>{message.message}</Chat.Message>
                    ))
                }
                <div ref={chatEndRef}></div>
            </div>
            <div className='space-y-2'>
                {
                    isLoading && <Chat.Message user="Machine">
                        <div className='w-[80px]'>
                            <Chat.ThinkingDots />
                        </div>
                    </Chat.Message>
                }
                <div className="flex items-center align-middle gap-2">
                    <input
                        type="text"
                        value={chatMessage}
                        onChange={(e) => setChatMessage(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border-gray-300"
                        placeholder="Type a message..."
                    />
                    <button
                        onClick={onMessageSubmit}
                        className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-6 rounded-lg disabled:cursor-not-allowed"
                        disabled={isLoading || !chatMessage}
                    >
                        Ask
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChatWindow