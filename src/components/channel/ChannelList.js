import React, { useContext, useEffect, useState } from 'react';
import Pic from '../pic/Pic';
import './channellist.css';
import { default as StartChannel } from '../startchannel.svg';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const ChannelList = () => {
    const { channelList, handleSetLoadData } = useContext(UserContext);

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
                        <span>{channel.name}</span>
                    </NavLink>
                ))}
            </div>
        );
    }
};

export default ChannelList;
