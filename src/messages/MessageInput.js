import React, { useContext, useRef, useState } from 'react';
import { sendMessageAPI } from '../api/API';
import Button from '../components/button/Button';
import { UserContext } from '../context/UserContext';

const MessageInput = ({ type, id }) => {
    const { currentHeaders, handleSetLoadData } = useContext(UserContext);

    let messageInputRef = useRef(null);

    const sendMessage = () => {
        if (messageInputRef.current.value !== null) {
            let sendMessageRequest = {
                url: 'messages',
                'access-token': currentHeaders['access-token'],
                client: currentHeaders.client,
                expiry: currentHeaders.expiry,
                uid: currentHeaders.uid,
                receiver_id: parseInt(id),
                receiver_class: type.charAt(0).toUpperCase() + type.slice(1),
                message: messageInputRef.current.value,
            };

            sendMessageAPI(sendMessageRequest)
                .then((res) => {
                    console.log('send message ', res);
                    handleSetLoadData();
                    messageInputRef.current.value = '';
                })
                .catch((err) => console.log(err));
        }
    };

    return (
        <form
            className="message-input-container"
            onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
            }}
        >
            <label className="message-input">
                <input
                    type="text"
                    name="message-input"
                    id="message-input"
                    placeholder="Type your message here..."
                    ref={messageInputRef}
                />
            </label>
            <button type="submit" className="send-button">
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
                        strokeWidth={1}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                </svg>
            </button>
        </form>
    );
};

export default MessageInput;
