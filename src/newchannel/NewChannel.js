import React, { useContext, useRef, useState } from 'react';
import Button from '../components/button/Button';
import { createChannelAPI } from '../api/API';
import axios from 'axios';
import Toast from '../components/toast/Toast';
import './newchannel.css';
import { UserContext } from '../context/UserContext';

const NewChannel = () => {
    const { currentHeaders, setShowModal } = useContext(UserContext);

    const channelNameRef = useRef();
    const userInputRef = useRef();

    const [message, setMessage] = useState();
    const [showToast, setShowToast] = useState(false);
    const [showError, setShowError] = useState(false);

    const [userIds, setUserIds] = useState([]);

    const onCreateChannel = () => {
        if (channelNameRef.current.value.length > 15) {
            setMessage('Channel Name too long');
            setShowError(true);
            setShowToast(false);
            setTimeout(() => {
                setShowError(false);
            }, 3000);
            channelNameRef.current.focus();
        } else if (channelNameRef.current.value.length < 5) {
            setMessage('Channel Name too short');
            setShowError(true);
            setTimeout(() => {
                setShowError(false);
            }, 3000);
            channelNameRef.current.focus();
        } else {
            const data = {
                name: channelNameRef.current.value,
                user_ids: userInputRef.current.value.split(','),
                'access-token': currentHeaders['access-token'],
                client: currentHeaders.client,
                expiry: currentHeaders.expiry,
                uid: currentHeaders.uid,
            };
            createChannelAPI(data).then((res) => {
                setMessage('Channel Created!');
                setShowToast(true);
                setTimeout(() => {
                    setShowToast(false);
                    setShowModal(false);
                }, 3000);
            });
        }
    };

    return (
        <div className="channel-modal-container">
            <form className="channel-modal">
                <div className="modal-title">
                    <span
                        className="close-button"
                        onClick={() => setShowModal(false)}
                    >
                        ✕
                    </span>
                    <h1 className="sidebar-title">Create a channel</h1>
                </div>
                <label className="input-container">
                    <span>Channel Name</span>
                    <input type="text" max="15" ref={channelNameRef}></input>
                </label>
                <label className="input-container">
                    <span>Input user IDs</span>
                    <input type="text" ref={userInputRef}></input>
                </label>
                <Button
                    className="button"
                    type="submit"
                    text="Create Channel"
                    onClick={(e) => {
                        e.preventDefault();
                        onCreateChannel();
                    }}
                />
            </form>
            {showToast || showError ? (
                <Toast className="toast-message" text={message} />
            ) : (
                <></>
            )}
        </div>
    );
};

export default NewChannel;
