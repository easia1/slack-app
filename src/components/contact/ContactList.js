import React, { useEffect, useState } from 'react';
import Pic from '../pic/Pic';
import './contactlist.css';
import { default as BeginChat } from '../beginchat.svg';

const ContactList = ({ contactList }) => {
    if (contactList.data.data.length === 0) {
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
                {contactList.data.data.map((user, index) => (
                    <div className="contact-item" key={index}>
                        <Pic id={user.id} name={user.email} />
                        <span>{user.email}</span>
                    </div>
                ))}
            </div>
        );
    }
};

export default ContactList;
