/* eslint-disable react/prop-types */
import React from 'react'
import { BsRobot } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import ReactMarkdown from 'react-markdown';

const USER_ICON_SIZE = 24
const MessageConfig = {
    "User": {
        "position": "justify-end",
        "name": "You",
        "icon": <FaRegUser size={USER_ICON_SIZE} />,
        "color": "bg-[#d9fdd3]"
    },
    "Machine": {
        "position": "justify-start",
        "name": "System",
        "icon": <BsRobot size={USER_ICON_SIZE} />,
        "color": "bg-white"
    }
}

const Message = ({ user, children }) => {
    const config = MessageConfig[user]
    return (
        <div className={`flex  ${config.position}`}>
            <div>
                <div className="flex flex-col md:flex-row gap-4 max-w-3xl px-4">
                    <div>
                        <div className="flex flex-row md:flex-col gap-2 md:gap-1 items-center w-12">
                            <div className="w-fit rounded-full border border-gray-300 p-2 bg-white shadow-md">{config.icon}</div>
                            <div className="text-sm">{config.name}</div>
                        </div>
                    </div>
                    <div>
                        <div className={`${config.color} p-4 rounded-lg shadow-md`}>
                            <p className="text-sm w-full break-words">
                                {
                                    typeof children === 'string'
                                        ? <ReactMarkdown className="chat_message">{children}</ReactMarkdown>
                                        : children
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message