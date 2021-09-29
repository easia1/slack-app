import './sidebar.css';
import Button from '../button/Button';
import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import Pic from '../pic/Pic';
import ChannelList from '../channel/ChannelList';
import ContactList from '../contact/ContactList';
import { NavLink } from 'react-router-dom';
import NewChannel from '../../newchannel/NewChannel';

const Sidebar = ({
    sidebarMode,
    logoutFunction,
    currentUser,
    currentHeaders,
    allUsers,
    contactList,
    channelList,
    handleSetLoadData,
}) => {
    // console.log('sidebar', currentHeaders);
    // console.log('sidebar', allUsers);
    // console.log('sidebar', contactList);
    // console.log('sidebar', channelList);

    const [showModal, setShowModal] = useState(false);

    if (sidebarMode === 'dm') {
        return (
            <div className='sidebar'>
                <h1 className='sidebar-title'>Direct messages</h1>
                <NavLink to='/new-message' className='button'>
                    New message
                </NavLink>
                <ContactList
                    contactList={contactList}
                    handleSetLoadData={handleSetLoadData}
                />
            </div>
        );
    } else if (sidebarMode === 'channel') {
        return (
            <div className='sidebar'>
                <h1 className='sidebar-title'>Channels</h1>

                <Button
                    className='button'
                    text='Add channel'
                    onClick={() => setShowModal(true)}
                />
                {showModal ? (
                    <NewChannel
                        showModal={showModal}
                        setShowModal={setShowModal}
                        currentHeaders={currentHeaders}
                    />
                ) : null}

                <ChannelList
                    channelList={channelList}
                    handleSetLoadData={handleSetLoadData}
                />
            </div>
        );
    } else if (sidebarMode === 'search') {
        return (
            <div className='sidebar'>
                <h1 className='sidebar-title'>Search</h1>
            </div>
        );
    } else if (sidebarMode === 'user') {
        return (
            <div className='sidebar'>
                <h1 className='sidebar-title'>User</h1>
                <div className='user-container'>
                    <Pic id={currentUser.id} name={currentUser.email} />
                    <span className='user-email'>{currentUser.email}</span>
                </div>
                <Button
                    onClick={logoutFunction}
                    text='Logout'
                    className='button'
                />
            </div>
        );
    }
};

export default Sidebar;
