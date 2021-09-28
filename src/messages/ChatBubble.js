import React from 'react';
import Pic from '../components/pic/Pic';
import './chatbubble.css';

const ChatBubble = ({ keyNum, className, id, name, message, time, type }) => {
    return (
        <div className={className} key={keyNum}>
            <div className="pic-message-container">
                <Pic id={id} name={name} />
                <span className={`message-bubble-${type}`}>{message}</span>
            </div>

            <span className={`message-${type}-name`}>{name}</span>
            {/* <span className="message-time">{time}</span> */}
        </div>
    );
};

export default ChatBubble;
