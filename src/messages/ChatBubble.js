import React, { useState } from 'react';
import Pic from '../components/pic/Pic';
import './messages.css';

const ChatBubble = ({ keyNum, className, id, name, message, time, type }) => {
    const date = new Date(time);

    const formattedTime = date.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });

    const formattedDate = date.toLocaleDateString('en-US');

    const [showTime, setShowTime] = useState(false);
    const handleSetShowTime = () => [setShowTime(!showTime)];

    return (
        <div className={className} key={keyNum} onClick={handleSetShowTime}>
            <div className="pic-message-container">
                <Pic id={id} name={name} />
                <span className={`message-bubble-${type}`}>{message}</span>
            </div>

            <span className={`message-${type}-name`}>{name}</span>
            <span className={showTime ? 'message-time' : 'message-time'}>
                {showTime ? (
                    <>
                        {formattedDate} {formattedTime}
                    </>
                ) : (
                    ''
                )}
            </span>
        </div>
    );
};

export default ChatBubble;
