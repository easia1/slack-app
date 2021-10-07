import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router';
import { getListsAPI } from '../api/API';
import Button from '../components/button/Button';
import Pic from '../components/pic/Pic';
import { UserContext } from '../context/UserContext';
import ChannelInfoToggle from './ChannelInfoToggle';
import ChatHeader from './ChatHeader';

const MessageSidebar = () => {
    const {
        allUsers,
        currentHeaders,
        handleSetShowChatInfo,
        showChatInfo,
        chatInfo,
        loadData,
        channelList,
        chatName,
    } = useContext(UserContext);

    const [channelMembers, setChannelMembers] = useState();

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

    const getMemberIcons = () => {
        let getMemberRequest = {
            'access-token': currentHeaders['access-token'],
            client: currentHeaders.client,
            expiry: currentHeaders.expiry,
            uid: currentHeaders.uid,
            url: `channels/${chatInfo.id}`,
        };
    };

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
                <h1>Test component</h1>
                {chatName && (
                    <Pic id={chatName.id} name={chatName?.name || 'none'} />
                )}
                <Button text={'Invite user'} className="button" />
            </div>
        </div>
    );
};

export default MessageSidebar;
