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
import Search from '../components/search/Search';
import NewMsgSearch from '../components/search/NewMsgSearch';
import './newmessages.css';

const NewMessage = () => {
    const {
        currentHeaders,
        currentUser,
        channelList,
        allUsers,
        loadData,
        showContent,
        setShowContent,
    } = useContext(UserContext);

    /* const { type, id } = useParams(); */

    const [newMessageUser, setNewMessageUser] = useState();

    // const [chatInfo, setChatInfo] = useState();

    // const getMessages = () => {
    //     let messageRequest = {
    //         'access-token': currentHeaders['access-token'],
    //         client: currentHeaders.client,
    //         expiry: currentHeaders.expiry,
    //         uid: currentHeaders.uid,
    //         user_id: parseInt(id),
    //         receiver_class: type.charAt(0).toUpperCase() + type.slice(1),
    //     };

    //     console.log(messageRequest);
    //     getMessagesAPI(messageRequest).then((res) => {
    //         console.log(res);
    //         setMessages(res);
    //     });
    // };

    return (
        <div
            className={
                showContent
                    ? 'main-content'
                    : 'main-content main-content-closed'
            }
        >
            <div className="new-messages-section">
                <div className="new-messages-header">
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
                        <h1 className="chat-name">New message</h1>
                    </div>
                    {!newMessageUser ? (
                        <NewMsgSearch setNewMessageUser={setNewMessageUser} />
                    ) : (
                        <div className="newmsg-search-container">
                            <span>To: </span>
                            <div className="chip-container">
                                <Pic
                                    id={newMessageUser.id}
                                    name={newMessageUser.email}
                                    isChip={true}
                                />
                                <span>{newMessageUser.email}</span>
                                <div
                                    className="delete-chip-button"
                                    onClick={() => setNewMessageUser()}
                                >
                                    ✕
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {/* 
            <div className="message-flex">
                <div className="messages-container"></div>
            </div> */}

                <MessageInput
                    type="User"
                    id={newMessageUser ? newMessageUser.id : null}
                    newMsg={true}
                    setNewMessageUser={setNewMessageUser}
                />
            </div>
        </div>
    );
};

export default NewMessage;
