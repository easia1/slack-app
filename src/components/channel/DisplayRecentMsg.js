import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const DisplayRecentMsg = ({ channel }) => {
    // console.log(allChannelMessages);
    const {
        channelList,
        handleSetLoadData,
        currentHeaders,
        loadData,
        removeEmail,
        allChannelMessages,
        setAllChannelMessages,
    } = useContext(UserContext);

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

export default DisplayRecentMsg;
