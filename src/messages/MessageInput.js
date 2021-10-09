import React, { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { sendMessageAPI } from '../api/API';
import { UserContext } from '../context/UserContext';

const MessageInput = ({ type, id, newMsg, setNewMessageUser }) => {
    const { currentHeaders, handleSetLoadData } = useContext(UserContext);

    let messageInputRef = useRef(null);
    let history = useHistory();

    const sendMessage = () => {
        if (
            (messageInputRef.current.value !== null ||
                messageInputRef.current.value !== '') &&
            id !== null
        ) {
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

            if (
                (messageInputRef.current.value !== null ||
                    messageInputRef.current.value !== '') &&
                newMsg &&
                id !== null
            ) {
                history.push(`/user/${id}`);
                setNewMessageUser();
            }
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
                    autoComplete="off"
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
