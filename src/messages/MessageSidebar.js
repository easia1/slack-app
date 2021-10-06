import React from 'react';
import { useContext } from 'react';
import { getListsAPI } from '../api/API';
import { UserContext } from '../context/UserContext';

const MessageSidebar = ({ id }) => {
    const { allUsers, currentHeaders } = useContext(UserContext);

    const getMemberIcons = () => {
        let getMemberRequest = {
            'access-token': currentHeaders['access-token'],
            client: currentHeaders.client,
            expiry: currentHeaders.expiry,
            uid: currentHeaders.uid,
            url: `channels/${id}`,
        };
    };

    return (
        <div>
            <h1>Test component</h1>
        </div>
    );
};

export default MessageSidebar;
