import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { getListsAPI, addUserChannelAPI } from '../api/API';
import Button from '../components/button/Button';
import Pic from '../components/pic/Pic';
import { UserContext } from '../context/UserContext';
import Toast from '../components/toast/Toast';
import { NavLink } from 'react-router-dom';
const MessageSidebar = () => {
    const {
        allUsers,
        currentHeaders,
        handleSetShowChatInfo,
        showChatInfo,
        loadData,
        chatName,
        addUsers,
        returnUserName,
        handleSetLoadData,
        setShowContent,
        setShowChatInfo,
    } = useContext(UserContext);

    const [searchList, setSearchList] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const [channelMembers, setChannelMembers] = useState();

    const [message, setMessage] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [addNewUser, setAddNewUser] = useState();
    const [showInvite, setShowInvite] = useState(false);

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
                setShowInvite(false);
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
                    className="close-button-sidebar"
                    onClick={() => {
                        handleSetShowChatInfo();
                        setShowInvite(false);
                    }}
                >
                    ✕
                </span>
            </div>
            {chatName && (
                <div className="message-sidebar-title">
                    <Pic
                        id={chatName.id}
                        name={chatName?.name}
                        isChannel={chatName.isChannel}
                    />
                    <h1 className="sidebar-title">{chatName.name}</h1>
                </div>
            )}
            {chatName && chatName?.isChannel ? (
                <>
                    {!showInvite ? (
                        <div
                            className="invite-user-toggle"
                            onClick={() => {
                                setShowInvite(true);
                            }}
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
                                    strokeWidth={1.5}
                                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                                />
                            </svg>
                            <span>Invite user to group</span>
                        </div>
                    ) : (
                        <div className="invite-user-container">
                            {!addNewUser ? (
                                <>
                                    <input
                                        className="invite-user-input"
                                        type="text"
                                        placeholder={'Invite a user...'}
                                        onChange={handleSearchList}
                                    />
                                    {searchList.length !== 0 && (
                                        <div className="invite-user-search-results">
                                            {searchList
                                                .slice(0, 5)
                                                .map((user, index) => (
                                                    <div
                                                        className="newmsg-search-item"
                                                        key={index}
                                                        onClick={() => {
                                                            addUser(
                                                                user,
                                                                index
                                                            );
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
                                </>
                            ) : (
                                <>
                                    <div className="invite-chip-container">
                                        <div>
                                            <Pic
                                                id={addNewUser}
                                                name={returnUserName(
                                                    addNewUser
                                                )}
                                                isChip={true}
                                            />
                                            <span>
                                                {returnUserName(addNewUser)}
                                            </span>
                                        </div>
                                        <div
                                            className="delete-chip-button"
                                            onClick={() => setAddNewUser()}
                                        >
                                            ✕
                                        </div>
                                    </div>
                                    <Button
                                        text={'+ Invite user'}
                                        className="button"
                                        onClick={() => {
                                            onAddingUser();
                                            handleSetLoadData();
                                        }}
                                    />
                                </>
                            )}
                        </div>
                    )}{' '}
                </>
            ) : (
                <div
                    className="invite-user-toggle"
                    onClick={() => {
                        setShowInvite(true);
                    }}
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
                            strokeWidth={1.5}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                    </svg>
                    <span>Add to favorites</span>
                </div>
            )}

            {chatName && channelMembers && chatName.isChannel ? (
                <>
                    <span className="member-list-label">Group members</span>
                    <div className="member-list">
                        {channelMembers.map((member, index) => (
                            <NavLink
                                to={`/user/${member.user_id}`}
                                className="newmsg-search-item"
                                key={index}
                                onClick={() => {
                                    handleSetLoadData();
                                    setShowContent(true);
                                    setShowChatInfo(false);
                                }}
                            >
                                <Pic
                                    id={member.user_id}
                                    name={returnUserName(member.user_id)}
                                    isChip={true}
                                />
                                <span>{returnUserName(member.user_id)}</span>
                            </NavLink>
                        ))}
                    </div>
                </>
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
