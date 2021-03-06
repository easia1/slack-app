import React, { useContext, useRef, useEffect } from 'react';
import { useParams } from 'react-router';
import { getMessagesAPI } from '../api/API';
import Loading from '../components/loading/Loading';

import { UserContext } from '../context/UserContext';
import ChatBubble from './ChatBubble';
import ChatHeader from './ChatHeader';
import Nocontent from '../components/nocontent.svg';
import MessageInput from './MessageInput';
import ScrollDown from '../messages/ScrollDown';

const Messages = () => {
    const {
        currentHeaders,
        currentUser,
        channelList,
        allUsers,
        loadData,
        showContent,
        messages,
        setMessages,
        showChatInfo,
        setChatInfo,
        setChatName,
    } = useContext(UserContext);

    const { type, id } = useParams();

    // const [messages, setMessages] = useState();
    // const [channelMembers, setChannelMembers] = useState();

    // const [chatInfo, setChatInfo] = useState();

    // const sendMessageRef = useRef();
    // const endMessageRef = useRef(null);
    // const elementRef = useRef();

    const getMessages = () => {
        let messageRequest = {
            'access-token': currentHeaders['access-token'],
            client: currentHeaders.client,
            expiry: currentHeaders.expiry,
            uid: currentHeaders.uid,
            user_id: parseInt(id),
            receiver_class: type.charAt(0).toUpperCase() + type.slice(1),
        };

        /* setChatInfo({
            id: id,
            type: type,
        }); */

        console.log('message request', messageRequest);
        getMessagesAPI(messageRequest)
            .then((res) => {
                console.log('message request response', res);
                setMessages(res);
            })
            .catch((err) => console.log(err));

        // if (type === 'channel') {
        //     let channelInfoRequest = {
        //         url: `channels/${id}`,
        //         'access-token': currentHeaders['access-token'],
        //         client: currentHeaders.client,
        //         expiry: currentHeaders.expiry,
        //         uid: currentHeaders.uid,
        //     };

        //     getListsAPI(channelInfoRequest).then((res) => {
        //         console.log('channel info response', res);
        //         setChannelMembers(res.data?.data?.channel_members);
        //     });
        // }
    };

    const getChatName = () => {
        if (type === 'channel') {
            channelList.data.data.map((channel) => {
                if (channel.id === parseInt(id)) {
                    setChatName({
                        id: channel.id,
                        name: channel.name,
                        isChannel: true,
                        owner: channel.owner_id,
                    });
                }
            });
        } else if (type === 'user') {
            allUsers.data.data.map((user) => {
                if (user.id === parseInt(id)) {
                    setChatName({
                        id: user.id,
                        name: user.email,
                        isChannel: false,
                    });
                }
            });
        }
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
        getChatName();
        // getChatInfo();
    }, [loadData /* , messages, currentHeaders */]);

    if (!messages) {
        return <Loading />;
    } else {
        return (
            <div
                className={
                    showContent
                        ? 'main-content'
                        : 'main-content main-content-closed'
                }
            >
                <div className="messages-section">
                    {messages ? (
                        <>
                            <ChatHeader
                                type={type}
                                id={id}
                                messages={messages}
                                // channelMembers={channelMembers}
                            />
                            <div className="messages-content">
                                {messages.data?.data.length > 0 ? (
                                    <div className="message-flex">
                                        <div className="messages-container">
                                            {messages.data.data.map(
                                                (message, index) => {
                                                    return message.sender.id !==
                                                        currentUser.id ? (
                                                        <ChatBubble
                                                            key={index}
                                                            keyNum={index}
                                                            id={
                                                                message.sender
                                                                    .id
                                                            }
                                                            name={
                                                                message.sender
                                                                    .email
                                                            }
                                                            message={
                                                                message.body
                                                            }
                                                            time={
                                                                message.created_at
                                                            }
                                                            className="incoming-messages"
                                                            type="sender"
                                                        />
                                                    ) : (
                                                        <ChatBubble
                                                            key={index}
                                                            keyNum={index}
                                                            id={
                                                                message.sender
                                                                    .id
                                                            }
                                                            name={
                                                                message.sender
                                                                    .email
                                                            }
                                                            message={
                                                                message.body
                                                            }
                                                            time={
                                                                message.created_at
                                                            }
                                                            className="outgoing-messages"
                                                            type="user"
                                                        />
                                                    );
                                                }
                                            )}
                                            {/* <div ref={elementRef}></div> */}
                                            <ScrollDown />
                                        </div>
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
                            </div>
                            <MessageInput type={type} id={id} />
                        </>
                    ) : (
                        ''
                    )}
                </div>
                {/* <div
                    className={
                        showChatInfo
                            ? 'message-sidebar'
                            : 'message-sidebar message-sidebar-closed'
                    }
                >
                    <ChatHeader type={type} id={id} messages={messages} />
                    <MessageSidebar />
                    <h1>channel sidebar</h1>
                </div> */}
            </div>
        );
    }
};

export default Messages;
