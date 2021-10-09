import React, { useContext } from 'react';
import Pic from '../pic/Pic';
import './contactlist.css';
import { default as BeginChat } from '../beginchat.svg';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const ContactList = () => {
    const { allUsers, handleSetLoadData, setShowContent, setShowChatInfo } =
        useContext(UserContext);

    if (allUsers.data.data.length === 0) {
        return (
            <div className="contact-container-empty">
                <img src={BeginChat} />
                <span className="empty-title">Whew, there's nothing here.</span>
                <p>Start a new conversation!</p>
            </div>
        );
    } else {
        return (
            <div className="contact-container">
                {allUsers.data.data.map((user, index) => (
                    <NavLink
                        to={`/user/${user.id}`}
                        className="contact-item"
                        key={index}
                        activeClassName="selected-message"
                        onClick={() => {
                            handleSetLoadData();
                            setShowContent(true);
                            setShowChatInfo(false);
                        }}
                    >
                        <Pic id={user.id} name={user.email} />
                        <span>{user.email}</span>
                    </NavLink>
                ))}
            </div>
        );
    }
};

export default ContactList;
