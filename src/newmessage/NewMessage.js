import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react/cjs/react.development';
import { getMessagesAPI } from '../api/API';
import Loading from '../components/loading/Loading';
import Pic from '../components/pic/Pic';
import { UserContext } from '../context/UserContext';
import ChatBubble from '../messages/ChatBubble';
import ChatHeader from '../messages/ChatHeader';
import Newmessage from '../components/newmessage.svg';
import MessageInput from '../messages/MessageInput';

const NewMessage = () => {
    const { currentHeaders, currentUser, channelList, allUsers, loadData } =
        useContext(UserContext);

    const { type, id } = useParams();

    const [messages, setMessages] = useState();

    // const [chatInfo, setChatInfo] = useState();

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

    return (
        <div className="main-content">
            <div className="messages-section">
                <div className="chat-header">
                    <h1 className="chat-name">New message</h1>
                </div>
                {/* 
            <div className="message-flex">
                <div className="messages-container"></div>
            </div> */}

                <div className="message-container-empty">
                    <img src={Newmessage} />
                    <span className="empty-title">
                        Be the first one to say hi!
                    </span>
                    <p>Send a message!</p>
                </div>

                <MessageInput type={type} id={id} />
            </div>
        </div>
    );
};

export default NewMessage;
