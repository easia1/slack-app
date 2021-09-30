import React, { useRef, useState } from 'react';
import '../components/sidebar/Sidebar';
import Button from '../components/button/Button';
import { userSessionAPI } from '../api/API';
import axios from 'axios';
import Toast from '../components/toast/Toast';
import './newchannel.css';

const NewChannel = ({ setShowModal, showModal }) => {
    const channelNameRef = useRef();
    const userInputRef = useRef();

    const [message, setMessage] = useState();
    const [showToast, setShowToast] = useState(false);

    const [showError, setShowError] = useState(false);

    const handleError = () => {
        if (channelNameRef.current.value.length > 15) {
            setMessage('Channel Name too long');
            setShowError(true);
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
        }
    };

    const onCreateChannel = (e) => {
        handleError();
        e.preventDefault();
        axios({
            method: 'POST',
            url: 'channels',
            headers: {
                'access-token': '_HhI8svuYO3K1MemvkEuig',
                expiry: '1634048380',
                client: 'vqSOEvIwCa3gPOTEsISn1w',
                uid: 'arwie@avion.com',
            },
            data: {
                name: channelNameRef.current.value,
                user: userInputRef.current.value,
            },
        })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    return (
        <div className="channel-modal-container">
            <form className="channel-modal">
                <div className="modal-title">
                    <span
                        className="button"
                        onClick={() => setShowModal(false)}
                    >
                        X
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
                    onClick={onCreateChannel}
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
