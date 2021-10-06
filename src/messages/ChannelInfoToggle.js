import React from 'react';
import { useContext } from 'react';
import Pic from '../components/pic/Pic';
import { UserContext } from '../context/UserContext';

const ChannelInfoToggle = ({ id, channelMembers }) => {
    const { showChatInfo, setShowChatInfo, handleSetShowChatInfo } =
        useContext(UserContext);

    return (
        <div
            className="message-sidebar-toggle"
            onClick={() => {
                handleSetShowChatInfo();
                console.log(showChatInfo);
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
            </svg>
        </div>
    );
};

export default ChannelInfoToggle;
