import React, { useContext, useEffect, useState } from 'react';
import Pic from '../components/pic/Pic';
import { UserContext } from '../context/UserContext';

const ChatHeader = ({ type, id, messages }) => {
    const { channelList, allUsers, loadData } = useContext(UserContext);

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
            ) : (
                ''
            )}
        </>
    );
};

export default ChatHeader;
