import React, { useContext, useEffect, useState } from 'react';
import Button from '../components/button/Button';
import Pic from '../components/pic/Pic';
import { UserContext } from '../context/UserContext';
import ChannelInfoToggle from './ChannelInfoToggle';

const ChatHeader = ({ type, id, messages, channelMembers }) => {
    const { channelList, allUsers, loadData, setShowContent } =
        useContext(UserContext);

    const [chatInfo, setChatInfo] = useState();

    useEffect(() => {
        if (type === 'channel') {
            channelList.data.data.map((channel) => {
                if (channel.id === parseInt(id)) {
                    setChatInfo({
                        id: channel.id,
                        name: channel.name,
                        isChannel: true,
                    });
                }
            });
        } else if (type === 'user') {
            allUsers.data.data.map((user) => {
                if (user.id === parseInt(id)) {
                    setChatInfo({
                        id: user.id,
                        name: user.email,
                        isChannel: false,
                    });
                }
            });
        }
    }, [loadData]);

    return (
        <>
            {chatInfo ? (
                <div className="chat-header">
                    <button
                        className={'back-button'}
                        onClick={() => setShowContent(false)}
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
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>
                    <div className="header-name">
                        {!chatInfo.isChannel ? (
                            <Pic
                                id={chatInfo.id}
                                name={chatInfo.name}
                                isChannel={chatInfo.isChannel}
                            />
                        ) : (
                            ''
                        )}
                        <h1
                            className={
                                !chatInfo.isChannel
                                    ? 'chat-name chat-name-user'
                                    : 'chat-name '
                            }
                        >
                            {chatInfo.name}
                        </h1>
                    </div>
                    {chatInfo.isChannel ? (
                        <ChannelInfoToggle
                            id={chatInfo.id}
                            channelMembers={channelMembers}
                        />
                    ) : (
                        ''
                    )}
                </div>
            ) : (
                ''
            )}
        </>
    );
};

export default ChatHeader;
