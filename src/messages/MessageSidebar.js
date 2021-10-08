import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router';
import { getListsAPI, addUserChannelAPI } from '../api/API';
import Button from '../components/button/Button';
import Pic from '../components/pic/Pic';
import { UserContext } from '../context/UserContext';
import ChannelInfoToggle from './ChannelInfoToggle';
import ChatHeader from './ChatHeader';
import Toast from '../components/toast/Toast';

const MessageSidebar = () => {
    const {
        allUsers,
        currentUser,
        currentHeaders,
        handleSetShowChatInfo,
        showChatInfo,
        chatInfo,
        loadData,
        channelList,
        chatName,
        addUsers,
        userIds,
    } = useContext(UserContext);

    const [searchList, setSearchList] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const [channelMembers, setChannelMembers] = useState();

    const [message, setMessage] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [addNewUser, setAddNewUser] = useState();

    const onAddingUser = () => {
        const addUserRequest = {
            channel_id: chatName.id,
            member_id: addNewUser,
            'access-token': currentHeaders['access-token'],
            client: currentHeaders.client,
            expiry: currentHeaders.expiry,
            uid: currentHeaders.uid,
        };
        addUserChannelAPI(addUserRequest).then((res) => {
            if (res.data.errors) {
                setMessage(res.data.errors[0]);
                setShowToast(true);
                setTimeout(() => {
                    setShowToast(false);
                }, 3000);
            } else {
                setShowToast(true);
                setMessage('User added');
                setTimeout(() => {
                    setShowToast(false);
                }, 1500);
                console.log(res);
            }
        });
    };

    const clearSearchField = () => {
        setSearchList([]);
        setSearchValue('');
    };

    const addUser = (user) => {
        if (addUsers.includes(user)) {
            setShowToast(true);
            setMessage('Please add another user');
            setTimeout(() => {
                setShowToast(false);
            }, 1000);
        } else {
            setAddNewUser(user.id);
            console.log(user.id);
        }
    };

    // const getMemberIcons = () => {
    //     let getMemberRequest = {
    //         'access-token': currentHeaders['access-token'],
    //         client: currentHeaders.client,
    //         expiry: currentHeaders.expiry,
    //         uid: currentHeaders.uid,
    //         url: `channels/${chatInfo.id}`,
    //     };
    // };

    useEffect(() => {
        if (chatName && chatName.isChannel) {
            let channelInfoRequest = {
                url: `channels/${chatName.id}`,
                'access-token': currentHeaders['access-token'],
                client: currentHeaders.client,
                expiry: currentHeaders.expiry,
                uid: currentHeaders.uid,
            };

            getListsAPI(channelInfoRequest).then((res) => {
                console.log('channel info response', res);
                setChannelMembers(res.data?.data?.channel_members);
            });
        }

        return () => {
            console.log('cleanup');
        };
    }, [loadData, chatName, showChatInfo]);

    const handleSearchList = (e) => {
        const searchInput = e.target.value;
        setSearchValue(searchInput);
        const searchFilter = allUsers.data?.data.filter((user) => {
            return user.email.toLowerCase().includes(searchInput.toLowerCase());
        });

        if (searchInput === '') {
            setSearchList([]);
        } else {
            setSearchList(searchFilter);
        }
    };

    return (
        <div
            className={
                showChatInfo
                    ? 'message-sidebar'
                    : 'message-sidebar message-sidebar-closed'
            }
        >
            <div className="modal-title">
                <span
                    className="close-button"
                    onClick={() => handleSetShowChatInfo()}
                >
                    ✕
                </span>

                {chatName && (
                    <>
                        <Pic
                            id={chatName.id}
                            name={chatName?.name || 'none'}
                            isChannel={chatName.isChannel}
                        />
                        <h1>{chatName.name}</h1>
                    </>
                )}
            </div>

            <Button text={'Invite user'} className="button" />
            <div>
                <input type="text" onChange={handleSearchList} />
                {searchList.length !== 0 && (
                    <div className="newchannel-search-results">
                        {searchList.slice(0, 5).map((user, index) => (
                            <div
                                className="newmsg-search-item"
                                key={index}
                                onClick={() => {
                                    addUser(user, index);
                                    clearSearchField();
                                }}
                            >
                                <Pic
                                    id={user.id}
                                    name={user.email}
                                    isChip={true}
                                />
                                <span>{user.uid}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Button
                text={'+'}
                className="button"
                onClick={onAddingUser}
            ></Button>
            {chatName && channelMembers && chatName.isChannel ? (
                <div className="search-results">
                    <span>Channel Members:</span>
                    {channelMembers.map((member, index) => (
                        <div className="newmsg-search-item" key={index}>
                            <Pic id={member.id} name={'member'} isChip={true} />
                            <span>{member.user_id}</span>
                        </div>
                    ))}
                </div>
            ) : (
                ''
            )}
            {showToast ? (
                <Toast className="toast-message" text={message} />
            ) : (
                <></>
            )}
        </div>
    );
};

export default MessageSidebar;

/* const { type, id } = useParams(); */

// const [chatName, setChatName] = useState();

// useEffect(() => {
//     if (chatInfo.type === 'channel') {
//         channelList.data.data.map((channel) => {
//             if (channel.id === parseInt(chatInfo.id)) {
//                 setChatName({
//                     id: channel.id,
//                     name: channel.name,
//                     isChannel: true,
//                 });
//             }
//         });
//     } else if (chatInfo.type === 'user') {
//         allUsers.data.data.map((user) => {
//             if (user.id === parseInt(chatInfo.id)) {
//                 setChatName({
//                     id: user.id,
//                     name: user.email,
//                     isChannel: false,
//                 });
//             }
//         });
//     }
// }, [loadData]);

//Make a function that gets all chat info
// let channelInfoRequest = {
//     url: `channels/${id}`,
//     'access-token': currentHeaders['access-token'],
//     client: currentHeaders.client,
//     expiry: currentHeaders.expiry,
//     uid: currentHeaders.uid,
// };

// getListsAPI(channelInfoRequest).then((res) => {
//     console.log('channel info response', res);
//     setChannelMembers(res.data?.data?.channel_members);
// });
