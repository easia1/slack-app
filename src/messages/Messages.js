import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react/cjs/react.development';
import { getMessagesAPI } from '../api/API';
import Loading from '../components/loading/Loading';
import Pic from '../components/pic/Pic';
import { UserContext } from '../context/UserContext';
import ChatBubble from './ChatBubble';
import ChatHeader from './ChatHeader';
import Nocontent from '../components/nocontent.svg';

const Messages = () => {
    const { currentHeaders, currentUser, channelList, allUsers, loadData } =
        useContext(UserContext);

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

    // const getChatInfo = () => {
    //     if (type === 'channel') {
    //         for (let i = 0; i < channelList.length; i++) {
    //             if (parseInt(id) === channelList.data.data[i].id) {
    //                 setChatInfo({
    //                     id: channelList.data.data[i].id,
    //                     name: channelList.data.data[i].name,
    //                     isChannel: true,
    //                 });
    //                 console.log('get ' + chatInfo);
    //             }
    //         }
    //         console.log('hindi kinuha channel' + chatInfo);
    //     } else if (type === 'user') {
    //         for (let i = 0; i < allUsers.length; i++) {
    //             if (parseInt(id) === allUsers.data.data[i].id) {
    //                 setChatInfo({
    //                     id: allUsers.data.data[i].id,
    //                     name: allUsers.data.data[i].email,
    //                     isChannel: false,
    //                 });
    //                 console.log('get ' + chatInfo);
    //             }
    //         }
    //         console.log(allUsers);
    //         console.log('hindi kinuha users' + chatInfo);
    //     }
    // };

    // getChatInfo();

    useEffect(() => {
        getMessages();
        // getChatInfo();
    }, [loadData]);

    return (
        <div className="messages-section">
            {messages ? (
                <>
                    <ChatHeader type={type} id={id} messages={messages} />

                    {messages.data.data.length > 0 ? (
                        <div className="messages-container">
                            {messages.data.data.map((message, index) => {
                                return message.sender.id !== currentUser.id ? (
                                    <ChatBubble
                                        keyNum={index}
                                        id={message.sender.id}
                                        name={message.sender.email}
                                        message={message.body}
                                        time={message.created_at}
                                        className="incoming-messages"
                                        type="sender"
                                    />
                                ) : (
                                    <ChatBubble
                                        keyNum={index}
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
                        <div className="message-container-empty">
                            <img src={Nocontent} />
                            <span className="empty-title">
                                Be the first one to say hi!
                            </span>
                            <p>Send a message!</p>
                        </div>
                    )}
                </>
            ) : (
                <h1 className="navbar-logo">Please wait...</h1>
            )}
        </div>
    );
};

export default Messages;
