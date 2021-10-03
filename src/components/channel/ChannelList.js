import React, { useContext, useEffect, useState } from 'react';
import Pic from '../pic/Pic';
import './channellist.css';
import { default as StartChannel } from '../startchannel.svg';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { getMessagesAPI } from '../../api/API';

const ChannelList = () => {
    const {
        channelList,
        handleSetLoadData,
        currentHeaders,
        loadData,
        removeEmail,
        allChannelMessages,
        setAllChannelMessages,
    } = useContext(UserContext);

    // const [allChannelMessages, setAllChannelMessages] = useState([]);

    const getRecentMsg = () => {
        if (channelList) {
            for (let i = 0; i < channelList.data.data.length; i++) {
                let channelRecentMsgRequest = {
                    'access-token': currentHeaders['access-token'],
                    client: currentHeaders.client,
                    expiry: currentHeaders.expiry,
                    uid: currentHeaders.uid,
                    user_id: parseInt(channelList.data.data[i].id),
                    receiver_class: 'Channel',
                };
                console.log('attempted contact');
                getMessagesAPI(channelRecentMsgRequest).then((res) => {
                    if (res.data.data.length > 0) {
                        console.log('res', res);
                        console.log(res.data.data.at(-1).body);
                        setAllChannelMessages((allChannelMessages) => [
                            ...allChannelMessages,
                            {
                                id: parseInt(channelList.data.data[i].id),
                                message: res.data.data.at(-1).body,
                                sender: res.data.data.at(-1).sender.email,
                            },
                        ]);
                    } else {
                        console.log('res', res);
                        setAllChannelMessages((allChannelMessages) => [
                            ...allChannelMessages,
                            {
                                id: parseInt(channelList.data.data[i].id),
                                message: 'No messages',
                                sender: null,
                            },
                        ]);
                    }
                });
            }
        }
    };

    const displayRecentMsg = (channel) => {
        // console.log(allChannelMessages);

        for (let i = 0; i < allChannelMessages.length; i++) {
            if (channel.id === allChannelMessages[i].id) {
                return (
                    <div className="recent-message-container">
                        {allChannelMessages[i].sender ? (
                            <span className="recent-message-sender">
                                {removeEmail(allChannelMessages[i].sender)}:
                            </span>
                        ) : (
                            ''
                        )}
                        <span className="recent-message">
                            {allChannelMessages[i].message}
                        </span>
                    </div>
                );
            }
        }
    };

    useEffect(() => {
        getRecentMsg();
    }, [loadData, currentHeaders]);

    if (channelList.data.errors) {
        return (
            <div className="contact-container-empty">
                <img src={StartChannel} />
                <span className="empty-title">The more the merrier!</span>
                <p>Create a new channel.</p>
            </div>
        );
    } else {
        return (
            <div className="channel-container">
                {channelList.data.data.map((channel, index) => (
                    <NavLink
                        to={`/channel/${channel.id}`}
                        className="channel-item"
                        key={index}
                        activeClassName="selected-message"
                        onClick={() => {
                            handleSetLoadData();
                        }}
                    >
                        <Pic
                            id={channel.id}
                            name={channel.name}
                            isChannel={true}
                        />
                        <div className="inbox-info">
                            <span className="inbox-name">{channel.name}</span>
                            {displayRecentMsg(channel)}
                        </div>
                    </NavLink>
                ))}
            </div>
        );
    }
};

export default ChannelList;
