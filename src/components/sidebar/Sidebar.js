import './sidebar.css';
import Button from '../button/Button';
import React from 'react';
import { useEffect } from 'react/cjs/react.development';
import Pic from '../pic/Pic';
import ChannelList from '../channel/ChannelList';
import ContactList from '../contact/ContactList';

const Sidebar = ({
    sidebarMode,
    logoutFunction,
    currentUser,
    currentHeaders,
    allUsers,
    contactList,
    channelList,
}) => {
    console.log('sidebar', currentHeaders);
    console.log('sidebar', allUsers);
    console.log('sidebar', contactList);
    console.log('sidebar', channelList);
    if (sidebarMode === 'dm') {
        return (
            <div className="sidebar">
                <h1 className="sidebar-title">Direct messages</h1>
                <Button className="button" text="New message" />
                <ContactList contactList={contactList} />
            </div>
        );
    } else if (sidebarMode === 'channel') {
        return (
            <div className="sidebar">
                <h1 className="sidebar-title">Channels</h1>
                <Button className="button" text="Add channel" />

                <ChannelList channelList={channelList} />
            </div>
        );
    } else if (sidebarMode === 'search') {
        return (
            <div className="sidebar">
                <h1 className="sidebar-title">Search</h1>
            </div>
        );
    } else if (sidebarMode === 'user') {
        return (
            <div className="sidebar">
                <h1 className="sidebar-title">User</h1>
                <div className="user-container">
                    <Pic id={currentUser.id} name={currentUser.email} />
                    <span className="user-email">{currentUser.email}</span>
                </div>
                <Button
                    onClick={logoutFunction}
                    text="Logout"
                    className="button"
                />
            </div>
        );
    }
};

export default Sidebar;
