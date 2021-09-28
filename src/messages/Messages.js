import React from 'react';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react/cjs/react.development';
import { getMessagesAPI } from '../api/API';
import Loading from '../components/loading/Loading';
import Pic from '../components/pic/Pic';
import ChatBubble from './ChatBubble';

const Messages = ({ currentHeaders, currentUser, channelList, loadData }) => {
    const { type, id } = useParams();

    const [messages, setMessages] = useState();

    const [chatInfo, setChatInfo] = useState();

    const getMessages = () => {
        let messageRequest = {
            'access-token': currentHeaders['access-token'],
            client: currentHeaders.client,
            expiry: currentHeaders.expiry,
            uid: currentHeaders.uid,
            user_id: parseInt(id),
            receiver_class: type.charAt(0).toUpperCase() + type.slice(1),
        };

        console.log(messageRequest);
        getMessagesAPI(messageRequest).then((res) => {
            console.log(res);
            setMessages(res);
        });
    };

    const getChatInfo = () => {
        for (let i = 0; i < channelList.length; i++) {
            if (parseInt(id) === channelList.data.data[i].id) {
                setChatInfo({
                    id: channelList.data.data[i].id,
                    name: channelList.data.data[i].name,
                    isChannel: true,
                });
                console.log('get ' + chatInfo);
            }
        }
    };

    getChatInfo();

    useEffect(() => {
        getMessages();
    }, [loadData]);

    return (
        <>
            <div className="chat-header">
                {chatInfo ? (
                    <Pic
                        id={chatInfo.id}
                        name={chatInfo.name}
                        isChannel="true"
                    />
                ) : (
                    ''
                )}
            </div>
            {messages ? (
                <div className="messages-container">
                    {messages.data.data.map((message, index) => {
                        return message.sender.id !== currentUser.id ? (
                            <ChatBubble
                                key={index}
                                id={message.sender.id}
                                name={message.sender.email}
                                message={message.body}
                                time={message.created_at}
                                className="incoming-messages"
                                type="sender"
                            />
                        ) : (
                            <ChatBubble
                                key={index}
                                id={message.sender.id}
                                name={message.sender.email}
                                message={message.body}
                                time={message.created_at}
                                className="outgoing-messages"
                                type="user"
                            />
                        );
                    })}
                </div>
            ) : (
                <Loading />
            )}
        </>
    );
};

export default Messages;
