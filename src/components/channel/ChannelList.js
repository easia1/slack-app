import React, { useEffect, useState } from 'react';
import { getChannelsAPI, getListsAPI } from '../../api/API';
import Pic from '../pic/Pic';
import './channellist.css';
import { default as StartChannel } from '../startchannel.svg';

const ChannelList = ({ currentHeaders, channelList }) => {
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
                    <div className="channel-item" key={index}>
                        <Pic id={channel.id} name={channel.name} />
                        <span>{channel.name}</span>
                    </div>
                ))}
            </div>
        );
    }
};

export default ChannelList;
