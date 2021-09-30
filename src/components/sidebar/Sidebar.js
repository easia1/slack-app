import './sidebar.css';
import Button from '../button/Button';
import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import Pic from '../pic/Pic';
import ChannelList from '../channel/ChannelList';
import ContactList from '../contact/ContactList';
import { NavLink } from 'react-router-dom';
import NewChannel from '../../newchannel/NewChannel';

const Sidebar = () => {
    // console.log('sidebar', currentHeaders);
    // console.log('sidebar', allUsers);
    // console.log('sidebar', contactList);
    // console.log('sidebar', channelList);

    const { sidebarMode, logoutFunction, currentUser, setShowModal } =
        useContext(UserContext);

    // const [showModal, setShowModal] = useState(false);

    if (sidebarMode === 'dm') {
        return (
            <div className="sidebar">
                <h1 className="sidebar-title">Direct messages</h1>
                <NavLink to="/new-message" className="button">
                    New message
                </NavLink>
                <ContactList />
            </div>
        );
    } else if (sidebarMode === 'channel') {
        return (
            <div className="sidebar">
                <h1 className="sidebar-title">Channels</h1>

                <Button
                    className="button"
                    text="Add channel"
                    onClick={() => setShowModal(true)}
                />

                <ChannelList />
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
